import { Link } from 'react-router-dom';

const PostCard = ({ post }) => (
  <div className="postcard">
    <img
      src={`http://localhost:5000/uploads/${post.featuredImage}`}
      alt={post.title}
      className="postcard-image"
    />
    <h3 className="postcard-title">{post.title}</h3>
    <p className="postcard-excerpt">{post.excerpt}</p>
    <Link
      to={`/posts/${post.slug}`}
      className="postcard-link"
    >
      Read more →
    </Link>
  </div>
);

export default PostCard;