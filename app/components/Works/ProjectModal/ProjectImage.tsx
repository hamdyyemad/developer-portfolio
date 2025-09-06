export default function ProjectImage() {
  return (
    <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-6 flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-gray-400">Project Preview</p>
      </div>
    </div>
  );
} 