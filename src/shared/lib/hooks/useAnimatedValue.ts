import { useState, useEffect, useRef } from 'react';

export const useAnimatedProgress = (
  targetValue: number,
  duration: number
): number => {
  const [value, setValue] = useState(0);
  const requestRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const startValueRef = useRef(0);

  useEffect(() => {
    const clampedTarget = Math.min(100, Math.max(0, targetValue));
    
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
        startValueRef.current = value;
      }
      
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Плавная интерполяция с ease-out
      const newValue = startValueRef.current + 
                      (clampedTarget - startValueRef.current) * 
                      (1 - Math.pow(1 - progress, 3));
      
      setValue(newValue);
      
      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };
    
    requestRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [targetValue, duration]);

  return value;
};