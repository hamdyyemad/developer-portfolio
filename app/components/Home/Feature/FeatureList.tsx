"use client";

import FeatureCard from "./FeatureCard";
import { features } from "@/app/data/features";
import { useFeatureList } from "./hooks/useFeatureList";

export default function FeaturesList() {
  const { isVisible, containerRef } = useFeatureList();

  return (
    <div ref={containerRef} className="relative">
      {/* Features grid with enhanced animations */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="transform transition-all duration-700 ease-out"
            style={{
              animationName: isVisible ? "featureSlideIn" : "none",
              animationDuration: isVisible ? "0.8s" : "0s",
              animationTimingFunction: isVisible ? "ease-out" : "ease",
              animationFillMode: isVisible ? "forwards" : "none",
              animationDelay: `${index * 0.3}s`,
            }}
          >
            <FeatureCard feature={feature} />
          </div>
        ))}
      </div>
    </div>
  );
}
