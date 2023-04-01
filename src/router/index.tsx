import React from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';
import asyncRoutes from '@/router/module/asyncRoutes';
import constantRoutes from '@/router/module/constantRoutes';

const allRouter = constantRoutes.concat(asyncRoutes);

export default () => {
  return useRoutes(allRouter as RouteObject[]);
};
