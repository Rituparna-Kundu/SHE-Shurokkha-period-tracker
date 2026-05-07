import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Home, Calendar, MessageCircle, Heart, Phone,
  Bell, LogOut, Sparkles, ChevronRight
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { to: '/dashboard',     icon: Home,          label: 'হোম',              sublabel: 'Dashboard'    },
  { to: '/tracker',       icon: Calendar,      label: 'সাইকেল ট্র্যাকার', sublabel: 'Tracker'     },
  { to: '/suggestions',   icon: Sparkles,      label: 'পরামর্শ',           sublabel: 'Suggestions'  },
  { to: '/hygiene',       icon: Heart,         label: 'স্বাস্থ্যবিধি',     sublabel: 'Hygiene'      },
  { to: '/chat',          icon: MessageCircle, label: 'AI চ্যাট',          sublabel: 'AI Chat'      },
  { to: '/helpline',      icon: Phone,         label: 'হেল্পলাইন',         sublabel: 'Helpline'     },
  { to: '/notifications', icon: Bell,          label: 'নোটিফিকেশন',       sublabel: 'Notifications' },
  { to: '/aboutus', icon: Bell,          label: '',       sublabel: 'About us' },
];

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [logoutModal, setLogoutModal] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
    setLogoutModal(false);
  };

  const initials = user?.name
    ? user.name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
    : 'U';

  return (
    <>
      <aside className="hidden md:flex flex-col w-72 h-screen fixed top-0 left-0 z-50 bg-white border-r border-border shadow-[4px_0_32px_rgba(192,132,252,0.10)]">

        {/* Logo Header */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-border bg-gradient-to-br from-primary-light/50 to-secondary-light/30">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30 shrink-0">
            <span className="text-2xl">🌸</span>
          </div>
          <div>
            <h1 className="font-heading font-bold text-primary text-lg leading-none">She-সুরক্ষা</h1>
            <p className="text-[11px] text-text-mid font-ui mt-0.5">তোমার সুরক্ষা, তোমার হাতে</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <nav className="flex-1 overflow-y-auto py-5 px-4 space-y-2">
          <p className="text-[10px] uppercase tracking-widest font-bold text-text-mid/40 font-ui px-1 pb-1">মেনু</p>

          {navItems.map(({ to, icon: Icon, label, sublabel }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all duration-200 group ${
                  isActive
                    ? 'bg-gradient-to-r from-primary to-accent text-white border-transparent shadow-lg shadow-primary/25'
                    : 'bg-bg-soft border-border text-text-mid hover:border-primary-light hover:bg-primary-light/20 hover:text-primary hover:shadow-sm'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Icon Box */}
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                    isActive
                      ? 'bg-white/20'
                      : 'bg-white border border-border group-hover:bg-primary-light/40 group-hover:border-primary-light'
                  }`}>
                    <Icon
                      size={18}
                      strokeWidth={isActive ? 2.5 : 2}
                      className={isActive ? 'text-white' : 'text-text-mid group-hover:text-primary'}
                    />
                  </div>

                  {/* Labels */}
                  <div className="flex-1 min-w-0 text-left">
                    <p className={`text-sm font-bold leading-none truncate ${isActive ? 'text-white' : 'text-text-dark group-hover:text-primary'}`}>
                      {label}
                    </p>
                    <p className={`text-[11px] mt-0.5 leading-none truncate ${isActive ? 'text-white/70' : 'text-text-mid/60'}`}>
                      {sublabel}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ChevronRight
                    size={16}
                    className={`shrink-0 transition-transform ${
                      isActive ? 'text-white/70' : 'text-border group-hover:text-primary group-hover:translate-x-0.5'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* User Profile Footer */}
        <div className="border-t border-border p-4 bg-gradient-to-t from-bg-soft to-white space-y-3">
          {/* User Info Card */}
          <div className="flex items-center gap-3 px-3 py-3 rounded-2xl bg-primary-light/20 border border-primary-light/40">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold shadow-md shadow-primary/25 shrink-0">
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-text-dark truncate">{user?.name || 'User'}</p>
              <p className="text-[11px] text-text-mid truncate">{user?.email || ''}</p>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={() => setLogoutModal(true)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border border-danger/30 bg-danger/5 text-danger text-sm font-bold hover:bg-danger hover:text-white transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-danger/20"
          >
            <LogOut size={16} />
            লগআউট করুন
          </button>
        </div>
      </aside>

      {/* Logout Confirmation Modal */}
      <AnimatePresence>
        {logoutModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
            onClick={() => setLogoutModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="bg-white rounded-3xl shadow-2xl p-6 max-w-sm w-full border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="text-5xl mb-4">👋</div>
                <h2 className="text-lg font-heading font-bold text-text-dark mb-2">লগআউট করবেন?</h2>
                <p className="text-sm text-text-mid mb-6">আপনি কি সত্যিই অ্যাপ থেকে বের হতে চান?</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setLogoutModal(false)}
                    className="flex-1 py-3 rounded-2xl border-2 border-border text-text-mid font-bold hover:bg-bg-soft transition-colors"
                  >
                    বাতিল
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex-1 py-3 rounded-2xl bg-danger text-white font-bold hover:bg-red-500 transition-colors shadow-lg shadow-danger/25"
                  >
                    লগআউট
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
