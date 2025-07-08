import { useEffect, useState } from 'react';
import postService from '../services/postService';
import Spinner from '../components/Spinner';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const all = await postService.getPosts();
      setPosts(all);
    } catch {
      toast.error('Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (slug) => {
    if (!window.confirm('Delete this post?')) return;
    try {
      await postService.deletePost(slug);
      toast.success('Post deleted');
      fetchPosts();
    } catch {
      toast.error('Failed to delete');
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="dashboard-container">
      <h1 className="page-title">Dashboard</h1>
      {posts.map(post => (
        <div key={post.slug} className="dashboard-post">
          <h2>{post.title}</h2>
          <button
            onClick={() => handleDelete(post.slug)}
            className="dashboard-delete-btn"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;