import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading('Sending reset instructions...');
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/forgot-password`, {
        email
      });
      toast.success('Check your email for reset instructions');
      setEmail('');
    } catch {
      toast.error('Failed to send reset email');
    } finally {
      toast.dismiss();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="forgot-form"
    >
      <h1 className="page-title">Forgot Password</h1>
      <p className="forgot-desc">
        Enter your email to receive a password reset link.
      </p>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="forgot-input"
      />
      <button className="forgot-btn">
        Send Reset Link
      </button>
    </form>
  );
};

export default ForgotPassword;