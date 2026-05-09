import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import BottomNav from './components/layout/BottomNav';
import Sidebar from './components/layout/Sidebar';

export default function App() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64 pb-16 md:pb-0">
        <div className="md:hidden">
          <Navbar />
        </div>
        <main className="flex-grow container mx-auto px-4 py-6 max-w-4xl">
          <Outlet />
        </main>
        <BottomNav />
      </div>
    </div>
  );
}
