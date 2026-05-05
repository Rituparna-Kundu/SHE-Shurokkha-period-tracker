import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.password) {
      setError('দয়া করে আবশ্যকীয় তথ্যগুলো পূরণ করুন। (Please fill required fields)');
      return;
    }

    if (formData.password.length < 6) {
      setError('পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে। (Password must be at least 6 characters)');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('পাসওয়ার্ড মেলেনি। (Passwords do not match)');
      return;
    }

    // Mock registration and login
    login({ name: formData.name, email: formData.email, age: formData.age });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-soft bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iI0MwODRGQyIvPjwvc3ZnPg==')] px-4 py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md glass-card p-8 text-center"
      >
        <h1 className="text-3xl font-heading font-bold text-primary mb-2">🌸 She-সুরক্ষা</h1>
        <p className="text-text-mid mb-6 font-body">নতুন অ্যাকাউন্ট তৈরি করুন</p>

        {error && <div className="bg-danger/20 text-danger p-3 rounded-xl mb-4 text-sm">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-ui text-text-dark mb-1">নাম <span className="text-danger">*</span></label>
            <input 
              type="text" name="name"
              className="w-full px-4 py-2 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50"
              value={formData.name} onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-ui text-text-dark mb-1">ইমেইল <span className="text-danger">*</span></label>
            <input 
              type="email" name="email"
              className="w-full px-4 py-2 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50"
              value={formData.email} onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-ui text-text-dark mb-1">ফোন (ঐচ্ছিক)</label>
              <input 
                type="tel" name="phone"
                className="w-full px-4 py-2 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50"
                value={formData.phone} onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-ui text-text-dark mb-1">বয়স</label>
              <input 
                type="number" name="age"
                className="w-full px-4 py-2 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50"
                value={formData.age} onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-ui text-text-dark mb-1">পাসওয়ার্ড <span className="text-danger">*</span></label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} name="password"
                className="w-full px-4 py-2 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50 pr-10"
                value={formData.password} onChange={handleChange}
              />
              <button 
                type="button" onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-soft"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-ui text-text-dark mb-1">পাসওয়ার্ড নিশ্চিত করুন <span className="text-danger">*</span></label>
            <input 
              type={showPassword ? "text" : "password"} name="confirmPassword"
              className="w-full px-4 py-2 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white/50"
              value={formData.confirmPassword} onChange={handleChange}
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            রেজিস্টার করুন
          </button>
        </form>

        <p className="mt-4 text-sm text-text-mid">
          আগে থেকে অ্যাকাউন্ট আছে? <Link to="/login" className="text-accent font-bold hover:underline">লগইন করুন</Link>
        </p>
      </motion.div>
    </div>
  );
}
