"use client";

import { ReactNode } from "react";

interface EffectWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function EffectWrapper({
  children,
  className = "",
}: EffectWrapperProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-pink-500/5 to-orange-500/5 rounded-3xl blur-xl opacity-50" />

      {/* Content */}
      <div className="relative">{children}</div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full opacity-20 animate-pulse" />
      <div
        className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-30 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 -left-2 w-4 h-4 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full opacity-25 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
}
