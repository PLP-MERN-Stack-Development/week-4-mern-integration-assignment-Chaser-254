import Post from '../models/Post.js';

// GET all published posts
const getPosts = async (req, res) => {
  const posts = await Post.find({ isPublished: true })
    .populate('author', 'username')
    .populate('category', 'name');
  res.json(posts);
};

// GET a single post by slug
const getPostBySlug = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug })
    .populate('author', 'username')
    .populate('category', 'name');

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  await post.incrementViewCount();

  res.json(post);
};

// CREATE a new post
const createPost = async (req, res) => {
  const {
    title,
    content,
    excerpt,
    category,
    tags,
    isPublished,
  } = req.body;

  const post = new Post({
    title,
    content,
    excerpt,
    author: req.user._id,
    category,
    tags,
    isPublished: isPublished || false,
    featuredImage: req.file ? req.file.filename : undefined,
  });

  const savedPost = await post.save();
  res.status(201).json(savedPost);
};

// UPDATE a post
const updatePost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  if (String(post.author) !== String(req.user._id)) {
    return res.status(403).json({ message: 'Not authorized' });
  }

  const fields = [
    'title',
    'content',
    'excerpt',
    'category',
    'tags',
    'isPublished',
  ];

  fields.forEach((field) => {
    if (req.body[field] !== undefined) {
      post[field] = req.body[field];
    }
  });

  if (req.file) {
    post.featuredImage = req.file.filename;
  }

  const updatedPost = await post.save();
  res.json(updatedPost);
};

// DELETE a post
const deletePost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  if (String(post.author) !== String(req.user._id)) {
    return res.status(403).json({ message: 'Not authorized' });
  }

  await post.remove();
  res.json({ message: 'Post deleted' });
};

export { getPosts, getPostBySlug, createPost, updatePost, deletePost };