import { useState } from 'react';

export const useAuth = () => {
  const [auth, setAuth] = useState(() => {
    try {
      const stored = localStorage.getItem('auth');
      if (!stored || stored === 'undefined' || stored === 'null') return null;

      return JSON.parse(stored);
    } catch {
      return null;
    }
  });

  const login = (data) => {
    if (!data) return;
    localStorage.setItem('auth', JSON.stringify(data));
    setAuth(data);
  };

  const logout = () => {
    localStorage.removeItem('auth');
    setAuth(null);
  };

  return { auth, login, logout };
};
