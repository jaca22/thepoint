import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Layout } from './layout';
import { UsersPage, UserDetailsPage } from './pages';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: 'users',
        element: <UsersPage />,
      },
      {
        path: 'users/:id',
        element: <UserDetailsPage />,
      },
    ],
  }, {
    path: '*',
    element: <Navigate to="users" />,
  },
]);

export {
  router,
};
