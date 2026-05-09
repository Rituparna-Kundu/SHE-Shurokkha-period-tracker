import React from 'react';
import { motion } from 'framer-motion';

const Animation1 = () => {
  // Floating animation variants
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    initial: { scale: 1, opacity: 0.6 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.6, 0.3, 0.6],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textReveal = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const buttonHover = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(139, 92, 246, 0.4)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const rotateIcon = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden relative">
      {/* Animated Background Circles */}
      <motion.div
        variants={pulseAnimation}
        initial="initial"
        animate="animate"
        className="absolute top-20 left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />
      <motion.div
        variants={pulseAnimation}
        initial="initial"
        animate="animate"
        transition={{ delay: 1.5 }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />
      <motion.div
        variants={pulseAnimation}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.8 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />

      {/* Rotating Ring Decoration */}
      <motion.div
        variants={rotateIcon}
        initial="initial"
        animate="animate"
        className="absolute top-32 right-20 w-32 h-32 border-4 border-purple-200 rounded-full opacity-30 hidden lg:block"
      />
      <motion.div
        variants={rotateIcon}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5, duration: 25 }}
        className="absolute bottom-32 left-20 w-24 h-24 border-4 border-pink-200 rounded-full opacity-30 hidden lg:block"
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-20">
          
          {/* Left Side - Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:w-1/2 w-full text-center lg:text-left space-y-6"
          >
            <motion.div
              custom={0}
              variants={textReveal}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-5 py-2 rounded-full text-sm font-semibold"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ✨
              </motion.span>
              She-সুরক্ষা
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
              >
                ✨
              </motion.span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={textReveal}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                নারীর নিরাপত্তা
              </span>
              <br />
              <span className="text-gray-800">আমাদের অঙ্গীকার</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={textReveal}
              className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              She-সুরক্ষা একটি নারী-কেন্দ্রিক ডিজিটাল প্ল্যাটফর্ম। 
              প্রযুক্তির সহায়তায় আমরা নারীদের জন্য তৈরি করছি একটি নিরাপদ ডিজিটাল পরিবেশ।
            </motion.p>

            <motion.div
              custom={3}
              variants={textReveal}
              className="flex gap-4 justify-center lg:justify-start pt-4"
            >
              <motion.button
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold shadow-lg"
              >
                শুরু করুন
              </motion.button>
              <motion.button
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-3 border-2 border-purple-400 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all"
              >
                আরও জানুন
              </motion.button>
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              custom={4}
              variants={textReveal}
              className="flex gap-8 justify-center lg:justify-start pt-8"
            >
              {[
                { value: "5000+", label: "ব্যবহারকারী" },
                { value: "98%", label: "সন্তুষ্টি" },
                { value: "24/7", label: "সাপোর্ট" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + idx * 0.1, type: "spring" }}
                    className="text-2xl font-bold text-purple-700"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Image with Floating Effect */}
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="lg:w-1/2 w-full relative flex justify-center"
          >
            {/* Glow Effect Behind Image */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-40"
              style={{
                width: "90%",
                height: "90%",
                left: "5%",
                top: "5%"
              }}
            />

            {/* Main Image Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-white rounded-3xl shadow-2xl p-3 overflow-hidden"
            >
              {/* Shine Effect */}
              <motion.div
                animate={{
                  x: ["-100%", "200%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                style={{ width: "50%", height: "100%" }}
              />

              <img
                src="https://static.vecteezy.com/system/resources/previews/008/084/142/non_2x/multiracial-women-background-free-vector.jpg"
                alt="She-সুরক্ষা"
                className="rounded-2xl w-full max-w-md object-cover"
                onError={(e) => {
                  e.target.src = "https://placehold.co/500x500/8B5CF6/ffffff?text=She-সুরক্ষা";
                }}
              />

              {/* Floating Badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg"
              >
                <span className="text-sm font-semibold">নিরাপদ ✨</span>
              </motion.div>

              {/* Bottom Badge */}
              <motion.div
                animate={{
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-purple-900/80 to-pink-800/80 backdrop-blur-md rounded-xl px-4 py-3 text-center"
              >
                <p className="text-white text-sm font-medium">
                  She-সুরক্ষা - আপনার নিরাপত্তার সাথী
                </p>
              </motion.div>
            </motion.div>

            {/* Small Floating Decor Elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-10 -left-10 w-16 h-16 bg-purple-200 rounded-full opacity-60"
            />
            <motion.div
              animate={{
                y: [0, 15, 0],
                x: [0, -10, 0]
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-8 -right-8 w-12 h-12 bg-pink-200 rounded-full opacity-60"
            />
          </motion.div>
        </div>
      </div>

      {/* Animated Bottom Wave */}
      <motion.div
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 left-0 right-0"
      >
        <svg
          className="w-full h-20 text-purple-100"
          viewBox="0 0 1440 320"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,176C672,171,768,181,864,197.3C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Animation1;
