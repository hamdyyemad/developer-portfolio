export interface Design {
  id: string;
  title: string;
  description: string;
  category: "button" | "card" | "form" | "loader" | "navigation" | "modal";
  technology: "html" | "css" | "javascript" | "react" | "tailwind";
  previewComponent: string; // Reference to component name
  code: {
    html?: string;
    css?: string;
    javascript?: string;
    react?: string;
    tailwind?: string;
  };
  tags: string[];
}

export const designData: Design[] = [
  {
    id: "gradient-button",
    title: "Gradient Button",
    description: "A beautiful gradient button with hover effects",
    category: "button",
    technology: "tailwind",
    previewComponent: "GradientButton",
    code: {
      tailwind: `<button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
  Gradient Button
</button>`,
      css: `<button class="gradient-button">
  Gradient Button
</button>

<style>
.gradient-button {
  background: linear-gradient(to right, #f97316, #ec4899);
  color: white;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: scale(1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.gradient-button:hover {
  background: linear-gradient(to right, #ea580c, #db2777);
  transform: scale(1.05);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}
</style>`,
      react: `import React from 'react';

const GradientButton = () => {
  return (
    <button 
      className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      onClick={() => console.log('Button clicked!')}
    >
      Gradient Button
    </button>
  );
};

export default GradientButton;`,
    },
    tags: ["button", "gradient", "hover", "tailwind"],
  },
  {
    id: "glass-card",
    title: "Glass Card",
    description: "A modern glassmorphism card design",
    category: "card",
    technology: "tailwind",
    previewComponent: "GlassCard",
    code: {
      tailwind: `<div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-xl">
  <h3 className="text-xl font-bold text-white mb-2">Glass Card</h3>
  <p className="text-gray-300">This is a beautiful glassmorphism card with backdrop blur effect.</p>
</div>`,
      css: `<div class="glass-card">
  <h3>Glass Card</h3>
  <p>This is a beautiful glassmorphism card with backdrop blur effect.</p>
</div>

<style>
.glass-card {
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.glass-card h3 {
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 8px;
}

.glass-card p {
  color: #d1d5db;
}
</style>`,
      react: `import React from 'react';

const GlassCard = () => {
  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-xl">
      <h3 className="text-xl font-bold text-white mb-2">Glass Card</h3>
      <p className="text-gray-300">
        This is a beautiful glassmorphism card with backdrop blur effect.
      </p>
    </div>
  );
};

export default GlassCard;`,
    },
    tags: ["card", "glassmorphism", "backdrop-blur", "modern"],
  },
  {
    id: "loading-spinner",
    title: "Loading Spinner",
    description: "An animated loading spinner with smooth rotation",
    category: "loader",
    technology: "css",
    previewComponent: "LoadingSpinner",
    code: {
      tailwind: `<div className="flex justify-center items-center">
  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
</div>`,
      css: `<div class="spinner-container">
  <div class="spinner"></div>
</div>

<style>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 2px solid transparent;
  border-bottom: 2px solid #f97316;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>`,
      react: `import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
    </div>
  );
};

export default LoadingSpinner;`,
    },
    tags: ["loader", "spinner", "animation", "css"],
  },
  {
    id: "floating-input",
    title: "Floating Input",
    description: "A modern floating label input field",
    category: "form",
    technology: "tailwind",
    previewComponent: "FloatingInput",
    code: {
      tailwind: `<div className="relative">
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
</div>`,
      css: `<div class="input-container">
  <input type="text" id="floating-input" placeholder=" ">
  <label for="floating-input">Floating Label</label>
</div>

<style>
.input-container {
  position: relative;
}

.input-container input {
  width: 100%;
  padding: 16px 12px;
  color: white;
  background: transparent;
  border: 1px solid #4b5563;
  border-radius: 8px;
  outline: none;
}

.input-container input:focus {
  border-color: #f97316;
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.2);
}

.input-container label {
  position: absolute;
  color: #9ca3af;
  transition: all 0.3s ease;
  transform: translateY(-16px) scale(0.75);
  top: 8px;
  left: 8px;
  background: #181818;
  padding: 0 8px;
  z-index: 10;
}

.input-container input:focus + label,
.input-container input:not(:placeholder-shown) + label {
  color: #f97316;
  transform: translateY(-16px) scale(0.75);
}
</style>`,
      react: `import React, { useState } from 'react';

const FloatingInput = () => {
  const [value, setValue] = useState('');

  return (
    <div className="relative">
      <input 
        type="text" 
        id="floating-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
};

export default FloatingInput;`,
    },
    tags: ["form", "input", "floating-label", "focus"],
  },
  {
    id: "neumorphic-button",
    title: "Neumorphic Button",
    description: "A soft neumorphic button with depth effect",
    category: "button",
    technology: "css",
    previewComponent: "NeumorphicButton",
    code: {
      tailwind: `<button className="bg-gray-100 text-gray-700 font-bold py-3 px-6 rounded-2xl shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff] hover:shadow-[inset_9px_9px_16px_#a3b1c6,inset_-9px_-9px_16px_#ffffff] hover:translate-y-0.5 active:translate-y-1 transition-all duration-200">
  Neumorphic
</button>`,
      css: `<button class="neumorphic-button">
  Neumorphic
</button>

<style>
.neumorphic-button {
  background: #e0e5ec;
  border: none;
  border-radius: 15px;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  color: #4a5568;
  box-shadow: 9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
}

.neumorphic-button:hover {
  box-shadow: inset 9px 9px 16px #a3b1c6, inset -9px -9px 16px #ffffff;
  transform: translateY(2px);
}

.neumorphic-button:active {
  box-shadow: inset 9px 9px 16px #a3b1c6, inset -9px -9px 16px #ffffff;
  transform: translateY(4px);
}
</style>`,
      react: `import React from 'react';

const NeumorphicButton = () => {
  return (
    <button 
      className="neumorphic-button"
      onClick={() => console.log('Neumorphic button clicked!')}
    >
      Neumorphic
    </button>
  );
};

export default NeumorphicButton;`,
    },
    tags: ["button", "neumorphic", "soft-ui", "depth"],
  },
  {
    id: "pulse-loader",
    title: "Pulse Loader",
    description: "A pulsing dot loader with smooth animation",
    category: "loader",
    technology: "css",
    previewComponent: "PulseLoader",
    code: {
      tailwind: `<div className="flex justify-center items-center gap-2">
  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
</div>`,
      css: `<div class="pulse-loader">
  <div class="pulse-dot"></div>
  <div class="pulse-dot"></div>
  <div class="pulse-dot"></div>
</div>

<style>
.pulse-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.pulse-dot {
  width: 12px;
  height: 12px;
  background: #f97316;
  border-radius: 50%;
  animation: pulse 1.4s ease-in-out infinite both;
}

.pulse-dot:nth-child(1) { animation-delay: -0.32s; }
.pulse-dot:nth-child(2) { animation-delay: -0.16s; }

@keyframes pulse {
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>`,
      react: `import React from 'react';

const PulseLoader = () => {
  return (
    <div className="pulse-loader">
      <div className="pulse-dot"></div>
      <div className="pulse-dot"></div>
      <div className="pulse-dot"></div>
    </div>
  );
};

export default PulseLoader;`,
    },
    tags: ["loader", "pulse", "dots", "animation"],
  },
  {
    id: "toggle-switch",
    title: "Toggle Switch",
    description: "A modern toggle switch with smooth sliding animation",
    category: "form",
    technology: "tailwind",
    previewComponent: "ToggleSwitch",
    code: {
      tailwind: `<label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" className="sr-only peer" defaultChecked />
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
  <span className="ml-3 text-sm font-medium text-gray-900">Toggle me</span>
</label>`,
      css: `<label class="toggle-switch">
  <input type="checkbox" checked>
  <span class="slider"></span>
  <span class="label">Toggle me</span>
</label>

<style>
.toggle-switch {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: relative;
  width: 44px;
  height: 24px;
  background-color: #ccc;
  border-radius: 12px;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #f97316;
}

input:checked + .slider:before {
  transform: translateX(20px);
}

.label {
  margin-left: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}
</style>`,
      react: `import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input 
        type="checkbox" 
        className="sr-only peer" 
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
      <span className="ml-3 text-sm font-medium text-gray-900">Toggle me</span>
    </label>
  );
};

export default ToggleSwitch;`,
    },
    tags: ["form", "toggle", "switch", "interactive"],
  },
  {
    id: "progress-bar",
    title: "Progress Bar",
    description: "An animated progress bar with gradient fill",
    category: "loader",
    technology: "css",
    previewComponent: "ProgressBar",
    code: {
      tailwind: `<div className="w-full max-w-sm">
  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
    <div className="h-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-pulse" style="width: 70%"></div>
  </div>
</div>`,
      css: `<div class="progress-container">
  <div class="progress-bar">
    <div class="progress-fill"></div>
  </div>
</div>

<style>
.progress-container {
  width: 100%;
  max-width: 300px;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background-color: #374151;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #f97316, #ec4899);
  border-radius: 4px;
  animation: progress 2s ease-in-out infinite;
}

@keyframes progress {
  0% { width: 0%; }
  50% { width: 70%; }
  100% { width: 100%; }
}
</style>`,
      react: `import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm">
      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-full transition-all duration-300"
          style={{ width: \`\${progress}%\` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;`,
    },
    tags: ["loader", "progress", "gradient", "animation"],
  },
  {
    id: "animated-card",
    title: "Animated Card",
    description: "A card with hover animations and 3D effects",
    category: "card",
    technology: "css",
    previewComponent: "AnimatedCard",
    code: {
      tailwind: `<div className="w-48 h-36 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-5 transform-style-preserve-3d transition-transform duration-300 hover:rotate-y-10 hover:rotate-x-10">
  <h3 className="text-lg font-bold text-white mb-2">Animated Card</h3>
  <p className="text-white/80 text-sm">Hover me for 3D effects!</p>
</div>`,
      css: `<div class="animated-card">
  <div class="card-content">
    <h3>Animated Card</h3>
    <p>Hover me for 3D effects!</p>
  </div>
</div>

<style>
.animated-card {
  width: 200px;
  height: 150px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  padding: 20px;
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
}

.animated-card:hover {
  transform: rotateY(10deg) rotateX(10deg);
}

.card-content h3 {
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-content p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}
</style>`,
      react: `import React from 'react';

const AnimatedCard = () => {
  return (
    <div className="animated-card">
      <div className="card-content">
        <h3>Animated Card</h3>
        <p>Hover me for 3D effects!</p>
      </div>
    </div>
  );
};

export default AnimatedCard;`,
    },
    tags: ["card", "3d", "animation", "hover"],
  },
  {
    id: "ripple-button",
    title: "Ripple Button",
    description: "A button with ripple effect on click",
    category: "button",
    technology: "javascript",
    previewComponent: "RippleButton",
    code: {
      tailwind: `<button className="relative bg-orange-500 text-white font-bold py-3 px-6 rounded-lg overflow-hidden hover:bg-orange-600 transition-colors">
  Click me!
</button>`,
      css: `<button class="ripple-button">
  Click me!
</button>

<style>
.ripple-button {
  position: relative;
  background: #f97316;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  overflow: hidden;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: scale(0);
  animation: ripple 0.6s linear;
  pointer-events: none;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>

<script>
document.querySelector('.ripple-button').addEventListener('click', function(e) {
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');
  this.appendChild(ripple);
  
  const rect = this.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;
  
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  
  setTimeout(() => ripple.remove(), 600);
});
</script>`,
      react: `import React from 'react';

const RippleButton = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    button.appendChild(ripple);
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <button 
      className="ripple-button"
      onClick={handleClick}
    >
      Click me!
    </button>
  );
};

export default RippleButton;`,
    },
    tags: ["button", "ripple", "javascript", "interactive"],
  },
  {
    id: "skeleton-loader",
    title: "Skeleton Loader",
    description: "A skeleton loading animation for content",
    category: "loader",
    technology: "css",
    previewComponent: "SkeletonLoader",
    code: {
      tailwind: `<div className="flex gap-4 p-4 bg-gray-800 rounded-lg w-80">
  <div className="w-12 h-12 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 bg-[length:200%_100%] rounded-full animate-pulse"></div>
  <div className="flex-1 space-y-2">
    <div className="h-5 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 bg-[length:200%_100%] rounded animate-pulse w-4/5"></div>
    <div className="h-4 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 bg-[length:200%_100%] rounded animate-pulse"></div>
    <div className="h-4 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 bg-[length:200%_100%] rounded animate-pulse w-3/5"></div>
  </div>
</div>`,
      css: `<div class="skeleton-card">
  <div class="skeleton-avatar"></div>
  <div class="skeleton-content">
    <div class="skeleton-title"></div>
    <div class="skeleton-text"></div>
    <div class="skeleton-text"></div>
  </div>
</div>

<style>
.skeleton-card {
  display: flex;
  gap: 16px;
  padding: 16px;
  background: #2a2a2a;
  border-radius: 8px;
  width: 300px;
}

.skeleton-avatar {
  width: 48px;
  height: 48px;
  background: linear-gradient(90deg, #374151 25%, #4b5563 50%, #374151 75%);
  background-size: 200% 100%;
  border-radius: 50%;
  animation: shimmer 1.5s infinite;
}

.skeleton-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skeleton-title {
  height: 20px;
  background: linear-gradient(90deg, #374151 25%, #4b5563 50%, #374151 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: shimmer 1.5s infinite;
  width: 80%;
}

.skeleton-text {
  height: 16px;
  background: linear-gradient(90deg, #374151 25%, #4b5563 50%, #374151 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: shimmer 1.5s infinite;
}

.skeleton-text:last-child {
  width: 60%;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
</style>`,
      react: `import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-avatar"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;`,
    },
    tags: ["loader", "skeleton", "shimmer", "content"],
  },
  {
    id: "floating-nav",
    title: "Floating Navigation",
    description: "A floating navigation bar with smooth animations",
    category: "navigation",
    technology: "tailwind",
    previewComponent: "FloatingNav",
    code: {
      tailwind: `<nav className="flex bg-white/10 backdrop-blur-md rounded-3xl p-2 gap-1">
  <div className="flex flex-col items-center p-3 rounded-2xl text-orange-500 bg-orange-500/20 cursor-pointer transition-all duration-300">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
    </svg>
    <span className="text-xs mt-1">Home</span>
  </div>
  <div className="flex flex-col items-center p-3 rounded-2xl text-gray-400 hover:text-orange-500 hover:bg-orange-500/10 cursor-pointer transition-all duration-300">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
    <span className="text-xs mt-1">Projects</span>
  </div>
  <div className="flex flex-col items-center p-3 rounded-2xl text-gray-400 hover:text-orange-500 hover:bg-orange-500/10 cursor-pointer transition-all duration-300">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
    </svg>
    <span className="text-xs mt-1">Profile</span>
  </div>
</nav>`,
      css: `<nav class="floating-nav">
  <div class="nav-item active">
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
    </svg>
    <span>Home</span>
  </div>
  <div class="nav-item">
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
    <span>Projects</span>
  </div>
  <div class="nav-item">
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
    </svg>
    <span>Profile</span>
  </div>
</nav>

<style>
.floating-nav {
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 25px;
  padding: 8px;
  gap: 4px;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 16px;
  border-radius: 20px;
  color: #9ca3af;
  transition: all 0.3s ease;
  cursor: pointer;
}

.nav-item:hover {
  color: #f97316;
  background: rgba(249, 115, 22, 0.1);
}

.nav-item.active {
  color: #f97316;
  background: rgba(249, 115, 22, 0.2);
}

.nav-item span {
  font-size: 12px;
  margin-top: 4px;
}
</style>`,
      react: `import React, { useState } from 'react';

const FloatingNav = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: 'M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' },
    { id: 'projects', label: 'Projects', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'profile', label: 'Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' }
  ];

  return (
    <nav className="floating-nav">
      {navItems.map((item) => (
        <div
          key={item.id}
          className={\`nav-item \${activeTab === item.id ? 'active' : ''}\`}
          onClick={() => setActiveTab(item.id)}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d={item.icon} />
          </svg>
          <span>{item.label}</span>
        </div>
      ))}
    </nav>
  );
};

export default FloatingNav;`,
    },
    tags: ["navigation", "floating", "glassmorphism", "responsive"],
  },
];
