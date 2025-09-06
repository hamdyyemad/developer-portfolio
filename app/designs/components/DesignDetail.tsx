"use client";

import { useState } from "react";
import { Design } from "../data/designData";
import { previewComponents } from "./PreviewComponents";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface DesignDetailProps {
  design: Design;
  onBack: () => void;
}

// Mock data for demonstration
const mockAuthor = "gharsh11032000";
const mockStats = { views: "11K", likes: 520, comments: 23 };

export default function DesignDetail({ design, onBack }: DesignDetailProps) {
  const [activeTab, setActiveTab] = useState<string>(() => {
    // Default to the technology used by the design, or the first available code
    if (design.code[design.technology]) return design.technology;
    return Object.keys(design.code)[0] || 'html';
  });

  const availableTabs = Object.keys(design.code).filter(key => design.code[key as keyof typeof design.code]);
  const PreviewComponent = previewComponents[design.previewComponent];

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
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Go back</span>
        </button>
        
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-400">
            {design.category} • {design.technology}
          </span>
        </div>
      </div>

      {/* Design Title and Stats */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-2">{design.title}</h1>
            <p className="text-gray-300 text-lg mb-4">{design.description}</p>
          </div>
          
          {/* Author and Stats */}
          <div className="flex items-center space-x-4 ml-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-sm text-white font-bold">
                  {mockAuthor.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="text-sm text-gray-300 font-medium">{mockAuthor}</span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>{mockStats.views} views</span>
              <span className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
                <span>{mockStats.likes}</span>
              </span>
              <span className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>{mockStats.comments}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Preview */}
        <div className="bg-[#1e1e1e] rounded-xl border border-[#232323] p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Preview</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">#212121</span>
              <div className="w-4 h-4 bg-[#212121] rounded border border-[#333]"></div>
              <button className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="bg-[#212121] rounded-lg p-8 flex justify-center items-center min-h-[400px] relative">
            {PreviewComponent && <PreviewComponent />}
            
            {/* Preview Controls */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <button className="w-8 h-8 bg-[#333] rounded flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
              <button className="w-8 h-8 bg-[#333] rounded flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Code */}
        <div className="bg-[#1e1e1e] rounded-xl border border-[#232323] p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Code</h3>
            <button
              onClick={() => copyToClipboard(design.code[activeTab as keyof typeof design.code] || '')}
              className="text-gray-400 hover:text-white transition-colors"
              title="Copy code"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-4">
            {availableTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab
                    ? 'bg-orange-500 text-white'
                    : 'bg-[#2a2a2a] text-gray-400 hover:text-white hover:bg-[#333]'
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Code Display */}
          <div className="bg-[#0d1117] rounded-lg overflow-hidden">
            <SyntaxHighlighter
              language={getLanguageFromTab(activeTab)}
              style={tomorrow}
              customStyle={{
                margin: 0,
                padding: '1rem',
                fontSize: '14px',
                lineHeight: '1.5',
                backgroundColor: '#0d1117',
              }}
              showLineNumbers={true}
            >
              {design.code[activeTab as keyof typeof design.code] || 'No code available'}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-6">
        <h3 className="text-lg font-bold text-white mb-3">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {design.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-[#2a2a2a] text-gray-300 rounded-full border border-[#333] text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">
        <button className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors">
          <svg width="20" height="20" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span>Save to favorites</span>
        </button>
        
        <button className="flex items-center space-x-2 bg-[#2a2a2a] hover:bg-[#333] text-white px-6 py-3 rounded-lg transition-colors border border-[#333]">
          <svg width="20" height="20" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span>Copy to Figma</span>
        </button>
        
        <button className="flex items-center space-x-2 bg-[#2a2a2a] hover:bg-[#333] text-white px-6 py-3 rounded-lg transition-colors border border-[#333]">
          <svg width="20" height="20" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span>Export React</span>
        </button>

        <button className="flex items-center space-x-2 bg-[#2a2a2a] hover:bg-[#333] text-white px-6 py-3 rounded-lg transition-colors border border-[#333]">
          <svg width="20" height="20" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
          <span>Share</span>
        </button>
      </div>
    </div>
  );
} 