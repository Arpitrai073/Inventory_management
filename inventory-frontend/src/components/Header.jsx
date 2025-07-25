// src/components/Header.jsx
import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem('userInfo');

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
  };

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold">InventoryPro</Link>
        <nav>
          {userInfo ? (
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Logout
            </button>
          ) : (
            <Link to="/login" className="hover:text-gray-300">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;