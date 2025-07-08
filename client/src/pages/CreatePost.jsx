import { useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import postService from '../services/postService';
import toast from 'react-hot-toast';

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    toast.loading('Creating post...');
    try {
      await postService.createPost(formData);
      toast.success('Post created!');
      navigate('/dashboard');
    } catch (err) {
      toast.error('Failed to create post');
    } finally {
      toast.dismiss();
    }
  };

  return (
    <div>
      <h1 className="page-title">Create New Post</h1>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreatePost;