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
  PieChart
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
    headline: 'Orchestrate Workflows.',
    gradientText: 'Boost Team Productivity.',
    description: 'Create, assign, and track tasks for individuals and teams. Set milestone deadlines, dependencies, and automated reminders for accountability.',
    features: [
      { icon: 'CheckSquare', title: 'Visual Kanban Boards', desc: 'Track progress across customizable columns', color: 'bg-violet-50 text-violet-600' },
      { icon: 'Clock', title: 'Milestone Deadlines', desc: 'Automated reminders and notifications', color: 'bg-blue-50 text-blue-600' },
      { icon: 'Users', title: 'Team Delegation', desc: 'Assign sub-tasks with clear ownership', color: 'bg-teal-50 text-teal-600' },
    ]
  },
  {
    id: 'team-chat',
    step: '10',
    num: 10,
    category: 'HRIFY TEAM',
    badge: 'HRIFY TEAM',
    headline: 'Stay Connected.',
    gradientText: 'Internal Chat & Calls.',
    description: 'Internal communication hub with real-time channels, audio/video conferencing, document sharing, and announcements across distributed teams.',
    features: [
      { icon: 'MessageSquare', title: 'Department Channels', desc: 'Organized topic and project rooms', color: 'bg-pink-50 text-pink-600' },
      { icon: 'Video', title: 'HD Audio & Video Calls', desc: 'Instant 1-on-1 and team huddles', color: 'bg-purple-50 text-purple-600' },
      { icon: 'Folder', title: 'Secure File Sharing', desc: 'Encrypted document exchanges', color: 'bg-blue-50 text-blue-600' },
    ]
  },
  {
    id: 'serve-now',
    step: '11',
    num: 11,
    category: 'EMPLOYEE SERVE NOW',
    badge: 'EMPLOYEE SERVE NOW',
    headline: 'Instant HR Services.',
    gradientText: 'Automated Letters & Desk.',
    description: 'Request and instantly generate official employment letters (salary, experience, visa letters), certificates, and track internal HR query tickets.',
    features: [
      { icon: 'FileText', title: '1-Click Letter Generator', desc: 'Pre-approved digital stamped letters', color: 'bg-cyan-50 text-cyan-600' },
      { icon: 'HelpCircle', title: 'SLA-Tracked Helpdesk', desc: 'Query ticketing with department routing', color: 'bg-amber-50 text-amber-600' },
      { icon: 'ShieldCheck', title: 'Digital Verification', desc: 'QR-code verifiable document authenticity', color: 'bg-emerald-50 text-emerald-600' },
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
    description: 'Turn people data into actionable executive insights with custom report builders, attrition risk indicators, department cost analysis, and 1-click exports.',
    features: [
      { icon: 'PieChart', title: 'Custom Report Builder', desc: 'Drag-and-drop metrics and filters', color: 'bg-blue-50 text-blue-600' },
      { icon: 'TrendingUp', title: 'Attrition Risk AI', desc: 'Predictive signals on retention trends', color: 'bg-rose-50 text-rose-600' },
      { icon: 'Download', title: '1-Click Exporting', desc: 'Instant Excel, CSV, and PDF downloads', color: 'bg-emerald-50 text-emerald-600' },
    ]
  }
];

// SVG Curve 12-point layout points for vertical arc
const CURVE_POINTS = [
  { index: 0, step: '01', x: 28, y: 20 },
  { index: 1, step: '02', x: 50, y: 70 },
  { index: 2, step: '03', x: 74, y: 122 },
  { index: 3, step: '04', x: 88, y: 175 },
  { index: 4, step: '05', x: 92, y: 230 },
  { index: 5, step: '06', x: 86, y: 285 },
  { index: 6, step: '07', x: 72, y: 340 },
  { index: 7, step: '08', x: 54, y: 395 },
  { index: 8, step: '09', x: 42, y: 450 },
  { index: 9, step: '10', x: 48, y: 505 },
  { index: 10, step: '11', x: 70, y: 558 },
  { index: 11, step: '12', x: 105, y: 605 },
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
  const [activeIndex, setActiveIndex] = useState<number>(1); // Default to Module 02 or 01
  const [animating, setAnimating] = useState<boolean>(false);
  const sectionContainerRef = useRef<HTMLDivElement>(null);

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
    if (index === activeIndex || index < 0 || index >= MODULES_12.length) return;
    setAnimating(true);
    setActiveIndex(index);
    if (onSelectModule) {
      onSelectModule(MODULES_12[index].id);
    }
    setTimeout(() => setAnimating(false), 300);
  };

  const handleNext = () => {
    handleSelectModule((activeIndex + 1) % MODULES_12.length);
  };

  const handlePrev = () => {
    handleSelectModule((activeIndex - 1 + MODULES_12.length) % MODULES_12.length);
  };

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
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between pb-6 mb-6 border-b border-slate-200/70 dark:border-slate-800/80 gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/Assests/HRIFY_Logo_White_Background.png"
            alt="HRIFY - People Process Progress"
            className="h-9 w-auto object-contain dark:hidden"
          />
          <img
            src="/Assests/HRIFY_Logo_Dark_Background.png"
            alt="HRIFY - People Process Progress"
            className="h-9 w-auto object-contain hidden dark:block"
          />
        </div>

        {/* Center Pill: Current Phase Indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-900/50 shadow-sm">
          <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white font-extrabold text-[11px]">
            {currentMod.step} / 12
          </span>
          <span className="text-xs font-black tracking-wider text-blue-700 dark:text-blue-300 uppercase">
            {currentMod.badge}
          </span>
        </div>

        {/* Right Tagline */}
        <div className="hidden lg:flex flex-col text-right">
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            EMPOWERING PEOPLE
          </span>
          <span className="text-[8px] font-bold uppercase tracking-widest text-slate-400">
            ENABLING PROGRESS
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MAIN 3-COLUMN LAYOUT: LEFT INFO + CENTER 12-POINT CURVE + RIGHT DESKTOP UI */}
      {/* ========================================================================= */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* ========================================================================= */}
        {/* COLUMN 1 (4 COLS): MODULE INFO & 3 VALUE PROPOSITIONS                     */}
        {/* ========================================================================= */}
        <div className={`lg:col-span-4 space-y-5 text-left transition-all duration-300 ${
          animating ? 'opacity-30 translate-y-1' : 'opacity-100 translate-y-0'
        }`}>
          {/* Eyebrow */}
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-black tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-1">
              <span>{currentMod.step} / 12</span>
              <span>•</span>
              <span>{currentMod.badge}</span>
            </div>
            <div className="w-12 h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
          </div>

          {/* Big Bold Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
            {currentMod.headline} <br />
            <span className="text-gradient-brand">{currentMod.gradientText}</span>
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {currentMod.description}
          </p>

          {/* 3 Key Feature Cards */}
          <div className="space-y-2.5 pt-1">
            {currentMod.features.map((feat) => (
              <div
                key={feat.title}
                className="flex items-center gap-3 p-2.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-800 shadow-sm hover:border-blue-300 transition-colors"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${feat.color}`}>
                  {getFeatureIcon(feat.icon)}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white leading-tight">
                    {feat.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COLUMN 2 (3 COLS): 12-POINT S-CURVE INTERACTIVE JOURNEY                   */}
        {/* ========================================================================= */}
        <div className="hidden lg:flex lg:col-span-3 items-center justify-center relative select-none">
          <div className="relative w-[210px] h-[610px]">
            {/* SVG Connecting Curved Path */}
            <svg
              viewBox="0 0 160 620"
              className="w-full h-full absolute inset-0 pointer-events-none"
              fill="none"
            >
              <defs>
                <linearGradient id="journeyGlowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#6366F1" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Background Guide Track */}
              <path
                d="M 28,20 C 80,80 100,200 92,230 C 80,280 40,400 48,505 C 55,560 90,590 105,605"
                stroke="currentColor"
                strokeWidth="2"
                className="text-slate-200 dark:text-slate-800"
                strokeDasharray="4 4"
              />

              {/* Dynamic Active Segment */}
              <path
                d="M 28,20 C 80,80 100,200 92,230 C 80,280 40,400 48,505 C 55,560 90,590 105,605"
                stroke="url(#journeyGlowGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            {/* 12 Stepper Points along the curve */}
            {CURVE_POINTS.map((pt) => {
              const mod = MODULES_12[pt.index];
              const isActive = activeIndex === pt.index;
              const isPassed = activeIndex > pt.index;

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
                  {/* Circle Node */}
                  <button
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[10px] transition-all duration-300 shadow-sm cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white scale-125 shadow-lg shadow-blue-500/50 ring-4 ring-blue-100 dark:ring-blue-900/50 z-30 font-black'
                        : isPassed
                        ? 'bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-800 hover:scale-110'
                        : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 hover:border-blue-400 hover:scale-110'
                    }`}
                  >
                    {pt.step}
                  </button>

                  {/* Label next to node */}
                  <span
                    className={`text-[10.5px] font-semibold whitespace-nowrap pl-1 transition-colors ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400 font-extrabold text-xs'
                        : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'
                    }`}
                  >
                    {mod.badge.split(' ')[0]} {mod.badge.split(' ')[1] || ''}
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
                className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {m.step} • {m.badge.split(' ')[0]}
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* COLUMN 3 (5 COLS): DYNAMIC LIVE DESKTOP UI FOR THE ACTIVE MODULE          */}
        {/* ========================================================================= */}
        <div className="lg:col-span-5 w-full">
          {/* Laptop Screen Frame */}
          <div className="relative rounded-2xl p-2 sm:p-2.5 bg-slate-900 shadow-2xl border border-slate-700/80">
            {/* Camera dot */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-700" />

            {/* Display Window */}
            <div className="rounded-xl overflow-hidden bg-white dark:bg-[#0b101f] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 text-[11px] shadow-inner">
              <div className="flex h-[420px] sm:h-[460px]">
                
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
                            className={`w-full text-left px-2 py-1 rounded-lg flex items-center gap-1.5 transition-all truncate ${
                              isNavActive
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
                  
                  {/* SCREEN 2: EMPLOYEE MANAGEMENT TABLE (Matches Screenshot 3) */}
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

                  {/* DEFAULT SCREEN FOR OTHER MODULES: RICH DYNAMIC DASHBOARD PREVIEW */}
                  {activeIndex !== 1 && activeIndex !== 2 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[8px] font-bold text-blue-600 uppercase">{currentMod.badge}</span>
                          <h4 className="font-extrabold text-xs text-slate-900 dark:text-white leading-tight">{currentMod.headline}</h4>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 font-bold text-[8px]">
                          Module {currentMod.step}
                        </span>
                      </div>

                      {/* Feature Metric Summary Cards */}
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 shadow-sm">
                          <span className="text-[7.5px] text-slate-400 block mb-0.5">Automated Efficiency</span>
                          <span className="font-extrabold text-sm text-slate-900 dark:text-white">99.4%</span>
                          <span className="text-[7px] text-emerald-500 font-bold block mt-0.5">↑ Enterprise Verified</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 shadow-sm">
                          <span className="text-[7.5px] text-slate-400 block mb-0.5">Processing Time</span>
                          <span className="font-extrabold text-sm text-slate-900 dark:text-white">&lt; 1 sec</span>
                          <span className="text-[7px] text-blue-500 font-bold block mt-0.5">⚡ Real-time Sync</span>
                        </div>
                      </div>

                      {/* Workflow Capability Cards */}
                      <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 space-y-1.5">
                        <span className="font-bold text-[8.5px] text-slate-800 dark:text-slate-200 block">Workflow Highlights</span>
                        {currentMod.features.map((f) => (
                          <div key={f.title} className="flex items-center justify-between p-1 rounded-lg bg-slate-50 dark:bg-slate-800/70 text-[7.5px]">
                            <div className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3 h-3 text-blue-500" />
                              <span className="font-semibold text-slate-800 dark:text-slate-200">{f.title}</span>
                            </div>
                            <span className="text-slate-400">{f.desc}</span>
                          </div>
                        ))}
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
