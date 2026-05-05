import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('দয়া করে ইমেইল এবং পাসওয়ার্ড দিন। (Please enter email and password)');
      return;
    }

    // Mock authentication
    login({ name: 'User', email });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-soft bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iI0MwODRGQyIvPjwvc3ZnPg==')] px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md glass-card p-8 text-center"
      >
        <h1 className="text-3xl font-heading font-bold text-primary mb-2">🌸 She-সুরক্ষা</h1>
        <p className="text-text-mid mb-8 font-body">তোমার সুরক্ষা, তোমার হাতে</p>

        {error && <div className="bg-danger/20 text-danger p-3 rounded-xl mb-4 text-sm">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div>
            <label className="block text-sm font-ui text-text-dark mb-1">ইমেইল বা ফোন নম্বর</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-ui text-text-dark mb-1">পাসওয়ার্ড</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50 pr-12"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-soft"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" className="rounded text-primary focus:ring-primary accent-primary w-4 h-4" />
            <label htmlFor="remember" className="text-sm text-text-mid cursor-pointer">লগইন মনে রাখুন (Remember me)</label>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            লগইন করুন
          </button>
        </form>

        <p className="mt-6 text-sm text-text-mid">
          অ্যাকাউন্ট নেই? <Link to="/register" className="text-accent font-bold hover:underline">রেজিস্টার করুন</Link>
        </p>
      </motion.div>
    </div>
  );
}
