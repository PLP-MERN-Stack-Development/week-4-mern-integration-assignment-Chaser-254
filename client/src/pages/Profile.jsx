import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      <p><span className="profile-label">Name:</span> {user.name}</p>
      <p><span className="profile-label">Email:</span> {user.email}</p>

      <button
        onClick={logout}
        className="profile-logout-btn"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;