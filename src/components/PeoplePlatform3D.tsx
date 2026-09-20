import React, { useState, useRef } from 'react';

interface PeoplePlatform3DProps {
  onSelectStage?: (stageId: string) => void;
  onOpenDemo?: () => void;
}

export const PeoplePlatform3D: React.FC<PeoplePlatform3DProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / (rect.height / 2)) * 6,
      y: (x / (rect.width / 2)) * 6
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[620px] mx-auto select-none flex flex-col items-center"
      style={{ perspective: 1200 }}
    >
      {/* Ambient background glows */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-gradient-to-br from-blue-400/20 via-indigo-500/15 to-purple-500/20 dark:from-blue-600/25 dark:via-cyan-500/20 dark:to-purple-600/25 rounded-full blur-[90px] pointer-events-none -z-10 animate-pulse-slow" />

      {/* Holographic orbital ring SVG animation */}
      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] sm:w-[540px] h-[260px] pointer-events-none -z-0 opacity-60 dark:opacity-80">
        <svg viewBox="0 0 540 260" className="w-full h-full animate-spin-slow">
          <ellipse
            cx="270"
            cy="130"
            rx="250"
            ry="90"
            fill="none"
            stroke="url(#orbitGradient1)"
            strokeWidth="1.5"
            strokeDasharray="8 12"
          />
          <defs>
            <linearGradient id="orbitGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#818CF8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[300px] pointer-events-none -z-0 opacity-40 dark:opacity-60">
        <svg viewBox="0 0 520 300" className="w-full h-full animate-spin-slow-reverse">
          <ellipse
            cx="260"
            cy="150"
            rx="240"
            ry="110"
            fill="none"
            stroke="url(#orbitGradient2)"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <defs>
            <linearGradient id="orbitGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main 3D Card / Stage Wrapper */}
      <div
        className="relative w-full rounded-3xl p-2 sm:p-4 transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* 3D Glass Stack Image Canvas */}
        <div className="relative rounded-2xl overflow-hidden group">
          {/* Base Image of the 3D Tower */}
          <img
            src="/assets/hero-3d-tower.png"
            alt="HRIFY People Platform Operating System 3D Stack"
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            style={{
              filter: 'drop-shadow(0 25px 35px rgba(30, 80, 255, 0.18))'
            }}
          />
        </div>
      </div>
    </div>
  );
};
