import React from 'react';

export const GradientButton = () => (
  <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
    Gradient Button
  </button>
);

export const GlassCard = () => (
  <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-xl">
    <h3 className="text-xl font-bold text-white mb-2">Glass Card</h3>
    <p className="text-gray-300">This is a beautiful glassmorphism card with backdrop blur effect.</p>
  </div>
);

export const LoadingSpinner = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
  </div>
);

export const FloatingInput = () => (
  <div className="relative">
    <input 
      type="text" 
      id="floating-input"
      className="block w-full px-3 py-4 text-white bg-transparent border border-gray-600 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent peer"
      placeholder=" "
    />
    <label 
      htmlFor="floating-input"
      className="absolute text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#181818] px-2 peer-focus:px-2 peer-focus:text-orange-500 peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 left-1"
    >
      Floating Label
    </label>
  </div>
);

export const NeumorphicButton = () => (
  <button className="neumorphic-button">
    Neumorphic
  </button>
);

export const PulseLoader = () => (
  <div className="pulse-loader">
    <div className="pulse-dot"></div>
    <div className="pulse-dot"></div>
    <div className="pulse-dot"></div>
  </div>
);

export const ToggleSwitch = () => (
  <label className="toggle-switch">
    <input type="checkbox" defaultChecked />
    <span className="slider"></span>
    <span className="label">Toggle me</span>
  </label>
);

export const ProgressBar = () => (
  <div className="progress-container">
    <div className="progress-bar">
      <div className="progress-fill"></div>
    </div>
  </div>
);

export const AnimatedCard = () => (
  <div className="animated-card">
    <div className="card-content">
      <h3>Animated Card</h3>
      <p>Hover me for 3D effects!</p>
    </div>
  </div>
);

export const RippleButton = () => (
  <button className="ripple-button">
    Click me!
  </button>
);

export const SkeletonLoader = () => (
  <div className="skeleton-card">
    <div className="skeleton-avatar"></div>
    <div className="skeleton-content">
      <div className="skeleton-title"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text"></div>
    </div>
  </div>
);

export const FloatingNav = () => (
  <nav className="floating-nav">
    <div className="nav-item active">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
      </svg>
      <span>Home</span>
    </div>
    <div className="nav-item">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <span>Projects</span>
    </div>
    <div className="nav-item">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      </svg>
      <span>Profile</span>
    </div>
  </nav>
);

// Component mapping
export const previewComponents: Record<string, React.ComponentType> = {
  GradientButton,
  GlassCard,
  LoadingSpinner,
  FloatingInput,
  NeumorphicButton,
  PulseLoader,
  ToggleSwitch,
  ProgressBar,
  AnimatedCard,
  RippleButton,
  SkeletonLoader,
  FloatingNav,
}; 