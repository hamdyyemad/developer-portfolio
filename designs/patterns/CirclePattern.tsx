"use client";

export default function CirclePattern() {
  return (
    <>
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-60"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle
          cx="100"
          cy="100"
          r="60"
          stroke="#000"
          strokeWidth="2"
          strokeDasharray="380"
          strokeDashoffset="380"
          className="circle-path"
        />
      </svg>
      <style jsx global>{`
        .circle-path {
          stroke-dashoffset: 380;
          transition: stroke-dashoffset 0.3s ease;
        }

        .group:hover .circle-path {
          stroke-dashoffset: 0;
          transition: stroke-dashoffset 2.8s ease-in-out;
          transition-delay: 0.1s;
        }

        .group:not(:hover) .circle-path {
          stroke-dashoffset: 380;
          transition: stroke-dashoffset 0.5s ease-in-out;
        }
      `}</style>
    </>
  );
}
