import React, { useState, useEffect } from 'react';
import { Bell, Clock, Calendar, Droplet, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotificationSettings() {
  const [settings, setSettings] = useState(() => {
    const local = localStorage.getItem('she_notification_settings');
    return local ? JSON.parse(local) : {
      periodReminder: true,
      padChangeReminder: true,
      dailyTips: true,
      reminderDays: 2,
      reminderTime: '09:00'
    };
  });

  const [permission, setPermission] = useState(Notification.permission);

  useEffect(() => {
    localStorage.setItem('she_notification_settings', JSON.stringify(settings));
  }, [settings]);

  const requestPermission = async () => {
    if (Notification.permission !== 'granted') {
      const p = await Notification.requestPermission();
      setPermission(p);
      if (p === 'granted') {
        new Notification('She-সুরক্ষা', { body: 'নোটিফিকেশন সফলভাবে চালু হয়েছে! 🌸' });
      }
    }
  };

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6 pb-10">
      <div>
        <h1 className="text-2xl font-heading font-bold text-text-dark">নোটিফিকেশন সেটিংস</h1>
        <p className="text-text-mid font-ui text-sm mt-1">আপনার রিমাইন্ডার এবং অ্যালার্ট কাস্টমাইজ করুন</p>
      </div>

      {permission !== 'granted' && (
        <div className="bg-warning/20 border border-warning rounded-2xl p-4 flex items-start gap-3">
          <Bell className="text-warning-800 shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="font-bold text-yellow-800 text-sm">নোটিফিকেশন অনুমতি প্রয়োজন</h3>
            <p className="text-xs text-yellow-800/80 mt-1 mb-3">অ্যাপের বাইরেও সঠিক সময়ে রিমাইন্ডার পেতে ব্রাউজার নোটিফিকেশন চালু করুন।</p>
            <button 
              onClick={requestPermission}
              className="bg-warning text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm"
            >
              চালু করুন
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {/* Setting Item */}
        <div className="glass-card p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary"><Calendar size={20} /></div>
            <div>
              <p className="font-bold text-text-dark">মাসিকের রিমাইন্ডার</p>
              <p className="text-xs text-text-mid">মাসিক শুরুর আগে নোটিফিকেশন</p>
            </div>
          </div>
          <Toggle active={settings.periodReminder} onClick={() => handleToggle('periodReminder')} />
        </div>

        {/* Setting Item */}
        <div className="glass-card p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-danger/20 rounded-full flex items-center justify-center text-danger"><Droplet size={20} /></div>
            <div>
              <p className="font-bold text-text-dark">প্যাড পরিবর্তনের অ্যালার্ট</p>
              <p className="text-xs text-text-mid">মাসিকের সময় প্রতি ৪-৬ ঘণ্টা পর</p>
            </div>
          </div>
          <Toggle active={settings.padChangeReminder} onClick={() => handleToggle('padChangeReminder')} />
        </div>

        {/* Setting Item */}
        <div className="glass-card p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center text-success"><Coffee size={20} /></div>
            <div>
              <p className="font-bold text-text-dark">দৈনিক স্বাস্থ্য টিপস</p>
              <p className="text-xs text-text-mid">খাবার ও ব্যায়ামের পরামর্শ</p>
            </div>
          </div>
          <Toggle active={settings.dailyTips} onClick={() => handleToggle('dailyTips')} />
        </div>
      </div>

      <div className="glass-card p-5 space-y-4">
        <h3 className="font-bold text-text-dark flex items-center gap-2 border-b border-border pb-3"><Clock size={18} className="text-primary" /> সময়ের পছন্দ</h3>
        
        <div>
          <label className="block text-sm font-ui text-text-mid mb-2">কত দিন আগে রিমাইন্ডার চান?</label>
          <select 
            value={settings.reminderDays}
            onChange={(e) => setSettings({...settings, reminderDays: parseInt(e.target.value)})}
            className="w-full p-3 rounded-xl border border-border focus:ring-2 focus:ring-primary outline-none bg-white"
          >
            <option value={1}>১ দিন আগে</option>
            <option value={2}>২ দিন আগে</option>
            <option value={3}>৩ দিন আগে</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-ui text-text-mid mb-2">প্রতিদিনের নোটিফিকেশনের সময়</label>
          <input 
            type="time" 
            value={settings.reminderTime}
            onChange={(e) => setSettings({...settings, reminderTime: e.target.value})}
            className="w-full p-3 rounded-xl border border-border focus:ring-2 focus:ring-primary outline-none bg-white"
          />
        </div>
      </div>

      <button className="w-full py-3 bg-primary text-white rounded-xl font-bold shadow-md hover:bg-accent transition-colors">
        সেটিংস সংরক্ষণ করুন
      </button>

    </div>
  );
}

function Toggle({ active, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${active ? 'bg-success' : 'bg-gray-300'}`}
    >
      <motion.div 
        layout 
        className={`w-4 h-4 bg-white rounded-full shadow-sm ${active ? 'ml-auto' : 'mr-auto'}`}
      />
    </button>
  );
}
