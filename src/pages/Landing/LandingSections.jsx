import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Droplet, MessageCircle, Sparkles, Heart, Phone,
  ShieldCheck, Lock, CheckCircle, ArrowRight
} from 'lucide-react';
import Animation1 from './Animation1';



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
    <section className="py-20 px-5 bg-gradient-to-b from-white via-purple-50/50 to-pink-50/30 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-screen-lg mx-auto relative z-10">
        <motion.div {...fadeUp()} className="text-center mb-12">
          <p className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-2">সব সুবিধা</p>
          <h2 className="font-bold text-3xl md:text-4xl text-gray-800">তোমার জন্য যা আছে</h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">একটি অ্যাপে নারী স্বাস্থ্যের সব প্রয়োজনীয় সুবিধা।</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div key={i} {...fadeUp(i * 0.07)}
              className="bg-white/80 backdrop-blur-sm rounded-3xl border border-purple-100 p-6 shadow-sm hover:shadow-xl hover:shadow-purple-200/40 hover:border-purple-200 hover:-translate-y-1 transition-all duration-300 group">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${f.color} group-hover:scale-110 transition-transform`}>
                {f.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-base mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
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
    <section className="py-20 px-5 bg-gradient-to-b from-pink-50/30 via-purple-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-screen-lg mx-auto relative z-10">
        <motion.div {...fadeUp()} className="text-center mb-12">
          <p className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-2">কীভাবে কাজ করে</p>
          <h2 className="font-bold text-3xl md:text-4xl text-gray-800">মাত্র ৩টি ধাপ</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-purple-200 via-pink-300 to-purple-200 opacity-50 z-0" />

          {steps.map((s, i) => (
            <motion.div key={i} {...fadeUp(i * 0.1)} className="relative z-10 text-center">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white mx-auto mb-5 shadow-xl shadow-purple-300/40">
                {s.icon}
              </div>
              <span className="text-xs font-black text-purple-400/50 tracking-widest">{s.num}</span>
              <h3 className="font-bold text-gray-800 text-lg mt-1 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[220px] mx-auto">{s.desc}</p>
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
    <section className="py-20 px-5 bg-gradient-to-b from-white to-purple-50/30 relative overflow-hidden">
      <div className="absolute top-0 right-10 w-48 h-48 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 pointer-events-none" />

      <div className="max-w-screen-lg mx-auto relative z-10">
        <motion.div {...fadeUp()}
          className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 border border-green-200/60 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8 shadow-lg shadow-green-100/40">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shrink-0 shadow-xl shadow-green-300/40">
            <ShieldCheck size={38} className="text-white" />
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-2xl text-gray-800 mb-2">তোমার তথ্য ১০০% নিরাপদ</h2>
            <p className="text-gray-500 text-sm mb-5">She-সুরক্ষা Privacy-first নীতিতে তৈরি।</p>
            <ul className="space-y-3">
              {trustPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
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
    <section className="py-20 px-5 bg-gradient-to-b from-purple-50/30 via-pink-50/20 to-white relative overflow-hidden">
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 pointer-events-none" />

      <div className="max-w-screen-lg mx-auto relative z-10">
        <motion.div {...fadeUp()} className="text-center mb-12">
          <p className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-2">ব্যবহারকারীদের কথা</p>
          <h2 className="font-bold text-3xl md:text-4xl text-gray-800">তারা কী বলছেন</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} {...fadeUp(i * 0.08)}
              className="bg-white/80 backdrop-blur-sm rounded-3xl border border-purple-100 p-6 shadow-sm hover:shadow-xl hover:shadow-purple-200/30 transition-all duration-300">
              <p className="text-4xl text-purple-300 font-serif leading-none mb-3">"</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-5 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3 border-t border-purple-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-md shadow-purple-300/30">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.age} · {t.city}</p>
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
    <section className="py-20 px-5 bg-gradient-to-b from-white to-purple-50/30 relative overflow-hidden">
      <div className="max-w-screen-lg mx-auto relative z-10">
        <motion.div {...fadeUp()}
          className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-purple-400/30">
          {/* Background decorations */}
          <div className="absolute inset-0 opacity-10 text-[200px] leading-none select-none flex items-center justify-center pointer-events-none">🌸</div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl opacity-10 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-bold text-3xl md:text-4xl mb-4">আজই তোমার স্বাস্থ্য যাত্রা শুরু করো</h2>
            <p className="text-white/75 text-base mb-8 max-w-lg mx-auto leading-relaxed">
              বিনামূল্যে, বিজ্ঞাপনমুক্ত ও সম্পূর্ণ গোপনীয় — শুধু তোমার জন্য।
            </p>
            <Link to={isAuthenticated ? '/dashboard' : '/register'}
              className="inline-flex items-center gap-2 bg-white text-purple-600 font-bold px-10 py-4 rounded-full shadow-xl shadow-purple-900/20 hover:scale-105 active:scale-95 transition-all text-base">
              {isAuthenticated ? 'ড্যাশবোর্ড দেখুন' : 'এখনই শুরু করুন'} <ArrowRight size={18} />
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
    <footer className="border-t border-purple-100 bg-gradient-to-b from-purple-50/30 to-white py-10 px-5">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🌸</span>
          <span className="font-bold text-purple-600">She-সুরক্ষা</span>
          <span className="text-gray-400 text-xs">— তোমার সুরক্ষা, তোমার হাতে</span>
        </div>
        <div className="flex items-center gap-5 text-xs text-gray-400">
          <Link to="/hygiene" className="hover:text-purple-600 transition-colors">স্বাস্থ্যবিধি</Link>
          <Link to="/helpline" className="hover:text-purple-600 transition-colors">হেল্পলাইন</Link>
          <a href="mailto:contact@sheshurokkha.app" className="hover:text-purple-600 transition-colors">যোগাযোগ</a>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}

/* ── EXPORT ALL ── */
export { FeaturesSection, HowItWorksSection, TrustSection, TestimonialsSection, CTASection, Footer, Animation1 };
