import React, { useState, useRef, useEffect } from 'react';
import { Bell, LogOut, User, Settings, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleLogout = () => {
    if (window.confirm('আপনি কি লগআউট করতে চান?')) {
      logout();
      navigate('/login');
    }
  };

  const initials = user?.name
    ? user.name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
    : 'U';

  return (
    <header className="md:hidden sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-purple-100 shadow-sm">
      <div className="flex items-center justify-between px-6 h-18">
        {/* Logo */}
        <Link to="/dashboard" className="flex items-center gap-2 select-none group">
          <span className="text-3xl group-hover:scale-110 transition-transform duration-300">🌸</span>
          <div className="leading-tight">
            <span className="font-heading font-black text-primary text-lg tracking-tight">She-সুরক্ষা</span>
          </div>
        </Link>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Notification Bell */}
          <Link
            to="/notifications"
            className="relative w-9 h-9 flex items-center justify-center rounded-full bg-bg-soft border border-border text-text-mid hover:text-primary hover:bg-primary-light/30 transition-all"
          >
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full border border-white animate-pulse"></span>
          </Link>

          {/* User Avatar Dropdown */}
          <div className="relative" ref={dropRef}>
            <button
              onClick={() => setDropdownOpen((p) => !p)}
              className="flex items-center gap-1.5 pl-1 pr-2 py-1 rounded-full bg-primary-light/40 border border-border hover:bg-primary-light transition-all"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold shadow-sm">
                {initials}
              </div>
              <ChevronDown size={14} className={`text-text-mid transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-border overflow-hidden z-50"
                >
                  {/* User Info */}
                  <div className="px-4 py-3 bg-gradient-to-br from-primary-light/50 to-secondary-light/40 border-b border-border">
                    <p className="text-sm font-bold text-text-dark truncate">{user?.name || 'User'}</p>
                    <p className="text-xs text-text-mid truncate">{user?.email || ''}</p>
                  </div>

                  {/* Menu Items */}
                  <div className="py-1">
                    <DropItem icon={<User size={16} />} label="প্রোফাইল" to="/dashboard" onClick={() => setDropdownOpen(false)} />
                    <DropItem icon={<Settings size={16} />} label="নোটিফিকেশন সেটিংস" to="/notifications" onClick={() => setDropdownOpen(false)} />
                    <div className="border-t border-border my-1" />
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-danger hover:bg-danger/10 transition-colors font-ui"
                    >
                      <LogOut size={16} />
                      লগআউট করুন
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}

function DropItem({ icon, label, to, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-dark hover:bg-bg-soft transition-colors font-ui"
    >
      <span className="text-text-mid">{icon}</span>
      {label}
    </Link>
  );
}
