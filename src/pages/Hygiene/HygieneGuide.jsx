import React from 'react';
import { Info, CheckCircle, XCircle } from 'lucide-react';
import PublicHeader from '../../components/layout/PublicHeader';

export default function HygieneGuide() {
  const sections = [
    {
      title: "স্যানিটারি প্যাড",
      icon: "🩸",
      do: [
        "প্রতি ৪-৬ ঘণ্টায় প্যাড পরিবর্তন করুন",
        "ভারী ব্লিডিংয়ে প্রতি ২-৩ ঘণ্টায় বদলান",
        "প্যাড লাগানোর আগে ও পরে হাত ধুয়ে নিন",
        "ব্যবহৃত প্যাড পেপারে মুড়িয়ে ডাস্টবিনে ফেলুন"
      ],
      dont: [
        "একই প্যাড ৮+ ঘণ্টা পরবেন না",
        "ফ্লাশ করবেন না — পাইপ বন্ধ হয়",
        "সুগন্ধযুক্ত প্যাড (অ্যালার্জির ঝুঁকি) এড়িয়ে চলুন"
      ]
    },
    {
      title: "মেনস্ট্রুয়াল কাপ",
      icon: "🍷",
      do: [
        "কাপ ভাঁজ করে ঢোকান",
        "১২ ঘণ্টা পর্যন্ত পরা যায়",
        "বের করার আগে কাপের নিচে চাপ দিয়ে সিল ভাঙুন",
        "মাসিকের পর ফুটন্ত পানিতে ৫ মিনিট জীবাণুমুক্ত করুন"
      ],
      dont: [
        "জোর করে টানবেন না",
        "জীবাণুমুক্ত না করে পুনরায় ব্যবহার করবেন না"
      ]
    },
    {
      title: "সাধারণ স্বাস্থ্যবিধি",
      icon: "🧼",
      do: [
        "বাইরে থেকে ভেতরে (front to back) পরিষ্কার করুন",
        "হালকা গরম পানি দিয়ে ধুয়ে নিন",
        "সুতির অন্তর্বাস পরুন"
      ],
      dont: [
        "যোনিপথে সুগন্ধি সাবান বা স্প্রে ব্যবহার",
        "টাইট সিন্থেটিক অন্তর্বাস পরা",
        "প্রস্রাব চেপে রাখা"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-bg-soft">
      <PublicHeader backLabel="হোম" backTo="/" />
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6 pb-16">
      <h1 className="text-2xl font-heading font-bold text-text-dark">স্বাস্থ্যবিধি গাইড</h1>
      <p className="text-text-mid font-ui text-sm mb-6">মাসিকের সময় নিজেকে পরিষ্কার ও সুস্থ রাখার সঠিক নিয়মকানুন।</p>

      {sections.map((section, idx) => (
        <div key={idx} className="glass-card overflow-hidden">
          <div className="bg-primary-light/50 p-4 border-b border-border flex items-center gap-3">
            <span className="text-2xl">{section.icon}</span>
            <h2 className="text-lg font-bold text-text-dark">{section.title}</h2>
          </div>
          
          <div className="p-5 space-y-5">
            <div>
              <h3 className="flex items-center gap-2 text-success font-bold mb-2">
                <CheckCircle size={18} /> সঠিক নিয়ম (Do's)
              </h3>
              <ul className="space-y-2">
                {section.do.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-dark">
                    <span className="text-success mt-1 text-[10px]">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-danger font-bold mb-2">
                <XCircle size={18} /> যা করবেন না (Don'ts)
              </h3>
              <ul className="space-y-2">
                {section.dont.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-dark">
                    <span className="text-danger mt-1 text-[10px]">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

      {/* Reminder Setup Card */}
      <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-6 text-white shadow-lg mt-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 transform scale-150 -translate-y-10 translate-x-10">
          <Info size={100} />
        </div>
        <h3 className="text-xl font-bold mb-2 relative z-10">Toxic Shock Syndrome (TSS)</h3>
        <p className="text-sm text-white/90 relative z-10">
          জ্বর, বমি বমি ভাব, র্যাশ হলে সাথে সাথে ট্যাম্পন/কাপ খুলে ডাক্তারের কাছে যান।
        </p>
      </div>
      </div>
    </div>
  );
}
