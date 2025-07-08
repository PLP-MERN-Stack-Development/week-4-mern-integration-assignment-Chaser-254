import Post from '../models/Post.js';

const addComment = async (req, res) => {
  const { content } = req.body;
  const slug = req.params.slug;

  const post = await Post.findOne({ slug });

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  const updatedPost = await post.addComment(req.user._id, content);
  res.json(updatedPost);
};

export { addComment };