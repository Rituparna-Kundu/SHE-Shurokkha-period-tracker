import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Droplet, MessageCircle, Sparkles, Heart, Phone,
  ShieldCheck, Lock, CheckCircle, ArrowRight
} from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay },
});

/* ── 1. FEATURES GRID ── */
const features = [
  { icon: <Droplet size={24} />,       color: 'bg-pink-100 text-pink-500',     title: 'পিরিয়ড ট্র্যাকার',       desc: 'সাইকেল, ওভুলেশন ও পরবর্তী মাসিক সহজে অনুমান করুন।' },
  { icon: <MessageCircle size={24} />, color: 'bg-purple-100 text-purple-500', title: 'AI স্বাস্থ্য সহকারী',    desc: '"সুরক্ষা" AI — যেকোনো স্বাস্থ্য প্রশ্নের উত্তর পান।' },
  { icon: <Sparkles size={24} />,      color: 'bg-yellow-100 text-yellow-500', title: 'খাবার ও ব্যায়াম গাইড',  desc: 'সাইকেল পর্যায় অনুযায়ী কাস্টমাইজড পরামর্শ পান।' },
  { icon: <Heart size={24} />,         color: 'bg-rose-100 text-rose-500',     title: 'স্বাস্থ্যবিধি গাইড',     desc: 'প্যাড, কাপ ও মাসিক স্বাস্থ্যের সঠিক নিয়মকানুন।' },
  { icon: <Phone size={24} />,         color: 'bg-green-100 text-green-600',   title: 'জরুরি হেল্পলাইন',       desc: 'বাংলাদেশের যাচাইকৃত সাহায্য নম্বর একটি জায়গায়।' },
  { icon: <Lock size={24} />,          color: 'bg-indigo-100 text-indigo-500', title: 'গোপনীয়তা প্রথমে',      desc: 'তোমার কোনো তথ্য সার্ভারে যায় না — সব শুধু তোমার ডিভাইসে।' },
];

function FeaturesSection() {
  return (
    <section className="py-14 px-5 bg-white/60">
      <div className="max-w-screen-lg mx-auto">
        <motion.div {...fadeUp()} className="text-center mb-10">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">সব সুবিধা</p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-dark">তোমার জন্য যা আছে</h2>
          <p className="text-text-mid text-sm mt-2 max-w-md mx-auto">একটি অ্যাপে নারী স্বাস্থ্যের সব প্রয়োজনীয় সুবিধা।</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div key={i} {...fadeUp(i * 0.07)}
              className="bg-white rounded-2xl border border-border p-5 shadow-sm hover:shadow-md hover:border-primary-light transition-all group">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${f.color}`}>
                {f.icon}
              </div>
              <h3 className="font-bold text-text-dark text-sm mb-1">{f.title}</h3>
              <p className="text-xs text-text-mid leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 2. HOW IT WORKS ── */
const steps = [
  { num: '০১', icon: <Droplet size={28} />, title: 'সাইকেল ট্র্যাক করো', desc: 'মাসিকের তারিখ লিখুন — অ্যাপ বাকি হিসাব করে দেবে।' },
  { num: '০২', icon: <MessageCircle size={28} />, title: 'AI-কে জিজ্ঞেস করো', desc: 'যেকোনো স্বাস্থ্য প্রশ্ন "সুরক্ষা" AI-কে করুন।' },
  { num: '০৩', icon: <Sparkles size={28} />, title: 'ব্যক্তিগত পরামর্শ পাও', desc: 'তোমার সাইকেল অনুযায়ী খাবার, ব্যায়াম ও যত্নের গাইড।' },
];

function HowItWorksSection() {
  return (
    <section className="py-14 px-5 bg-gradient-to-b from-primary-light/20 to-bg-soft">
      <div className="max-w-screen-lg mx-auto">
        <motion.div {...fadeUp()} className="text-center mb-10">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">কীভাবে কাজ করে</p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-dark">মাত্র ৩টি ধাপ</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary-light via-primary to-accent opacity-30 z-0" />

          {steps.map((s, i) => (
            <motion.div key={i} {...fadeUp(i * 0.1)} className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-primary/25">
                {s.icon}
              </div>
              <span className="text-[11px] font-black text-primary/40 tracking-widest">{s.num}</span>
              <h3 className="font-bold text-text-dark text-base mt-1 mb-2">{s.title}</h3>
              <p className="text-xs text-text-mid leading-relaxed max-w-[200px] mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 3. TRUST & PRIVACY ── */
const trustPoints = [
  'তোমার কোনো ডেটা আমাদের সার্ভারে সংরক্ষিত হয় না',
  'সব তথ্য শুধু তোমার ব্রাউজারের localStorage-এ থাকে',
  'কোনো অ্যাকাউন্ট ভেরিফিকেশন বা ফোন নম্বর লাগে না',
];

function TrustSection() {
  return (
    <section className="py-14 px-5 bg-white/60">
      <div className="max-w-screen-lg mx-auto">
        <motion.div {...fadeUp()}
          className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-success/20 flex items-center justify-center shrink-0">
            <ShieldCheck size={34} className="text-success" />
          </div>
          <div className="flex-1">
            <h2 className="font-heading font-bold text-xl text-text-dark mb-1">তোমার তথ্য ১০০% নিরাপদ</h2>
            <p className="text-text-mid text-sm mb-4">She-সুরক্ষা Privacy-first নীতিতে তৈরি।</p>
            <ul className="space-y-2">
              {trustPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-dark">
                  <CheckCircle size={15} className="text-success shrink-0 mt-0.5" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── 4. TESTIMONIALS ── */
const testimonials = [
  { quote: 'এই অ্যাপ ব্যবহার করে আমার মাসিক সম্পর্কে অনেক কিছু জানতে পেরেছি। AI চ্যাটবট সত্যিই সাহায্যকারী!', name: 'রিতু আক্তার', age: '২২ বছর', city: 'ঢাকা' },
  { quote: 'হেল্পলাইন পেজটা অনেক কাজে লেগেছে। জরুরি মুহূর্তে সঠিক নম্বর খুঁজে পেয়েছি।', name: 'সুমাইয়া', age: '১৮ বছর', city: 'চট্টগ্রাম' },
  { quote: 'গোপনীয়তার বিষয়টা জেনে অনেক স্বস্তি পেলাম। এখন নিশ্চিন্তে ব্যবহার করতে পারছি।', name: 'নাফিসা ইসলাম', age: '২৫ বছর', city: 'সিলেট' },
];

function TestimonialsSection() {
  return (
    <section className="py-14 px-5 bg-gradient-to-b from-secondary-light/20 to-bg-soft">
      <div className="max-w-screen-lg mx-auto">
        <motion.div {...fadeUp()} className="text-center mb-10">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">ব্যবহারকারীদের কথা</p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-dark">তারা কী বলছেন</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div key={i} {...fadeUp(i * 0.08)}
              className="bg-white rounded-2xl border border-border p-5 shadow-sm">
              <p className="text-3xl text-primary/30 font-serif leading-none mb-2">"</p>
              <p className="text-sm text-text-dark leading-relaxed mb-4 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3 border-t border-border pt-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-text-dark">{t.name}</p>
                  <p className="text-[11px] text-text-mid">{t.age} · {t.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 5. CTA BANNER ── */
function CTASection({ isAuthenticated }) {
  return (
    <section className="py-14 px-5">
      <div className="max-w-screen-lg mx-auto">
        <motion.div {...fadeUp()}
          className="bg-gradient-to-br from-primary to-accent rounded-3xl p-10 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
          <div className="absolute inset-0 opacity-10 text-[180px] leading-none select-none flex items-center justify-center">🌸</div>
          <div className="relative z-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3">আজই তোমার স্বাস্থ্য যাত্রা শুরু করো</h2>
            <p className="text-white/80 text-sm mb-6 max-w-md mx-auto">
              বিনামূল্যে, বিজ্ঞাপনমুক্ত ও সম্পূর্ণ গোপনীয় — শুধু তোমার জন্য।
            </p>
            <Link to={isAuthenticated ? '/dashboard' : '/register'}
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all">
              {isAuthenticated ? 'ড্যাশবোর্ড দেখুন' : 'এখনই শুরু করুন'} <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── 6. FOOTER ── */
function Footer() {
  return (
    <footer className="border-t border-border bg-white/80 py-8 px-5">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🌸</span>
          <span className="font-heading font-bold text-primary">She-সুরক্ষা</span>
          <span className="text-text-mid text-xs">— তোমার সুরক্ষা, তোমার হাতে</span>
        </div>
        <div className="flex items-center gap-5 text-xs text-text-mid">
          <Link to="/hygiene" className="hover:text-primary transition-colors">স্বাস্থ্যবিধি</Link>
          <Link to="/helpline" className="hover:text-primary transition-colors">হেল্পলাইন</Link>
          <a href="mailto:contact@sheshurokkha.app" className="hover:text-primary transition-colors">যোগাযোগ</a>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}

/* ── EXPORT ALL ── */
export { FeaturesSection, HowItWorksSection, TrustSection, TestimonialsSection, CTASection, Footer };
