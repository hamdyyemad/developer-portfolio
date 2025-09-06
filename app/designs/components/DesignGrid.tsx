"use client";

import { Design } from "../data/designData";
import { previewComponents } from "./PreviewComponents";

interface DesignGridProps {
  designs: Design[];
  onSelectDesign: (design: Design) => void;
}

// Mock data for demonstration
const mockAuthors = [
  "alexruix",
  "Novaxlo", 
  "gharsh11032000",
  "Admin12121",
  "OfficialRushO",
  "Silaskodrigues19",
  "Lucaasore",
  "zanina-yassine"
];

const getRandomAuthor = (id: string) => {
  const index = id.charCodeAt(0) % mockAuthors.length;
  return mockAuthors[index];
};

const getRandomStats = (id: string) => {
  const views = Math.floor(Math.random() * 50) + 1;
  const likes = Math.floor(Math.random() * 100) + 10;
  return { views: `${views}K`, likes };
};

export default function DesignGrid({ designs, onSelectDesign }: DesignGridProps) {
  if (designs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-bold text-white mb-2">No designs found</h3>
        <p className="text-gray-400">Try adjusting your filters or search terms</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {designs.map((design) => {
        const PreviewComponent = previewComponents[design.previewComponent];
        const author = getRandomAuthor(design.id);
        const stats = getRandomStats(design.id);
        
        return (
          <div
            key={design.id}
            className="bg-[#1e1e1e] rounded-xl border border-[#232323] overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-orange-500/50 group"
            onClick={() => onSelectDesign(design)}
          >
            {/* Preview Area */}
            <div className="bg-[#2a2a2a] p-6 flex justify-center items-center h-48 relative overflow-hidden">
              {PreviewComponent && <PreviewComponent />}
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium">
                  View Details
                </div>
              </div>
            </div>

            {/* Design Info */}
            <div className="p-4">
              {/* Title and Description */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors line-clamp-1">
                {design.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                {design.description}
              </p>

              {/* Technology Badge and Category */}
              <div className="flex items-center justify-between mb-3">
                <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                  design.technology === 'tailwind' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                  design.technology === 'react' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                  design.technology === 'css' ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30' :
                  design.technology === 'html' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                  'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                }`}>
                  {design.technology.toUpperCase()}
                </span>
                
                <span className="text-xs text-gray-500 capitalize">
                  {design.category}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {design.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-[#2a2a2a] text-gray-300 rounded border border-[#333]"
                  >
                    {tag}
                  </span>
                ))}
                {design.tags.length > 2 && (
                  <span className="px-2 py-1 text-xs bg-[#2a2a2a] text-gray-400 rounded border border-[#333]">
                    +{design.tags.length - 2}
                  </span>
                )}
              </div>

              {/* Author and Stats */}
              <div className="flex items-center justify-between pt-3 border-t border-[#333]">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">
                      {author.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm text-gray-300 font-medium">{author}</span>
                </div>
                
                <div className="flex items-center space-x-3 text-xs text-gray-400">
                  <span>{stats.views} views</span>
                  <span className="flex items-center space-x-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                    <span>{stats.likes}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
} 