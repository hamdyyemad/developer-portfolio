"use client";

import { type Stats } from "@/app/data/stats";
import { useStatsAnimation } from "./hooks/useStatsAnimation";
import StatsEffectsWrapper from "./wrappers/StatsEffectsWrapper";

interface AnimatedStatsProps {
  index: number;
  stat: Stats;
}

export default function Stats({ index, stat }: AnimatedStatsProps) {
  const { statRef, isVisible, count, prefix } = useStatsAnimation(stat);

  return (
    <StatsEffectsWrapper index={index} isVisible={isVisible} ref={statRef}>
      {/* Enhanced animated counter */}
      <div className="relative">
        <span className="stats-number text-4xl lg:text-5xl font-extrabold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 transition-all duration-500">
          {prefix}
          {count}
        </span>

        {/* Enhanced counter glow effect */}
        <div className="absolute inset-0 text-4xl lg:text-5xl font-extrabold text-orange-400/30 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {prefix}
          {count}
        </div>
      </div>

      {/* Enhanced label with better styling */}
      <span className="text-gray-400 text-base uppercase font-semibold tracking-wider group-hover:text-orange-300 transition-colors duration-500 mt-2 relative">
        {stat.label}
        {/* Underline effect on hover */}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-full transition-all duration-500" />
      </span>

      {/* Enhanced progress bar animation */}
      <div className="w-full h-1.5 bg-gray-700/50 rounded-full mt-4 overflow-hidden">
        <div
          className="progress-bar-animated h-full rounded-full"
          style={{
            width: isVisible ? "100%" : "0%",
            transitionDelay: `${index * 0.3}s`,
          }}
        />
      </div>
    </StatsEffectsWrapper>
  );
}
