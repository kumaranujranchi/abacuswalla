import React from "react";

type SectionDividerProps = {
  flip?: boolean;
  className?: string;
};

// Simple wavy SVG divider to add playful separation between sections
export function SectionDivider({ flip = false, className = "" }: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden ${className}`}
      style={{ lineHeight: 0 }}
    >
      <svg
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={`block w-full h-[80px] ${flip ? "rotate-180" : ""}`}
      >
        <defs>
          <linearGradient id="dividerGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          fill="url(#dividerGradient)"
        />
      </svg>
    </div>
  );
}

export default SectionDivider;