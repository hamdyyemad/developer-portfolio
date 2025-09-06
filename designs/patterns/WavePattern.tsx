"use client";
export default function WavePattern() {
  return (
    <>
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-60"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M0,100 Q100,0 200,100"
          stroke="#000"
          strokeWidth="2"
          strokeDasharray="300"
          strokeDashoffset="300"
          className="wave-path-1"
        />
        <path
          d="M0,150 Q100,50 200,150"
          stroke="#000"
          strokeWidth="2"
          strokeDasharray="300"
          strokeDashoffset="300"
          className="wave-path-2"
        />
      </svg>
      <style jsx global>{`
        .wave-path-1 {
          stroke-dashoffset: 300;
          transition: stroke-dashoffset 0.3s ease;
        }
        .wave-path-2 {
          stroke-dashoffset: 300;
          transition: stroke-dashoffset 0.3s ease;
        }

        .group:hover .wave-path-1 {
          stroke-dashoffset: 0;
          transition: stroke-dashoffset 2s ease-in-out;
        }

        .group:hover .wave-path-2 {
          stroke-dashoffset: 0;
          transition: stroke-dashoffset 2s ease-in-out;
          transition-delay: 0.8s;
        }

        .group:not(:hover) .wave-path-1 {
          stroke-dashoffset: 300;
          transition: stroke-dashoffset 0.5s ease-in-out;
        }

        .group:not(:hover) .wave-path-2 {
          stroke-dashoffset: 300;
          transition: stroke-dashoffset 0.5s ease-in-out;
        }
      `}</style>
    </>
  );
}
