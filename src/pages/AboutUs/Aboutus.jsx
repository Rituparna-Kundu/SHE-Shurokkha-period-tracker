import React from "react";

const Aboutus = () => {
  // Team members data
  const teamMembers = [
    {
      name: "নাজমুল হাসান",
      role: "প্রতিষ্ঠাতা ও সিইও",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "সাইবার নিরাপত্তা বিশেষজ্ঞ ও উদ্যোক্তা",
    },
    {
      name: "তাসনিয়া রহমান",
      role: "প্রযুক্তি পরিচালক",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "ফুল-স্ট্যাক ডেভেলপার ও টিম লিড",
    },
    {
      name: "আরিফুল ইসলাম",
      role: "নিরাপত্তা বিশ্লেষক",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      bio: "সাইবার সিকিউরিটি রিসার্চার",
    },
    {
      name: "শাহরিন আক্তার",
      role: "গ্রাহক সাফল্য ব্যবস্থাপক",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      bio: "গ্রাহক সম্পর্ক ও সাপোর্ট",
    },
  ];

  // Services data
  const services = [
    {
      title: "ডিজিটাল সুরক্ষা",
      desc: "অনলাইন হুমকি থেকে আপনার তথ্য সুরক্ষিত রাখুন",
      icon: "🛡️",
    },
    {
      title: "সাইবার সচেতনতা",
      desc: "নিরাপদ অনলাইন ব্যবহারের প্রশিক্ষণ",
      icon: "📚",
    },
    {
      title: "হেল্পডেস্ক সাপোর্ট",
      desc: "২৪/৭ টেকনিক্যাল সাপোর্ট ও সহায়তা",
      icon: "💬",
    },
    {
      title: "নিরাপত্তা অডিট",
      desc: "আপনার ডিভাইসের সম্পূর্ণ নিরাপত্তা যাচাই",
      icon: "🔍",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      {/* Hero Section with Lavender/Pink theme */}
      <div className="relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Image Card */}
            <div className="lg:w-1/2 w-full group">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-700"></div>
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                  <img
                    src="https://newsdeeply-app.s3.amazonaws.com/20170406074240/Bangladesh-National-Mourning-Day.jpg?w=640&fit=max&q=60"
                    alt="শে-সুরক্ষা"
                    className="rounded-xl w-full object-cover transform group-hover:scale-105 transition duration-500"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/600x500/8B5CF6/ffffff?text=শে-সুরক্ষা";
                    }}
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-purple-900/80 to-pink-800/80 backdrop-blur-md rounded-xl px-4 py-3">
                    <p className="text-white text-base font-semibold text-center">
                      শে-সুরক্ষা - নারীর নিরাপত্তায় আমাদের অঙ্গীকার
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Title & Description */}
            <div className="lg:w-1/2 w-full text-center lg:text-left space-y-6">
              <div className="inline-flex gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-5 py-2 rounded-full text-sm font-semibold mb-2">
                <span>✨</span> আমাদের সম্পর্কে জানুন <span>✨</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  শে-সুরক্ষা
                </span>
              </h1>
              <p className="text-xl text-purple-700 font-medium">
                নারী নিরাপত্তার এক বিশ্বস্ত নাম
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                শে-সুরক্ষা একটি নারী-কেন্দ্রিক ডিজিটাল নিরাপত্তা প্ল্যাটফর্ম। 
                আমরা প্রযুক্তির সহায়তায় নারীদের জন্য তৈরি করেছি একটি নিরাপদ ডিজিটাল পরিবেশ, 
                যেখানে প্রতিটি নারী নির্ভয়ে অনলাইন ব্যবহার করতে পারেন।
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <button className="btn bg-gradient-to-r from-purple-600 to-pink-500 border-none text-white px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  আরও জানুন
                </button>
                <button className="btn btn-outline border-purple-400 text-purple-600 hover:bg-purple-50 rounded-full px-8">
                  যোগাযোগ করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Cards - Lavender/Pink style */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Mission Card */}
          <div className="card bg-gradient-to-br from-white to-purple-50 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:-translate-y-2">
            <div className="card-body text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 className="card-title text-2xl font-bold justify-center text-purple-800">আমাদের লক্ষ্য</h2>
              <p className="text-gray-600">
                নারীদের ডিজিটাল নিরাপত্তা নিশ্চিত করা এবং সাইবার হুমকি থেকে সুরক্ষা প্রদান করা।
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="card bg-gradient-to-br from-white to-pink-50 shadow-xl hover:shadow-2xl transition-all duration-300 border border-pink-100 hover:-translate-y-2">
            <div className="card-body text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner">
                <svg className="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h2 className="card-title text-2xl font-bold justify-center text-pink-800">আমাদের দৃষ্টিভঙ্গি</h2>
              <p className="text-gray-600">
                একটি নিরাপদ ডিজিটাল বাংলাদেশ গড়ে তোলা যেখানে প্রতিটি নারী সুরক্ষিত থাকবে।
              </p>
            </div>
          </div>

          {/* Value Card */}
          <div className="card bg-gradient-to-br from-white to-purple-50 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:-translate-y-2">
            <div className="card-body text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h2 className="card-title text-2xl font-bold justify-center text-purple-800">আমাদের মূল্যবোধ</h2>
              <p className="text-gray-600">
                নিরাপত্তা, নির্ভরযোগ্যতা, গোপনীয়তা ও নারীর ক্ষমতায়নে বিশ্বাসী।
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section - Cards with icons */}
      <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                আমাদের সেবাসমূহ
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              নারীদের জন্য বিশেষায়িত ডিজিটাল সুরক্ষা সেবা
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <div key={idx} className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-100">
                <div className="card-body items-center text-center">
                  <div className="text-5xl mb-3 bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-2xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="card-title text-lg font-bold text-purple-800">{service.title}</h3>
                  <p className="text-gray-500 text-sm">{service.desc}</p>
                  <button className="btn btn-ghost btn-sm text-purple-500 hover:bg-purple-50 mt-2">
                    বিস্তারিত →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section - Cards with images */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent">
              আমাদের টিম
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            নারী নিরাপত্তায় নিবেদিত আমাদের অভিজ্ঞ টিম
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-purple-100">
              <figure className="px-6 pt-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-40"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-32 h-32 object-cover mx-auto border-4 border-white shadow-lg relative"
                  />
                </div>
              </figure>
              <div className="card-body text-center pt-4">
                <h3 className="card-title justify-center text-purple-800">{member.name}</h3>
                <p className="text-pink-500 font-medium text-sm">{member.role}</p>
                <p className="text-gray-500 text-xs mt-1">{member.bio}</p>
                <div className="flex justify-center gap-3 mt-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center cursor-pointer hover:bg-purple-200">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center cursor-pointer hover:bg-pink-200">
                    <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.5-11.999c0-.213-.005-.426-.014-.637.959-.688 1.794-1.55 2.456-2.53z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats & CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">শে-সুরক্ষায় যোগ দিন</h2>
            <p className="text-purple-100 max-w-2xl mx-auto">
              নারী নিরাপত্তায় আমাদের সাথে হাত মেলান। আপনার নিরাপত্তা, আপনার সুরক্ষা — আমাদের অঙ্গীকার।
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-2xl py-6 px-4">
              <div className="text-3xl font-bold">৫০০০+</div>
              <div className="text-sm text-purple-100">সক্রিয় ব্যবহারকারী</div>
            </div>
            <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-2xl py-6 px-4">
              <div className="text-3xl font-bold">৯৮%</div>
              <div className="text-sm text-purple-100">সন্তোষজনক সেবা</div>
            </div>
            <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-2xl py-6 px-4">
              <div className="text-3xl font-bold">২৪/৭</div>
              <div className="text-sm text-purple-100">সাপোর্ট</div>
            </div>
            <div className="text-center text-white bg-white/10 backdrop-blur-sm rounded-2xl py-6 px-4">
              <div className="text-3xl font-bold">১৫টি</div>
              <div className="text-sm text-purple-100">জেলায় সেবা</div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button className="btn bg-white text-purple-600 hover:bg-gray-100 border-none rounded-full px-8 shadow-lg hover:shadow-xl transition-all">
              সাইন আপ করুন
            </button>
            <button className="btn btn-outline border-white text-white hover:bg-white/10 rounded-full px-8">
              বিস্তারিত দেখুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;