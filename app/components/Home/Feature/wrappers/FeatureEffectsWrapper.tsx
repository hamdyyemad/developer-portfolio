"use client";

import { ReactNode, forwardRef } from "react";
import { type Feature } from "@/app/data/features";

interface FeatureEffectsWrapperProps {
  children: ReactNode;
  feature: Feature;
  isVisible: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  className?: string;
}

const FeatureEffectsWrapper = forwardRef<
  HTMLDivElement,
  FeatureEffectsWrapperProps
>(
  (
    {
      children,
      feature,
      isVisible,
      onMouseEnter,
      onMouseLeave,
      className = "",
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        key={feature.id}
        className={`group feature-card relative rounded-2xl p-8 shadow-lg flex flex-col justify-between min-h-[250px] overflow-hidden cursor-pointer hover:z-10 ${feature.bgClass} ${className}`}
        style={{
          animationName: isVisible ? "featureSlideIn" : "none",
          animationDuration: isVisible ? "0.8s" : "0s",
          animationTimingFunction: isVisible ? "ease-out" : "ease",
          animationFillMode: isVisible ? "forwards" : "none",
          animationDelay: `${feature.id * 0.2}s`,
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute top-4 left-6 w-2 h-2 rounded-full ${
              feature.id === 1 ? "bg-white/60" : "bg-black/40"
            } animate-float`}
            style={{ animationDelay: "0s" }}
          />
          <div
            className={`absolute top-12 right-8 w-1.5 h-1.5 rounded-full ${
              feature.id === 1 ? "bg-white/40" : "bg-black/30"
            } animate-float`}
            style={{ animationDelay: "1s" }}
          />
          <div
            className={`absolute bottom-16 left-8 w-1 h-1 rounded-full ${
              feature.id === 1 ? "bg-white/50" : "bg-black/35"
            } animate-float`}
            style={{ animationDelay: "2s" }}
          />
          <div
            className={`absolute bottom-8 right-12 w-2.5 h-2.5 rounded-full ${
              feature.id === 1 ? "bg-white/30" : "bg-black/25"
            } animate-float`}
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        {/* Enhanced pattern with animation */}
        <div className="absolute inset-0 feature-pattern">
          <div className="transition-all duration-500 group-hover:opacity-80">
            {feature.pattern}
          </div>
        </div>

        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content container */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          {children}
        </div>

        {/* Enhanced Arrow Button */}
        <button
          className={`feature-button absolute bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-xl border-2 ${feature.buttonClass}`}
        >
          <div className="relative">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke={feature.arrowColor}
              strokeWidth="2.5"
              className="transition-all duration-500 group-hover:translate-x-1"
            >
              <path d="M8 12h8M12 8l4 4-4 4" />
            </svg>
            {/* Button glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke={feature.arrowColor}
                strokeWidth="2.5"
              >
                <path d="M8 12h8M12 8l4 4-4 4" />
              </svg>
            </div>
          </div>
        </button>

        {/* Corner accent */}
        <div
          className={`absolute top-0 right-0 w-16 h-16 ${
            feature.id === 1 ? "bg-white/20" : "bg-black/20"
          } rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Progress bar animation */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 overflow-hidden">
          <div
            className={`h-full ${
              feature.id === 1 ? "bg-white/60" : "bg-black/60"
            } transition-all duration-1000 ease-out`}
            style={{
              width: isVisible ? "100%" : "0%",
              transitionDelay: `${feature.id * 0.3}s`,
            }}
          />
        </div>
      </div>
    );
  }
);

FeatureEffectsWrapper.displayName = "FeatureEffectsWrapper";

export default FeatureEffectsWrapper;
