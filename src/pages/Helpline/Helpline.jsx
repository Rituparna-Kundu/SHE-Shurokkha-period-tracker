import React, { useState } from 'react';
import { helplineData } from '../../data/helplineData';
import { Phone, CheckCircle, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import PublicHeader from '../../components/layout/PublicHeader';

export default function Helpline() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'সব' },
    { id: 'emergency', label: 'জরুরি' },
    { id: 'women', label: 'নারী সহায়তা' },
    { id: 'health', label: 'স্বাস্থ্য' },
    { id: 'mental_health', label: 'মানসিক স্বাস্থ্য' }
  ];

  const filteredData = helplineData.filter(item => {
    const matchesSearch = item.name.includes(searchTerm) || item.number.includes(searchTerm);
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-bg-soft">
      <PublicHeader backLabel="হোম" backTo="/" />
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6 pb-16">
      {/* SOS Button */}
      <a href="tel:999" className="block w-full py-4 bg-danger text-white rounded-2xl text-center font-bold text-xl shadow-lg hover:bg-red-600 transition-colors animate-pulse-soft">
        🆘 জরুরি সাহায্য — 999
      </a>

      <div>
        <h1 className="text-2xl font-heading font-bold text-text-dark">হেল্পলাইন ডিরেক্টরি</h1>
        <p className="text-text-mid font-ui text-sm mt-1">জরুরি প্রয়োজনে যোগাযোগের নম্বরসমূহ</p>
      </div>

      {/* Search */}
      <div className="relative">
        <input 
          type="text" 
          placeholder="নাম বা নম্বর দিয়ে খুঁজুন..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-mid" size={20} />
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat.id ? 'bg-primary text-white shadow-md' : 'bg-white border border-border text-text-mid hover:bg-bg-soft'}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Helpline List */}
      <div className="space-y-4">
        {filteredData.map((helpline, idx) => (
          <motion.div 
            key={helpline.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="glass-card p-5"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="text-3xl mt-1">{helpline.icon}</div>
                <div>
                  <h2 className="text-lg font-bold text-text-dark flex items-center gap-2">
                    {helpline.name}
                    {helpline.verified && <CheckCircle size={14} className="text-success" />}
                  </h2>
                  <p className="text-sm text-text-mid mt-1">{helpline.description}</p>
                  <p className="text-xs text-text-soft font-ui mt-2 bg-bg-soft inline-block px-2 py-1 rounded">সময়: {helpline.available}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
              <span className="font-mono font-bold text-lg text-primary">{helpline.number}</span>
              <a 
                href={`tel:${helpline.number}`}
                className="flex items-center gap-2 bg-success text-white px-6 py-2 rounded-full font-bold shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                <Phone size={18} fill="currentColor" /> কল করুন
              </a>
            </div>
          </motion.div>
        ))}
        {filteredData.length === 0 && (
          <div className="text-center py-10 text-text-mid">
            কোনো হেল্পলাইন পাওয়া যায়নি।
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
