"use client";

import { type Feature } from "@/app/data/features";
import { useFeatureCard } from "./hooks/useFeatureCard";
import FeatureEffectsWrapper from "./wrappers/FeatureEffectsWrapper";

export default function FeatureCard({ feature }: { feature: Feature }) {
  const { isVisible, cardRef, handleMouseEnter, handleMouseLeave } =
    useFeatureCard();

  return (
    <FeatureEffectsWrapper
      ref={cardRef}
      feature={feature}
      isVisible={isVisible}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Icon with enhanced animation */}
      <div className={`mb-6 feature-icon ${feature.textColor}`}>
        <div className="relative">
          <div className="transition-all duration-500 group-hover:drop-shadow-2xl">
            {feature.icon}
          </div>
          {/* Icon glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-sm">
            {feature.icon}
          </div>
        </div>
      </div>

      {/* Title with enhanced styling */}
      <div className="flex-1 flex items-end">
        <h3
          className={`feature-title font-bold text-2xl leading-tight ${feature.textColor}`}
          dangerouslySetInnerHTML={{ __html: feature.title }}
        />
      </div>
    </FeatureEffectsWrapper>
  );
}
