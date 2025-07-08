import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostForm from '../components/PostForm';
import postService from '../services/postService';
import toast from 'react-hot-toast';
import Spinner from '../components/Spinner';

const EditPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    postService.getPost(slug).then(setPost);
  }, [slug]);

  const handleSubmit = async (formData) => {
    toast.loading('Updating post...');
    try {
      await postService.updatePost(slug, formData);
      toast.success('Post updated!');
      navigate('/dashboard');
    } catch {
      toast.error('Failed to update');
    } finally {
      toast.dismiss();
    }
  };

  if (!post) return <Spinner />;

  return (
    <div>
      <h1 className="page-title">Edit Post</h1>
      <PostForm initialData={post} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditPost;