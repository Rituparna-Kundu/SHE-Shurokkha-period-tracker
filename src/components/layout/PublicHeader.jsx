import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';

/**
 * Minimal top navbar for public-facing pages (Hygiene, Helpline).
 * Shows logo + login/dashboard button.
 */
export default function PublicHeader({ backTo = '/', backLabel = 'হোম' }) {
  const { isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to={backTo} className="flex items-center gap-2 text-text-mid hover:text-primary transition-colors">
          <ArrowLeft size={18} />
          <span className="text-sm font-ui">{backLabel}</span>
        </Link>

        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl">🌸</span>
          <span className="font-heading font-bold text-primary text-sm">She-সুরক্ষা</span>
        </Link>

        {isAuthenticated ? (
          <Link
            to="/dashboard"
            className="flex items-center gap-1 text-sm font-bold text-primary hover:text-accent transition-colors"
          >
            ড্যাশবোর্ড <ArrowRight size={14} />
          </Link>
        ) : (
          <Link
            to="/login"
            className="text-sm font-bold bg-gradient-to-r from-primary to-accent text-white px-4 py-1.5 rounded-full shadow-sm"
          >
            লগইন
          </Link>
        )}
      </div>
    </header>
  );
}
