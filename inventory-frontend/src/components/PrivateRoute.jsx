// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const userInfo = localStorage.getItem('userInfo');
  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;