import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Calendar, MessageCircle, Heart, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { to: '/dashboard',   icon: Home,          label: 'হোম'       },
  { to: '/tracker',     icon: Calendar,      label: 'ট্র্যাকার'  },
  { to: '/chat',        icon: MessageCircle, label: 'চ্যাট'     },
  { to: '/hygiene',     icon: Heart,         label: 'স্বাস্থ্য'  },
  { to: '/helpline',    icon: Phone,         label: 'হেল্পলাইন' },
];

export default function BottomNav() {
  const { pathname } = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Blurred glass background */}
      <div className="bg-white/85 backdrop-blur-xl border-t border-border shadow-[0_-4px_24px_rgba(192,132,252,0.12)]">
        <div className="flex items-center justify-around px-1 h-16 safe-area-pb">
          {navItems.map(({ to, icon: Icon, label }) => {
            const isActive = pathname === to || (to !== '/' && pathname.startsWith(to));
            return (
              <NavLink
                key={to}
                to={to}
                className="relative flex flex-col items-center justify-center flex-1 h-full group"
              >
                {/* Active indicator pill */}
                {isActive && (
                  <motion.div
                    layoutId="bottomNavPill"
                    className="absolute top-1.5 w-10 h-1 rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}

                {/* Icon container */}
                <div
                  className={`relative flex items-center justify-center w-10 h-10 rounded-2xl transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-light/60 text-primary scale-105'
                      : 'text-gray-400 group-hover:text-text-mid group-hover:bg-bg-soft'
                  }`}
                >
                  <Icon
                    size={20}
                    strokeWidth={isActive ? 2.5 : 1.8}
                    className={`transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}
                    fill={isActive ? 'currentColor' : 'none'}
                    fillOpacity={isActive ? 0.15 : 0}
                  />
                </div>

                {/* Label */}
                <span
                  className={`text-[10px] mt-0.5 font-ui leading-none transition-all duration-200 ${
                    isActive ? 'text-primary font-bold' : 'text-gray-400 group-hover:text-text-mid'
                  }`}
                >
                  {label}
                </span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
