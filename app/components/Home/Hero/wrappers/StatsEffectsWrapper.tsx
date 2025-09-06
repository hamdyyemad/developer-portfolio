"use client";

import { ReactNode, forwardRef } from "react";

interface StatsEffectsWrapperProps {
  children: ReactNode;
  index: number;
  isVisible: boolean;
  className?: string;
}

const StatsEffectsWrapper = forwardRef<
  HTMLDivElement,
  StatsEffectsWrapperProps
>(({ children, index, isVisible, className = "" }, ref) => {
  return (
    <div
      ref={ref}
      className={`group stats-card relative flex flex-col items-start p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 ${className}`}
      style={{
        animationDelay: `${index * 0.2}s`,
        animation: isVisible ? "fadeInUp 0.8s ease-out forwards" : "none",
      }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Enhanced floating particles effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        <div
          className="absolute top-2 left-4 w-1 h-1 bg-orange-400 rounded-full opacity-60 floating-particle"
          style={{ animationDelay: `${index * 0.5}s` }}
        />
        <div
          className="absolute top-6 right-6 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-40 floating-particle"
          style={{ animationDelay: `${index * 0.7}s` }}
        />
        <div
          className="absolute bottom-4 left-6 w-1 h-1 bg-orange-300 rounded-full opacity-50 floating-particle"
          style={{ animationDelay: `${index * 0.3}s` }}
        />
        <div
          className="absolute top-1/2 right-2 w-0.5 h-0.5 bg-yellow-400 rounded-full opacity-70 floating-particle"
          style={{ animationDelay: `${index * 0.9}s` }}
        />
      </div>

      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Enhanced hover effect overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
});

StatsEffectsWrapper.displayName = "StatsEffectsWrapper";

export default StatsEffectsWrapper;
