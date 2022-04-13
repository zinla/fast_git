import { Navigate, useRoutes } from 'react-router-dom';

import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import DashboardLayout from './layouts/dashboard';
import Blog from './pages/Blog';
import DashboardApp from './pages/DashboardApp';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Products from './pages/Products';
import Register from './pages/Register';
import User from './pages/User';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: 'dashboard', element: <Navigate to="/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: '/', element: <Blog /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },

    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
