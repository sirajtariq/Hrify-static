import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Check, Lock, Unlock } from 'lucide-react';

export interface FeaturePhase {
  id: string;
  step: string;
  phaseBadge: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  glowColor: string;
  accentBadge: string;
}

export const FEATURE_PHASES: FeaturePhase[] = [
  {
    id: 'profile',
    step: '01',
    phaseBadge: 'PHASE 1 — PROFILE-FIRST',
    title: 'Personal employee profile',
    description:
      'Bring employee records, education, skills, reporting hierarchy, personal goals, compensation and documents into one unified profile that grows with every team member.',
    tags: ['Unified Directory', 'Goals & Hierarchy', 'Grows with you', 'Digital Docs'],
    imageSrc: '/assets/feature-profile-3d.png',
    glowColor: 'from-blue-500/20 via-indigo-500/15 to-transparent',
    accentBadge: 'Profile Core'
  },
  {
    id: 'attendance',
    step: '02',
    phaseBadge: 'PHASE 2 — ATTENDANCE & LEAVES',
    title: 'Smart attendance & shift rules',
    description:
      'Eliminate attendance fraud with real-time biometric and GPS geofencing. Automated leave balances, shift scheduling, and manager 1-click approvals across all branches.',
    tags: ['Smart Geo-Fence', 'Biometric Sync', 'Shift Rotations', '1-Click Leaves'],
    imageSrc: '/assets/feature-attendance-3d.png',
    glowColor: 'from-cyan-500/20 via-blue-500/15 to-transparent',
    accentBadge: 'Time & Shifts'
  },
  {
    id: 'payroll',
    step: '03',
    phaseBadge: 'PHASE 3 — AUTOMATED PAYROLL',
    title: 'Zero-error automated payroll',
    description:
      'Calculate complex salaries, overtime, bonuses, deductions, and statutory taxes in a single automated click with direct bank transfers and instant employee payslips.',
    tags: ['1-Click Processing', 'Automated Taxes', 'Bank Integrations', 'Digital Payslips'],
    imageSrc: '/assets/feature-payroll-3d.png',
    glowColor: 'from-emerald-500/20 via-teal-500/15 to-transparent',
    accentBadge: 'Payroll Engine'
  },
  {
    id: 'performance',
    step: '04',
    phaseBadge: 'PHASE 4 — PERFORMANCE & OKRs',
    title: 'Agile OKRs & 360 reviews',
    description:
      'Align individual contributions with company targets. Run automated quarterly 360 feedback cycles, peer recognitions, and AI-driven personalized skill growth roadmaps.',
    tags: ['Agile OKR Matrix', '360° Peer Feedback', 'Skill Mapping', 'Growth Roadmaps'],
    imageSrc: '/assets/feature-performance-3d.png',
    glowColor: 'from-purple-500/20 via-pink-500/15 to-transparent',
    accentBadge: 'Performance'
  }
];

// SVG Curved Arc nodes: 04 at top, 01 at bottom
const ARC_POINTS = [
  { index: 3, step: '04', cx: 35, cy: 40 },
  { index: 2, step: '03', cx: 72, cy: 115 },
  { index: 1, step: '02', cx: 104, cy: 195 },
  { index: 0, step: '01', cx: 122, cy: 275 },
];

interface InteractiveScrollFeaturesProps {
  onNavigate?: (page: string) => void;
  onOpenDemo?: () => void;
}

export const InteractiveScrollFeatures: React.FC<InteractiveScrollFeaturesProps> = ({
  onNavigate,
  onOpenDemo
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeIndexRef = useRef<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastStepTimeRef = useRef<number>(0);
  const isTransitioningRef = useRef<boolean>(false);
  const [animating, setAnimating] = useState<boolean>(false);
  const [isFrozen, setIsFrozen] = useState<boolean>(false);
  const isFrozenRef = useRef<boolean>(false);
  const hasEverUnlockedDownRef = useRef<boolean>(false);

  // Timers to guarantee pause on Feature 01 on arrival, and pause on Feature 04 before exit
  const entranceTimeRef = useRef<number>(0);
  const reachedLastFeatureTimeRef = useRef<number>(0);
  const reachedFirstFeatureTimeRef = useRef<number>(0);

  // Keep refs synchronized with state
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    isFrozenRef.current = isFrozen;
  }, [isFrozen]);

  // Freeze / Unfreeze body and html scroll
  const freezeScreen = () => {
    if (isFrozenRef.current) return;
    isFrozenRef.current = true;
    setIsFrozen(true);
    entranceTimeRef.current = Date.now();
    lastStepTimeRef.current = Date.now() + 500;
    document.documentElement.style.overflowY = 'hidden';
    document.body.style.overflowY = 'hidden';
  };

  const unfreezeScreen = () => {
    if (!isFrozenRef.current) return;
    isFrozenRef.current = false;
    setIsFrozen(false);
    document.documentElement.style.overflowY = '';
    document.body.style.overflowY = '';
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      document.documentElement.style.overflowY = '';
      document.body.style.overflowY = '';
    };
  }, []);

  // 1. Exact Screen Positioning & Freeze:
  // Aligns section directly below the 64px navbar so navbar remains 100% visible at the top,
  // and the whole card is perfectly centered on screen without being cut off!
  useEffect(() => {
    const handleScroll = () => {
      if (isFrozenRef.current) return;
      if (!sectionRef.current) return;

      const navbarHeight = 64;
      const sectionTop = sectionRef.current.offsetTop;
      const targetScroll = sectionTop - navbarHeight - 4; // Perfect alignment below navbar

      // When scroll reaches near this target position
      if (
        window.scrollY >= targetScroll - 60 &&
        window.scrollY <= targetScroll + 120 &&
        !hasEverUnlockedDownRef.current &&
        activeIndexRef.current < FEATURE_PHASES.length - 1
      ) {
        window.scrollTo({ top: targetScroll, behavior: 'instant' as ScrollBehavior });
        freezeScreen();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Mouse Wheel Handler during Frozen State
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current) return;

      const navbarHeight = 64;
      const sectionTop = sectionRef.current.offsetTop;
      const targetScroll = sectionTop - navbarHeight - 4;
      const rect = sectionRef.current.getBoundingClientRect();

      // Check if cursor is over the section or section is in primary view
      const isOverSection =
        rect.top <= navbarHeight + 80 && rect.bottom >= window.innerHeight * 0.35;

      // If at section and not yet frozen, freeze immediately with navbar visible!
      if (isOverSection && !isFrozenRef.current) {
        if (!hasEverUnlockedDownRef.current || activeIndexRef.current < FEATURE_PHASES.length - 1) {
          window.scrollTo({ top: targetScroll, behavior: 'instant' as ScrollBehavior });
          freezeScreen();
        }
      }

      if (!isFrozenRef.current) return;

      const now = Date.now();
      const COOLDOWN = 900; // Snappy pacing

      // User scrolls DOWN (wheel delta positive)
      if (e.deltaY > 6) {
        e.preventDefault();

        // 1. Entrance pause buffer: Stay on Feature 01 for at least 800ms
        if (now - entranceTimeRef.current < 500) {
          return;
        }

        if (activeIndexRef.current < FEATURE_PHASES.length - 1) {
          if (now - lastStepTimeRef.current > COOLDOWN && !isTransitioningRef.current) {
            lastStepTimeRef.current = now;
            isTransitioningRef.current = true;
            setAnimating(true);

            const nextIndex = activeIndexRef.current + 1;
            setActiveIndex(nextIndex);
            activeIndexRef.current = nextIndex;

            if (nextIndex === FEATURE_PHASES.length - 1) {
              reachedLastFeatureTimeRef.current = Date.now();
            }

            setTimeout(() => {
              isTransitioningRef.current = false;
              setAnimating(false);
            }, 500);
          }
        } else {
          // 2. Exit pause buffer: Must view Feature 04 for at least 1100ms before unlocking!
          if (now - reachedLastFeatureTimeRef.current > 1100 && !isTransitioningRef.current) {
            hasEverUnlockedDownRef.current = true;
            unfreezeScreen();
            const nextTarget = targetScroll + sectionRef.current.offsetHeight + 20;
            window.scrollTo({ top: nextTarget, behavior: 'smooth' });
          }
        }
      }
      // User scrolls UP (wheel delta negative)
      else if (e.deltaY < -6) {
        e.preventDefault();

        if (now - entranceTimeRef.current < 500) {
          return;
        }

        if (activeIndexRef.current > 0) {
          if (now - lastStepTimeRef.current > COOLDOWN && !isTransitioningRef.current) {
            lastStepTimeRef.current = now;
            isTransitioningRef.current = true;
            setAnimating(true);

            const prevIndex = activeIndexRef.current - 1;
            setActiveIndex(prevIndex);
            activeIndexRef.current = prevIndex;

            if (prevIndex === 0) {
              reachedFirstFeatureTimeRef.current = Date.now();
            }

            setTimeout(() => {
              isTransitioningRef.current = false;
              setAnimating(false);
            }, 500);
          }
        } else {
          // Feature 01 pause before unlocking to scroll up
          if (now - reachedFirstFeatureTimeRef.current > 1100 && !isTransitioningRef.current) {
            unfreezeScreen();
            const prevTarget = Math.max(0, targetScroll - 400);
            window.scrollTo({ top: prevTarget, behavior: 'smooth' });
          }
        }
      }
    };

    // Touch support for mobile devices
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isFrozenRef.current) return;
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY - currentY;
      const now = Date.now();
      const COOLDOWN = 900;

      if (deltaY > 20) {
        if (now - entranceTimeRef.current < 500) return;

        if (activeIndexRef.current < FEATURE_PHASES.length - 1) {
          if (e.cancelable) e.preventDefault();
          if (now - lastStepTimeRef.current > COOLDOWN && !isTransitioningRef.current) {
            lastStepTimeRef.current = now;
            touchStartY = currentY;
            isTransitioningRef.current = true;
            setAnimating(true);

            const nextIndex = activeIndexRef.current + 1;
            setActiveIndex(nextIndex);
            activeIndexRef.current = nextIndex;

            if (nextIndex === FEATURE_PHASES.length - 1) {
              reachedLastFeatureTimeRef.current = Date.now();
            }

            setTimeout(() => {
              isTransitioningRef.current = false;
              setAnimating(false);
            }, 500);
          }
        } else {
          if (now - reachedLastFeatureTimeRef.current > 1100 && !isTransitioningRef.current) {
            hasEverUnlockedDownRef.current = true;
            unfreezeScreen();
          }
        }
      } else if (deltaY < -20) {
        if (now - entranceTimeRef.current < 500) return;

        if (activeIndexRef.current > 0) {
          if (e.cancelable) e.preventDefault();
          if (now - lastStepTimeRef.current > COOLDOWN && !isTransitioningRef.current) {
            lastStepTimeRef.current = now;
            touchStartY = currentY;
            isTransitioningRef.current = true;
            setAnimating(true);

            const prevIndex = activeIndexRef.current - 1;
            setActiveIndex(prevIndex);
            activeIndexRef.current = prevIndex;

            if (prevIndex === 0) {
              reachedFirstFeatureTimeRef.current = Date.now();
            }

            setTimeout(() => {
              isTransitioningRef.current = false;
              setAnimating(false);
            }, 500);
          }
        } else {
          if (now - reachedFirstFeatureTimeRef.current > 1100 && !isTransitioningRef.current) {
            unfreezeScreen();
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const handleSelectPhase = (index: number) => {
    setAnimating(true);
    setActiveIndex(index);
    if (index === FEATURE_PHASES.length - 1) {
      reachedLastFeatureTimeRef.current = Date.now();
    } else if (index === 0) {
      reachedFirstFeatureTimeRef.current = Date.now();
    }
    setTimeout(() => setAnimating(false), 450);
  };

  const handleNext = () => {
    handleSelectPhase((activeIndex + 1) % FEATURE_PHASES.length);
  };

  const handlePrev = () => {
    handleSelectPhase((activeIndex - 1 + FEATURE_PHASES.length) % FEATURE_PHASES.length);
  };

  const handleManualUnlock = () => {
    hasEverUnlockedDownRef.current = true;
    unfreezeScreen();
    if (sectionRef.current) {
      const nextY = sectionRef.current.offsetTop + sectionRef.current.offsetHeight + 20;
      window.scrollTo({ top: nextY, behavior: 'smooth' });
    }
  };

  const currentPhase = FEATURE_PHASES[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-2 sm:pt-3 pb-6 sm:pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      {/* Top Section Header: Compact & Clean directly under Navbar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4 lg:mb-5">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 mb-1.5 border border-blue-100 dark:border-blue-900/40 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span>KEY FEATURES & CAPABILITIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-slate-950 dark:text-white tracking-tight leading-[1.12]">
            What HRIFY helps <br className="hidden sm:inline" />
            <span className="text-gradient-brand">organizations do.</span>
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            From first question to final decision, HRIFY keeps the information,
            context and tasks of your entire workforce journey connected.
          </p>
        </div>
      </div>

      {/* Main Interactive Feature Card Container: Perfectly centered on screen */}
      <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-3xl border border-slate-200/80 dark:border-slate-800 p-5 sm:p-7 lg:p-8 shadow-card overflow-hidden transition-all duration-300">

        {/* Dynamic Ambient Background Glow */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-gradient-to-br ${currentPhase.glowColor} rounded-full blur-[100px] pointer-events-none transition-all duration-1000 opacity-80`}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* Left Column: Curved Arc Stepper (04 at top, 01 at bottom) */}
          <div className="hidden lg:flex lg:col-span-3 items-center justify-center relative select-none">
            <div className="relative w-[150px] h-[310px]">
              {/* SVG Curve Line connecting all nodes */}
              <svg
                viewBox="0 0 160 320"
                className="w-full h-full absolute inset-0 pointer-events-none"
                fill="none"
              >
                {/* Background Guide Track */}
                <path
                  d="M 35,40 C 60,100 120,170 122,275"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-slate-200 dark:text-slate-800"
                  strokeDasharray="4 4"
                />

                {/* Dynamic Glowing Active Track Segment */}
                <path
                  d="M 35,40 C 60,100 120,170 122,275"
                  stroke="url(#stepperLiveGlow)"
                  strokeWidth="2.5"
                  className="transition-all duration-700 ease-out"
                />

                <defs>
                  <linearGradient id="stepperLiveGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#6366F1" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="1" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Stepper Nodes along the arc */}
              {ARC_POINTS.map((pt) => {
                const isActive = activeIndex === pt.index;
                const isPassed = activeIndex > pt.index;
                return (
                  <button
                    key={pt.step}
                    onClick={() => handleSelectPhase(pt.index)}
                    style={{
                      left: `${pt.cx}px`,
                      top: `${pt.cy}px`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    className={`absolute w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-500 select-none cursor-pointer ${isActive
                      ? 'bg-blue-600 text-white shadow-[0_8px_20px_-4px_rgba(37,99,235,0.6)] scale-110 ring-4 ring-blue-100 dark:ring-blue-900/50 z-20'
                      : isPassed
                        ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 hover:scale-105 shadow-sm z-10'
                        : 'bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 shadow-sm z-10'
                      }`}
                    aria-label={`Select Phase ${pt.step}`}
                  >
                    {isActive ? pt.step : isPassed ? <Check className="w-3 h-3 text-blue-500" /> : pt.step}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile / Tablet Horizontal Stepper Pills */}
          <div className="flex lg:hidden items-center justify-center gap-2 mb-2">
            {FEATURE_PHASES.map((p, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={p.step}
                  onClick={() => handleSelectPhase(idx)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700'
                    }`}
                >
                  Phase {p.step}
                </button>
              );
            })}
          </div>

          {/* Center Column: Phase Info & Copy with Slower, Smoother Animated State */}
          <div
            className={`lg:col-span-5 space-y-4 text-left transition-all duration-500 ease-out ${animating ? 'opacity-25 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black tracking-[0.22em] text-slate-400 dark:text-slate-500 uppercase">
                {currentPhase.phaseBadge}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-slate-950 dark:text-white tracking-tight leading-[1.12]">
              {currentPhase.title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal min-h-[68px]">
              {currentPhase.description}
            </p>

            {/* Feature Tags / Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {currentPhase.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:border-blue-300 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Navigation Controls, Step Count & CTA */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 shadow-sm">
                <button
                  onClick={handlePrev}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:text-blue-600 transition-all cursor-pointer"
                  aria-label="Previous Feature"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 px-2">
                  {currentPhase.step} / 04
                </span>
                <button
                  onClick={handleNext}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:text-blue-600 transition-all cursor-pointer"
                  aria-label="Next Feature"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {onNavigate && (
                <button
                  onClick={() => {
                    onNavigate('product');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group cursor-pointer"
                >
                  <span>Explore Module Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>

            {/* Segmented Progress Tracker Indicator with Visual Lock Status */}
            <div className="pt-2">
              <div className="flex items-center gap-1.5 mb-1.5">
                {[0, 1, 2, 3].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectPhase(idx)}
                    className="flex-1 h-1.5 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 transition-all cursor-pointer"
                    aria-label={`Jump to step ${idx + 1}`}
                  >
                    <div
                      className={`h-full transition-all duration-500 ease-out rounded-full ${idx === activeIndex
                        ? 'bg-blue-600 w-full'
                        : idx < activeIndex
                          ? 'bg-blue-400/80 w-full'
                          : 'w-0'
                        }`}
                    />
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${activeIndex === 3 ? 'bg-emerald-500' : 'bg-blue-500 animate-ping'
                      }`}
                  />
                  {activeIndex === 3
                    ? '04 / 04 (Viewing Feature 04 • Scroll down to continue ↓)'
                    : `Feature 0${activeIndex + 1} of 04 • Scroll mouse to cycle`}
                </span>

                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md transition-colors ${isFrozen
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300'
                      : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400'
                      }`}
                  >
                    {isFrozen ? (
                      <>
                        <Lock className="w-3 h-3 text-blue-600 animate-pulse" />
                        <span>Screen Frozen</span>
                      </>
                    ) : (
                      <>
                        <Unlock className="w-3 h-3" />
                        <span>Unlocked ↓</span>
                      </>
                    )}
                  </span>

                  {isFrozen && (
                    <button
                      onClick={handleManualUnlock}
                      className="text-[10px] font-bold text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 underline cursor-pointer"
                    >
                      Skip ↓
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Visual Card Display with Slower, Smoother Animation */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="relative group select-none">
              {/* 3D Floating Feature Card with Soft Shadows and 500ms Transition */}
              <div
                className={`relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-[28px] overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-[0_20px_50px_-15px_rgba(59,130,246,0.18)] flex items-center justify-center p-3 transition-all duration-500 ease-out group-hover:scale-[1.02] ${animating ? 'scale-95 opacity-30 blur-[1px]' : 'scale-100 opacity-100 blur-0'
                  }`}
              >
                <img
                  key={currentPhase.imageSrc}
                  src={currentPhase.imageSrc}
                  alt={currentPhase.title}
                  className="w-full h-full object-contain rounded-2xl transition-all duration-500 ease-out"
                />

                {/* Corner Accent Badge */}
                <div className="absolute top-3.5 right-3.5 px-2.5 py-0.5 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 text-[10px] font-extrabold text-blue-600 dark:text-blue-400 shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-blue-500" />
                  <span>{currentPhase.accentBadge}</span>
                </div>
              </div>

              {/* Subtle floor reflection below card */}
              <div className="w-40 h-3.5 mx-auto mt-2.5 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-md" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
