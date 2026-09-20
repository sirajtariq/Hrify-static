import React from 'react';
import { 
  ArrowRight, 
  Play, 
  Target, 
  Eye, 
  Gem, 
  Check, 
  Users, 
  Building2, 
  Globe2, 
  Trophy,
  Sparkles
} from 'lucide-react';

interface CompanyProps {
  onOpenDemo: () => void;
  onOpenAI?: () => void;
}

export const Company: React.FC<CompanyProps> = ({ onOpenDemo, onOpenAI }) => {
  const milestones = [
    { year: '2021', title: 'The idea of HRIFY was born', active: true },
    { year: '2022', title: 'Launched first version', active: true },
    { year: '2023', title: '100+ customers onboarded', active: true },
    { year: '2024', title: 'Expanded to international markets', active: true },
    { year: '2025', title: 'Launched AI-powered features', active: true },
    { year: 'Beyond', title: 'Building a more human future of work', active: false },
  ];

  return (
    <div className="w-full relative overflow-hidden pb-16">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[350px] bg-blue-400/10 dark:bg-blue-600/10 blur-[130px] pointer-events-none -z-10" />

      {/* ========================================================= */}
      {/* HERO SECTION (Matches Company.jpeg)                       */}
      {/* ========================================================= */}
      <section className="pt-8 pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
                OUR COMPANY
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.05]">
              People <br />
              Process <br />
              <span className="text-gradient-brand">Progress.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              At HRIFY, we believe great workplaces don't happen by chance. They are built by people, powered by technology, and driven by a shared purpose to create a better tomorrow.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenDemo}
                className="px-7 py-3 rounded-full bg-gradient-brand text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:brightness-105 active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenDemo}
                className="px-6 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-sm"
              >
                <Play className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
                <span>Watch Video</span>
              </button>
            </div>
          </div>

          {/* Right Hero Visual: Executive Office Interior */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
              <img
                src="/assets/office-lobby.jpg"
                alt="HRIFY Headquarters Office"
                className="w-full h-[360px] sm:h-[420px] object-cover"
              />

              {/* Gradient overlay on right side for wall logo typography */}
              <div className="absolute inset-0 bg-gradient-to-l from-slate-950/75 via-transparent to-transparent flex flex-col justify-center items-end p-6 sm:p-10 text-right text-white">
                <div className="p-3 bg-white/95 dark:bg-slate-900/95 rounded-2xl shadow-xl backdrop-blur mb-4 inline-block border border-transparent dark:border-slate-800">
                  <img
                    src="/Assests/HRIFY_Logo_White_Background.png"
                    alt="HRIFY 3D Wall Logo"
                    className="h-9 w-auto object-contain dark:hidden"
                  />
                  <img
                    src="/Assests/HRIFY_Logo_Dark_Background.png"
                    alt="HRIFY 3D Wall Logo"
                    className="h-9 w-auto object-contain hidden dark:block"
                  />
                </div>
                <h3 className="font-black text-xl sm:text-2xl leading-tight">
                  Better People <br />
                  Brighter Futures
                </h3>
              </div>

              {/* Floating glass card at bottom-right (from screenshot) */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-xl border border-white/40 dark:border-slate-700 max-w-[200px] text-left">
                <p className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                  A smarter workforce for a brighter tomorrow.
                </p>
                <div className="w-8 h-1 bg-blue-600 rounded-full mt-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* MISSION, VISION, VALUES (3 Cards from Company.jpeg)       */}
      {/* ========================================================= */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mission */}
          <div className="p-6 rounded-3xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                To empower organizations with intelligent HR solutions that drive efficiency, engagement and growth.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="p-6 rounded-3xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                To become the most trusted global HR platform, enabling people-centric workplaces across industries.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="p-6 rounded-3xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 mb-4">
                <Gem className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Our Values</h3>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                {['People First', 'Innovation', 'Integrity', 'Customer Success', 'Continuous Learning'].map((val) => (
                  <div key={val} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* STATS BAR (200+ Org, 50,000+ Emp, 5+ Countries, 98% CSAT) */}
      {/* ========================================================= */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
          <div className="pt-3 md:pt-0 flex flex-col items-center">
            <Users className="w-6 h-6 text-blue-600 mb-1" />
            <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">200+</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Organizations Trust Us</span>
          </div>

          <div className="pt-3 md:pt-0 flex flex-col items-center">
            <Building2 className="w-6 h-6 text-blue-600 mb-1" />
            <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">50,000+</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Employees Empowered</span>
          </div>

          <div className="pt-3 md:pt-0 flex flex-col items-center">
            <Globe2 className="w-6 h-6 text-blue-600 mb-1" />
            <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">5+</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Countries</span>
          </div>

          <div className="pt-3 md:pt-0 flex flex-col items-center">
            <Trophy className="w-6 h-6 text-blue-600 mb-1" />
            <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">98%</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Customer Satisfaction</span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* OUR JOURNEY TIMELINE (Matches Company.jpeg)               */}
      {/* ========================================================= */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 mb-2">
            OUR JOURNEY
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Our Journey</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            From a bold idea to a global community — here's how HRIFY is making an impact.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative overflow-x-auto pb-4">
          <div className="min-w-[700px] flex items-start justify-between relative pt-6">
            {/* Connecting line */}
            <div className="absolute top-8 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-400 z-0" />

            {milestones.map((m) => (
              <div key={m.year} className="relative z-10 flex flex-col items-center text-center w-28 group">
                <span className="font-extrabold text-xs text-blue-600 dark:text-blue-400 mb-2">{m.year}</span>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm mb-3 ${
                  m.active ? 'bg-blue-600 text-white' : 'bg-purple-600 text-white'
                }`}>
                  <Check className="w-2.5 h-2.5" />
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 font-medium leading-tight">
                  {m.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* OUR PURPOSE (Mountain Hikers Panorama from Company.jpeg)  */}
      {/* ========================================================= */}
      <section className="pt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[360px] flex items-center p-8 sm:p-14">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/assets/mountain-hikers.jpg')` }}
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/50 to-transparent" />

          {/* Content */}
          <div className="relative z-10 max-w-lg text-white space-y-4">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur">
              OUR PURPOSE
            </div>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight">
              A More Human <br />
              Future of Work.
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              We're here to help organizations unlock human potential through technology, empathy and innovation.
            </p>
            <button
              onClick={onOpenDemo}
              className="px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl transition-all flex items-center gap-2"
            >
              <span>Join Our Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right handwritten signature */}
          <div className="hidden lg:block absolute right-12 bottom-10 select-none text-right">
            <span className="font-handwritten text-4xl sm:text-5xl font-bold text-blue-400 drop-shadow-md transform -rotate-6 block">
              People <br />
              Process <br />
              Progress
            </span>
          </div>
        </div>
      </section>

    </div>
  );
};
