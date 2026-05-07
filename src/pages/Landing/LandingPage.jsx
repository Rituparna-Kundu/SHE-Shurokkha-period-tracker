import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { ArrowRight, ShieldCheck, Eye, EyeOff, Star, Droplet, MessageCircle, Heart, Phone, Sparkles } from 'lucide-react';
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
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  const [tab, setTab] = useState('login'); // 'login' | 'register'
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register state
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regAge, setRegAge] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    if (!loginEmail || !loginPassword) { setError('দয়া করে সব তথ্য দিন।'); return; }
    login({ name: loginEmail.split('@')[0], email: loginEmail });
    navigate('/dashboard');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');
    if (!regName || !regEmail || !regPassword) { setError('দয়া করে আবশ্যকীয় তথ্যগুলো দিন।'); return; }
    if (regPassword.length < 6) { setError('পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে।'); return; }
    login({ name: regName, email: regEmail, age: regAge });
    navigate('/dashboard');
  };

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
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="w-full max-w-screen-lg mx-auto px-5 h-13 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌸</span>
            <span className="font-heading font-bold text-primary text-base">She-সুরক্ষা</span>
          </div>
          {isAuthenticated && (
            <Link to="/dashboard"
              className="flex items-center gap-1.5 bg-gradient-to-r from-primary to-accent text-white text-sm font-bold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all">
              ড্যাশবোর্ড <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </header>

      {/* ── MAIN: two-column on desktop ── */}
      <main className="w-full max-w-screen-lg mx-auto px-5 pt-6 pb-16 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* ── LEFT: Hero copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-1 md:pt-6"
          >
            <div className="inline-flex items-center gap-1.5 bg-primary-light/60 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary-light mb-4 shadow-sm">
              <Star size={11} fill="currentColor" /> বাংলাদেশের প্রথম AI নারী স্বাস্থ্য সহকারী
            </div>

            <h1 className="font-heading font-bold text-text-dark text-3xl md:text-4xl leading-tight mb-3">
              তোমার শরীর বোঝো,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                তোমার ভাষায়
              </span>
            </h1>
            <p className="text-text-mid text-sm leading-relaxed mb-5 max-w-sm">
              মাসিক ট্র্যাক করো, AI-এর সাথে কথা বলো, নিজেকে জানো — সম্পূর্ণ বিনামূল্যে ও গোপনীয়ভাবে।
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {features.map(f => <FeatureBadge key={f.label} {...f} />)}
            </div>

            {/* Privacy note */}
            <div className="flex items-start gap-2.5 bg-success/10 border border-success/30 rounded-2xl p-3.5">
              <ShieldCheck size={18} className="text-success shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-text-dark">তোমার তথ্য তোমারই</p>
                <p className="text-xs text-text-mid mt-0.5">সব ডেটা শুধু তোমার ডিভাইসে সংরক্ষিত। কোনো সার্ভারে যায় না।</p>
              </div>
            </div>

            {/* Helpline quick link */}
            <div className="mt-4 flex gap-3">
              <Link to="/hygiene" className="text-xs text-text-mid underline-offset-2 hover:text-primary hover:underline transition-colors">স্বাস্থ্যবিধি গাইড →</Link>
              <Link to="/helpline" className="text-xs text-text-mid underline-offset-2 hover:text-primary hover:underline transition-colors">জরুরি হেল্পলাইন →</Link>
            </div>
          </motion.div>

          {/* ── RIGHT: Auth Card ── */}
          {!isAuthenticated ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-full md:w-[380px] shrink-0"
            >
              <div className="glass-card p-6 shadow-xl shadow-primary/10">
                {/* Tab switcher */}
                <div className="flex bg-bg-soft rounded-xl p-1 mb-5">
                  <button
                    onClick={() => { setTab('login'); setError(''); }}
                    className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${tab === 'login' ? 'bg-white text-primary shadow-sm' : 'text-text-mid hover:text-text-dark'}`}
                  >
                    লগইন
                  </button>
                  <button
                    onClick={() => { setTab('register'); setError(''); }}
                    className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${tab === 'register' ? 'bg-white text-primary shadow-sm' : 'text-text-mid hover:text-text-dark'}`}
                  >
                    নতুন অ্যাকাউন্ট
                  </button>
                </div>

                {error && (
                  <div className="bg-danger/10 border border-danger/30 text-danger text-xs p-3 rounded-xl mb-4">{error}</div>
                )}

                {/* LOGIN FORM */}
                {tab === 'login' && (
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-text-dark mb-1">ইমেইল বা ফোন নম্বর</label>
                      <input
                        type="text"
                        value={loginEmail}
                        onChange={e => setLoginEmail(e.target.value)}
                        placeholder="example@email.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-text-dark mb-1">পাসওয়ার্ড</label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={loginPassword}
                          onChange={e => setLoginPassword(e.target.value)}
                          placeholder="••••••"
                          className="w-full px-4 py-2.5 rounded-xl border border-border bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm pr-10"
                        />
                        <button type="button" onClick={() => setShowPassword(p => !p)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-mid">
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                    <button type="submit"
                      className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all">
                      লগইন করুন
                    </button>
                    <p className="text-center text-xs text-text-mid">
                      অ্যাকাউন্ট নেই?{' '}
                      <button type="button" onClick={() => setTab('register')} className="text-primary font-bold hover:underline">
                        রেজিস্টার করুন
                      </button>
                    </p>
                  </form>
                )}

                {/* REGISTER FORM */}
                {tab === 'register' && (
                  <form onSubmit={handleRegister} className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-text-dark mb-1">নাম <span className="text-danger">*</span></label>
                      <input type="text" value={regName} onChange={e => setRegName(e.target.value)}
                        placeholder="তোমার নাম"
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-text-dark mb-1">ইমেইল <span className="text-danger">*</span></label>
                      <input type="email" value={regEmail} onChange={e => setRegEmail(e.target.value)}
                        placeholder="example@email.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm" />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <label className="block text-xs font-bold text-text-dark mb-1">পাসওয়ার্ড <span className="text-danger">*</span></label>
                        <div className="relative">
                          <input type={showPassword ? 'text' : 'password'} value={regPassword} onChange={e => setRegPassword(e.target.value)}
                            placeholder="••••••"
                            className="w-full px-4 py-2.5 rounded-xl border border-border bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm pr-8" />
                          <button type="button" onClick={() => setShowPassword(p => !p)}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-mid">
                            {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                          </button>
                        </div>
                      </div>
                      <div className="w-20">
                        <label className="block text-xs font-bold text-text-dark mb-1">বয়স</label>
                        <input type="number" value={regAge} onChange={e => setRegAge(e.target.value)}
                          placeholder="20"
                          className="w-full px-3 py-2.5 rounded-xl border border-border bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm" />
                      </div>
                    </div>
                    <button type="submit"
                      className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all">
                      অ্যাকাউন্ট তৈরি করুন
                    </button>
                    <p className="text-center text-xs text-text-mid">
                      আগে থেকে আছে?{' '}
                      <button type="button" onClick={() => setTab('login')} className="text-primary font-bold hover:underline">
                        লগইন করুন
                      </button>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          ) : (
            /* Logged-in state: show go-to-dashboard card */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full md:w-[380px] shrink-0"
            >
              <div className="glass-card p-8 text-center shadow-xl shadow-primary/10">
                <div className="text-5xl mb-4">🌸</div>
                <h2 className="font-heading font-bold text-xl text-primary mb-2">স্বাগতম ফিরে!</h2>
                <p className="text-sm text-text-mid mb-6">তুমি লগইন আছো। তোমার ড্যাশবোর্ডে যাও এবং সব সুবিধা উপভোগ করো।</p>
                <Link to="/dashboard"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-bold px-7 py-3 rounded-full shadow-lg shadow-primary/25 hover:scale-105 active:scale-95 transition-all">
                  ড্যাশবোর্ড খুলুন <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* ── LOWER SECTIONS ── */}
      <FeaturesSection />
      <HowItWorksSection />
      <TrustSection />
      <CTASection isAuthenticated={isAuthenticated} />
      <Animation1 />
      <Footer />
    </div>
  );
}
