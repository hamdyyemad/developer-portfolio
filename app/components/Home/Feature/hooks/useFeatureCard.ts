"use client";

import { useState, useRef, useEffect } from "react";

export function useFeatureCard() {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    // Mouse enter logic can be added here if needed
  };

  const handleMouseLeave = () => {
    // Mouse leave logic can be added here if needed
  };

  return {
    isVisible,
    cardRef,
    handleMouseEnter,
    handleMouseLeave,
  };
}
