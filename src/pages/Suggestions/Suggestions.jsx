import React, { useState } from 'react';
import { useCycle } from '../../context/CycleContext';
import { foodChartData } from '../../data/foodChartData';
import { exerciseData } from '../../data/exerciseData';
import { medicineData } from '../../data/medicineData';
import { motion, AnimatePresence } from 'framer-motion';

export default function Suggestions() {
  const { getCycleStats } = useCycle();
  const stats = getCycleStats();
  
  const [activeTab, setActiveTab] = useState('food');
  
  if (!stats) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 glass-card border-2 border-dashed border-primary/30">
        <h2 className="text-xl font-heading font-bold text-text-dark mb-2">পরামর্শ পেতে সাইকেল সেটআপ করুন</h2>
        <p className="text-sm text-text-mid mb-6 max-w-xs mx-auto">
          আপনার বর্তমান সাইকেল অনুযায়ী সঠিক পরামর্শ পেতে আগে মাসিকের তারিখ সেটআপ করুন।
        </p>
        <Link to="/tracker" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-accent transition-all active:scale-95">
          সেটআপ শুরু করুন
        </Link>
      </div>
    );
  }

  const phaseKey = stats.phaseKey;

  const tabs = [
    { id: 'food', label: 'খাবার' },
    { id: 'exercise', label: 'ব্যায়াম' },
    { id: 'medicine', label: 'ওষুধ' }
  ];

  const currentFood = foodChartData[phaseKey];
  const currentExercise = exerciseData[phaseKey];

  return (
    <div className="space-y-6 pb-10">
      <h1 className="text-2xl font-heading font-bold text-text-dark">পরামর্শ ও গাইডলাইন</h1>
      <p className="text-text-mid font-ui text-sm">আপনার বর্তমান সাইকেল পর্যায়: <span className="font-bold text-primary">{stats.currentPhase}</span></p>

      {/* Tabs */}
      <div className="flex bg-white rounded-xl p-1 shadow-sm border border-border">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === tab.id ? 'bg-primary text-white shadow-md' : 'text-text-mid hover:bg-bg-soft'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {/* FOOD TAB */}
          {activeTab === 'food' && currentFood && (
            <div className="space-y-6">
              <div className="glass-card p-5">
                <h2 className="text-lg font-bold text-success mb-4 flex items-center gap-2">✅ যা খাবেন</h2>
                <div className="grid grid-cols-2 gap-3">
                  {currentFood.recommended.map((item, idx) => (
                    <div key={idx} className="bg-success/10 border border-success/20 p-3 rounded-xl flex items-start gap-2">
                      <span className="text-2xl">{item.emoji}</span>
                      <div>
                        <p className="font-bold text-text-dark text-sm">{item.nameBn}</p>
                        <p className="text-[10px] text-text-mid">{item.benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {currentFood.avoid.length > 0 && (
                <div className="glass-card p-5 border-danger/30">
                  <h2 className="text-lg font-bold text-danger mb-4 flex items-center gap-2">❌ যা এড়িয়ে চলবেন</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {currentFood.avoid.map((item, idx) => (
                      <div key={idx} className="bg-danger/10 border border-danger/20 p-3 rounded-xl flex items-start gap-2">
                        <span className="text-2xl">{item.emoji}</span>
                        <div>
                          <p className="font-bold text-text-dark text-sm">{item.nameBn}</p>
                          <p className="text-[10px] text-danger/80">{item.reason}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* EXERCISE TAB */}
          {activeTab === 'exercise' && currentExercise && (
            <div className="space-y-6">
              <div className="glass-card p-5">
                <h2 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">✅ প্রস্তাবিত ব্যায়াম</h2>
                <div className="space-y-3">
                  {currentExercise.exercises.length > 0 ? currentExercise.exercises.map((item, idx) => (
                    <div key={idx} className="bg-primary-light/30 border border-primary-light p-4 rounded-xl flex justify-between items-center">
                      <div>
                        <p className="font-bold text-text-dark">{item.nameBn}</p>
                        <p className="text-xs text-text-mid">{item.duration}</p>
                      </div>
                      <span className="text-xs px-2 py-1 bg-white rounded text-primary font-bold shadow-sm">{item.difficulty}</span>
                    </div>
                  )) : <p className="text-sm text-text-mid">এই পর্যায়ে নির্দিষ্ট কোনো ব্যায়াম নেই, স্বাভাবিক কাজ চালিয়ে যান।</p>}
                </div>
              </div>

              {currentExercise.avoid.length > 0 && (
                <div className="glass-card p-5 border-danger/30">
                  <h2 className="text-lg font-bold text-danger mb-4 flex items-center gap-2">❌ যা এড়িয়ে চলবেন</h2>
                  <ul className="list-disc list-inside text-sm text-danger/80 space-y-1">
                    {currentExercise.avoid.map((item, idx) => (
                      <li key={idx}>{item.nameBn}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* MEDICINE TAB */}
          {activeTab === 'medicine' && (
            <div className="space-y-6">
              <div className="bg-warning/20 border border-warning text-warning-800 p-4 rounded-xl text-sm font-bold flex items-start gap-2">
                <span className="text-lg">⚠️</span>
                <p className="text-yellow-800">সতর্কতা: যেকোনো ওষুধ খাওয়ার আগে অবশ্যই চিকিৎসকের পরামর্শ নিন। এই তালিকাটি কেবল সাধারণ তথ্যের জন্য।</p>
              </div>

              <div className="glass-card p-5">
                <h2 className="text-lg font-bold text-success mb-4">✅ সাধারণ ব্যথানাশক</h2>
                <div className="space-y-3">
                  {medicineData.safe.map((item, idx) => (
                    <div key={idx} className="border-b border-border last:border-0 pb-3 last:pb-0">
                      <p className="font-bold text-text-dark">{item.name}</p>
                      <p className="text-sm text-text-mid mt-1">{item.use}</p>
                      <p className="text-xs text-danger mt-1">সতর্কতা: {item.warning}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-5">
                <h2 className="text-lg font-bold text-primary mb-4">♨️ ঘরোয়া উপায়</h2>
                <div className="space-y-3">
                  {medicineData.homeRemedies.map((item, idx) => (
                    <div key={idx} className="bg-primary-light/20 p-3 rounded-xl border border-primary-light">
                      <p className="font-bold text-text-dark">{item.name}</p>
                      <p className="text-sm text-text-mid">{item.use}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
