import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const { dark, setDark } = useContext(ThemeContext);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">MERN Blog</Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/dashboard" className="navbar-link">Dashboard</Link>
        <Link to="/profile" className="navbar-link">Profile</Link>

        {user ? (
          <>
            <span className="navbar-user">{user.name}</span>
            <button
              onClick={handleLogout}
              className="navbar-logout"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-link">Login</Link>
            <Link to="/register" className="navbar-link">Register</Link>
          </>
        )}
        <button className="navbar-theme-toggle" onClick={() => setDark(!dark)}>
          {dark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;