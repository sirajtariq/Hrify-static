import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  Play,
  Sparkles,
} from 'lucide-react';
import { ProductShowcase } from '../components/ProductShowcase';
import { ModuleInteractiveShowcase } from '../components/ModuleInteractiveShowcase';

interface ProductProps {
  onOpenDemo: () => void;
  onOpenAI?: () => void;
}

export const Product: React.FC<ProductProps> = ({ onOpenDemo, onOpenAI }) => {
  const [activeShowcaseModuleId, setActiveShowcaseModuleId] = useState<string>('dashboard');

  return (
    <div className="w-full relative overflow-hidden pb-16">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-400/10 dark:bg-blue-600/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[60%] right-0 w-[400px] h-[400px] bg-purple-400/8 dark:bg-purple-600/8 blur-[120px] pointer-events-none -z-10" />

      {/* HERO SECTION */}
      <section className="pt-8 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 mb-4">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wide">
            Our Product
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-[1.15]">
          Everything HR. <br />
          <span className="text-gradient-brand">In One Intelligent Platform.</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-3">
          HRIFY brings together people, processes and technology to simplify your entire employee lifecycle — powered by AI.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 pt-4 pb-6 text-xs font-semibold text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
              <Check className="w-2.5 h-2.5" />
            </div>
            <span>Easy to Use</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
              <Check className="w-2.5 h-2.5" />
            </div>
            <span>Scalable for All Businesses</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
              <Check className="w-2.5 h-2.5" />
            </div>
            <span>Secure &amp; Reliable</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
          <button
            onClick={onOpenDemo}
            className="px-7 py-3 rounded-full bg-gradient-brand text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:brightness-105 active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenDemo}
            className="px-6 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-sm"
          >
            <Play className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
            <span>Watch Product Tour</span>
          </button>
        </div>

        <ProductShowcase />
      </section>

      {/* INTERACTIVE MODULE SHOWCASE SECTION */}
      <section
        className="pt-10 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/60 dark:to-indigo-950/60 border border-blue-100 dark:border-blue-900/50 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
              Interactive Module Explorer
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            See Every Module in Action.{' '}
            <span className="text-gradient-brand">Live Dashboard Preview.</span>
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xl mx-auto">
            Navigate through all 12 HRIFY modules with the journey map. Each step reveals a live dashboard experience.
          </p>
        </div>

        <ModuleInteractiveShowcase
          onOpenDemo={onOpenDemo}
          selectedModuleId={activeShowcaseModuleId}
          onSelectModule={(id) => setActiveShowcaseModuleId(id)}
        />
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="pt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black">Ready to Transform Your HR?</h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
                See how HRIFY can help you build a smarter, more people-centric workplace.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="hidden lg:flex items-center gap-6 text-center text-xs">
              <div>
                <p className="font-bold text-white text-sm">People</p>
                <p className="text-blue-200 text-[10px]">Empowered</p>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div>
                <p className="font-bold text-white text-sm">Processes</p>
                <p className="text-blue-200 text-[10px]">Simplified</p>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div>
                <p className="font-bold text-white text-sm">Progress</p>
                <p className="text-blue-200 text-[10px]">Accelerated</p>
              </div>
            </div>

            <button
              onClick={onOpenDemo}
              className="px-6 py-3 rounded-full bg-white text-blue-600 font-bold text-xs sm:text-sm shadow-md hover:bg-blue-50 transition-colors flex items-center gap-2"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
