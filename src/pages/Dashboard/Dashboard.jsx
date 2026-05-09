import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useCycle } from '../../context/CycleContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, MessageCircle, Phone, Droplet, CheckCircle, Heart } from 'lucide-react';
import { format } from 'date-fns';

export default function Dashboard() {
  const { user } = useAuth();
  const { cycleData, getCycleStats, resetCycleData } = useCycle();
  
  const today = new Date();
  const stats = getCycleStats();
  const isPeriodDay = stats?.phaseKey === 'menstrual';

  const quotes = [
    "তুমি শক্তিশালী, তুমি সাহসী। (You are strong, you are brave.)",
    "নিজেকে ভালোবাসতে শেখো, তুমি অনন্যা। (Learn to love yourself, you are unique.)",
    "প্রতিটি দিন নতুন সম্ভাবনা নিয়ে আসে। (Every day brings new possibilities.)"
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 pb-8 min-h-screen"
    >
      {/* Greeting Header */}
      <header className="mb-6 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-heading font-bold text-text-dark">
            শুভ দিন, {user?.name} 🌸
          </h1>
          <p className="text-sm text-text-mid font-ui mt-1">
            আজ {format(today, 'dd MMM, yyyy')} {stats ? `| সাইকেলের ${stats.currentDay} তম দিন` : ''}
          </p>
        </div>
        {cycleData.cycleStartDate && (
          <button 
            onClick={resetCycleData}
            className="text-[10px] text-text-soft hover:text-danger transition-colors font-bold uppercase tracking-wider"
          >
            ডেটা রিসেট করুন
          </button>
        )}
      </header>

      {/* Cycle Status Card - Enhanced for empty state */}
      {!cycleData.cycleStartDate ? (
        <div className="glass-card p-8 text-center relative overflow-hidden border-2 border-dashed border-primary/30">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Droplet size={32} className="text-primary animate-bounce-slow" />
            </div>
            <h2 className="text-xl font-heading font-bold text-text-dark mb-2">আপনার সাইকেল ট্র্যাক করা শুরু করুন</h2>
            <p className="text-sm text-text-mid mb-6 max-w-xs mx-auto">
              আপনার শেষ মাসিকের তারিখ দিলে আমরা আপনার পরবর্তী মাসিক এবং ওভুলেশন সম্পর্কে ধারণা দিতে পারব।
            </p>
            <Link to="/tracker" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-accent transition-all active:scale-95">
              এখনই সেটআপ করুন
            </Link>
          </div>
        </div>
      ) : (
        /* Cycle Status Card - Existing active state */
        <div className="glass-card p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <div className="flex items-center justify-between relative z-10">
            <div>
              <div className="inline-block px-3 py-1 bg-white/60 rounded-full text-xs font-bold text-primary mb-3 shadow-sm border border-border/50">
                {stats?.currentPhase}
              </div>
              
              {isPeriodDay ? (
                <>
                  <h2 className="text-3xl font-heading font-bold text-danger mb-1">মাসিক চলছে</h2>
                  <p className="text-text-mid font-ui">আজ {stats?.currentDay} তম দিন</p>
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-heading font-bold text-primary mb-1">
                    {stats?.daysRemaining > 0 ? `${stats?.daysRemaining} দিন বাকি` : 'মাসিক আসন্ন'}
                  </h2>
                  <p className="text-text-mid font-ui text-sm">
                    পরবর্তী মাসিক: {stats?.nextPeriodDate ? format(stats?.nextPeriodDate, 'dd MMM') : '-'}
                  </p>
                </>
              )}
            </div>
            
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-border/50" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                <path className="text-primary" strokeDasharray={`${((stats?.currentDay || 0) / (cycleData.cycleLength || 28)) * 100}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
              <div className="absolute text-center">
                <span className="text-xs font-bold text-text-dark">{(stats?.currentDay || 0)}/{(cycleData.cycleLength || 28)}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hygiene Reminder (If on period) */}
      {isPeriodDay && (
        <div className="bg-danger/10 border border-danger/30 rounded-2xl p-4 flex items-start gap-3">
          <div className="bg-white p-2 rounded-full text-danger shrink-0 mt-1"><Droplet size={18} /></div>
          <div>
            <h3 className="font-bold text-danger text-sm">প্যাড বদলানোর সতর্কতা</h3>
            <p className="text-xs text-danger/80 mt-1">প্রতি ৪-৬ ঘন্টা পর পর প্যাড পরিবর্তন করা স্বাস্থ্যকর। আপনার শেষ পরিবর্তনের সময় খেয়াল রাখুন।</p>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        <Link to="/tracker" className="flex flex-col items-center justify-center glass-card p-3 shadow-sm hover:shadow-md transition-all group">
          <div className="w-10 h-10 bg-secondary-light rounded-full flex items-center justify-center text-text-dark group-hover:scale-110 transition-transform"><CalendarIcon size={20} /></div>
          <span className="text-[10px] md:text-xs font-bold text-text-dark mt-2 text-center leading-tight">ক্যালেন্ডার</span>
        </Link>
        <Link to="/suggestions" className="flex flex-col items-center justify-center glass-card p-3 shadow-sm hover:shadow-md transition-all group">
          <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center text-success group-hover:scale-110 transition-transform"><CheckCircle size={20} /></div>
          <span className="text-[10px] md:text-xs font-bold text-text-dark mt-2 text-center leading-tight">পরামর্শ</span>
        </Link>
        <Link to="/chat" className="flex flex-col items-center justify-center glass-card p-3 shadow-sm hover:shadow-md transition-all group">
          <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform"><MessageCircle size={20} /></div>
          <span className="text-[10px] md:text-xs font-bold text-text-dark mt-2 text-center leading-tight">AI চ্যাট</span>
        </Link>
        <Link to="/helpline" className="flex flex-col items-center justify-center glass-card p-3 shadow-sm hover:shadow-md transition-all group">
          <div className="w-10 h-10 bg-warning/30 rounded-full flex items-center justify-center text-warning group-hover:scale-110 transition-transform"><Phone size={20} /></div>
          <span className="text-[10px] md:text-xs font-bold text-text-dark mt-2 text-center leading-tight">হেল্পলাইন</span>
        </Link>
      </div>

      {/* Today's Suggestion */}
      <div className="glass-card p-5">
        <h3 className="font-heading font-bold mb-4 flex items-center gap-2"><Heart size={18} className="text-primary"/> আজকের পরামর্শ</h3>
        <div className="bg-bg-soft rounded-xl p-4 border border-border/50">
          <p className="text-sm font-ui text-text-dark mb-2">
            {!cycleData.cycleStartDate 
              ? "আপনার সাইকেল সেটআপ করলে আমরা এখানে প্রতিদিনের কাস্টমাইজড স্বাস্থ্য পরামর্শ দিতে পারব।"
              : (isPeriodDay 
                  ? "এই পর্যায়ে আপনার শরীরকে সুস্থ রাখতে পর্যাপ্ত পানি পান করুন এবং পুষ্টিকর খাবার খান।"
                  : "পরবর্তী মাসিকের জন্য নিজেকে মানসিকভাবে এবং শারীরিকভাবে প্রস্তুত রাখুন।")}
          </p>
          <Link to="/suggestions" className="text-xs text-primary font-bold hover:underline">বিস্তারিত তালিকা দেখুন →</Link>
        </div>
      </div>

      {/* How it Works / Onboarding for new users */}
      {!cycleData.cycleStartDate && (
        <div className="glass-card p-5 bg-gradient-to-br from-white to-primary-light/10">
          <h3 className="font-heading font-bold mb-3 text-sm text-primary">She-সুরক্ষা কীভাবে ব্যবহার করবেন?</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">১</div>
              <p className="text-xs text-text-mid">প্রথমে <Link to="/tracker" className="text-primary font-bold">ক্যালেন্ডার</Link> থেকে আপনার শেষ মাসিকের তারিখ সেটআপ করুন।</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">২</div>
              <p className="text-xs text-text-mid">আমরা আপনার সাইকেল বিশ্লেষণ করে প্রতিদিনের স্বাস্থ্য পরামর্শ দেব।</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">৩</div>
              <p className="text-xs text-text-mid">যেকোনো প্রশ্ন থাকলে <Link to="/chat" className="text-primary font-bold">AI চ্যাট</Link>-এ সরাসরি জিজ্ঞেস করতে পারেন।</p>
            </div>
          </div>
        </div>
      )}

      {/* Motivational Quote */}
      <div className="glass-card p-5 text-center italic bg-primary-light/20">
        <p className="text-sm text-text-mid font-accent">"{quote}"</p>
      </div>
    </motion.div>
  );
}
