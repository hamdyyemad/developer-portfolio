"use client";

export default function HexagonPattern() {
  return (
    <>
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-60"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M100,20 L160,50 L160,110 L100,140 L40,110 L40,50 Z"
          stroke="#000"
          strokeWidth="2"
          strokeDasharray="350"
          strokeDashoffset="350"
          className="hexagon-path"
        />
      </svg>
      <style jsx global>{`
        .hexagon-path {
          stroke-dashoffset: 350;
          transition: stroke-dashoffset 0.3s ease;
        }

        .group:hover .hexagon-path {
          stroke-dashoffset: 0;
          transition: stroke-dashoffset 2.5s ease-in-out;
          transition-delay: 0.4s;
        }

        .group:not(:hover) .hexagon-path {
          stroke-dashoffset: 350;
          transition: stroke-dashoffset 0.5s ease-in-out;
        }
      `}</style>
    </>
  );
}
