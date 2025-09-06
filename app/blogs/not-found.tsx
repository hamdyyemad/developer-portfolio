import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-[#181818] pt-24">
      <div className="flex flex-col lg:flex-row justify-center items-start w-full">
        <main className="flex-1 flex flex-col gap-12 w-full max-w-4xl mx-auto px-6 lg:px-8">
          <section className="pt-8 text-center">

            <h1 className="text-7xl lg:text-8xl font-extrabold text-white uppercase leading-tight tracking-tight mb-8">
              Blog <span className="text-gray-600">NOT FOUND</span>
            </h1>
            <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
              Sorry,{" the blog post you're looking for doesn't exist or has been moved."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blogs"
                className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
              >
                View All Blogs
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                  <path d="M5 15L15 5M9 5h6v6" />
                </svg>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center px-8 py-4 bg-[#232323] text-white font-semibold rounded-lg hover:bg-[#333] transition-colors border border-[#333]"
              >
                Back to Home
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                  <path d="M3 10L10 3l7 7" />
                </svg>
              </Link>
            </div>
            {/* Decorative Elements */}
            <div className="mt-12 opacity-30">
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
} 