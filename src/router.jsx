import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';

// Public pages
import LandingPage from './pages/Landing/LandingPage';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

// Public info pages (no auth needed)
import HygieneGuide from './pages/Hygiene/HygieneGuide';
import Helpline from './pages/Helpline/Helpline';

import Aboutus from './pages/AboutUs/Aboutus';
// Protected Pages
import Dashboard from './pages/Dashboard/Dashboard';
import CycleTracker from './pages/CycleTracker/CycleTracker';
import Suggestions from './pages/Suggestions/Suggestions';
import AIChat from './pages/AIChat/AIChat';
import NotificationSettings from './pages/Notifications/NotificationSettings';

export const router = createBrowserRouter([
  // ── PUBLIC routes (no auth required) ──
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  // Public info pages (accessible to guests too)
  {
    path: '/hygiene',
    element: <HygieneGuide />,
  },
  {
    path: '/helpline',
    element: <Helpline />,
  },
  {
    path: '/aboutus',
    element: <Aboutus />,
  },

  // ── PROTECTED routes (auth required via App.jsx guard) ──
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/tracker',
        element: <CycleTracker />,
      },
      {
        path: '/suggestions',
        element: <Suggestions />,
      },
      {
        path: '/chat',
        element: <AIChat />,
      },
      {
        path: '/notifications',
        element: <NotificationSettings />,
      },
    ],
  },
]);
