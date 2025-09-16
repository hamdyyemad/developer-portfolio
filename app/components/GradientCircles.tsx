export default function GradientCircles() {
  return (
    <div className="relative">
      {/* Top-right circle - clipped to viewport */}
      <div
        className="fixed top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse pointer-events-none overflow-hidden"
        style={{
          zIndex: 0,
          transform: 'translate(50%, -50%)'
        }}
      />

      {/* Bottom-left circle - clipped to viewport */}
      <div
        className="fixed bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-green-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse pointer-events-none overflow-hidden"
        style={{
          animationDelay: "2s",
          zIndex: 0,
          transform: 'translate(-50%, 50%)'
        }}
      />

      {/* Center circle - fully contained */}
      <div
        className="fixed top-1/2 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl animate-pulse pointer-events-none"
        style={{
          animationDelay: "4s",
          zIndex: 0,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
  );
}