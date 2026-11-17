'use client';

import { useState, useEffect } from 'react';

export function useAnalysisSimulation(targetDuration = 4000) {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / targetDuration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setIsCompleted(true);
      }
    }, 100);

    return () => clearInterval(interval);

  }, [targetDuration]);

  return { progress, isCompleted };
}


