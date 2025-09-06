'use client';

import { useState } from 'react';
import Loader, { DotsLoader, PulseLoader, SkeletonLoader } from '../../designs/loaders/Loader';

export default function LoadingDemo() {
  const [showFullScreen, setShowFullScreen] = useState(false);

  const triggerFullScreen = () => {
    setShowFullScreen(true);
    setTimeout(() => setShowFullScreen(false), 3000);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Loading Components Demo</h1>

        {/* Full Screen Loader Demo */}
        <div className="mb-12 p-6 bg-gray-800 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">Full Screen Loader</h2>
          <button
            onClick={triggerFullScreen}
            className="px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white rounded-lg transition-colors"
          >
            Show Full Screen Loader (3s)
          </button>
        </div>

        {/* Spinner Loaders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Small Spinner</h3>
            <Loader size="sm" text="Loading..." />
          </div>

          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Medium Spinner</h3>
            <Loader size="md" text="Processing..." />
          </div>

          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Large Spinner</h3>
            <Loader size="lg" text="Please wait..." />
          </div>
        </div>

        {/* Alternative Loaders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Dots Loader</h3>
            <DotsLoader size="md" text="Loading data..." />
          </div>

          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Pulse Loader</h3>
            <PulseLoader size="md" text="Saving..." />
          </div>

          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 text-center">
            <h3 className="text-lg font-semibold text-white mb-4">No Text</h3>
            <Loader size="md" />
          </div>
        </div>

        {/* Skeleton Loader */}
        <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Skeleton Loader</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm text-gray-400 mb-2">3 lines</h4>
              <SkeletonLoader lines={3} />
            </div>
            <div>
              <h4 className="text-sm text-gray-400 mb-2">5 lines</h4>
              <SkeletonLoader lines={5} />
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Loader */}
      {showFullScreen && (
        <Loader fullScreen text="Loading your content..." />
      )}
    </div>
  );
} 