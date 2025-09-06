"use client";
export default function MountainPattern() {
  return (
    <>
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-60"
        viewBox="0 0 200 200"
        fill="none"
      >
        <polyline
          points="0,180 40,40 80,160 120,60 160,180 200,40"
          stroke="#000"
          strokeWidth="4"
          fill="none"
          strokeDasharray="400"
          strokeDashoffset="400"
          className="mountain-path"
        />
      </svg>
      <style jsx global>{`
        .mountain-path {
          stroke-dashoffset: 400;
          transition: stroke-dashoffset 0.3s ease;
        }

        .group:hover .mountain-path {
          stroke-dashoffset: 0;
          transition: stroke-dashoffset 2.5s ease-in-out;
          transition-delay: 0.5s;
        }

        .group:not(:hover) .mountain-path {
          stroke-dashoffset: 400;
          transition: stroke-dashoffset 0.5s ease-in-out;
        }
      `}</style>
    </>
  );
}
