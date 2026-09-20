import React, { useState } from 'react';
import { 
  Building, 
  TrendingUp, 
  Landmark, 
  Users2, 
  Factory, 
  ArrowRight, 
  Check, 
  Headphones, 
  Sparkles,
  HeartPulse,
  GraduationCap,
  Laptop,
  ShoppingCart,
  Briefcase,
  Building2,
  MoreHorizontal,
  Target,
  X,
  MessageSquare
} from 'lucide-react';
import { solutionsData, industriesList, SolutionCard } from '../data/solutions';

interface SolutionsProps {
  onOpenDemo: () => void;
  onOpenAI?: (topic?: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onOpenDemo, onOpenAI }) => {
  const [activeSegment, setActiveSegment] = useState('smes');
  const [infoBoxOpen, setInfoBoxOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<SolutionCard | null>(null);

  const segmentDetails: Record<string, { title: string; desc: string; icon: any; color: string }> = {
    smes: {
      title: 'SMEs & Startups',
      desc: 'Automate payroll, compliance, and onboarding with zero HR overhead.',
      icon: Building,
      color: 'text-blue-500',
    },
    growing: {
      title: 'Growing Businesses',
      desc: 'Seamlessly scale hiring pipelines, performance reviews, and department workflows.',
      icon: TrendingUp,
      color: 'text-purple-500',
    },
    enterprises: {
      title: 'Enterprises',
      desc: 'Enterprise security, custom workflows, multi-org hierarchy, and SLA support.',
      icon: Landmark,
      color: 'text-emerald-500',
    },
    'hr-teams': {
      title: 'HR Teams',
      desc: 'Eliminate repetitive admin work with AI document parsing and automated leave tracking.',
      icon: Users2,
      color: 'text-orange-500',
    },
    industry: {
      title: 'Industry Specific',
      desc: 'Tailored compliance frameworks for Healthcare, Tech, Retail, and Manufacturing.',
      icon: Factory,
      color: 'text-cyan-500',
    },
  };

  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building': return <Building className="w-6 h-6" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
      case 'Landmark': return <Landmark className="w-6 h-6" />;
      case 'Users2': return <Users2 className="w-6 h-6" />;
      case 'Factory': return <Factory className="w-6 h-6" />;
      default: return <Building className="w-6 h-6" />;
    }
  };

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-rose-500" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-indigo-500" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-sky-500" />;
      case 'Factory': return <Factory className="w-5 h-5 text-amber-500" />;
      case 'ShoppingCart': return <ShoppingCart className="w-5 h-5 text-emerald-500" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-blue-500" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-purple-500" />;
      default: return <MoreHorizontal className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <div className="w-full relative overflow-hidden pb-16">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-1/4 w-[600px] h-[350px] bg-blue-400/10 dark:bg-blue-600/10 blur-[130px] pointer-events-none -z-10" />

      {/* ========================================================= */}
      {/* HERO SECTION (Matches solutions.jpeg)                     */}
      {/* ========================================================= */}
      <section className="pt-8 pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wide">
                SOLUTIONS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              HR Solutions <br />
              <span className="text-gradient-brand">for Every Organization.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              No matter your industry or size, HRIFY adapts to your needs — helping you manage people, automate processes and drive growth.
            </p>

            {/* 3 Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <Building className="w-3.5 h-3.5 text-blue-600" />
                <span>Industry-Focused</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                <span>Scalable & Flexible</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Powered by AI</span>
              </div>
            </div>
          </div>

          {/* Right Visual Composition with AI Assistant & Segment Selectors */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Background circular gradient */}
            <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-blue-400/20 via-sky-300/20 to-purple-400/20 blur-2xl -z-10" />

            {/* Handwritten cursive text */}
            <div className="hidden sm:block absolute top-6 left-2 z-20 transform -rotate-12 select-none">
              <span className="font-handwritten text-3xl font-bold text-blue-600 dark:text-blue-400 leading-none block">
                People
              </span>
              <span className="font-handwritten text-3xl font-bold text-blue-600 dark:text-blue-400 leading-none block ml-4">
                Process
              </span>
              <span className="font-handwritten text-3xl font-bold text-blue-600 dark:text-blue-400 leading-none block ml-8">
                Progress
              </span>
            </div>

            {/* Interactive Floating Information Box (Opens on button click or hover) */}
            {infoBoxOpen && (
              <div 
                id="solutions-info-box"
                className="absolute -top-6 right-6 sm:right-24 z-40 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl border border-blue-100 dark:border-blue-900/50 max-w-[240px] animate-in fade-in zoom-in-95 duration-200"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{segmentDetails[activeSegment]?.title || 'HR Solution'}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setInfoBoxOpen(false)}
                    className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Close info box"
                    aria-label="Close"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
                  {segmentDetails[activeSegment]?.desc}
                </p>
                <div className="flex flex-col gap-1.5">
                  <button
                    type="button"
                    onClick={() => onOpenAI ? onOpenAI('solutions') : onOpenDemo()}
                    className="w-full py-1.5 px-2.5 rounded-lg bg-gradient-brand text-white text-[11px] font-bold shadow-md shadow-blue-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Chat with HRIFY AI</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <a
                    href="#our-solutions-section"
                    onClick={() => setInfoBoxOpen(false)}
                    className="text-[10px] text-center font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer py-0.5"
                  >
                    View details below ↓
                  </a>
                </div>
              </div>
            )}

            {/* 3D Character Illustration with AI trigger badge */}
            <div className="relative z-10 w-64 sm:w-72">
              <img
                src="/assets/ai-assistant.jpg"
                alt="HRIFY AI Advisor"
                className="w-full h-auto object-cover rounded-3xl drop-shadow-2xl"
              />

              {/* Trigger Button on the Assistant */}
              <button
                type="button"
                id="solutions-ai-trigger"
                onClick={() => setInfoBoxOpen(!infoBoxOpen)}
                onMouseEnter={() => setInfoBoxOpen(true)}
                className={`absolute -top-3 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg border transition-all duration-200 cursor-pointer ${
                  infoBoxOpen 
                    ? 'bg-blue-600 text-white border-blue-500 shadow-blue-500/30 scale-105' 
                    : 'bg-white/95 dark:bg-slate-900/95 text-slate-700 dark:text-slate-200 border-slate-200/80 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-800 hover:scale-105'
                }`}
                title="Toggle AI Solution Advisor"
              >
                <Sparkles className={`w-3.5 h-3.5 ${infoBoxOpen ? 'text-cyan-300' : 'text-blue-500'} animate-pulse`} />
                <span className="text-[11px] font-bold">
                  {infoBoxOpen ? 'Close Info' : 'AI Info'}
                </span>
              </button>
            </div>

            {/* Right Segment Selector Card */}
            <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-20 w-44 p-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xl border border-slate-100 dark:border-slate-800 text-xs space-y-1">
              {[
                { id: 'smes', label: 'SMEs', icon: Building, color: 'text-blue-500' },
                { id: 'growing', label: 'Growing Businesses', icon: TrendingUp, color: 'text-purple-500' },
                { id: 'enterprises', label: 'Enterprises', icon: Landmark, color: 'text-emerald-500' },
                { id: 'hr-teams', label: 'HR Teams', icon: Users2, color: 'text-orange-500' },
                { id: 'industry', label: 'Industry Specific', icon: Factory, color: 'text-cyan-500' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  id={`segment-btn-${item.id}`}
                  onClick={() => {
                    setActiveSegment(item.id);
                    setInfoBoxOpen(true);
                  }}
                  onMouseEnter={() => {
                    setActiveSegment(item.id);
                    setInfoBoxOpen(true);
                  }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-xl flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                    activeSegment === item.id && infoBoxOpen
                      ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20 translate-x-1'
                      : activeSegment === item.id
                      ? 'bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-blue-50/70 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1'
                  }`}
                >
                  <item.icon className={`w-3.5 h-3.5 ${activeSegment === item.id && infoBoxOpen ? 'text-white' : item.color} transition-colors`} />
                  <span className="truncate">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* OUR SOLUTIONS - 5 CARDS SECTION                           */}
      {/* ========================================================= */}
      <section id="our-solutions-section" className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-4 border-b border-slate-100 dark:border-slate-800 gap-4">
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 mb-2">
              OUR SOLUTIONS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Tailored HR Solutions <br />
              <span className="text-gradient-brand">for Real Business Needs.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed">
            HRIFY offers flexible solutions designed for businesses of all sizes and industries. Choose a solution that fits your goals and let HRIFY handle the rest.
          </p>
        </div>

        {/* 5 Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {solutionsData.map((card) => (
            <div
              key={card.id}
              className={`p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-subtle hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between ${card.colorScheme.border}`}
            >
              <div>
                <div className={`w-12 h-12 rounded-xl ${card.colorScheme.iconBg} flex items-center justify-center mb-4`}>
                  {getSolutionIcon(card.icon)}
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5 mb-3">
                  {card.subtitle}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {card.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {card.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <div className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 text-[10px]">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setSelectedSolution(card)}
                className={`w-full py-2 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${card.colorScheme.btn}`}
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Solution Modal View */}
        {selectedSolution && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <div className="relative w-full max-w-md p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl ${selectedSolution.colorScheme.iconBg} flex items-center justify-center`}>
                  {getSolutionIcon(selectedSolution.icon)}
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">{selectedSolution.title}</h3>
                  <span className="text-xs text-blue-600 font-semibold">{selectedSolution.subtitle}</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {selectedSolution.description}
              </p>
              <div className="space-y-2 mb-6">
                {selectedSolution.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedSolution(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedSolution(null);
                    onOpenDemo();
                  }}
                  className="px-5 py-2 rounded-xl bg-gradient-brand text-white text-xs font-bold shadow-md"
                >
                  Book Demo For This Solution
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ========================================================= */}
      {/* INDUSTRIES WE SERVE                                       */}
      {/* ========================================================= */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Industries We Serve</h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Trusted by organizations across diverse sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
          {industriesList.map((ind) => (
            <div
              key={ind.name}
              className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-subtle hover:shadow-card transition-all flex flex-col items-center justify-center gap-2 group cursor-pointer"
            >
              <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                {getIndustryIcon(ind.icon)}
              </div>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                {ind.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* BOTTOM CTA BANNER (Ready to find the right solution?)     */}
      {/* ========================================================= */}
      <section className="pt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center shrink-0">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">Ready to find the right solution for your business?</h3>
              <p className="text-xs text-blue-100 mt-0.5">
                Talk to our experts and discover how HRIFY can be tailored to your organization's needs.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenDemo}
              className="px-6 py-2.5 rounded-full bg-white text-blue-600 font-bold text-xs sm:text-sm shadow-md hover:bg-blue-50 transition-colors flex items-center gap-1.5"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="hidden sm:flex items-center gap-2 text-xs border-l border-white/20 pl-4">
              <Headphones className="w-5 h-5 text-blue-200" />
              <div>
                <p className="font-bold text-white">Talk to Sales</p>
                <p className="text-[10px] text-blue-200">Let's discuss requirements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
