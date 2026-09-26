import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Check,
  Search,
  Bell,
  Settings,
  Plus,
  Filter,
  Download,
  Calendar,
  Clock,
  UserCheck,
  CheckCircle2,
  FileText,
  CreditCard,
  Briefcase,
  TrendingUp,
  Award,
  Layers,
  BarChart3,
  Eye,
  MessageSquare,
  Users,
  ShieldCheck,
  Headphones,
  Folder,
  Fingerprint,
  ChevronDown,
  ArrowUpRight,
  MoreVertical,
  HelpCircle,
  Video,
  Send,
  CalendarDays,
  UserPlus,
  CheckSquare,
  PieChart,
  DollarSign,
  FileCheck,
  PlusCircle
} from 'lucide-react';

export interface ModuleData {
  id: string;
  step: string;
  num: number;
  category: string;
  badge: string;
  headline: string;
  gradientText: string;
  description: string;
  features: {
    icon: string;
    title: string;
    desc: string;
    color: string;
  }[];
}

export const MODULES_12: ModuleData[] = [
  {
    id: 'dashboard',
    step: '01',
    num: 1,
    category: 'EXECUTIVE & HR OVERVIEW',
    badge: 'DASHBOARD',
    headline: 'Complete visibility.',
    gradientText: 'One intelligent dashboard.',
    description: 'Get real-time visibility into your entire organization. Monitor attendance rates, pending approvals, open jobs, and workforce growth from a unified command center.',
    features: [
      { icon: 'BarChart3', title: 'Live Metric Pulse', desc: 'Real-time staff and attendance KPIs', color: 'bg-blue-50 text-blue-600' },
      { icon: 'TrendingUp', title: 'Workforce Growth', desc: 'Automated 12-month headcount trends', color: 'bg-indigo-50 text-indigo-600' },
      { icon: 'CheckCircle2', title: 'Quick Approvals', desc: '1-Click pending request actions', color: 'bg-emerald-50 text-emerald-600' },
    ]
  },
  {
    id: 'employee-mgmt',
    step: '02',
    num: 2,
    category: 'EMPLOYEE MANAGEMENT',
    badge: 'EMPLOYEE MANAGEMENT',
    headline: 'Manage every employee.',
    gradientText: 'From one place.',
    description: 'Centralized employee records, organization structure and the complete employee lifecycle — all connected in one intelligent platform.',
    features: [
      { icon: 'Users', title: 'Complete Employee Records', desc: 'Centralized 360° digital employee profile', color: 'bg-blue-50 text-blue-600' },
      { icon: 'Layers', title: 'Organization Structure', desc: 'Interactive company reporting hierarchy', color: 'bg-purple-50 text-purple-600' },
      { icon: 'UserCheck', title: 'Employee Lifecycle', desc: 'From onboarding to career progression', color: 'bg-emerald-50 text-emerald-600' },
    ]
  },
  {
    id: 'ess',
    step: '03',
    num: 3,
    category: 'EMPLOYEE SELF SERVICES',
    badge: 'EMPLOYEE SELF SERVICES',
    headline: 'Empower Employees.',
    gradientText: 'Simplify HR.',
    description: 'Give your people the power to manage their own information, requests and documents — anytime, anywhere.',
    features: [
      { icon: 'UserPlus', title: 'Personal Information', desc: 'View and update profile details', color: 'bg-blue-50 text-blue-600' },
      { icon: 'CalendarDays', title: 'Leave & Attendance', desc: 'Apply for leave and track status', color: 'bg-purple-50 text-purple-600' },
      { icon: 'FileText', title: 'Documents & Requests', desc: 'Download letters, certificates and more', color: 'bg-emerald-50 text-emerald-600' },
    ]
  },
  {
    id: 'attendance-leave',
    step: '04',
    num: 4,
    category: 'ATTENDANCE & LEAVE',
    badge: 'ATTENDANCE & LEAVE',
    headline: 'Smart Attendance.',
    gradientText: 'Zero Time Theft.',
    description: 'Biometric device sync, GPS geofencing, multi-shift rota scheduling, and automated leave balance calculation with instant manager approvals.',
    features: [
      { icon: 'Fingerprint', title: 'Geofence & Biometric', desc: 'Fraud-proof multi-location clock-ins', color: 'bg-teal-50 text-teal-600' },
      { icon: 'Calendar', title: 'Shift Rota Management', desc: 'Automated rotating and flexible shifts', color: 'bg-blue-50 text-blue-600' },
      { icon: 'Clock', title: 'Leave Accrual Policies', desc: 'Automated quota calculations and rollover', color: 'bg-cyan-50 text-cyan-600' },
    ]
  },
  {
    id: 'payroll',
    step: '05',
    num: 5,
    category: 'PAYROLL AUTOMATION',
    badge: 'PAYROLL AUTOMATION',
    headline: 'Accurate & Compliant.',
    gradientText: '1-Click Payroll.',
    description: 'Calculate complex salaries, overtime, bonuses, deductions, and statutory taxes with direct bank transfers and instant digital payslips.',
    features: [
      { icon: 'CreditCard', title: '1-Click Salary Run', desc: 'Gross-to-net computation in seconds', color: 'bg-rose-50 text-rose-600' },
      { icon: 'ShieldCheck', title: 'Statutory Tax Compliance', desc: 'Automated tax slabs and deductions', color: 'bg-amber-50 text-amber-600' },
      { icon: 'FileText', title: 'Digital Payslip Dispatch', desc: 'Instant WhatsApp and email payslips', color: 'bg-emerald-50 text-emerald-600' },
    ]
  },
  {
    id: 'recruitment-ats',
    step: '06',
    num: 6,
    category: 'RECRUITMENT & ATS',
    badge: 'RECRUITMENT & ATS',
    headline: 'Hire Top Talent.',
    gradientText: 'Faster with AI ATS.',
    description: 'Post jobs across boards, parse resumes with AI, manage candidate pipelines through customizable hiring stages, and issue automated offer letters.',
    features: [
      { icon: 'Briefcase', title: 'Multi-Board Job Posting', desc: 'Reach top candidates across channels', color: 'bg-purple-50 text-purple-600' },
      { icon: 'Sparkles', title: 'AI Resume Scoring', desc: 'Automated match rating for job profiles', color: 'bg-indigo-50 text-indigo-600' },
      { icon: 'CheckCircle2', title: '1-Click Offer Letters', desc: 'Digital signatures and pre-onboarding', color: 'bg-blue-50 text-blue-600' },
    ]
  },
  {
    id: 'performance',
    step: '07',
    num: 7,
    category: 'PERFORMANCE MANAGEMENT',
    badge: 'PERFORMANCE MANAGEMENT',
    headline: 'Continuous Growth.',
    gradientText: 'Agile OKRs & 360 Reviews.',
    description: 'Align individual goals with corporate vision. Conduct structured 90-day review cycles, multi-rater 360 feedback, KPI scorecards, and skill roadmaps.',
    features: [
      { icon: 'TrendingUp', title: 'OKR & Goal Cascading', desc: 'Align team targets with company KPIs', color: 'bg-amber-50 text-amber-600' },
      { icon: 'Users', title: '360° Peer Feedback', desc: 'Holistic reviews from peers and managers', color: 'bg-blue-50 text-blue-600' },
      { icon: 'Award', title: 'Skill Growth Matrix', desc: 'Personalized development roadmaps', color: 'bg-purple-50 text-purple-600' },
    ]
  },
  {
    id: 'learning',
    step: '08',
    num: 8,
    category: 'LEARNING & DEVELOPMENT',
    badge: 'LEARNING & DEVELOPMENT',
    headline: 'Upskill Workforce.',
    gradientText: 'Corporate LMS.',
    description: 'Build custom training tracks, assign mandatory compliance courses, track certification completions, and empower team skill development.',
    features: [
      { icon: 'Layers', title: 'Custom Course LMS', desc: 'Video courses, quizzes, and modules', color: 'bg-indigo-50 text-indigo-600' },
      { icon: 'Award', title: 'Certifications & Badges', desc: 'Automated certificate generation', color: 'bg-amber-50 text-amber-600' },
      { icon: 'TrendingUp', title: 'Skill Gap Analysis', desc: 'Map trainings to performance reviews', color: 'bg-emerald-50 text-emerald-600' },
    ]
  },
  {
    id: 'tasks',
    step: '09',
    num: 9,
    category: 'TASK MANAGEMENT',
    badge: 'TASK MANAGEMENT',
    headline: 'Plan Better.',
    gradientText: 'Work Smarter. Achieve Together.',
    description: 'Streamline tasks, set priorities and keep your teams aligned — all in one place.',
    features: [
      { icon: 'CheckSquare', title: 'Create & Assign Tasks', desc: 'Assign tasks to individuals or teams with clear deadlines.', color: 'bg-blue-50 text-blue-600' },
      { icon: 'TrendingUp', title: 'Track Progress', desc: 'Monitor real-time status and ensure accountability.', color: 'bg-purple-50 text-purple-600' },
      { icon: 'Users', title: 'Team Collaboration', desc: 'Discuss, share files and work together within tasks.', color: 'bg-emerald-50 text-emerald-600' },
      { icon: 'Bell', title: 'Reminders & Notifications', desc: 'Never miss a deadline with smart alerts.', color: 'bg-amber-50 text-amber-600' },
    ]
  },
  {
    id: 'team-chat',
    step: '10',
    num: 10,
    category: 'HRIFY TEAM',
    badge: 'HRIFY TEAM',
    headline: 'Connect Seamlessly.',
    gradientText: 'Collaborate Instantly.',
    description: 'Empower cross-functional teams with internal channels, HD audio/video huddles, secure file sharing, and company broadcasts.',
    features: [
      { icon: 'MessageSquare', title: 'Department Channels', desc: 'Organized project rooms & instant team messaging.', color: 'bg-pink-50 text-pink-600' },
      { icon: 'Video', title: 'HD Audio & Video Calls', desc: 'Instant 1-on-1 and team syncs without 3rd party links.', color: 'bg-purple-50 text-purple-600' },
      { icon: 'Folder', title: 'Secure File Sharing', desc: 'Encrypted document exchanges with instant previews.', color: 'bg-blue-50 text-blue-600' },
      { icon: 'Bell', title: 'Company Announcements', desc: 'Broadcast notices and celebrate team milestones.', color: 'bg-amber-50 text-amber-600' },
    ]
  },
  {
    id: 'serve-now',
    step: '11',
    num: 11,
    category: 'EMPLOYEE SERVE NOW',
    badge: 'EMPLOYEE SERVE NOW',
    headline: 'Instant HR Services.',
    gradientText: 'Automated Letters & Helpdesk.',
    description: 'Request and generate official QR-verified employment letters in seconds, track helpdesk queries, and resolve staff needs fast.',
    features: [
      { icon: 'FileText', title: '1-Click Letter Generator', desc: 'Pre-approved digital stamped salary, visa & experience letters.', color: 'bg-cyan-50 text-cyan-600' },
      { icon: 'HelpCircle', title: 'SLA-Tracked Helpdesk', desc: 'Smart query ticketing with automatic department routing.', color: 'bg-amber-50 text-amber-600' },
      { icon: 'ShieldCheck', title: 'QR Document Verification', desc: 'Tamper-proof digital authenticity verification.', color: 'bg-emerald-50 text-emerald-600' },
      { icon: 'UserCheck', title: 'Digital Signatures', desc: 'Certified digital sign-off and instant PDF download.', color: 'bg-blue-50 text-blue-600' },
    ]
  },
  {
    id: 'reports',
    step: '12',
    num: 12,
    category: 'REPORTS & ANALYTICS',
    badge: 'REPORTS & ANALYTICS',
    headline: 'Actionable Intelligence.',
    gradientText: 'Predictive HR Analytics.',
    description: 'Turn people data into actionable executive insights with custom report builders, retention AI, department cost analysis, and 1-click exports.',
    features: [
      { icon: 'BarChart3', title: 'Executive KPI Dashboards', desc: 'Real-time workforce, attendance, and payroll metrics.', color: 'bg-blue-50 text-blue-600' },
      { icon: 'TrendingUp', title: 'Predictive Attrition AI', desc: 'Early warning signals and proactive retention insights.', color: 'bg-rose-50 text-rose-600' },
      { icon: 'PieChart', title: 'Custom Report Builder', desc: 'Drag-and-drop metrics, custom filters and schedules.', color: 'bg-purple-50 text-purple-600' },
      { icon: 'Download', title: '1-Click Exporting', desc: 'Instant Excel, CSV, and PDF report downloads.', color: 'bg-emerald-50 text-emerald-600' },
    ]
  }
];

// SVG Curve 12-point layout points for single smooth C-arc (clear, prominent numbers and labels)
const CURVE_POINTS = [
  { index: 0, step: '01', x: 18, y: 20 },
  { index: 1, step: '02', x: 48, y: 70 },
  { index: 2, step: '03', x: 78, y: 122 },
  { index: 3, step: '04', x: 104, y: 174 },
  { index: 4, step: '05', x: 122, y: 228 },
  { index: 5, step: '06', x: 130, y: 282 },
  { index: 6, step: '07', x: 126, y: 338 },
  { index: 7, step: '08', x: 110, y: 392 },
  { index: 8, step: '09', x: 86, y: 444 },
  { index: 9, step: '10', x: 58, y: 494 },
  { index: 10, step: '11', x: 32, y: 540 },
  { index: 11, step: '12', x: 14, y: 580 },
];

interface ModuleInteractiveShowcaseProps {
  onOpenDemo: () => void;
  selectedModuleId?: string;
  onSelectModule?: (id: string) => void;
}

export const ModuleInteractiveShowcase: React.FC<ModuleInteractiveShowcaseProps> = ({
  onOpenDemo,
  selectedModuleId,
  onSelectModule,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeIndexRef = useRef<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);
  const sectionContainerRef = useRef<HTMLDivElement>(null);

  const isTransitioningRef = useRef<boolean>(false);
  const lastStepTimeRef = useRef<number>(0);
  const positionStateRef = useRef<'above' | 'below' | 'aligned'>('below');
  const onSelectModuleRef = useRef(onSelectModule);

  // Keep refs in sync
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    onSelectModuleRef.current = onSelectModule;
  }, [onSelectModule]);

  // Synchronize with external selector
  useEffect(() => {
    if (selectedModuleId) {
      const idx = MODULES_12.findIndex((m) => m.id === selectedModuleId);
      if (idx !== -1 && idx !== activeIndex) {
        setActiveIndex(idx);
      }
    }
  }, [selectedModuleId]);

  const handleSelectModule = (index: number) => {
    if (index === activeIndexRef.current || index < 0 || index >= MODULES_12.length) return;
    isTransitioningRef.current = true;
    setAnimating(true);
    setActiveIndex(index);
    if (onSelectModuleRef.current) {
      onSelectModuleRef.current(MODULES_12[index].id);
    }
    setTimeout(() => {
      setAnimating(false);
      isTransitioningRef.current = false;
    }, 300);
  };

  const handleNext = () => {
    if (activeIndexRef.current < MODULES_12.length - 1) {
      handleSelectModule(activeIndexRef.current + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndexRef.current > 0) {
      handleSelectModule(activeIndexRef.current - 1);
    }
  };

  // Container-specific scroll trapping (Only traps when hovering the container)
  useEffect(() => {
    const container = sectionContainerRef.current;
    if (!container) return;

    const getTargetTop = () => {
      const rect = container.getBoundingClientRect();
      // Calculate perfect vertical center
      const centerTop = (window.innerHeight - rect.height) / 2;
      // Ensure it doesn't overlap the navbar (assume ~80px)
      return Math.max(80, centerTop);
    };

    const handleWheel = (e: WheelEvent) => {
      const rect = container.getBoundingClientRect();
      const targetTop = getTargetTop();
      const tolerance = 80; // Generous tolerance to catch the scroll
      
      let currentState: 'above' | 'below' | 'aligned';
      if (rect.top > targetTop + tolerance) currentState = 'below';
      else if (rect.top < targetTop - tolerance) currentState = 'above';
      else currentState = 'aligned';

      const wasAligned = positionStateRef.current === 'aligned';
      const previousState = positionStateRef.current;
      positionStateRef.current = currentState;

      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      if (currentState === 'aligned') {
        // Just entered the alignment zone
        if (!wasAligned) {
          e.preventDefault(); // Stop normal scroll
          
          // Snap it perfectly into place
          const absoluteTop = window.scrollY + rect.top;
          window.scrollTo({ top: absoluteTop - targetTop, behavior: 'smooth' });

          lastStepTimeRef.current = Date.now(); // Initialize to absorb immediate exit momentum

          // Start at module 1 if coming from top, or module 12 if coming from bottom
          if (previousState === 'below' || isScrollingDown) {
            handleSelectModule(0);
          } else {
            handleSelectModule(MODULES_12.length - 1);
          }
          return;
        }

        // Already aligned, cycle through modules
        const now = Date.now();
        const COOLDOWN = 600;
        const EXIT_COOLDOWN = 1200; // Time in ms to trap scroll at boundaries to absorb momentum

        if (isScrollingDown) {
          if (activeIndexRef.current < MODULES_12.length - 1) {
            e.preventDefault();
            if (now - lastStepTimeRef.current > COOLDOWN && !isTransitioningRef.current) {
              lastStepTimeRef.current = now;
              handleNext();
            }
          } else {
            // At last module, absorb momentum before exiting
            if (now - lastStepTimeRef.current < EXIT_COOLDOWN) {
              e.preventDefault();
            }
          }
        } else if (isScrollingUp) {
          if (activeIndexRef.current > 0) {
            e.preventDefault();
            if (now - lastStepTimeRef.current > COOLDOWN && !isTransitioningRef.current) {
              lastStepTimeRef.current = now;
              handlePrev();
            }
          } else {
            // At first module, absorb momentum before exiting
            if (now - lastStepTimeRef.current < EXIT_COOLDOWN) {
              e.preventDefault();
            }
          }
        }
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const targetTop = getTargetTop();
      const tolerance = 80;
      
      let currentState: 'above' | 'below' | 'aligned';
      if (rect.top > targetTop + tolerance) currentState = 'below';
      else if (rect.top < targetTop - tolerance) currentState = 'above';
      else currentState = 'aligned';

      const wasAligned = positionStateRef.current === 'aligned';
      const previousState = positionStateRef.current;
      positionStateRef.current = currentState;

      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY - currentY; // positive = swipe up = scrolling down
      
      const isScrollingDown = deltaY > 0;
      const isScrollingUp = deltaY < 0;

      if (currentState === 'aligned') {
        if (!wasAligned) {
          if (e.cancelable) e.preventDefault();
          const absoluteTop = window.scrollY + rect.top;
          window.scrollTo({ top: absoluteTop - targetTop, behavior: 'smooth' });

          lastStepTimeRef.current = Date.now();

          if (previousState === 'below' || isScrollingDown) {
            handleSelectModule(0);
          } else {
            handleSelectModule(MODULES_12.length - 1);
          }
          touchStartY = currentY;
          return;
        }

        const now = Date.now();
        const COOLDOWN = 600;
        const EXIT_COOLDOWN = 1200;

        if (isScrollingDown && Math.abs(deltaY) > 10) {
          if (activeIndexRef.current < MODULES_12.length - 1) {
            if (e.cancelable) e.preventDefault();
            if (now - lastStepTimeRef.current > COOLDOWN && !isTransitioningRef.current) {
              lastStepTimeRef.current = now;
              touchStartY = currentY;
              handleNext();
            }
          } else {
            if (now - lastStepTimeRef.current < EXIT_COOLDOWN) {
              if (e.cancelable) e.preventDefault();
            }
          }
        } else if (isScrollingUp && Math.abs(deltaY) > 10) {
          if (activeIndexRef.current > 0) {
            if (e.cancelable) e.preventDefault();
            if (now - lastStepTimeRef.current > COOLDOWN && !isTransitioningRef.current) {
              lastStepTimeRef.current = now;
              touchStartY = currentY;
              handlePrev();
            }
          } else {
            if (now - lastStepTimeRef.current < EXIT_COOLDOWN) {
              if (e.cancelable) e.preventDefault();
            }
          }
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const currentMod = MODULES_12[activeIndex];

  const getFeatureIcon = (name: string) => {
    const props = { className: "w-4 h-4" };
    switch (name) {
      case 'Users': return <Users {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'UserCheck': return <UserCheck {...props} />;
      case 'UserPlus': return <UserPlus {...props} />;
      case 'CalendarDays': return <CalendarDays {...props} />;
      case 'Calendar': return <Calendar {...props} />;
      case 'FileText': return <FileText {...props} />;
      case 'Fingerprint': return <Fingerprint {...props} />;
      case 'Clock': return <Clock {...props} />;
      case 'CreditCard': return <CreditCard {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'Award': return <Award {...props} />;
      case 'CheckSquare': return <CheckSquare {...props} />;
      case 'MessageSquare': return <MessageSquare {...props} />;
      case 'Video': return <Video {...props} />;
      case 'Folder': return <Folder {...props} />;
      case 'HelpCircle': return <HelpCircle {...props} />;
      case 'PieChart': return <PieChart {...props} />;
      case 'Download': return <Download {...props} />;
      case 'DollarSign': return <DollarSign {...props} />;
      case 'FileCheck': return <FileCheck {...props} />;
      case 'Bell': return <Bell {...props} />;
      default: return <CheckCircle2 {...props} />;
    }
  };

  return (
    <div
      ref={sectionContainerRef}
      className="relative w-full rounded-[36px] bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9]/80 to-[#F8FAFC] dark:from-[#090E1A] dark:via-[#0D1527] dark:to-[#090E1A] border border-slate-200/80 dark:border-slate-800 p-4 sm:p-6 lg:p-8 shadow-2xl overflow-hidden select-none transition-all duration-300"
    >
      {/* Background Soft Glow Orbs */}
      <div className="absolute -top-20 left-1/3 w-[500px] h-[300px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-[450px] h-[300px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* ========================================================================= */}
      {/* TOP HEADER: BRANDING & CURRENT MODULE BADGE                                */}
      {/* ========================================================================= */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between pb-4 mb-4 border-b border-slate-200/70 dark:border-slate-800/80 gap-3">
        <div className="flex items-center gap-3">
          <img
            src="/Assests/HRIFY_Logo_White_Background.png"
            alt="HRIFY - People Process Progress"
            className="h-8 w-auto object-contain dark:hidden"
          />
          <img
            src="/Assests/HRIFY_Logo_Dark_Background.png"
            alt="HRIFY - People Process Progress"
            className="h-8 w-auto object-contain hidden dark:block"
          />
        </div>

        {/* Center Pill: Current Phase Indicator */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-900/50 shadow-sm">
          <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white font-extrabold text-[10px]">
            {currentMod.step} / 12
          </span>
          <span className="text-[11px] font-black tracking-wider text-blue-700 dark:text-blue-300 uppercase">
            {currentMod.badge}
          </span>
        </div>

        {/* Right Tagline */}
        <div className="hidden lg:flex flex-col text-right">
          <span className="text-[8.5px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            EMPOWERING PEOPLE
          </span>
          <span className="text-[7.5px] font-bold uppercase tracking-widest text-slate-400">
            ENABLING PROGRESS
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MAIN 3-COLUMN BALANCED LAYOUT: LEFT INFO (3 COLS) + CENTER C-CURVE (3 COLS) + RIGHT DESKTOP UI (6 COLS) */}
      {/* ========================================================================= */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">

        {/* ========================================================================= */}
        {/* COLUMN 1 (3 COLS): MODULE INFO & 3 VALUE CARDS                             */}
        {/* ========================================================================= */}
        <div className={`lg:col-span-3 space-y-3.5 text-left transition-all duration-300 flex flex-col justify-center ${animating ? 'opacity-30 translate-y-1' : 'opacity-100 translate-y-0'
          }`}>
          {/* Eyebrow */}
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-0.5">
              <span>{currentMod.step} / 12</span>
              <span>•</span>
              <span>{currentMod.badge}</span>
            </div>
            <div className="w-10 h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
          </div>

          {/* Headline */}
          <h2 className="text-lg sm:text-xl lg:text-[23px] font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
            {currentMod.headline} <br />
            <span className="text-gradient-brand">{currentMod.gradientText}</span>
          </h2>

          {/* Description */}
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {currentMod.description}
          </p>

          {/* Key Feature Cards */}
          <div className="space-y-2 pt-0.5">
            {currentMod.features.map((feat) => (
              <div
                key={feat.title}
                className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-800 shadow-sm hover:border-blue-300 transition-colors"
              >
                <div className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 ${feat.color}`}>
                  {getFeatureIcon(feat.icon)}
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-[11px] text-slate-900 dark:text-white leading-tight truncate">
                    {feat.title}
                  </h4>
                  <p className="text-[9.5px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5 line-clamp-2">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COLUMN 2 (3 COLS): 12-POINT C-CURVE WITH BIG CLEAR NUMBERS & FULL LABELS  */}
        {/* ========================================================================= */}
        <div className="hidden lg:flex lg:col-span-3 items-center justify-center relative select-none">
          <div className="relative w-[220px] h-[590px]">
            {/* SVG Connecting Curved Path (C-Arc) */}
            <svg
              viewBox="0 0 160 600"
              className="w-full h-full absolute inset-0 pointer-events-none"
              fill="none"
            >
              <defs>
                <linearGradient id="journeyGlowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#6366F1" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Background Guide Track */}
              <path
                d="M 18,20 C 155,140 155,450 14,580"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-slate-200 dark:text-slate-800"
                strokeDasharray="4 4"
              />

              {/* Dynamic Active Segment */}
              <path
                d="M 18,20 C 155,140 155,450 14,580"
                stroke="url(#journeyGlowGradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            {/* 12 Stepper Points along the curve */}
            {CURVE_POINTS.map((pt) => {
              const mod = MODULES_12[pt.index];
              const isActive = activeIndex === pt.index;
              const isPassed = activeIndex > pt.index;

              const moduleLabel = (() => {
                switch (mod.id) {
                  case 'dashboard': return 'Dashboard';
                  case 'employee-mgmt': return 'Employee Management';
                  case 'ess': return 'Employee Self Services';
                  case 'attendance-leave': return 'Attendance & Leave';
                  case 'payroll': return 'Payroll Automation';
                  case 'recruitment-ats': return 'Recruitment & ATS';
                  case 'performance': return 'Performance Management';
                  case 'learning': return 'Learning & Development';
                  case 'tasks': return 'Task Management';
                  case 'team-chat': return 'HRIFY Team';
                  case 'serve-now': return 'Employee Serve Now';
                  case 'reports': return 'Reports & Analytics';
                  default: return mod.badge;
                }
              })();

              return (
                <div
                  key={pt.step}
                  style={{
                    left: `${pt.x}px`,
                    top: `${pt.y}px`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className="absolute flex items-center gap-2 cursor-pointer group z-20"
                  onClick={() => handleSelectModule(pt.index)}
                >
                  {/* Circle Node Button */}
                  <button
                    className={`w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full flex items-center justify-center font-bold text-[10.5px] sm:text-xs transition-all duration-300 shadow-md cursor-pointer shrink-0 ${isActive
                      ? 'bg-blue-600 text-white scale-110 shadow-lg shadow-blue-500/50 ring-4 ring-blue-100 dark:ring-blue-900/60 z-30 font-black'
                      : isPassed
                        ? 'bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-800 hover:scale-110 font-bold'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-blue-400 hover:scale-110 font-bold'
                      }`}
                  >
                    {pt.step}
                  </button>

                  {/* Label next to node */}
                  <span
                    className={`text-[10.5px] sm:text-[11px] font-bold whitespace-nowrap pl-0.5 transition-all ${isActive
                      ? 'text-blue-600 dark:text-blue-400 font-extrabold text-xs sm:text-[12.5px] scale-105'
                      : 'text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'
                      }`}
                  >
                    {moduleLabel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Horizontal Stepper Bar */}
        <div className="flex lg:hidden col-span-1 items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {MODULES_12.map((m, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={m.step}
                onClick={() => handleSelectModule(idx)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}
              >
                {m.step} • {m.badge.split(' ')[0]}
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* COLUMN 3 (6 COLS): HIGH-RESOLUTION LIVE DESKTOP SCREEN MOCKUP              */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 w-full">
          {/* Laptop Screen Frame */}
          <div className="relative rounded-2xl p-2 sm:p-2.5 bg-slate-900 shadow-2xl border border-slate-700/80">
            {/* Camera dot */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-700" />

            {/* Display Window */}
            <div className="rounded-xl overflow-hidden bg-white dark:bg-[#0b101f] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 text-[11px] shadow-inner">
              <div className="flex h-[460px] sm:h-[500px]">

                {/* Mini Sidebar */}
                <div className="w-28 sm:w-36 bg-[#0B132B] text-slate-300 p-2 hidden sm:flex flex-col justify-between shrink-0 select-none border-r border-slate-800">
                  <div>
                    {/* HRIFY Logo */}
                    <div className="flex items-center gap-1.5 mb-3 px-1">
                      <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-[9px]">
                        H
                      </div>
                      <span className="font-extrabold text-white text-xs tracking-wide">HRIFY</span>
                    </div>

                    {/* Nav Links */}
                    <div className="space-y-0.5 text-[9.5px]">
                      {[
                        { id: 'dashboard', name: 'Dashboard' },
                        { id: 'employee-mgmt', name: 'Employee Mgmt' },
                        { id: 'ess', name: 'Self Services' },
                        { id: 'attendance-leave', name: 'Attendance' },
                        { id: 'payroll', name: 'Payroll' },
                        { id: 'recruitment-ats', name: 'Recruitment' },
                        { id: 'performance', name: 'Performance' },
                        { id: 'learning', name: 'Learning' },
                        { id: 'tasks', name: 'Tasks' },
                        { id: 'team-chat', name: 'Team Chat' },
                        { id: 'serve-now', name: 'Serve Now' },
                        { id: 'reports', name: 'Reports' },
                      ].map((item, idx) => {
                        const isNavActive = activeIndex === idx;
                        return (
                          <button
                            key={item.id}
                            onClick={() => handleSelectModule(idx)}
                            className={`w-full text-left px-2 py-1 rounded-lg flex items-center gap-1.5 transition-all truncate ${isNavActive
                              ? 'bg-blue-600 text-white font-bold shadow-sm'
                              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                              }`}
                          >
                            <span className="truncate">{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="p-1.5 rounded-lg bg-slate-800/80 text-[8px] text-slate-400 flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
                    <span>AI Engine Active</span>
                  </div>
                </div>

                {/* Main Dynamic View Area */}
                <div className="flex-1 bg-[#F8FAFC] dark:bg-[#0B101E] p-3 overflow-y-auto flex flex-col space-y-2.5 scrollbar-none">

                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-200/80 dark:border-slate-800 shrink-0">
                    <div className="relative flex-1 max-w-[170px]">
                      <Search className="w-3 h-3 absolute left-2 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        readOnly
                        placeholder="Search anything..."
                        className="w-full pl-6 pr-2 py-1 text-[9px] rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-300"
                      />
                    </div>

                    <div className="flex items-center gap-1.5">
                      <div className="p-1 rounded-lg bg-white dark:bg-slate-800 text-slate-500">
                        <Bell className="w-3 h-3" />
                      </div>
                      <div className="p-1 rounded-lg bg-white dark:bg-slate-800 text-slate-500">
                        <Settings className="w-3 h-3" />
                      </div>
                      <div className="flex items-center gap-1 pl-1">
                        <div className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold text-[8px] flex items-center justify-center">
                          HA
                        </div>
                        <span className="text-[9px] font-bold hidden sm:inline text-slate-800 dark:text-slate-200">
                          HR Admin
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ================================================================= */}
                  {/* DYNAMIC SCREEN TEMPLATE FOR ACTIVE MODULE                         */}
                  {/* ================================================================= */}

                  {/* SCREEN 1: DASHBOARD */}
                  {activeIndex === 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-extrabold text-xs text-slate-900 dark:text-white">Dashboard</h4>
                          <p className="text-[8px] text-slate-400">Real-time overview of your people and HR metrics.</p>
                        </div>
                        <span className="text-[7px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-lg">September 2026</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1.5">
                        {[
                          { label: 'Total Employees', val: '248', trend: '↑ 4%', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-950/40' },
                          { label: 'Attendance Rate', val: '92%', trend: '↑ 2%', color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-950/40' },
                          { label: 'Pending Approvals', val: '18', trend: '↓ 5', color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-950/40' },
                          { label: 'Open Positions', val: '6', trend: 'New jobs', color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-950/40' },
                        ].map(c => (
                          <div key={c.label} className={`p-1.5 rounded-xl ${c.bg} border border-slate-200/50 dark:border-slate-700/40`}>
                            <p className={`font-extrabold text-sm ${c.color} leading-none`}>{c.val}</p>
                            <p className="text-[6px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">{c.label}</p>
                            <p className={`text-[6px] font-bold ${c.color} mt-0.5`}>{c.trend}</p>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                          <span className="font-bold text-[8px] block mb-1">Headcount Trend</span>
                          <div className="flex items-end gap-0.5 h-10">
                            {[180, 195, 205, 212, 220, 230, 242, 248].map((h, i) => (
                              <div key={i} className="flex-1 bg-blue-500 rounded-t-sm opacity-80" style={{ height: `${(h / 248) * 100}%` }} />
                            ))}
                          </div>
                          <div className="flex justify-between mt-0.5">
                            {['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'].map(m => (
                              <span key={m} className="text-[5.5px] text-slate-400">{m}</span>
                            ))}
                          </div>
                        </div>
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                          <span className="font-bold text-[8px] block mb-1">Pending Approvals</span>
                          <div className="space-y-1 text-[7px]">
                            {[
                              { type: 'Leave Requests', count: 8, color: 'bg-blue-500' },
                              { type: 'Payroll Approval', count: 4, color: 'bg-rose-500' },
                              { type: 'Job Offers', count: 3, color: 'bg-amber-500' },
                              { type: 'Document Requests', count: 3, color: 'bg-purple-500' },
                            ].map(a => (
                              <div key={a.type} className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                  <span className={`w-1.5 h-1.5 rounded-sm ${a.color}`} />
                                  <span className="text-slate-600 dark:text-slate-400">{a.type}</span>
                                </div>
                                <span className="font-bold text-slate-800 dark:text-slate-200">{a.count}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 space-y-1">
                        <span className="font-bold text-[8px] block">Quick Actions</span>
                        <div className="grid grid-cols-3 gap-1">
                          {[
                            { label: 'Add Employee', icon: UserPlus, color: 'text-blue-600' },
                            { label: 'Run Payroll', icon: CreditCard, color: 'text-rose-600' },
                            { label: 'View Reports', icon: ArrowUpRight, color: 'text-emerald-600' },
                          ].map(a => {
                            const Icon = a.icon;
                            return (
                              <div key={a.label} className="flex items-center gap-1 p-1 rounded-lg bg-slate-50 dark:bg-slate-800 text-[7px]">
                                <Icon className={`w-2.5 h-2.5 ${a.color} shrink-0`} />
                                <span className="font-semibold text-slate-700 dark:text-slate-300">{a.label}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 2: EMPLOYEE MANAGEMENT TABLE */}
                  {activeIndex === 1 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-extrabold text-xs text-slate-900 dark:text-white">Employees</h4>
                          <p className="text-[8px] text-slate-400">Manage your people and organization lifecycle.</p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <button className="px-2 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[8.5px] font-bold text-slate-600 dark:text-slate-300">
                            Export ⌄
                          </button>
                          <button className="px-2.5 py-1 rounded-lg bg-blue-600 text-white text-[8.5px] font-bold shadow-sm">
                            + Add Employee
                          </button>
                        </div>
                      </div>

                      {/* Sub Tabs */}
                      <div className="flex items-center gap-3 text-[9px] border-b border-slate-200/80 dark:border-slate-800 pb-1">
                        <span className="font-bold text-blue-600 border-b-2 border-blue-600 pb-1">All Employees</span>
                        <span className="text-slate-400">Departments</span>
                        <span className="text-slate-400">Designations</span>
                        <span className="text-slate-400">Locations</span>
                      </div>

                      {/* Employee Rows Table */}
                      <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 overflow-hidden shadow-sm">
                        <table className="w-full text-left text-[8px]">
                          <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-500 font-bold border-b border-slate-200/60 dark:border-slate-800">
                            <tr>
                              <th className="p-1.5">Employee</th>
                              <th className="p-1.5">Department</th>
                              <th className="p-1.5">Designation</th>
                              <th className="p-1.5">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-slate-700 dark:text-slate-300">
                            {[
                              { name: 'Maleyka Bilal', code: 'EMP-001', dept: 'Product', role: 'Product Designer', status: 'Active' },
                              { name: 'Ali Raza', code: 'EMP-002', dept: 'Engineering', role: 'Senior Developer', status: 'Active' },
                              { name: 'Sarah Khan', code: 'EMP-003', dept: 'HR', role: 'HR Executive', status: 'Active' },
                              { name: 'Usman Tariq', code: 'EMP-004', dept: 'Marketing', role: 'Manager', status: 'Active' },
                              { name: 'Ayesha Noor', code: 'EMP-005', dept: 'Operations', role: 'Executive', status: 'Contract' },
                            ].map((emp) => (
                              <tr key={emp.code} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                                <td className="p-1.5 font-bold">
                                  <div className="leading-tight">
                                    <p className="text-[8.5px] text-slate-900 dark:text-white">{emp.name}</p>
                                    <span className="text-[7px] text-slate-400">{emp.code}</span>
                                  </div>
                                </td>
                                <td className="p-1.5">{emp.dept}</td>
                                <td className="p-1.5">{emp.role}</td>
                                <td className="p-1.5">
                                  <span className="px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 font-bold text-[7.5px]">
                                    {emp.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className="text-[7.5px] text-slate-400 text-right">Showing 1 to 5 of 248 employees</p>
                    </div>
                  )}

                  {/* SCREEN 3: EMPLOYEE SELF SERVICES (Matches Screenshot 4) */}
                  {activeIndex === 2 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[8px] text-slate-400">Welcome back,</p>
                          <h4 className="font-extrabold text-xs text-slate-900 dark:text-white">Maleyka Bilal</h4>
                        </div>
                        <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-[7.5px] text-blue-600 font-bold">
                          “Your growth, our support.”
                        </div>
                      </div>

                      {/* 8 ESS Quick Action Tiles */}
                      <div className="grid grid-cols-4 gap-1.5">
                        {[
                          { label: 'My Profile', icon: UserPlus, bg: 'bg-purple-50 dark:bg-purple-950/50 text-purple-600' },
                          { label: 'Apply Leave', icon: CalendarDays, bg: 'bg-blue-50 dark:bg-blue-950/50 text-blue-600' },
                          { label: 'Attendance', icon: Fingerprint, bg: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600' },
                          { label: 'My Payslip', icon: CreditCard, bg: 'bg-rose-50 dark:bg-rose-950/50 text-rose-600' },
                          { label: 'Documents', icon: Folder, bg: 'bg-sky-50 dark:bg-sky-950/50 text-sky-600' },
                          { label: 'Requests', icon: FileText, bg: 'bg-amber-50 dark:bg-amber-950/50 text-amber-600' },
                          { label: 'Benefits', icon: ShieldCheck, bg: 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600' },
                          { label: 'Help & Supp', icon: Headphones, bg: 'bg-teal-50 dark:bg-teal-950/50 text-teal-600' },
                        ].map((item) => {
                          const Icon = item.icon;
                          return (
                            <div key={item.label} className={`p-1.5 rounded-xl ${item.bg} border border-slate-200/50 dark:border-slate-800 text-center flex flex-col items-center`}>
                              <Icon className="w-3 h-3 mb-0.5" />
                              <span className="text-[7px] font-bold leading-none">{item.label}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* My Requests Preview */}
                      <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-[8.5px]">My Requests</span>
                          <span className="text-[7.5px] text-blue-600">View All</span>
                        </div>
                        <div className="space-y-1 text-[7.5px]">
                          <div className="flex justify-between items-center p-1 rounded bg-slate-50 dark:bg-slate-800">
                            <span>Experience Letter</span>
                            <span className="text-emerald-600 font-bold">Approved</span>
                          </div>
                          <div className="flex justify-between items-center p-1 rounded bg-slate-50 dark:bg-slate-800">
                            <span>Leave Request (3 Days)</span>
                            <span className="text-amber-500 font-bold">Pending</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 4: ATTENDANCE & LEAVE */}
                  {activeIndex === 3 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-extrabold text-xs text-slate-900 dark:text-white">Attendance &amp; Leave</h4>
                          <p className="text-[8px] text-slate-400">Track time. Empower flexibility. Build a healthier workplace.</p>
                        </div>
                        <span className="text-[8px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-lg">September 2026</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1.5">
                        {[
                          { label: 'Total Employees', value: '248', trend: '↑ 4%', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-950/40', icon: Users },
                          { label: 'Attendance Rate', value: '92%', trend: '↑ 2%', color: 'text-teal-600', bg: 'bg-teal-50 dark:bg-teal-950/40', icon: Clock },
                          { label: 'On Leave Today', value: '18', trend: 'On Leave', color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-950/40', icon: Calendar },
                          { label: 'Pending Requests', value: '6', trend: '↓ 25%', color: 'text-rose-600', bg: 'bg-rose-50 dark:bg-rose-950/40', icon: CheckCircle2 },
                        ].map((card) => {
                          const Icon = card.icon;
                          return (
                            <div key={card.label} className={`p-1.5 rounded-xl ${card.bg} border border-slate-200/50 dark:border-slate-700/40`}>
                              <Icon className={`w-3 h-3 ${card.color} mb-0.5`} />
                              <p className={`font-extrabold text-sm ${card.color} leading-none`}>{card.value}</p>
                              <p className="text-[6.5px] text-slate-500 dark:text-slate-400 leading-tight">{card.label}</p>
                              <p className={`text-[6.5px] font-bold ${card.color} mt-0.5`}>{card.trend}</p>
                            </div>
                          );
                        })}
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-[8px]">Attendance Overview</span>
                            <div className="flex items-center gap-1.5 text-[6.5px]">
                              <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 rounded-sm bg-blue-500 inline-block" />Present</span>
                              <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 rounded-sm bg-rose-300 inline-block" />Absent</span>
                            </div>
                          </div>
                          <div className="flex items-end gap-0.5 h-12 pt-1">
                            {[{ p: 85, a: 15 }, { p: 90, a: 10 }, { p: 88, a: 12 }, { p: 92, a: 8 }, { p: 87, a: 13 }, { p: 91, a: 9 }, { p: 93, a: 7 }].map((bar, i) => (
                              <div key={i} className="flex-1 flex flex-col-reverse gap-0.5">
                                <div className="bg-blue-500 rounded-sm" style={{ height: `${bar.p * 0.45}px` }} />
                                <div className="bg-rose-300 rounded-sm" style={{ height: `${bar.a * 0.45}px` }} />
                              </div>
                            ))}
                          </div>
                          <div className="flex justify-between mt-0.5">
                            {['S1', 'S5', 'S10', 'S15', 'S20', 'S25', 'S30'].map(l => (
                              <span key={l} className="text-[5.5px] text-slate-400">{l}</span>
                            ))}
                          </div>
                        </div>
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                          <span className="font-bold text-[8px] block mb-1">Leave Distribution</span>
                          <div className="flex items-center gap-2">
                            <div className="relative w-12 h-12 shrink-0">
                              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                                <circle cx="18" cy="18" r="14" fill="none" stroke="#3b82f6" strokeWidth="5" strokeDasharray="44 56" strokeDashoffset="0" />
                                <circle cx="18" cy="18" r="14" fill="none" stroke="#f59e0b" strokeWidth="5" strokeDasharray="22 78" strokeDashoffset="-44" />
                                <circle cx="18" cy="18" r="14" fill="none" stroke="#10b981" strokeWidth="5" strokeDasharray="17 83" strokeDashoffset="-66" />
                                <circle cx="18" cy="18" r="14" fill="none" stroke="#8b5cf6" strokeWidth="5" strokeDasharray="11 89" strokeDashoffset="-83" />
                                <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="5" strokeDasharray="6 94" strokeDashoffset="-94" />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[8px] font-extrabold text-slate-700 dark:text-white">18</span>
                              </div>
                            </div>
                            <div className="space-y-0.5 flex-1">
                              {[
                                { label: 'Annual Leave', val: 8, color: 'bg-blue-500' },
                                { label: 'Sick Leave', val: 4, color: 'bg-amber-400' },
                                { label: 'Casual Leave', val: 3, color: 'bg-emerald-500' },
                                { label: 'Unpaid Leave', val: 2, color: 'bg-violet-500' },
                                { label: 'Other', val: 1, color: 'bg-slate-200' },
                              ].map(l => (
                                <div key={l.label} className="flex items-center justify-between text-[6.5px]">
                                  <div className="flex items-center gap-0.5">
                                    <span className={`w-1.5 h-1.5 rounded-sm ${l.color} inline-block shrink-0`} />
                                    <span className="text-slate-600 dark:text-slate-400 truncate">{l.label}</span>
                                  </div>
                                  <span className="font-bold text-slate-800 dark:text-slate-200">{l.val}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 overflow-hidden">
                        <div className="flex items-center justify-between p-1.5 border-b border-slate-100 dark:border-slate-800">
                          <span className="font-bold text-[8px]">Recent Leave Requests</span>
                          <span className="text-[7px] text-blue-600">View All</span>
                        </div>
                        <table className="w-full text-[7px]">
                          <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-400 font-bold">
                            <tr><th className="p-1 text-left">Employee</th><th className="p-1 text-left">Leave Type</th><th className="p-1 text-left">Days</th><th className="p-1 text-left">Status</th></tr>
                          </thead>
                          <tbody className="divide-y divide-slate-50 dark:divide-slate-800/40">
                            {[
                              { name: 'Areeba Khan', type: 'Annual Leave', days: 4, status: 'Approved', sc: 'text-emerald-600' },
                              { name: 'Bilal Ahmed', type: 'Sick Leave', days: 2, status: 'Pending', sc: 'text-amber-500' },
                              { name: 'Sara Fatima', type: 'Casual Leave', days: 1, status: 'Approved', sc: 'text-emerald-600' },
                              { name: 'Hamza Ali', type: 'Annual Leave', days: 3, status: 'Rejected', sc: 'text-rose-500' },
                            ].map(r => (
                              <tr key={r.name} className="text-slate-700 dark:text-slate-300">
                                <td className="p-1 font-semibold">{r.name}</td>
                                <td className="p-1">{r.type}</td>
                                <td className="p-1">{r.days}</td>
                                <td className={`p-1 font-bold ${r.sc}`}>{r.status}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="grid grid-cols-4 gap-1">
                        {[
                          { label: 'Track Attendance', sub: 'Check-in with location', icon: Fingerprint, color: 'text-teal-600' },
                          { label: 'Manage Leave', sub: 'Approval workflow', icon: Calendar, color: 'text-blue-600' },
                          { label: 'View Reports', sub: 'Daily, weekly insights', icon: BarChart3, color: 'text-indigo-600' },
                          { label: 'Policy Settings', sub: 'Configure working days', icon: Settings, color: 'text-slate-600' },
                        ].map(a => {
                          const Icon = a.icon; return (
                            <div key={a.label} className="p-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/40 flex flex-col items-center text-center gap-0.5">
                              <Icon className={`w-3 h-3 ${a.color}`} />
                              <span className="font-bold text-[6.5px] text-slate-800 dark:text-slate-200 leading-tight">{a.label}</span>
                              <span className="text-[5.5px] text-slate-400 leading-tight">{a.sub}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* SCREEN 5: PAYROLL AUTOMATION */}
                  {activeIndex === 4 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-extrabold text-xs text-slate-900 dark:text-white">Payroll Automation</h4>
                          <p className="text-[8px] text-slate-400">Accurate. Compliant. Hassle-Free.</p>
                        </div>
                        <span className="text-[8px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-lg">September 2026</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1.5">
                        {[
                          { label: 'Employees', value: '248', trend: '↑ 0%', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-950/40' },
                          { label: 'Total Payroll (PKR)', value: '24.8M', trend: '↑ 12%', color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-950/40' },
                          { label: 'Pending Approvals', value: '12', trend: '↓ 25%', color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-950/40' },
                          { label: 'On-Time Processing', value: '100%', trend: '↑ vs last', color: 'text-indigo-600', bg: 'bg-indigo-50 dark:bg-indigo-950/40' },
                        ].map((card) => (
                          <div key={card.label} className={`p-1.5 rounded-xl ${card.bg} border border-slate-200/50 dark:border-slate-700/40`}>
                            <p className={`font-extrabold text-[11px] ${card.color} leading-none`}>{card.value}</p>
                            <p className="text-[6px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">{card.label}</p>
                            <p className={`text-[6px] font-bold ${card.color} mt-0.5`}>{card.trend}</p>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 space-y-1.5">
                          <span className="font-bold text-[8px] block">Payroll Summary</span>
                          {[
                            { label: 'Total Earnings', val: 'PKR 18.6M', color: 'text-emerald-600' },
                            { label: 'Total Deductions', val: 'PKR 4.2M', color: 'text-rose-500' },
                            { label: 'Net Payable', val: 'PKR 14.4M', color: 'text-blue-600' },
                          ].map(s => (
                            <div key={s.label} className="flex justify-between items-center p-1 rounded-lg bg-slate-50 dark:bg-slate-800 text-[7px]">
                              <span className="text-slate-600 dark:text-slate-400">{s.label}</span>
                              <span className={`font-extrabold ${s.color}`}>{s.val}</span>
                            </div>
                          ))}
                        </div>
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                          <span className="font-bold text-[8px] block mb-1">Earnings vs Deductions</span>
                          <div className="flex items-center gap-2">
                            <div className="relative w-14 h-14 shrink-0">
                              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                                <circle cx="18" cy="18" r="14" fill="none" stroke="#3b82f6" strokeWidth="5" strokeDasharray="62 38" />
                                <circle cx="18" cy="18" r="14" fill="none" stroke="#8b5cf6" strokeWidth="5" strokeDasharray="18 82" strokeDashoffset="-62" />
                                <circle cx="18" cy="18" r="14" fill="none" stroke="#ef4444" strokeWidth="5" strokeDasharray="15 85" strokeDashoffset="-80" />
                                <circle cx="18" cy="18" r="14" fill="none" stroke="#f59e0b" strokeWidth="5" strokeDasharray="5 95" strokeDashoffset="-95" />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center flex-col">
                                <span className="text-[7px] font-extrabold text-slate-700 dark:text-white">24.8M</span>
                                <span className="text-[5px] text-slate-400">Total</span>
                              </div>
                            </div>
                            <div className="space-y-0.5">
                              {[
                                { label: 'Basic Salary', pct: '62%', color: 'bg-blue-500' },
                                { label: 'Allowances', pct: '18%', color: 'bg-violet-500' },
                                { label: 'Deductions', pct: '15%', color: 'bg-red-500' },
                                { label: 'Other', pct: '5%', color: 'bg-amber-400' },
                              ].map(l => (
                                <div key={l.label} className="flex items-center justify-between gap-2 text-[6.5px]">
                                  <div className="flex items-center gap-0.5">
                                    <span className={`w-1.5 h-1.5 rounded-sm ${l.color} inline-block shrink-0`} />
                                    <span className="text-slate-600 dark:text-slate-400">{l.label}</span>
                                  </div>
                                  <span className="font-bold text-slate-700 dark:text-slate-200">{l.pct}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 overflow-hidden">
                        <div className="flex items-center justify-between p-1.5 border-b border-slate-100 dark:border-slate-800">
                          <span className="font-bold text-[8px]">Employee Payroll</span>
                          <span className="text-[7px] text-slate-400">September 2026</span>
                        </div>
                        <table className="w-full text-[7px]">
                          <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-400 font-bold">
                            <tr><th className="p-1 text-left">Employee</th><th className="p-1 text-left">Dept</th><th className="p-1 text-right">Gross</th><th className="p-1 text-right">Net</th><th className="p-1 text-left">Status</th></tr>
                          </thead>
                          <tbody className="divide-y divide-slate-50 dark:divide-slate-800/40">
                            {[
                              { name: 'Areeba Khan', code: 'EMP-001', dept: 'HR', gross: '380,000', net: '295,000', status: 'Approved' },
                              { name: 'Bilal Ahmed', code: 'EMP-002', dept: 'Eng', gross: '320,000', net: '268,000', status: 'Approved' },
                              { name: 'Sara Fatima', code: 'EMP-003', dept: 'Product', gross: '250,000', net: '212,000', status: 'Pending' },
                              { name: 'Hamza Ali', code: 'EMP-004', dept: 'Marketing', gross: '280,000', net: '252,000', status: 'Approved' },
                              { name: 'Ali Raza', code: 'EMP-005', dept: 'Ops', gross: '275,000', net: '234,000', status: 'Approved' },
                            ].map(r => (
                              <tr key={r.name} className="text-slate-700 dark:text-slate-300">
                                <td className="p-1 font-semibold"><p>{r.name}</p><p className="text-[5.5px] text-slate-400">{r.code}</p></td>
                                <td className="p-1">{r.dept}</td>
                                <td className="p-1 text-right">{r.gross}</td>
                                <td className="p-1 text-right font-bold text-emerald-600">{r.net}</td>
                                <td className="p-1"><span className={`px-1 py-0.5 rounded-full font-bold text-[6px] ${r.status === 'Approved' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>{r.status}</span></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="grid grid-cols-4 gap-1">
                        {[
                          { label: 'Process Payroll', sub: 'Run in a few clicks', icon: CreditCard, color: 'text-blue-600' },
                          { label: 'Manage Deductions', sub: 'Tax, EOBI, Social Security', icon: ShieldCheck, color: 'text-rose-600' },
                          { label: 'Generate Payslips', sub: 'Instantly for all', icon: FileText, color: 'text-emerald-600' },
                          { label: 'Statutory Reports', sub: 'FBR, EOBI, SESSI', icon: BarChart3, color: 'text-indigo-600' },
                        ].map(a => {
                          const Icon = a.icon; return (
                            <div key={a.label} className="p-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/40 flex flex-col items-center text-center gap-0.5">
                              <Icon className={`w-3 h-3 ${a.color}`} />
                              <span className="font-bold text-[6.5px] text-slate-800 dark:text-slate-200 leading-tight">{a.label}</span>
                              <span className="text-[5.5px] text-slate-400 leading-tight">{a.sub}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* SCREEN 6: RECRUITMENT & ATS */}
                  {activeIndex === 5 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-extrabold text-xs text-slate-900 dark:text-white">Recruitment &amp; ATS</h4>
                          <p className="text-[8px] text-slate-400">Attract, screen and hire the best talent.</p>
                        </div>
                        <button className="px-2 py-0.5 rounded-lg bg-blue-600 text-white text-[7.5px] font-bold">+ Post Job</button>
                      </div>
                      <div className="grid grid-cols-4 gap-1.5">
                        {[
                          { label: 'Open Positions', val: '14', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-950/40' },
                          { label: 'Applicants', val: '186', color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-950/40' },
                          { label: 'Interviews', val: '32', color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-950/40' },
                          { label: 'Hired This Month', val: '8', color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-950/40' },
                        ].map(c => (
                          <div key={c.label} className={`p-1.5 rounded-xl ${c.bg} border border-slate-200/50 dark:border-slate-700/40`}>
                            <p className={`font-extrabold text-sm ${c.color} leading-none`}>{c.val}</p>
                            <p className="text-[6px] text-slate-500 leading-tight mt-0.5">{c.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                        <span className="font-bold text-[8px] block mb-1.5">Hiring Pipeline</span>
                        <div className="space-y-1">
                          {[
                            { stage: 'Applied', count: 186, color: 'bg-blue-500', pct: 100 },
                            { stage: 'Screening', count: 74, color: 'bg-indigo-500', pct: 40 },
                            { stage: 'Interview', count: 32, color: 'bg-amber-500', pct: 17 },
                            { stage: 'Offer Sent', count: 12, color: 'bg-orange-500', pct: 6 },
                            { stage: 'Hired', count: 8, color: 'bg-emerald-500', pct: 4 },
                          ].map(s => (
                            <div key={s.stage} className="flex items-center gap-1.5 text-[7px]">
                              <span className="w-14 text-slate-600 dark:text-slate-400 shrink-0">{s.stage}</span>
                              <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-full h-2"><div className={`${s.color} h-2 rounded-full`} style={{ width: `${s.pct}%` }} /></div>
                              <span className="font-bold text-slate-700 dark:text-slate-300 w-5 text-right">{s.count}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 overflow-hidden">
                        <div className="flex items-center justify-between p-1.5 border-b border-slate-100 dark:border-slate-800">
                          <span className="font-bold text-[8px]">Recent Applications</span>
                          <span className="text-[7px] text-blue-600">View All</span>
                        </div>
                        <table className="w-full text-[7px]">
                          <tbody className="divide-y divide-slate-50 dark:divide-slate-800/40">
                            {[
                              { name: 'Zainab Malik', pos: 'Frontend Dev', score: '92%', stage: 'Interview', sc: 'text-amber-600' },
                              { name: 'Ahmed Siddiq', pos: 'HR Manager', score: '85%', stage: 'Offer Sent', sc: 'text-orange-600' },
                              { name: 'Nida Farooq', pos: 'Product Designer', score: '88%', stage: 'Screening', sc: 'text-indigo-600' },
                              { name: 'Omar Cheema', pos: 'DevOps Engineer', score: '79%', stage: 'Applied', sc: 'text-blue-600' },
                            ].map(r => (
                              <tr key={r.name} className="text-slate-700 dark:text-slate-300">
                                <td className="p-1 font-semibold">{r.name}</td>
                                <td className="p-1 text-slate-500">{r.pos}</td>
                                <td className="p-1 font-bold text-emerald-600">{r.score}</td>
                                <td className={`p-1 font-bold ${r.sc}`}>{r.stage}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="grid grid-cols-4 gap-1">
                        {[
                          { label: 'Post a Job', icon: Briefcase, color: 'text-blue-600' },
                          { label: 'Review CVs', icon: FileText, color: 'text-purple-600' },
                          { label: 'Schedule Interview', icon: Calendar, color: 'text-amber-600' },
                          { label: 'Send Offer', icon: Send, color: 'text-emerald-600' },
                        ].map(a => {
                          const Icon = a.icon; return (
                            <div key={a.label} className="p-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/50 flex flex-col items-center text-center gap-0.5">
                              <Icon className={`w-3 h-3 ${a.color}`} />
                              <span className="font-bold text-[6.5px] text-slate-700 dark:text-slate-300 leading-tight">{a.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* SCREEN 7: PERFORMANCE MANAGEMENT */}
                  {activeIndex === 6 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-extrabold text-xs text-slate-900 dark:text-white">Performance Management</h4>
                          <p className="text-[8px] text-slate-400">Drive goals, track progress, grow talent.</p>
                        </div>
                        <span className="text-[7px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-lg">Q3 2026</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1.5">
                        {[
                          { label: 'Active Goals', val: '124', color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-950/40' },
                          { label: 'Reviews Done', val: '89', color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-950/40' },
                          { label: 'Avg Score', val: '4.2', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-950/40' },
                          { label: 'Top Performers', val: '18', color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-950/40' },
                        ].map(c => (
                          <div key={c.label} className={`p-1.5 rounded-xl ${c.bg} border border-slate-200/50 dark:border-slate-700/40`}>
                            <p className={`font-extrabold text-sm ${c.color} leading-none`}>{c.val}</p>
                            <p className="text-[6px] text-slate-500 leading-tight mt-0.5">{c.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                        <span className="font-bold text-[8px] block mb-1.5">OKR Progress — Q3 2026</span>
                        <div className="space-y-1.5">
                          {[
                            { obj: 'Grow Revenue by 30%', prog: 72, color: 'bg-blue-500' },
                            { obj: 'Reduce Attrition to 5%', prog: 85, color: 'bg-emerald-500' },
                            { obj: 'Launch 3 New Products', prog: 60, color: 'bg-amber-500' },
                            { obj: 'Increase NPS Score', prog: 90, color: 'bg-purple-500' },
                          ].map(o => (
                            <div key={o.obj} className="space-y-0.5">
                              <div className="flex justify-between text-[7px]">
                                <span className="text-slate-600 dark:text-slate-400 truncate">{o.obj}</span>
                                <span className="font-bold text-slate-800 dark:text-slate-200 ml-1">{o.prog}%</span>
                              </div>
                              <div className="bg-slate-100 dark:bg-slate-800 rounded-full h-1.5"><div className={`${o.color} h-1.5 rounded-full`} style={{ width: `${o.prog}%` }} /></div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 overflow-hidden">
                        <div className="flex items-center justify-between p-1.5 border-b border-slate-100 dark:border-slate-800">
                          <span className="font-bold text-[8px]">Performance Reviews</span>
                          <span className="text-[7px] text-blue-600">View All</span>
                        </div>
                        <table className="w-full text-[7px]">
                          <tbody className="divide-y divide-slate-50 dark:divide-slate-800/40">
                            {[
                              { name: 'Maleyka Bilal', dept: 'Product', score: '4.8', badge: 'Exceptional', bc: 'bg-emerald-50 text-emerald-600' },
                              { name: 'Ali Raza', dept: 'Engineering', score: '4.5', badge: 'Excellent', bc: 'bg-blue-50 text-blue-600' },
                              { name: 'Sarah Khan', dept: 'HR', score: '4.1', badge: 'Good', bc: 'bg-indigo-50 text-indigo-600' },
                              { name: 'Usman Tariq', dept: 'Marketing', score: '3.8', badge: 'Meets Expectations', bc: 'bg-amber-50 text-amber-600' },
                            ].map(r => (
                              <tr key={r.name} className="text-slate-700 dark:text-slate-300">
                                <td className="p-1 font-semibold">{r.name}</td>
                                <td className="p-1 text-slate-500">{r.dept}</td>
                                <td className="p-1 font-bold text-slate-800 dark:text-white">{r.score}/5</td>
                                <td className="p-1"><span className={`px-1 py-0.5 rounded-full font-bold text-[6px] ${r.bc}`}>{r.badge}</span></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="grid grid-cols-4 gap-1">
                        {[
                          { label: 'Set Goals', icon: TrendingUp, color: 'text-amber-600' },
                          { label: '360° Review', icon: Users, color: 'text-blue-600' },
                          { label: 'Growth Matrix', icon: Award, color: 'text-purple-600' },
                          { label: 'View Reports', icon: BarChart3, color: 'text-emerald-600' },
                        ].map(a => {
                          const Icon = a.icon; return (
                            <div key={a.label} className="p-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/50 flex flex-col items-center text-center gap-0.5">
                              <Icon className={`w-3 h-3 ${a.color}`} />
                              <span className="font-bold text-[6.5px] text-slate-700 dark:text-slate-300 leading-tight">{a.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* SCREEN 8: LEARNING & DEVELOPMENT */}
                  {activeIndex === 7 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-extrabold text-xs text-slate-900 dark:text-white">Learning &amp; Development</h4>
                          <p className="text-[8px] text-slate-400">Build skills. Grow careers. Empower teams.</p>
                        </div>
                        <button className="px-2 py-0.5 rounded-lg bg-indigo-600 text-white text-[7.5px] font-bold">+ New Course</button>
                      </div>
                      <div className="grid grid-cols-4 gap-1.5">
                        {[
                          { label: 'Active Courses', val: '24', color: 'text-indigo-600', bg: 'bg-indigo-50 dark:bg-indigo-950/40' },
                          { label: 'Enrolled', val: '186', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-950/40' },
                          { label: 'Completed', val: '142', color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-950/40' },
                          { label: 'Certifications', val: '38', color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-950/40' },
                        ].map(c => (
                          <div key={c.label} className={`p-1.5 rounded-xl ${c.bg} border border-slate-200/50 dark:border-slate-700/40`}>
                            <p className={`font-extrabold text-sm ${c.color} leading-none`}>{c.val}</p>
                            <p className="text-[6px] text-slate-500 leading-tight mt-0.5">{c.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-bold text-[8px]">Active Learning Tracks</span>
                          <span className="text-[7px] text-indigo-600">View All</span>
                        </div>
                        <div className="space-y-1.5">
                          {[
                            { title: 'HR Compliance & Labor Law 2026', enrolled: 48, prog: 78, color: 'bg-indigo-500' },
                            { title: 'Leadership & Management Skills', enrolled: 32, prog: 55, color: 'bg-blue-500' },
                            { title: 'Data Analytics for HR Professionals', enrolled: 24, prog: 90, color: 'bg-emerald-500' },
                            { title: 'Effective Communication at Work', enrolled: 62, prog: 41, color: 'bg-amber-500' },
                          ].map(c => (
                            <div key={c.title} className="space-y-0.5">
                              <div className="flex justify-between text-[7px]">
                                <span className="text-slate-700 dark:text-slate-300 truncate font-semibold">{c.title}</span>
                                <span className="text-slate-400 ml-1 shrink-0">{c.enrolled} enrolled</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-full h-1.5"><div className={`${c.color} h-1.5 rounded-full`} style={{ width: `${c.prog}%` }} /></div>
                                <span className="text-[6.5px] font-bold text-slate-600 dark:text-slate-400 w-6 text-right">{c.prog}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 overflow-hidden">
                        <div className="flex items-center justify-between p-1.5 border-b border-slate-100 dark:border-slate-800">
                          <span className="font-bold text-[8px]">Recent Certifications</span>
                          <span className="text-[7px] text-indigo-600">View All</span>
                        </div>
                        <table className="w-full text-[7px]">
                          <tbody className="divide-y divide-slate-50 dark:divide-slate-800/40">
                            {[
                              { name: 'Maleyka Bilal', course: 'HR Compliance', date: '15 Sep 2026', badge: 'Certified' },
                              { name: 'Ali Raza', course: 'Data Analytics', date: '12 Sep 2026', badge: 'Distinction' },
                              { name: 'Sarah Khan', course: 'Leadership Skills', date: '10 Sep 2026', badge: 'Certified' },
                              { name: 'Usman Tariq', course: 'Communication', date: '08 Sep 2026', badge: 'Certified' },
                            ].map(r => (
                              <tr key={r.name} className="text-slate-700 dark:text-slate-300">
                                <td className="p-1 font-semibold">{r.name}</td>
                                <td className="p-1 text-slate-500">{r.course}</td>
                                <td className="p-1 text-slate-400">{r.date}</td>
                                <td className="p-1"><span className="px-1 py-0.5 rounded-full bg-amber-50 text-amber-600 font-bold text-[6px]">{r.badge}</span></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="grid grid-cols-4 gap-1">
                        {[
                          { label: 'Create Course', icon: Layers, color: 'text-indigo-600' },
                          { label: 'Assign Training', icon: UserCheck, color: 'text-blue-600' },
                          { label: 'Issue Certificate', icon: Award, color: 'text-amber-600' },
                          { label: 'Skill Gap Report', icon: TrendingUp, color: 'text-emerald-600' },
                        ].map(a => {
                          const Icon = a.icon; return (
                            <div key={a.label} className="p-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/50 flex flex-col items-center text-center gap-0.5">
                              <Icon className={`w-3 h-3 ${a.color}`} />
                              <span className="font-bold text-[6.5px] text-slate-700 dark:text-slate-300 leading-tight">{a.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* SCREEN 9: TASK MANAGEMENT (Matches User Screenshot) */}
                  {activeIndex === 8 && (
                    <div className="space-y-2">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-extrabold text-xs text-slate-900 dark:text-white">Task Management</h4>
                          <p className="text-[8px] text-slate-400">Organize. Collaborate. Get Things Done.</p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="flex items-center gap-1 text-[7.5px] font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700">
                            <Calendar className="w-2.5 h-2.5 text-slate-500" />
                            <span>This Week</span>
                            <ChevronDown className="w-2 h-2 text-slate-400" />
                          </div>
                          <button className="px-2 py-0.5 rounded-lg bg-blue-600 text-white text-[7.5px] font-bold flex items-center gap-0.5 shadow-sm">
                            <Plus className="w-2.5 h-2.5" />
                            <span>Create Task</span>
                          </button>
                        </div>
                      </div>

                      {/* 4 KPI Cards */}
                      <div className="grid grid-cols-4 gap-1.5">
                        {[
                          { label: 'Total Tasks', value: '48', trend: '↑ 12%', vs: 'vs last week', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-950/40', icon: CalendarDays },
                          { label: 'Completed', value: '28', trend: '↑ 25%', vs: 'vs last week', color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-950/40', icon: CheckCircle2 },
                          { label: 'In Progress', value: '16', trend: '↑ 8%', vs: 'vs last week', color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-950/40', icon: Clock },
                          { label: 'Overdue', value: '4', trend: '↓ 50%', vs: 'vs last week', color: 'text-rose-600', bg: 'bg-rose-50 dark:bg-rose-950/40', icon: HelpCircle },
                        ].map((card) => {
                          const Icon = card.icon;
                          return (
                            <div key={card.label} className={`p-1.5 rounded-xl ${card.bg} border border-slate-200/50 dark:border-slate-700/40 relative`}>
                              <div className="flex items-center justify-between">
                                <span className={`font-extrabold text-sm ${card.color} leading-none`}>{card.value}</span>
                                <Icon className={`w-3 h-3 ${card.color} opacity-80`} />
                              </div>
                              <p className="text-[6px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">{card.label}</p>
                              <p className={`text-[5.5px] font-bold ${card.color} mt-0.5`}>
                                {card.trend} <span className="text-slate-400 font-normal">{card.vs}</span>
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      {/* Middle Section: My Tasks (Left) + Task Overview Donut & Team Workload (Right) */}
                      <div className="grid grid-cols-12 gap-1.5">
                        {/* Left 7 cols: My Tasks */}
                        <div className="col-span-7 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 p-2 space-y-1.5">
                          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                            <span className="font-bold text-[8px] text-slate-900 dark:text-white">My Tasks</span>
                            <span className="text-[7px] font-semibold text-blue-600 hover:underline cursor-pointer">View All</span>
                          </div>

                          {/* Filter Badges */}
                          <div className="flex items-center gap-1">
                            {[
                              { label: 'All (48)', active: true },
                              { label: 'To Do (16)', active: false },
                              { label: 'In Progress (16)', active: false },
                              { label: 'Completed (28)', active: false },
                            ].map((tab) => (
                              <span
                                key={tab.label}
                                className={`px-1.5 py-0.5 rounded-md text-[6px] font-bold ${tab.active
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                                  }`}
                              >
                                tab.label
                              </span>
                            ))}
                          </div>

                          {/* Task Rows */}
                          <div className="space-y-1">
                            {[
                              { title: 'Prepare monthly financial report', dept: 'Finance', date: 'Sep 22, 2026', prio: 'High', prioBg: 'bg-rose-50 text-rose-600' },
                              { title: 'Update employee onboarding flow', dept: 'HR', date: 'Sep 23, 2026', prio: 'Medium', prioBg: 'bg-amber-50 text-amber-600' },
                              { title: 'Design new landing page', dept: 'Marketing', date: 'Sep 25, 2026', prio: 'Medium', prioBg: 'bg-amber-50 text-amber-600' },
                              { title: 'Review AI model documentation', dept: 'Product', date: 'Sep 26, 2026', prio: 'Low', prioBg: 'bg-emerald-50 text-emerald-600' },
                              { title: 'Team meeting preparation', dept: 'Operations', date: 'Sep 26, 2026', prio: 'Low', prioBg: 'bg-emerald-50 text-emerald-600' },
                            ].map((t) => (
                              <div key={t.title} className="flex items-center justify-between p-1 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80 text-[6.5px]">
                                <div className="flex items-center gap-1.5 min-w-0">
                                  <div className="w-2.5 h-2.5 rounded border border-slate-300 dark:border-slate-600 flex items-center justify-center shrink-0" />
                                  <div className="min-w-0">
                                    <p className="font-semibold text-slate-800 dark:text-slate-200 truncate">{t.title}</p>
                                    <p className="text-[5.5px] text-slate-400 flex items-center gap-1">
                                      <span className="text-blue-500 font-medium">{t.dept}</span>
                                      <span>•</span>
                                      <span>{t.date}</span>
                                    </p>
                                  </div>
                                </div>
                                <span className={`px-1 py-0.5 rounded text-[5.5px] font-bold shrink-0 ${t.prioBg}`}>
                                  {t.prio}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right 5 cols: Task Overview Donut & Team Workload */}
                        <div className="col-span-5 space-y-1.5">
                          {/* Task Overview Donut */}
                          <div className="p-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                            <span className="font-bold text-[7.5px] text-slate-900 dark:text-white block mb-0.5">Task Overview</span>
                            <div className="flex items-center gap-1.5">
                              <div className="relative w-11 h-11 shrink-0">
                                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                                  <circle cx="18" cy="18" r="14" fill="none" stroke="#10b981" strokeWidth="5" strokeDasharray="58 42" />
                                  <circle cx="18" cy="18" r="14" fill="none" stroke="#3b82f6" strokeWidth="5" strokeDasharray="33 67" strokeDashoffset="-58" />
                                  <circle cx="18" cy="18" r="14" fill="none" stroke="#8b5cf6" strokeWidth="5" strokeDasharray="8 92" strokeDashoffset="-91" />
                                  <circle cx="18" cy="18" r="14" fill="none" stroke="#ef4444" strokeWidth="5" strokeDasharray="8 92" strokeDashoffset="-99" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center flex-col">
                                  <span className="text-[7.5px] font-black text-slate-800 dark:text-white leading-none">48</span>
                                  <span className="text-[4.5px] text-slate-400 leading-none">Total</span>
                                </div>
                              </div>
                              <div className="space-y-0.5 flex-1">
                                {[
                                  { label: 'Completed', pct: '58%', color: 'bg-emerald-500' },
                                  { label: 'In Progress', pct: '33%', color: 'bg-blue-500' },
                                  { label: 'To Do', pct: '8%', color: 'bg-purple-500' },
                                  { label: 'Overdue', pct: '8%', color: 'bg-rose-500' },
                                ].map((l) => (
                                  <div key={l.label} className="flex items-center justify-between text-[6px]">
                                    <div className="flex items-center gap-0.5">
                                      <span className={`w-1.5 h-1.5 rounded-full ${l.color}`} />
                                      <span className="text-slate-600 dark:text-slate-400">{l.label}</span>
                                    </div>
                                    <span className="font-bold text-slate-700 dark:text-slate-300">{l.pct}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Team Workload */}
                          <div className="p-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-[7.5px] text-slate-900 dark:text-white">Team Workload</span>
                              <span className="text-[6px] text-blue-600">View All</span>
                            </div>
                            {[
                              { name: 'Areeba Khan', role: 'Design', pct: 80, bar: 'bg-blue-500' },
                              { name: 'Usman Tariq', role: 'Dev', pct: 65, bar: 'bg-blue-500' },
                              { name: 'Sara Khan', role: 'HR', pct: 50, bar: 'bg-blue-500' },
                              { name: 'Ali Raza', role: 'Ops', pct: 70, bar: 'bg-blue-500' },
                              { name: 'Ayesha Noor', role: 'Mktg', pct: 40, bar: 'bg-purple-500' },
                            ].map((w) => (
                              <div key={w.name} className="flex items-center justify-between text-[6px] gap-1">
                                <span className="text-slate-700 dark:text-slate-300 truncate w-14">{w.name}</span>
                                <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-full h-1">
                                  <div className={`${w.bar} h-1 rounded-full`} style={{ width: `${w.pct}%` }} />
                                </div>
                                <span className="font-bold text-slate-600 dark:text-slate-400 w-5 text-right">{w.pct}%</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* 4 Bottom Quick Action Cards */}
                      <div className="grid grid-cols-4 gap-1">
                        {[
                          { label: 'Create Task', sub: 'Assign tasks in seconds', icon: CheckSquare, color: 'text-blue-600' },
                          { label: 'Set Deadlines', sub: 'Keep your team on track', icon: Calendar, color: 'text-purple-600' },
                          { label: 'Track Progress', sub: 'Real-time status updates', icon: BarChart3, color: 'text-emerald-600' },
                          { label: 'Collaborate', sub: 'Discuss and share files', icon: Users, color: 'text-cyan-600' },
                        ].map((a) => {
                          const Icon = a.icon;
                          return (
                            <div key={a.label} className="p-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/40 flex flex-col items-center text-center gap-0.5">
                              <Icon className={`w-3 h-3 ${a.color}`} />
                              <span className="font-bold text-[6.5px] text-slate-800 dark:text-slate-200 leading-tight">{a.label}</span>
                              <span className="text-[5.5px] text-slate-400 leading-tight">{a.sub}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* SCREEN 10: HRIFY TEAM */}
                  {activeIndex === 9 && (
                    <div className="space-y-2">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-extrabold text-xs text-slate-900 dark:text-white">HRIFY Team</h4>
                          <p className="text-[8px] text-slate-400">Connect. Communicate. Collaborate seamlessly.</p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[7.5px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-lg">All Channels</span>
                          <button className="px-2 py-0.5 rounded-lg bg-pink-600 text-white text-[7.5px] font-bold flex items-center gap-0.5 shadow-sm">
                            <Plus className="w-2.5 h-2.5" />
                            <span>New Chat</span>
                          </button>
                        </div>
                      </div>

                      {/* 4 KPI Cards */}
                      <div className="grid grid-cols-4 gap-1.5">
                        {[
                          { label: 'Active Channels', val: '24', trend: '↑ 4 new', color: 'text-pink-600', bg: 'bg-pink-50 dark:bg-pink-950/40' },
                          { label: 'Direct Messages', val: '142', trend: '6 unread', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-950/40' },
                          { label: 'Live Huddles', val: '3', trend: '12 in call', color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-950/40' },
                          { label: 'Shared Files', val: '512', trend: '2.4 GB', color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-950/40' },
                        ].map((c) => (
                          <div key={c.label} className={`p-1.5 rounded-xl ${c.bg} border border-slate-200/50 dark:border-slate-700/40`}>
                            <p className={`font-extrabold text-sm ${c.color} leading-none`}>{c.val}</p>
                            <p className="text-[6px] text-slate-500 leading-tight mt-0.5">{c.label}</p>
                            <p className={`text-[5.5px] font-bold ${c.color} mt-0.5`}>{c.trend}</p>
                          </div>
                        ))}
                      </div>

                      {/* Middle Section: Channels & Direct Chats (Left 7 cols) + Live Huddle & Pinned Docs (Right 5 cols) */}
                      <div className="grid grid-cols-12 gap-1.5">
                        {/* Channels & Chats */}
                        <div className="col-span-7 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 p-2 space-y-1.5">
                          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
                            <span className="font-bold text-[8px] text-slate-900 dark:text-white">Channels &amp; Direct Messages</span>
                            <span className="text-[7px] text-pink-600 font-semibold">View All</span>
                          </div>
                          <div className="space-y-1">
                            {[
                              { name: '# general-announcements', desc: 'Company townhall scheduled for Friday', badge: '248 members', isChannel: true, unread: 0 },
                              { name: '# engineering-core', desc: 'Ali: PR #142 approved and deployed', badge: '3 unread', isChannel: true, unread: 3 },
                              { name: '# design-team', desc: 'Sara: Updated dashboard component tokens', badge: '18 members', isChannel: true, unread: 0 },
                              { name: 'Maleyka Bilal (Product Lead)', desc: 'Sent Q4 product specs draft', badge: 'Online', isChannel: false, unread: 1 },
                              { name: 'Usman Tariq (Dev Lead)', desc: 'Meeting in 10 minutes on audio huddle', badge: 'Online', isChannel: false, unread: 0 },
                            ].map((item) => (
                              <div key={item.name} className="flex items-center justify-between p-1 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80 text-[6.5px]">
                                <div className="flex items-center gap-1.5 min-w-0">
                                  <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold text-[6px] shrink-0 ${item.isChannel ? 'bg-pink-100 dark:bg-pink-900/60 text-pink-600' : 'bg-blue-100 dark:bg-blue-900/60 text-blue-600'
                                    }`}>
                                    {item.isChannel ? '#' : '●'}
                                  </div>
                                  <div className="min-w-0">
                                    <p className="font-semibold text-slate-800 dark:text-slate-200 truncate">{item.name}</p>
                                    <p className="text-[5.5px] text-slate-400 truncate">{item.desc}</p>
                                  </div>
                                </div>
                                <span className={`px-1 py-0.5 rounded text-[5.5px] font-bold shrink-0 ${item.unread > 0 ? 'bg-pink-500 text-white' : 'text-slate-400'
                                  }`}>
                                  {item.badge}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right Column: Live Meeting / Huddle + Shared Files */}
                        <div className="col-span-5 space-y-1.5">
                          {/* Live Huddle Card */}
                          <div className="p-1.5 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 dark:from-pink-950/40 dark:to-purple-950/40 border border-pink-200 dark:border-pink-800/50 space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="flex items-center gap-1 text-[7px] font-black text-pink-600 dark:text-pink-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Live Huddle
                              </span>
                              <span className="text-[6px] text-slate-500">4 in call</span>
                            </div>
                            <p className="text-[7.5px] font-bold text-slate-800 dark:text-white leading-tight">Sprint Planning &amp; Design Sync</p>
                            <div className="flex items-center justify-between pt-0.5">
                              <div className="flex -space-x-1">
                                {['A', 'U', 'S', 'M'].map((letter, i) => (
                                  <div key={i} className="w-4 h-4 rounded-full bg-slate-700 text-white font-bold text-[6px] flex items-center justify-center border border-white dark:border-slate-900">
                                    {letter}
                                  </div>
                                ))}
                              </div>
                              <button className="px-2 py-0.5 rounded-md bg-emerald-600 text-white font-bold text-[6.5px] flex items-center gap-0.5 shadow-sm">
                                <Video className="w-2.5 h-2.5" />
                                Join Call
                              </button>
                            </div>
                          </div>

                          {/* Pinned Documents */}
                          <div className="p-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-[7.5px] text-slate-900 dark:text-white">Recent Shared Files</span>
                              <span className="text-[6px] text-pink-600">View All</span>
                            </div>
                            {[
                              { file: 'HRIFY_Brand_Guidelines_v2.pdf', size: '3.4 MB' },
                              { file: 'Q4_Hiring_Roadmap_2026.xlsx', size: '1.2 MB' },
                              { file: 'Design_System_Tokens.json', size: '420 KB' },
                            ].map((f) => (
                              <div key={f.file} className="flex items-center justify-between text-[6px]">
                                <div className="flex items-center gap-1 truncate">
                                  <FileText className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                                  <span className="text-slate-700 dark:text-slate-300 truncate">{f.file}</span>
                                </div>
                                <span className="text-slate-400 shrink-0">{f.size}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* 4 Bottom Quick Actions */}
                      <div className="grid grid-cols-4 gap-1">
                        {[
                          { label: 'Start Huddle', sub: 'Instant audio/video room', icon: Video, color: 'text-pink-600' },
                          { label: 'Create Channel', sub: 'Project or department', icon: MessageSquare, color: 'text-purple-600' },
                          { label: 'Share Document', sub: 'Encrypted cloud storage', icon: Folder, color: 'text-blue-600' },
                          { label: 'Broadcast', sub: 'Company-wide alert', icon: Bell, color: 'text-amber-600' },
                        ].map((a) => {
                          const Icon = a.icon;
                          return (
                            <div key={a.label} className="p-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/50 flex flex-col items-center text-center gap-0.5">
                              <Icon className={`w-3 h-3 ${a.color}`} />
                              <span className="font-bold text-[6.5px] text-slate-700 dark:text-slate-300 leading-tight">{a.label}</span>
                              <span className="text-[5.5px] text-slate-400 leading-tight">{a.sub}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* SCREEN 11: EMPLOYEE SERVE NOW */}
                  {activeIndex === 10 && (
                    <div className="space-y-2">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-extrabold text-xs text-slate-900 dark:text-white">Employee Serve Now</h4>
                          <p className="text-[8px] text-slate-400">Instant HR Services. Automated Letters &amp; Helpdesk.</p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[7.5px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-lg">All Requests</span>
                          <button className="px-2 py-0.5 rounded-lg bg-cyan-600 text-white text-[7.5px] font-bold flex items-center gap-0.5 shadow-sm">
                            <Plus className="w-2.5 h-2.5" />
                            <span>Request Letter</span>
                          </button>
                        </div>
                      </div>

                      {/* 4 KPI Cards */}
                      <div className="grid grid-cols-4 gap-1.5">
                        {[
                          { label: 'Letters Issued', val: '76', trend: '↑ 18%', color: 'text-cyan-600', bg: 'bg-cyan-50 dark:bg-cyan-950/40' },
                          { label: 'Helpdesk Tickets', val: '12', trend: '4 Pending', color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-950/40' },
                          { label: 'Avg Resolution', val: '2.4 hrs', trend: '↓ 40% faster', color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-950/40' },
                          { label: 'QR Verified', val: '100%', trend: 'Tamper-Proof', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-950/40' },
                        ].map((c) => (
                          <div key={c.label} className={`p-1.5 rounded-xl ${c.bg} border border-slate-200/50 dark:border-slate-700/40`}>
                            <p className={`font-extrabold text-sm ${c.color} leading-none`}>{c.val}</p>
                            <p className="text-[6px] text-slate-500 leading-tight mt-0.5">{c.label}</p>
                            <p className={`text-[5.5px] font-bold ${c.color} mt-0.5`}>{c.trend}</p>
                          </div>
                        ))}
                      </div>

                      {/* 1-Click Instant Letter Generator Grid */}
                      <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 space-y-1.5">
                        <span className="font-bold text-[8px] text-slate-900 dark:text-white block">Instant 1-Click Letter Generator</span>
                        <div className="grid grid-cols-4 gap-1">
                          {[
                            { title: 'Salary Certificate', desc: 'Bank loan & visa format', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-950/40' },
                            { title: 'Experience Letter', desc: 'Tenure & role verified', icon: Award, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-950/40' },
                            { title: 'NOC / Travel Letter', desc: 'Embassy & consular ready', icon: FileCheck, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-950/40' },
                            { title: 'Employment Proof', desc: 'Digital QR stamped', icon: ShieldCheck, color: 'text-cyan-600', bg: 'bg-cyan-50 dark:bg-cyan-950/40' },
                          ].map((item) => {
                            const Icon = item.icon;
                            return (
                              <div key={item.title} className={`p-1.5 rounded-lg ${item.bg} border border-slate-200/50 dark:border-slate-700/40 text-center flex flex-col items-center gap-0.5 hover:scale-[1.02] transition-all cursor-pointer`}>
                                <Icon className={`w-3.5 h-3.5 ${item.color}`} />
                                <span className="font-bold text-[6.5px] text-slate-800 dark:text-white leading-tight">{item.title}</span>
                                <span className="text-[5.5px] text-slate-400 leading-tight">{item.desc}</span>
                                <span className={`text-[5.5px] font-black ${item.color} mt-0.5`}>⚡ 1-Click PDF</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Recent Service Requests & Helpdesk Tickets Table */}
                      <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 overflow-hidden">
                        <div className="flex items-center justify-between p-1.5 border-b border-slate-100 dark:border-slate-800">
                          <span className="font-bold text-[8px] text-slate-900 dark:text-white">Recent Requests &amp; Helpdesk Inquiries</span>
                          <span className="text-[7px] text-cyan-600 font-semibold">View All (76)</span>
                        </div>
                        <table className="w-full text-[7px]">
                          <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-400 font-bold">
                            <tr>
                              <th className="p-1 text-left">Employee</th>
                              <th className="p-1 text-left">Request Type</th>
                              <th className="p-1 text-left">Date</th>
                              <th className="p-1 text-left">QR Status</th>
                              <th className="p-1 text-right">Action</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-50 dark:divide-slate-800/40">
                            {[
                              { name: 'Maleyka Bilal', type: 'Salary Certificate (Embassy)', date: 'Today, 10:30 AM', status: 'Ready', sc: 'bg-emerald-50 text-emerald-600' },
                              { name: 'Ali Raza', type: 'Experience Letter', date: 'Yesterday', status: 'Ready', sc: 'bg-emerald-50 text-emerald-600' },
                              { name: 'Sara Fatima', type: 'Tax Deduction Statement', date: '23 Sep 2026', status: 'Processing', sc: 'bg-amber-50 text-amber-600' },
                              { name: 'Usman Tariq', type: 'NOC for Official Travel', date: '21 Sep 2026', status: 'Ready', sc: 'bg-emerald-50 text-emerald-600' },
                            ].map((r) => (
                              <tr key={r.name} className="text-slate-700 dark:text-slate-300">
                                <td className="p-1 font-semibold">{r.name}</td>
                                <td className="p-1 text-slate-600 dark:text-slate-400">{r.type}</td>
                                <td className="p-1 text-slate-400">{r.date}</td>
                                <td className="p-1">
                                  <span className={`px-1 py-0.5 rounded-full font-bold text-[6px] ${r.sc}`}>{r.status}</span>
                                </td>
                                <td className="p-1 text-right font-bold text-cyan-600 cursor-pointer hover:underline">Download</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* 4 Bottom Quick Actions */}
                      <div className="grid grid-cols-4 gap-1">
                        {[
                          { label: 'Issue Letter', sub: 'Automated digital draft', icon: FileText, color: 'text-cyan-600' },
                          { label: 'Helpdesk SLA', sub: 'Track open tickets', icon: HelpCircle, color: 'text-amber-600' },
                          { label: 'Verify QR Code', sub: 'Authenticate document', icon: ShieldCheck, color: 'text-emerald-600' },
                          { label: 'Templates', sub: 'Custom policy letters', icon: Settings, color: 'text-slate-600' },
                        ].map((a) => {
                          const Icon = a.icon;
                          return (
                            <div key={a.label} className="p-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/50 flex flex-col items-center text-center gap-0.5">
                              <Icon className={`w-3 h-3 ${a.color}`} />
                              <span className="font-bold text-[6.5px] text-slate-700 dark:text-slate-300 leading-tight">{a.label}</span>
                              <span className="text-[5.5px] text-slate-400 leading-tight">{a.sub}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* SCREEN 12: REPORTS & ANALYTICS */}
                  {activeIndex === 11 && (
                    <div className="space-y-2">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-extrabold text-xs text-slate-900 dark:text-white">Reports &amp; Analytics</h4>
                          <p className="text-[8px] text-slate-400">Actionable executive intelligence &amp; predictive HR data.</p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="flex items-center gap-1 text-[7.5px] font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700">
                            <Download className="w-2.5 h-2.5 text-slate-500" />
                            <span>Export (Excel / PDF)</span>
                          </div>
                          <button className="px-2 py-0.5 rounded-lg bg-indigo-600 text-white text-[7.5px] font-bold flex items-center gap-0.5 shadow-sm">
                            <Plus className="w-2.5 h-2.5" />
                            <span>Build Report</span>
                          </button>
                        </div>
                      </div>

                      {/* 4 KPI Cards */}
                      <div className="grid grid-cols-4 gap-1.5">
                        {[
                          { label: 'Retention Rate', val: '96.2%', trend: '↑ 2.1% YoY', color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-950/40' },
                          { label: 'Avg Cost per Hire', val: 'PKR 45k', trend: '↓ 12% vs Q2', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-950/40' },
                          { label: 'Monthly Payroll', val: 'PKR 24.8M', trend: '100% on-time', color: 'text-indigo-600', bg: 'bg-indigo-50 dark:bg-indigo-950/40' },
                          { label: 'eNPS Satisfaction', val: '+58', trend: '↑ 8 pts vs Q2', color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-950/40' },
                        ].map((c) => (
                          <div key={c.label} className={`p-1.5 rounded-xl ${c.bg} border border-slate-200/50 dark:border-slate-700/40`}>
                            <p className={`font-extrabold text-sm ${c.color} leading-none`}>{c.val}</p>
                            <p className="text-[6px] text-slate-500 leading-tight mt-0.5">{c.label}</p>
                            <p className={`text-[5.5px] font-bold ${c.color} mt-0.5`}>{c.trend}</p>
                          </div>
                        ))}
                      </div>

                      {/* Middle Section: Department Distribution Bar Chart + Attrition Risk AI Radar */}
                      <div className="grid grid-cols-12 gap-1.5">
                        {/* Department Cost & Headcount Share (7 cols) */}
                        <div className="col-span-7 p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-[8px] text-slate-900 dark:text-white">Department Headcount &amp; Cost Share</span>
                            <span className="text-[6.5px] text-slate-400">248 Total Employees</span>
                          </div>
                          <div className="space-y-1">
                            {[
                              { dept: 'Engineering & Tech', count: 88, cost: 'PKR 9.2M', pct: 36, color: 'bg-blue-500' },
                              { dept: 'Operations & Sales', count: 64, cost: 'PKR 6.1M', pct: 26, color: 'bg-indigo-500' },
                              { dept: 'Product & Design', count: 42, cost: 'PKR 4.8M', pct: 17, color: 'bg-purple-500' },
                              { dept: 'HR & Administration', count: 32, cost: 'PKR 3.1M', pct: 13, color: 'bg-emerald-500' },
                              { dept: 'Marketing & Comms', count: 22, cost: 'PKR 1.6M', pct: 8, color: 'bg-amber-500' },
                            ].map((d) => (
                              <div key={d.dept} className="space-y-0.5">
                                <div className="flex justify-between text-[6.5px]">
                                  <span className="text-slate-700 dark:text-slate-300 font-semibold">{d.dept} ({d.count})</span>
                                  <span className="font-bold text-slate-800 dark:text-slate-200">{d.cost}</span>
                                </div>
                                <div className="bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                                  <div className={`${d.color} h-1.5 rounded-full`} style={{ width: `${d.pct}%` }} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Attrition Risk & Predictive AI (5 cols) */}
                        <div className="col-span-5 space-y-1.5">
                          <div className="p-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-[7.5px] text-slate-900 dark:text-white">Predictive Attrition Risk</span>
                              <span className="text-[6px] text-emerald-600 font-bold">Low Risk</span>
                            </div>
                            <div className="p-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/50 dark:border-emerald-900/40 text-[6px]">
                              <p className="font-bold text-emerald-700 dark:text-emerald-400">96.2% High Retention Rate</p>
                              <p className="text-slate-500 dark:text-slate-400 mt-0.5">0 resignation signals in Tech dept for past 90 days.</p>
                            </div>
                          </div>

                          <div className="p-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 space-y-1">
                            <span className="font-bold text-[7.5px] text-slate-900 dark:text-white block">Ready Executive Exports</span>
                            {[
                              { name: 'Monthly_Payroll_Summary.xlsx', size: '2.8 MB' },
                              { name: 'Q3_Performance_Matrix.pdf', size: '4.1 MB' },
                              { name: 'Workforce_Headcount_Report.csv', size: '890 KB' },
                            ].map((exp) => (
                              <div key={exp.name} className="flex items-center justify-between text-[6px] p-0.5 rounded bg-slate-50 dark:bg-slate-800">
                                <span className="text-slate-700 dark:text-slate-300 truncate w-24">{exp.name}</span>
                                <span className="font-bold text-indigo-600 cursor-pointer">Export</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* 4 Bottom Quick Actions */}
                      <div className="grid grid-cols-4 gap-1">
                        {[
                          { label: 'Headcount Trend', sub: '12-month analytics', icon: BarChart3, color: 'text-indigo-600' },
                          { label: 'Payroll Variance', sub: 'Budget comparison', icon: DollarSign, color: 'text-emerald-600' },
                          { label: 'Attrition Radar', sub: 'AI retention warnings', icon: TrendingUp, color: 'text-rose-600' },
                          { label: 'Export All Reports', sub: 'Excel, CSV, PDF formats', icon: Download, color: 'text-blue-600' },
                        ].map((a) => {
                          const Icon = a.icon;
                          return (
                            <div key={a.label} className="p-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/50 flex flex-col items-center text-center gap-0.5">
                              <Icon className={`w-3 h-3 ${a.color}`} />
                              <span className="font-bold text-[6.5px] text-slate-700 dark:text-slate-300 leading-tight">{a.label}</span>
                              <span className="text-[5.5px] text-slate-400 leading-tight">{a.sub}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* BOTTOM "HOW IT WORKS" & NAVIGATION CONTROLS BAR (Matches Screenshot 3)    */}
      {/* ========================================================================= */}
      <div className="relative z-10 mt-8 pt-6 border-t border-slate-200/70 dark:border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* How it works 3-step indicator */}
        <div className="flex items-center gap-4 text-left">
          <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 hidden sm:inline">
            HOW IT WORKS
          </span>
          <div className="flex items-center gap-3 text-[10px] text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-blue-600 text-white font-bold text-[8px] flex items-center justify-center">1</span>
              <span>Scroll down</span>
            </div>
            <span className="text-slate-400">→</span>
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-blue-600 text-white font-bold text-[8px] flex items-center justify-center">2</span>
              <span>Journey point updates</span>
            </div>
            <span className="text-slate-400">→</span>
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-blue-600 text-white font-bold text-[8px] flex items-center justify-center">3</span>
              <span>Module screen changes</span>
            </div>
          </div>
        </div>

        {/* Prev / Next Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer flex items-center gap-1 shadow-sm"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Previous Module</span>
          </button>

          <button
            onClick={handleNext}
            className="px-5 py-2 rounded-full bg-gradient-brand text-white font-bold text-xs shadow-lg shadow-blue-500/25 hover:brightness-105 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Next Module</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
};
