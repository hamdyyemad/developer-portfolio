"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    // Define your domain(s)
    const allowedDomains = ['hamdyyemad.com', 'www.hamdyyemad.com', 'localhost'];

    if (document.referrer) {
      try {
        const referrerUrl = new URL(document.referrer);

        // Check if the referrer is from one of your allowed domains
        if (allowedDomains.includes(referrerUrl.hostname)) {
          // Same domain - go back to previous page
          window.history.back();
        } else {
          // External domain - navigate to homepage
          router.push('/');
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        // If there's any error parsing URLs, navigate to homepage
        router.push('/');
      }
    } else {
      // No referrer (direct access, bookmark, etc.) - navigate to homepage
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-orange-400 opacity-20 select-none">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            {"The page you're looking for doesn't exist or has been moved to another dimension."}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go Home
          </Link>

          <button
            onClick={handleGoBack}
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 border border-gray-700 hover:border-gray-600"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 opacity-30">
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
} 