import React from 'react';
import { CheckCircle, XCircle, Heart, Clock, Shield, Flower2, Sparkles } from 'lucide-react';
import PublicHeader from '../../components/layout/PublicHeader';

export default function HygieneGuide() {
  const sections = [
    {
      title: "স্যানিটারি প্যাড",
      icon: "🩸",
      bgColor: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
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
      bgColor: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200",
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
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
      <PublicHeader backLabel="হোম" backTo="/" />
      
      {/* Hero Section - DaisyUI Style */}
      <div className="hero min-h-[80vh] bg-gradient-to-r from-rose-100 to-purple-100">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12 px-4">
          
          {/* Beautiful Flower Animation Side */}
          <div className="flex-1 max-w-md">
            <div className="relative w-80 h-80 mx-auto">
              {/* Main Flower */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float">
                {/* Flower Petals */}
                <div className="relative w-40 h-40">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 opacity-80"
                      style={{
                        transform: `rotate(${i * 45}deg) translateY(-32px)`,
                        transformOrigin: '50% 100%',
                        boxShadow: '0 4px 15px rgba(236, 72, 153, 0.3)'
                      }}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-300 to-rose-400 opacity-50"></div>
                    </div>
                  ))}
                  {/* Flower Center */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-yellow-300 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Floating Small Flowers */}
              <div className="absolute top-0 left-0 animate-float-delayed">
                <div className="relative w-12 h-12">
                  <div className="absolute w-6 h-6 rounded-full bg-purple-400 opacity-80"
                       style={{ transform: 'rotate(0deg) translateY(-8px)' }}></div>
                  <div className="absolute w-6 h-6 rounded-full bg-purple-400 opacity-80"
                       style={{ transform: 'rotate(72deg) translateY(-8px)' }}></div>
                  <div className="absolute w-6 h-6 rounded-full bg-purple-400 opacity-80"
                       style={{ transform: 'rotate(144deg) translateY(-8px)' }}></div>
                  <div className="absolute w-6 h-6 rounded-full bg-purple-400 opacity-80"
                       style={{ transform: 'rotate(216deg) translateY(-8px)' }}></div>
                  <div className="absolute w-6 h-6 rounded-full bg-purple-400 opacity-80"
                       style={{ transform: 'rotate(288deg) translateY(-8px)' }}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-300 rounded-full"></div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 animate-float-slow">
                <div className="relative w-10 h-10">
                  <div className="absolute w-5 h-5 rounded-full bg-rose-400 opacity-80"
                       style={{ transform: 'rotate(0deg) translateY(-6px)' }}></div>
                  <div className="absolute w-5 h-5 rounded-full bg-rose-400 opacity-80"
                       style={{ transform: 'rotate(72deg) translateY(-6px)' }}></div>
                  <div className="absolute w-5 h-5 rounded-full bg-rose-400 opacity-80"
                       style={{ transform: 'rotate(144deg) translateY(-6px)' }}></div>
                  <div className="absolute w-5 h-5 rounded-full bg-rose-400 opacity-80"
                       style={{ transform: 'rotate(216deg) translateY(-6px)' }}></div>
                  <div className="absolute w-5 h-5 rounded-full bg-rose-400 opacity-80"
                       style={{ transform: 'rotate(288deg) translateY(-6px)' }}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-300 rounded-full"></div>
                </div>
              </div>

              <div className="absolute top-20 right-10 animate-float-fast">
                <div className="relative w-8 h-8">
                  <div className="absolute w-4 h-4 rounded-full bg-pink-400 opacity-80"
                       style={{ transform: 'rotate(0deg) translateY(-5px)' }}></div>
                  <div className="absolute w-4 h-4 rounded-full bg-pink-400 opacity-80"
                       style={{ transform: 'rotate(72deg) translateY(-5px)' }}></div>
                  <div className="absolute w-4 h-4 rounded-full bg-pink-400 opacity-80"
                       style={{ transform: 'rotate(144deg) translateY(-5px)' }}></div>
                  <div className="absolute w-4 h-4 rounded-full bg-pink-400 opacity-80"
                       style={{ transform: 'rotate(216deg) translateY(-5px)' }}></div>
                  <div className="absolute w-4 h-4 rounded-full bg-pink-400 opacity-80"
                       style={{ transform: 'rotate(288deg) translateY(-5px)' }}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-yellow-300 rounded-full"></div>
                </div>
              </div>

              {/* Floating Petals */}
              <div className="absolute top-10 left-20 animate-spin-slow">
                <div className="w-4 h-8 bg-pink-300 rounded-full opacity-70 rotate-12"></div>
              </div>
              <div className="absolute bottom-20 left-10 animate-spin-reverse">
                <div className="w-3 h-6 bg-purple-300 rounded-full opacity-70 -rotate-12"></div>
              </div>
              <div className="absolute top-30 right-5 animate-float">
                <div className="w-3 h-6 bg-rose-300 rounded-full opacity-70 rotate-45"></div>
              </div>

              {/* Sparkles */}
              <Sparkles className="absolute top-5 right-10 text-yellow-400 w-6 h-6 animate-pulse" />
              <Sparkles className="absolute bottom-10 left-5 text-pink-400 w-5 h-5 animate-pulse animation-delay-500" />
              <Sparkles className="absolute top-1/2 right-0 text-purple-400 w-4 h-4 animate-pulse animation-delay-1000" />
            </div>
          </div>
          
          {/* Text Content on Left */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 rounded-full px-4 py-2 mb-4">
              <Heart size={14} className="fill-current" />
              <span className="text-sm font-semibold">মাসিক সচেতনতা</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              স্বাস্থ্যবিধি গাইড
            </h1>
            <p className="py-6 text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0">
              মাসিকের সময় নিজেকে পরিষ্কার ও সুস্থ রাখার সঠিক নিয়মকানুন। 
              সংক্রমণ থেকে নিজেকে সুরক্ষিত রাখুন এবং সুস্থ থাকুন।
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="badge bg-green-100 text-green-700 gap-2 px-4 py-3 h-auto rounded-full">
                <CheckCircle size={14} /> সঠিক নিয়ম
              </div>
              <div className="badge bg-red-100 text-red-700 gap-2 px-4 py-3 h-auto rounded-full">
                <XCircle size={14} /> যা করবেন না
              </div>
              <div className="badge bg-blue-100 text-blue-700 gap-2 px-4 py-3 h-auto rounded-full">
                <Clock size={14} /> নিয়মিত পরিবর্তন
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div 
              key={idx} 
              className={`card bg-gradient-to-r ${section.bgColor} rounded-2xl shadow-xl border ${section.borderColor} hover:shadow-2xl transition-all duration-300`}
            >
              <div className="card-body p-6 md:p-8">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200/50">
                  <span className="text-4xl">{section.icon}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{section.title}</h2>
                </div>
                
                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Do's Column */}
                  <div className="bg-white/70 rounded-xl p-5 shadow-sm">
                    <h3 className="flex items-center gap-2 text-green-700 font-bold mb-4 text-lg">
                      <CheckCircle size={20} /> সঠিক নিয়ম (Do's)
                    </h3>
                    <ul className="space-y-3">
                      {section.do.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-green-500 mt-1 text-sm">✓</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Don'ts Column */}
                  <div className="bg-white/70 rounded-xl p-5 shadow-sm">
                    <h3 className="flex items-center gap-2 text-red-700 font-bold mb-4 text-lg">
                      <XCircle size={20} /> যা করবেন না (Don'ts)
                    </h3>
                    <ul className="space-y-3">
                      {section.dont.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-red-400 mt-1 text-sm">✗</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TSS Warning Card */}
        <div className="card mt-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 shadow-lg">
          <div className="card-body p-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 rounded-full p-3 shrink-0">
                <Shield size={24} className="text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-amber-800 text-lg mb-2 flex items-center gap-2">
                  Toxic Shock Syndrome (TSS)
                  <span className="bg-amber-200 text-amber-800 text-xs px-2 py-1 rounded-full">জরুরি সতর্কতা</span>
                </h3>
                <p className="text-amber-700">
                  জ্বর, বমি বমি ভাব, র্যাশ বা মাথা ঘোরার মতো উপসর্গ দেখা দিলে সাথে সাথে ট্যাম্পন/কাপ খুলে ফেলুন এবং দ্রুত ডাক্তারের কাছে যান।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-center gap-2 mb-3">
            <Flower2 size={16} className="text-rose-400 animate-bounce" />
            <Flower2 size={14} className="text-purple-400 animate-bounce animation-delay-150" />
            <Flower2 size={16} className="text-pink-400 animate-bounce animation-delay-300" />
          </div>
          <p className="text-sm text-gray-500">
            স্বাস্থ্যকর মাসিক অভ্যাস গড়ে তুলুন | নিজেকে জানুন, নিজেকে ভালোবাসুন
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(5px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(-5px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(8px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-25px) translateX(-8px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3.5s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 2.5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
        .animate-bounce {
          animation: bounce 1s ease-in-out infinite;
        }
        .animation-delay-150 {
          animation-delay: 150ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          border-radius: 9999px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}