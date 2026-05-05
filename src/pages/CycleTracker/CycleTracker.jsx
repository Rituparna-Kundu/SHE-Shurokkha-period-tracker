import React, { useState } from 'react';
import { useCycle } from '../../context/CycleContext';
import { addDays, format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, subMonths, addMonths, isSameMonth } from 'date-fns';
import { ChevronLeft, ChevronRight, Droplet } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CycleTracker() {
  const { cycleData, setupCycle, logPeriod, getCycleStats } = useCycle();
  const [currentMonthDate, setCurrentMonthDate] = useState(new Date());
  
  // Setup form states
  const [setupStartDate, setSetupStartDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [setupCycleLength, setSetupCycleLength] = useState(28);
  const [setupPeriodLength, setSetupPeriodLength] = useState(5);

  const stats = getCycleStats();

  if (!cycleData.cycleStartDate) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-md mx-auto mt-10 p-6 glass-card">
        <h2 className="text-2xl font-heading font-bold text-primary mb-6 text-center">সাইকেল সেটআপ</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          setupCycle(setupStartDate, setupCycleLength, setupPeriodLength);
        }} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-text-dark mb-2">আপনার শেষ মাসিকের তারিখ কবে ছিল?</label>
            <input type="date" value={setupStartDate} onChange={(e) => setSetupStartDate(e.target.value)} className="w-full p-3 border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none" required />
          </div>
          <div>
            <label className="block text-sm font-bold text-text-dark mb-2">আপনার মাসিক চক্র সাধারণত কত দিনের? ({setupCycleLength} দিন)</label>
            <input type="range" min="21" max="35" value={setupCycleLength} onChange={(e) => setSetupCycleLength(e.target.value)} className="w-full accent-primary" />
            <div className="flex justify-between text-xs text-text-mid mt-1"><span>২১</span><span>৩৫</span></div>
          </div>
          <div>
            <label className="block text-sm font-bold text-text-dark mb-2">মাসিক সাধারণত কত দিন স্থায়ী হয়? ({setupPeriodLength} দিন)</label>
            <input type="range" min="3" max="7" value={setupPeriodLength} onChange={(e) => setSetupPeriodLength(e.target.value)} className="w-full accent-primary" />
            <div className="flex justify-between text-xs text-text-mid mt-1"><span>৩</span><span>৭</span></div>
          </div>
          <button type="submit" className="w-full py-3 bg-primary text-white rounded-xl font-bold shadow-md hover:bg-accent transition-colors">সেভ করুন</button>
        </form>
      </motion.div>
    );
  }

  // Calendar Logic
  const monthStart = startOfMonth(currentMonthDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = monthStart;
  const endDate = monthEnd;
  const dateFormat = "d";
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  // Calculate predicted days
  const lastPeriodStart = new Date(cycleData.cycleStartDate);
  const nextPeriodDate = addDays(lastPeriodStart, cycleData.cycleLength);
  const ovulationDate = addDays(lastPeriodStart, cycleData.cycleLength - 14);

  const prevMonth = () => setCurrentMonthDate(subMonths(currentMonthDate, 1));
  const nextMonth = () => setCurrentMonthDate(addMonths(currentMonthDate, 1));

  const markPeriodToday = () => {
    logPeriod(format(new Date(), 'yyyy-MM-dd'), null);
  };

  return (
    <div className="space-y-6 pb-10">
      <h1 className="text-2xl font-heading font-bold text-text-dark">সাইকেল ক্যালেন্ডার</h1>

      {/* Mini Stats Card */}
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-border shadow-sm">
        <div>
          <p className="text-xs text-text-mid">বর্তমান পর্যায়</p>
          <p className="font-bold text-primary">{stats?.currentPhase}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-text-mid">পরবর্তী মাসিক</p>
          <p className="font-bold text-danger">{stats?.nextPeriodDate ? format(stats?.nextPeriodDate, 'dd MMM') : '-'}</p>
        </div>
      </div>

      {/* Calendar UI */}
      <div className="glass-card p-4">
        {/* Calendar Header */}
        <div className="flex justify-between items-center mb-6">
          <button onClick={prevMonth} className="p-2 hover:bg-bg-soft rounded-full text-text-mid"><ChevronLeft /></button>
          <h2 className="text-lg font-bold text-text-dark">{format(currentMonthDate, 'MMMM yyyy')}</h2>
          <button onClick={nextMonth} className="p-2 hover:bg-bg-soft rounded-full text-text-mid"><ChevronRight /></button>
        </div>

        {/* Days Header */}
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-[10px] font-bold text-text-mid uppercase">{day}</div>
          ))}
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-1 md:gap-2">
          {Array.from({ length: startDate.getDay() }).map((_, i) => (
            <div key={`empty-${i}`} className="p-2"></div>
          ))}
          {days.map((day, idx) => {
            const isToday = isSameDay(day, new Date());
            
            // Highly simplified check for demonstration
            // In a real app, we'd iterate through cycleHistory and predictions
            const isPeriodDay = isSameMonth(day, lastPeriodStart) && 
              day >= lastPeriodStart && day < addDays(lastPeriodStart, cycleData.periodLength);
            
            const isPredictedPeriod = isSameMonth(day, nextPeriodDate) && 
              day >= nextPeriodDate && day < addDays(nextPeriodDate, cycleData.periodLength);
              
            const isOvulationDay = isSameDay(day, ovulationDate);

            let bgClass = "bg-transparent text-text-dark hover:bg-bg-soft";
            if (isPeriodDay) bgClass = "bg-danger text-white shadow-sm font-bold";
            else if (isPredictedPeriod) bgClass = "border-2 border-dashed border-danger/40 text-text-dark";
            else if (isOvulationDay) bgClass = "bg-accent/20 text-accent font-bold border border-accent/30";
            
            if (isToday && !isPeriodDay) bgClass += " ring-2 ring-primary ring-offset-1";

            return (
              <div 
                key={day.toString()} 
                className={`aspect-square flex items-center justify-center rounded-xl text-sm cursor-pointer transition-all ${bgClass}`}
              >
                {format(day, dateFormat)}
                {isOvulationDay && <span className="absolute mt-5 text-[8px]">★</span>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 p-4 text-xs font-ui text-text-mid">
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-danger"></div> মাসিক</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full border-2 border-dashed border-danger/40"></div> সম্ভাব্য মাসিক</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-[8px]">★</div> ওভুলেশন</div>
      </div>

      {/* Action Button */}
      <button 
        onClick={markPeriodToday}
        className="w-full mt-4 py-4 rounded-xl bg-danger text-white font-bold text-lg shadow-md hover:shadow-lg transition-all flex justify-center items-center gap-2 active:scale-95"
      >
        <Droplet fill="currentColor" /> আজ মাসিক শুরু হয়েছে
      </button>
    </div>
  );
}
