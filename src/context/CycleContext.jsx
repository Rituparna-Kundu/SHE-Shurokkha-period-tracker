import React, { createContext, useContext, useState, useEffect } from 'react';
import { addDays, differenceInDays } from 'date-fns';

const CycleContext = createContext();

const defaultCycleData = {
  cycleStartDate: null,
  cycleLength: 28,
  periodLength: 5,
  cycleHistory: [],
};

export function CycleProvider({ children }) {
  const [cycleData, setCycleData] = useState(() => {
    const localData = localStorage.getItem('she_cycle_data');
    return localData ? JSON.parse(localData) : defaultCycleData;
  });

  useEffect(() => {
    localStorage.setItem('she_cycle_data', JSON.stringify(cycleData));
  }, [cycleData]);

  const setupCycle = (startDate, cycleLength, periodLength) => {
    setCycleData((prev) => ({
      ...prev,
      cycleStartDate: startDate,
      cycleLength: parseInt(cycleLength, 10),
      periodLength: parseInt(periodLength, 10),
    }));
  };

  const logPeriod = (startDate, endDate) => {
    setCycleData((prev) => ({
      ...prev,
      cycleStartDate: startDate,
      cycleHistory: [{ startDate, endDate }, ...prev.cycleHistory],
    }));
  };

  // Helper calculations
  const getCycleStats = () => {
    if (!cycleData.cycleStartDate) return null;

    const startDate = new Date(cycleData.cycleStartDate);
    const today = new Date();
    
    // Days since last period start
    const daysSinceStart = differenceInDays(today, startDate);
    
    // Next period prediction
    const nextPeriodDate = addDays(startDate, cycleData.cycleLength);
    const daysRemaining = differenceInDays(nextPeriodDate, today);
    
    // Ovulation prediction
    const ovulationDate = addDays(startDate, cycleData.cycleLength - 14);

    // Current phase logic
    let currentPhase = 'লুটিয়াল (Luteal)';
    let phaseKey = 'luteal';
    
    if (daysSinceStart < cycleData.periodLength) {
      currentPhase = 'মাসিক (Menstrual)';
      phaseKey = 'menstrual';
    } else if (daysSinceStart < (cycleData.cycleLength - 14) - 3) {
      currentPhase = 'ফলিকুলার (Follicular)';
      phaseKey = 'follicular';
    } else if (daysSinceStart <= (cycleData.cycleLength - 14) + 3) {
      currentPhase = 'ওভুলেশন (Ovulation)';
      phaseKey = 'ovulation';
    }

    return {
      currentDay: daysSinceStart + 1,
      nextPeriodDate,
      daysRemaining,
      ovulationDate,
      currentPhase,
      phaseKey
    };
  };

  const resetCycleData = () => {
    setCycleData(defaultCycleData);
    localStorage.removeItem('she_cycle_data');
  };

  return (
    <CycleContext.Provider value={{ cycleData, setupCycle, logPeriod, getCycleStats, resetCycleData }}>
      {children}
    </CycleContext.Provider>
  );
}

export function useCycle() {
  return useContext(CycleContext);
}
