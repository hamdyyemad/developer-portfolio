"use client";

export default function StarPattern() {
  return (
    <>
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-60"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M100,20 L120,80 L180,80 L135,120 L155,180 L100,140 L45,180 L65,120 L20,80 L80,80 Z"
          stroke="#000"
          strokeWidth="2"
          strokeDasharray="400"
          strokeDashoffset="400"
          className="star-path"
        />
      </svg>
      <style jsx global>{`
        .star-path {
          stroke-dashoffset: 400;
          transition: stroke-dashoffset 0.3s ease;
        }

        .group:hover .star-path {
          stroke-dashoffset: 0;
          transition: stroke-dashoffset 3s ease-in-out;
          transition-delay: 0.2s;
        }

        .group:not(:hover) .star-path {
          stroke-dashoffset: 400;
          transition: stroke-dashoffset 0.5s ease-in-out;
        }
      `}</style>
    </>
  );
}
