import React from 'react';
import { baseRouter } from '@/router/interface';
import { Navigate } from 'react-router-dom';
import Login from '@/views/login';

const constantRouter: baseRouter[] = [
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export default constantRouter;
