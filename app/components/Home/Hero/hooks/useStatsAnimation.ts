"use client";

import { useEffect, useState, useRef } from "react";
import { type Stats } from "@/app/data/stats";

export function useStatsAnimation(stat: Stats) {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  // Extract numeric value from stat.value (e.g., "+1" -> 1)
  const targetValue = parseInt(stat.value.replace(/[^0-9]/g, "")) || 0;
  const prefix = stat.value.replace(/[0-9]/g, ""); // Get the "+" or other prefix

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (isVisible && targetValue > 0) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = targetValue / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const newCount = Math.min(
          Math.floor(increment * currentStep),
          targetValue
        );
        setCount(newCount);

        if (currentStep >= steps) {
          clearInterval(timer);
          setCount(targetValue);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible, targetValue]);

  return {
    statRef,
    isVisible,
    count,
    prefix,
    targetValue,
  };
}
