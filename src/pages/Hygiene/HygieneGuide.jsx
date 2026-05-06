import React from 'react';
import { CheckCircle, XCircle, Heart, Clock, Shield, Sparkles, Flower2 } from 'lucide-react';
import PublicHeader from '../../components/layout/PublicHeader';

export default function HygieneGuide() {
  const sections = [
    {
      title: "স্যানিটারি প্যাড",
      icon: "🩸",
      bgColor: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      iconColor: "text-pink-500",
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
      iconColor: "text-purple-500",
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
      iconColor: "text-blue-500",
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
    <div className="bg-gradient-to-br from-rose-50 via-white to-purple-50 min-h-screen">
      <PublicHeader backLabel="হোম" backTo="/" />
      
      {/* Centered Container */}
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        
        {/* Hero Card with DaisyUI Animation */}
        <div className="card bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 transition-all duration-300 hover:shadow-3xl">
          <div className="flex flex-col md:flex-row">
            
            {/* Left Content */}
            <div className="flex-1 p-6 md:p-8">
              <div className="badge badge-rose gap-2 mb-4 px-4 py-3 h-auto">
                <Heart size={14} className="fill-current" />
                <span className="text-sm font-semibold">মাসিক সচেতনতা</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent mb-3">
                স্বাস্থ্যবিধি গাইড
              </h1>
              <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                মাসিকের সময় নিজেকে পরিষ্কার ও সুস্থ রাখার সঠিক নিয়মকানুন। 
                সংক্রমণ থেকে নিজেকে সুরক্ষিত রাখুন এবং সুস্থ থাকুন।
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="badge badge-success gap-2 px-4 py-3 h-auto">
                  <CheckCircle size={14} /> সঠিক নিয়ম
                </div>
                <div className="badge badge-error gap-2 px-4 py-3 h-auto bg-red-50 text-red-700">
                  <XCircle size={14} /> যা করবেন না
                </div>
                <div className="badge badge-info gap-2 px-4 py-3 h-auto bg-blue-50 text-blue-700">
                  <Clock size={14} /> নিয়মিত পরিবর্তন
                </div>
              </div>
            </div>
            
            {/* Right Content - Animated DaisyUI Style */}
            <div className="flex-1 bg-gradient-to-br from-rose-100 to-purple-100 p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
              {/* Floating Background Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-rose-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-200 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full opacity-10 animate-ping"></div>
              
              {/* Main Animated Content */}
              <div className="relative text-center">
                <div className="animate-float">
                  <span className="text-8xl md:text-9xl block drop-shadow-2xl">🩸</span>
                </div>
                <div className="mt-4 flex justify-center gap-2 animate-pulse">
                  <Sparkles size={20} className="text-rose-400" />
                  <Sparkles size={16} className="text-purple-400" />
                  <Sparkles size={20} className="text-rose-400" />
                </div>
                <p className="text-sm text-gray-600 mt-4 font-medium bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
                  নিজেকে ভালোবাসুন, নিজের যত্ন নিন
                </p>
                <div className="flex justify-center gap-1 mt-3">
                  <Flower2 size={14} className="text-rose-400 animate-bounce" />
                  <Flower2 size={12} className="text-purple-400 animate-bounce animation-delay-150" />
                  <Flower2 size={14} className="text-rose-400 animate-bounce animation-delay-300" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, idx) => (
            <div 
              key={idx} 
              className={`card bg-gradient-to-r ${section.bgColor} rounded-2xl shadow-lg overflow-hidden border ${section.borderColor} hover:shadow-xl transition-all duration-300`}
            >
              <div className="card-body p-5 md:p-6">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-200/50">
                  <span className="text-3xl">{section.icon}</span>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">{section.title}</h2>
                </div>
                
                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Do's Column */}
                  <div className="bg-white/60 rounded-xl p-4 backdrop-blur-sm">
                    <h3 className="flex items-center gap-2 text-green-700 font-bold mb-3 text-base">
                      <CheckCircle size={18} /> সঠিক নিয়ম (Do's)
                    </h3>
                    <ul className="space-y-2.5">
                      {section.do.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-green-500 mt-1 text-xs">✓</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Don'ts Column */}
                  <div className="bg-white/60 rounded-xl p-4 backdrop-blur-sm">
                    <h3 className="flex items-center gap-2 text-red-700 font-bold mb-3 text-base">
                      <XCircle size={18} /> যা করবেন না (Don'ts)
                    </h3>
                    <ul className="space-y-2.5">
                      {section.dont.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-red-400 mt-1 text-xs">✗</span>
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
        <div className="card mt-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 shadow-md">
          <div className="card-body p-5">
            <div className="flex items-start gap-3">
              <div className="bg-amber-100 rounded-full p-2 shrink-0">
                <Shield size={22} className="text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-amber-800 text-base mb-1 flex items-center gap-2">
                  Toxic Shock Syndrome (TSS)
                  <span className="badge badge-warning badge-sm">জরুরি</span>
                </h3>
                <p className="text-sm text-amber-700">
                  জ্বর, বমি বমি ভাব, র্যাশ হলে সাথে সাথে ট্যাম্পন/কাপ খুলে ডাক্তারের কাছে যান।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-xs text-gray-400">
          <p>স্বাস্থ্যকর মাসিক অভ্যাস গড়ে তুলুন | নিজেকে জানুন, নিজেকে ভালোবাসুন</p>
        </div>
      </div>

      {/* Add custom animations to your global CSS or Tailwind config */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-150 {
          animation-delay: 150ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        .badge-rose {
          background-color: #ffe4e6;
          color: #e11d48;
        }
      `}</style>
    </div>
  );
}

// import React from 'react';
// import { Info, CheckCircle, XCircle } from 'lucide-react';
// import PublicHeader from '../../components/layout/PublicHeader';

// export default function HygieneGuide() {
//   const sections = [
//     {
//       title: "স্যানিটারি প্যাড",
//       icon: "🩸",
//       do: [
//         "প্রতি ৪-৬ ঘণ্টায় প্যাড পরিবর্তন করুন",
//         "ভারী ব্লিডিংয়ে প্রতি ২-৩ ঘণ্টায় বদলান",
//         "প্যাড লাগানোর আগে ও পরে হাত ধুয়ে নিন",
//         "ব্যবহৃত প্যাড পেপারে মুড়িয়ে ডাস্টবিনে ফেলুন"
//       ],
//       dont: [
//         "একই প্যাড ৮+ ঘণ্টা পরবেন না",
//         "ফ্লাশ করবেন না — পাইপ বন্ধ হয়",
//         "সুগন্ধযুক্ত প্যাড (অ্যালার্জির ঝুঁকি) এড়িয়ে চলুন"
//       ]
//     },
//     {
//       title: "মেনস্ট্রুয়াল কাপ",
//       icon: "🍷",
//       do: [
//         "কাপ ভাঁজ করে ঢোকান",
//         "১২ ঘণ্টা পর্যন্ত পরা যায়",
//         "বের করার আগে কাপের নিচে চাপ দিয়ে সিল ভাঙুন",
//         "মাসিকের পর ফুটন্ত পানিতে ৫ মিনিট জীবাণুমুক্ত করুন"
//       ],
//       dont: [
//         "জোর করে টানবেন না",
//         "জীবাণুমুক্ত না করে পুনরায় ব্যবহার করবেন না"
//       ]
//     },
//     {
//       title: "সাধারণ স্বাস্থ্যবিধি",
//       icon: "🧼",
//       do: [
//         "বাইরে থেকে ভেতরে (front to back) পরিষ্কার করুন",
//         "হালকা গরম পানি দিয়ে ধুয়ে নিন",
//         "সুতির অন্তর্বাস পরুন"
//       ],
//       dont: [
//         "যোনিপথে সুগন্ধি সাবান বা স্প্রে ব্যবহার",
//         "টাইট সিন্থেটিক অন্তর্বাস পরা",
//         "প্রস্রাব চেপে রাখা"
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-bg-soft">
//       <PublicHeader backLabel="হোম" backTo="/" />
//       <div className="max-w-2xl mx-auto px-4 py-6 space-y-6 pb-16">
//       <h1 className="text-2xl font-heading font-bold text-text-dark">স্বাস্থ্যবিধি গাইড</h1>
//       <p className="text-text-mid font-ui text-sm mb-6">মাসিকের সময় নিজেকে পরিষ্কার ও সুস্থ রাখার সঠিক নিয়মকানুন।</p>

//       {sections.map((section, idx) => (
//         <div key={idx} className="glass-card overflow-hidden">
//           <div className="bg-primary-light/50 p-4 border-b border-border flex items-center gap-3">
//             <span className="text-2xl">{section.icon}</span>
//             <h2 className="text-lg font-bold text-text-dark">{section.title}</h2>
//           </div>
          
//           <div className="p-5 space-y-5">
//             <div>
//               <h3 className="flex items-center gap-2 text-success font-bold mb-2">
//                 <CheckCircle size={18} /> সঠিক নিয়ম (Do's)
//               </h3>
//               <ul className="space-y-2">
//                 {section.do.map((item, i) => (
//                   <li key={i} className="flex items-start gap-2 text-sm text-text-dark">
//                     <span className="text-success mt-1 text-[10px]">●</span>
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h3 className="flex items-center gap-2 text-danger font-bold mb-2">
//                 <XCircle size={18} /> যা করবেন না (Don'ts)
//               </h3>
//               <ul className="space-y-2">
//                 {section.dont.map((item, i) => (
//                   <li key={i} className="flex items-start gap-2 text-sm text-text-dark">
//                     <span className="text-danger mt-1 text-[10px]">●</span>
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Reminder Setup Card */}
//       <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-6 text-white shadow-lg mt-8 relative overflow-hidden">
//         <div className="absolute right-0 top-0 opacity-10 transform scale-150 -translate-y-10 translate-x-10">
//           <Info size={100} />
//         </div>
//         <h3 className="text-xl font-bold mb-2 relative z-10">Toxic Shock Syndrome (TSS)</h3>
//         <p className="text-sm text-white/90 relative z-10">
        
//         </p>
//       </div>
//       </div>
//     </div>
//   );
// }
