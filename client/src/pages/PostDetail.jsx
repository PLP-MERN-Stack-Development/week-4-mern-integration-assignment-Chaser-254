import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import postService from '../services/postService';
import Spinner from '../components/Spinner';

const PostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    postService.getPost(slug).then(setPost);
  }, [slug]);

  if (!post) return <Spinner />;

  return (
    <div className="postdetail-container">
      <h1 className="postdetail-title">{post.title}</h1>
      <img
        src={`http://localhost:5000/uploads/${post.featuredImage}`}
        alt={post.title}
        className="postdetail-image"
      />
      <p className="postdetail-content">{post.content}</p>
    </div>
  );
};

export default PostDetail;