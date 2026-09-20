import React from 'react';
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Building2,
  UserCheck,
  CalendarDays,
  DollarSign,
  UserPlus,
  BarChart3,
  Sparkles,
  Users,
  Smile,
  GraduationCap,
  Heart,
  LogOut,
  Settings,
  Quote,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Layers
} from 'lucide-react';
import { PeoplePlatform3D } from '../components/PeoplePlatform3D';
import { InteractiveScrollFeatures } from '../components/InteractiveScrollFeatures';

interface HomeProps {
  onNavigate: (page: string) => void;
  onOpenDemo: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenDemo }) => {

  return (
    <div className="w-full relative overflow-x-clip">
      {/* Background ambient lighting matching the fluid wave theme */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-blue-400/15 via-indigo-400/10 to-transparent dark:from-blue-600/15 dark:via-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-400/15 via-blue-400/10 to-transparent dark:from-cyan-600/15 dark:via-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* ========================================================= */}
      {/* HERO SECTION — "ONE CONNECTED PEOPLE PLATFORM"            */}
      {/* Complete Transformation based on user attached screenshot */}
      {/* ========================================================= */}
      <section className="relative pt-2 pb-12 sm:pt-3 sm:pb-16 lg:pt-4 lg:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left lg:pt-4">


            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-black text-slate-950 dark:text-white tracking-tight leading-[1.08]">
              HRIFY turns HR <br />
              into an <span className="text-gradient-brand">operating system.</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A unified, intelligent and people-centric platform that connects the entire employee lifecycle, automates HR operations and empowers organizations to scale.
            </p>


            {/* Philosophy Quote Pill */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-50/90 via-indigo-50/50 to-purple-50/40 dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-purple-950/20 border border-blue-100/90 dark:border-blue-900/40 shadow-sm flex items-center gap-3.5 text-left">
              <div className="w-9 h-9 rounded-xl bg-gradient-brand text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                <Quote className="w-4 h-4" />
              </div>
              <div className="relative flex-1">
                <p className="text-xs sm:text-sm font-semibold italic text-slate-800 dark:text-slate-200">
                  "One platform. Every employee. A higher tomorrow."
                </p>
                <div className="w-16 h-0.5 bg-gradient-brand rounded-full mt-1" />
              </div>
            </div>

            {/* CTAs Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
              <button
                onClick={onOpenDemo}
                className="px-7 py-3.5 rounded-full bg-gradient-brand text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:brightness-105 active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  onNavigate('product');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-7 py-3.5 rounded-full bg-white dark:bg-slate-900 border border-blue-200 dark:border-slate-700 text-blue-600 dark:text-blue-400 font-bold text-sm hover:bg-blue-50 dark:hover:bg-slate-800 shadow-sm transition-all"
              >
                Explore HRIFY
              </button>
            </div>

            {/* Subtle Brand Tag matching bottom-left of screenshot */}
            <div className="text-[11px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase flex items-center justify-center lg:justify-start gap-2 pt-2">
              <span>HRIFY</span>
              <span>|</span>
              <span>PEOPLE • PROCESS • PROGRESS</span>
            </div>
          </div>

          {/* Right Column: 3D Connected People Platform Operating System Stack */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <PeoplePlatform3D onOpenDemo={onOpenDemo} />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7-STAGE LIFECYCLE (Synchronized with 3D Stack Tiers)       */}
      {/* ========================================================= */}
      <section className="py-14 bg-white/70 dark:bg-slate-900/60 border-y border-slate-100 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Connected Lifecycle
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-10">
            ONE PLATFORM. EVERY PEOPLE MOMENT.
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 relative">
            {[
              {
                step: 'RECRUIT',
                desc: 'Attract the right talent',
                icon: UserPlus,
                color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/60',
              },
              {
                step: 'ONBOARD',
                desc: 'Create great first experiences',
                icon: Smile,
                color: 'text-cyan-500 bg-cyan-50 dark:bg-cyan-950/60',
              },
              {
                step: 'MANAGE',
                desc: 'Simplify daily operations',
                icon: Users,
                color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/60',
              },
              {
                step: 'ENGAGE',
                desc: 'Build a thriving work culture',
                icon: Heart,
                color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/60',
              },
              {
                step: 'DEVELOP',
                desc: 'Enable continuous growth',
                icon: GraduationCap,
                color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/60',
              },
              {
                step: 'RETAIN',
                desc: 'Increase employee loyalty',
                icon: ShieldCheck,
                color: 'text-teal-500 bg-teal-50 dark:bg-teal-950/60',
              },
              {
                step: 'OFFBOARD',
                desc: 'Ensure smooth transition',
                icon: LogOut,
                color: 'text-violet-500 bg-violet-50 dark:bg-violet-950/60',
              },
            ].map((item, idx, arr) => (
              <div key={item.step} className="flex flex-col items-center group relative">
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-200 border border-slate-200/50 dark:border-slate-700/50`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-xs tracking-wider text-slate-800 dark:text-slate-200">
                  {item.step}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 max-w-[130px] leading-tight">
                  {item.desc}
                </p>

                {/* Connecting arrow for larger screens */}
                {idx < arr.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-3 text-slate-300 dark:text-slate-700 text-xs">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTERACTIVE SCROLL FEATURES — Stepper Arc & 3D Cards     */}
      {/* Replaces Key Features Grid with Scroll-Activated Stepper  */}
      {/* ========================================================= */}
      <InteractiveScrollFeatures onNavigate={onNavigate} onOpenDemo={onOpenDemo} />

      {/* ========================================================= */}
      {/* STATS ROW (200+ Org, 50k+ Emp, 95% CSAT, 3x Faster)       */}
      {/* ========================================================= */}
      <section className="py-10 bg-slate-50/80 dark:bg-slate-900/80 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">200+</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">Organizations</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">50,000+</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">Employees Managed</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">95%</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">Customer Satisfaction</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">3x</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">Faster HR Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BOTTOM CTA BANNER (Let's Build a Better Workplace Together)*/}
      {/* ========================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-8 sm:p-14 shadow-2xl">
          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-extrabold tracking-wider uppercase text-blue-200 block mb-2">
              READY TO MAKE HR SMARTER?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight mb-3">
              Let's Build a Better <br />
              Workplace Together.
            </h2>
            <p className="text-sm sm:text-base text-blue-100 mb-8 max-w-md">
              Book a free demo and see how HRIFY transforms your HR into a seamless operating system.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenDemo}
                className="px-7 py-3.5 rounded-full bg-white text-blue-600 font-bold text-sm shadow-md hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenDemo}
                className="px-7 py-3.5 rounded-full bg-blue-700/50 border border-white/30 text-white font-semibold text-sm hover:bg-blue-700/80 transition-colors"
              >
                Contact Sales
              </button>
            </div>
          </div>

          {/* Right handwritten accent from screenshot */}
          <div className="hidden md:block absolute right-12 bottom-8 text-right opacity-90 select-none">
            <div className="font-handwritten text-4xl lg:text-5xl font-bold leading-tight transform -rotate-6">
              People <br />
              Process <br />
              Progress
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
