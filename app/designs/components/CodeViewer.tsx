"use client";

import { useState } from "react";
import { Design } from "../data/designData";

interface CodeViewerProps {
  design: Design;
}

export default function CodeViewer({ design }: CodeViewerProps) {
  const [activeTab, setActiveTab] = useState<string>(() => {
    // Default to the technology used by the design, or the first available code
    if (design.code[design.technology]) return design.technology;
    return Object.keys(design.code)[0] || 'html';
  });

  const availableTabs = Object.keys(design.code).filter(key => design.code[key as keyof typeof design.code]);

  const getLanguageFromTab = (tab: string) => {
    switch (tab) {
      case 'html': return 'html';
      case 'css': return 'css';
      case 'javascript': return 'javascript';
      case 'react': return 'jsx';
      case 'tailwind': return 'jsx';
      default: return 'text';
    }
  };

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-4">
        {availableTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeTab === tab
                ? 'bg-orange-500 text-white'
                : 'bg-[#232323] text-gray-400 hover:text-white hover:bg-[#2a2a2a]'
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Code Display */}
      <div className="flex-1 bg-[#1e1e1e] rounded-lg border border-[#333] overflow-hidden">
        {/* Code Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-[#333]">
          <span className="text-sm text-gray-400">
            {design.title} - {activeTab.toUpperCase()}
          </span>
          <button
            onClick={() => copyToClipboard(design.code[activeTab as keyof typeof design.code] || '')}
            className="text-gray-400 hover:text-white transition-colors"
            title="Copy code"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor">
              <path d="M8 4v8M4 8h8" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 h-full overflow-auto">
          <pre className="text-sm text-gray-300 font-mono leading-relaxed">
            <code className={`language-${getLanguageFromTab(activeTab)}`}>
              {design.code[activeTab as keyof typeof design.code] || 'No code available'}
            </code>
          </pre>
        </div>
      </div>

      {/* Design Info */}
      <div className="mt-4 p-4 bg-[#232323] rounded-lg">
        <h4 className="text-lg font-bold text-white mb-2">{design.title}</h4>
        <p className="text-gray-300 text-sm mb-3">{design.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {design.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-[#181818] text-gray-300 rounded border border-[#333]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 