import { useState, useEffect } from 'react';
import categoryService from '../services/categoryService';

const PostForm = ({ initialData = {}, onSubmit }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [content, setContent] = useState(initialData.content || '');
  const [excerpt, setExcerpt] = useState(initialData.excerpt || '');
  const [category, setCategory] = useState(initialData.category || '');
  const [tags, setTags] = useState(initialData.tags?.join(',') || '');
  const [isPublished, setIsPublished] = useState(initialData.isPublished || false);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoryService.getCategories().then(setCategories);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('excerpt', excerpt);
    formData.append('category', category);
    formData.append('tags', tags);
    formData.append('isPublished', isPublished);
    if (featuredImage) formData.append('featuredImage', featuredImage);

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="postform">
      <input
        className="postform-input"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="postform-input"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        className="postform-input"
        placeholder="Excerpt"
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
      />
      <select
        className="postform-input"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map(cat => (
          <option key={cat._id} value={cat._id}>{cat.name}</option>
        ))}
      </select>
      <input
        className="postform-input"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <div className="postform-checkbox-row">
        <input
          type="checkbox"
          checked={isPublished}
          onChange={(e) => setIsPublished(e.target.checked)}
        />
        <span>Publish</span>
      </div>
      <input
        type="file"
        className="postform-file"
        onChange={(e) => setFeaturedImage(e.target.files[0])}
      />
      <button className="postform-button">Save Post</button>
    </form>
  );
};

export default PostForm;