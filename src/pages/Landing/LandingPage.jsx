import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { ArrowRight, ShieldCheck, Star, Droplet, MessageCircle, Heart, Phone, Sparkles } from 'lucide-react';
import { FeaturesSection, HowItWorksSection, TrustSection, CTASection, Footer, Animation1 } from './LandingSections';

// Subtle background blobs
const FloralBg = () => (
  <div className="pointer-events-none select-none fixed inset-0 overflow-hidden -z-0">
    <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary-light/40 rounded-full blur-3xl" />
    <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-secondary-light/60 rounded-full blur-3xl" />
    {[...Array(8)].map((_, i) => (
      <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-primary/20"
        style={{ top: `${12 + (i * 11) % 80}%`, left: `${6 + (i * 15) % 88}%` }}
      />
    ))}
  </div>
);

// Mini feature badge
const FeatureBadge = ({ icon, label }) => (
  <div className="flex items-center gap-2 bg-white/80 border border-border rounded-xl px-3 py-2 text-xs font-bold text-text-dark shadow-sm">
    <span className="text-primary">{icon}</span>
    {label}
  </div>
);

export default function LandingPage() {
  const { isAuthenticated } = useAuth();

  // Redirect authenticated users straight to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const features = [
    { icon: <Droplet size={14} />,       label: 'পিরিয়ড ট্র্যাকার' },
    { icon: <MessageCircle size={14} />, label: 'AI চ্যাট' },
    { icon: <Sparkles size={14} />,      label: 'খাবার গাইড' },
    { icon: <Heart size={14} />,         label: 'স্বাস্থ্যবিধি' },
    { icon: <Phone size={14} />,         label: 'হেল্পলাইন' },
  ];

  return (
    <div className="relative min-h-screen bg-bg-soft font-ui overflow-x-hidden">
      <FloralBg />

      {/* ── TOP NAV ── */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-purple-100 shadow-sm">
        <div className="w-full max-w-screen-lg mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🌸</span>
            <div>
              <span className="font-heading font-black text-primary text-xl tracking-tight">She-সুরক্ষা</span>
              <p className="text-[10px] text-purple-400 font-bold -mt-1 uppercase tracking-widest hidden sm:block">তোমার সুরক্ষা</p>
            </div>
          </div>
          {isAuthenticated ? (
            <Link to="/dashboard"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-base font-bold px-6 py-2.5 rounded-full shadow-lg shadow-purple-200 hover:scale-105 active:scale-95 transition-all">
              ড্যাশবোর্ড <ArrowRight size={18} />
            </Link>
          ) : (
            <div className="flex items-center gap-6">
              <Link to="/login" className="text-base font-bold text-gray-500 hover:text-purple-600 transition-colors">লগইন</Link>
              <Link to="/register" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-base font-bold px-6 py-2.5 rounded-full shadow-lg shadow-purple-200 hover:scale-105 active:scale-95 transition-all">রেজিস্টার</Link>
            </div>
          )}
        </div>
      </header>

      <Animation1 />

      {/* ── LOWER SECTIONS ── */}
      <FeaturesSection />
      <HowItWorksSection />
      <TrustSection />
      <CTASection isAuthenticated={isAuthenticated} />
      <Footer />
    </div>
  );
}
