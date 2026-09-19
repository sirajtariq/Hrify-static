import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  Rocket, 
  Users, 
  Building2, 
  Landmark,
  Infinity as InfinityIcon,
  UserPlus,
  ShieldCheck,
  Cloud,
  Headphones,
  CheckCircle2,
  X
} from 'lucide-react';
import { pricingTiers, trustGuarantees, PricingTier } from '../data/pricing';

interface PricingProps {
  onOpenDemo: () => void;
  onOpenAI?: (topic?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenDemo, onOpenAI }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);
  const [infoBoxOpen, setInfoBoxOpen] = useState(false);
  const [activeValuePoint, setActiveValuePoint] = useState<'plan' | 'people' | 'productivity'>('plan');

  const valuePointDetails: Record<'plan' | 'people' | 'productivity', { title: string; desc: string; icon: any; color: string }> = {
    plan: {
      title: 'Find the Right Plan',
      desc: 'Not sure which plan fits? HRIFY AI analyzes your company size and needs to recommend the best tier with zero waste.',
      icon: CheckCircle2,
      color: 'text-blue-500'
    },
    people: {
      title: 'Better People Retention',
      desc: 'Boost retention and employee satisfaction by up to 34% with integrated wellness, feedback & review tools.',
      icon: Users,
      color: 'text-purple-500'
    },
    productivity: {
      title: 'Higher Productivity',
      desc: 'Automate 80% of repetitive HR paperwork and save 15+ hours weekly per team manager.',
      icon: Rocket,
      color: 'text-emerald-500'
    }
  };

  const getTierIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket': return <Rocket className="w-5 h-5 text-blue-500" />;
      case 'Users': return <Users className="w-5 h-5 text-emerald-500" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-purple-500" />;
      case 'Landmark': return <Landmark className="w-5 h-5 text-orange-500" />;
      default: return <Rocket className="w-5 h-5" />;
    }
  };

  const getTrustIcon = (iconName: string) => {
    switch (iconName) {
      case 'Infinity': return <InfinityIcon className="w-4 h-4 text-blue-500" />;
      case 'UserPlus': return <UserPlus className="w-4 h-4 text-blue-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-blue-500" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-blue-500" />;
      case 'Headphones': return <Headphones className="w-4 h-4 text-blue-500" />;
      default: return <CheckCircle2 className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <div className="w-full relative overflow-hidden pb-16">
      {/* Ambient glows */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[350px] bg-blue-400/10 dark:bg-blue-600/10 blur-[130px] pointer-events-none -z-10" />

      {/* ========================================================= */}
      {/* HERO SECTION (Matches pricing.jpeg)                       */}
      {/* ========================================================= */}
      <section className="pt-8 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
                PRICING
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              Simple, Transparent <br />
              Pricing <span className="text-gradient-brand">for Growing Teams.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Choose a plan that fits your business needs. All plans include core HR features, with the flexibility to scale as you grow.
            </p>

            {/* 3 Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <div className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>No long-term contracts</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <div className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>Flexible & scalable</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <div className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>Dedicated support</span>
              </div>
            </div>
          </div>

          {/* Right Visual: AI Assistant with Chat Bubble */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Background circular gradient */}
            <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-blue-400/20 via-sky-300/20 to-purple-400/20 blur-2xl -z-10" />

            {/* Handwritten cursive text */}
            <div className="hidden sm:block absolute top-6 left-4 z-20 transform -rotate-12 select-none">
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
                id="pricing-info-box"
                className="absolute -top-6 right-6 sm:right-24 z-40 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl border border-blue-100 dark:border-blue-900/50 max-w-[240px] animate-in fade-in zoom-in-95 duration-200"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{valuePointDetails[activeValuePoint].title}</span>
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
                  {valuePointDetails[activeValuePoint].desc}
                </p>
                <div className="flex flex-col gap-1.5">
                  <button
                    type="button"
                    onClick={() => onOpenAI ? onOpenAI('pricing') : onOpenDemo()}
                    className="w-full py-1.5 px-2.5 rounded-lg bg-gradient-brand text-white text-[11px] font-bold shadow-md shadow-blue-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Chat with HRIFY AI</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <a
                    href="#our-plans-section"
                    onClick={() => setInfoBoxOpen(false)}
                    className="text-[10px] text-center font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer py-0.5"
                  >
                    Compare all plans below ↓
                  </a>
                </div>
              </div>
            )}

            {/* 3D Character Illustration with AI trigger badge */}
            <div className="relative z-10 w-64 sm:w-72">
              <img
                src="/assets/ai-assistant.jpg"
                alt="HRIFY AI Mascot"
                className="w-full h-auto object-cover rounded-3xl drop-shadow-2xl"
              />

              {/* Trigger Button on the Assistant */}
              <button
                type="button"
                id="pricing-ai-trigger"
                onClick={() => setInfoBoxOpen(!infoBoxOpen)}
                onMouseEnter={() => setInfoBoxOpen(true)}
                className={`absolute -top-3 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg border transition-all duration-200 cursor-pointer ${
                  infoBoxOpen 
                    ? 'bg-blue-600 text-white border-blue-500 shadow-blue-500/30 scale-105' 
                    : 'bg-white/95 dark:bg-slate-900/95 text-slate-700 dark:text-slate-200 border-slate-200/80 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-800 hover:scale-105'
                }`}
                title="Toggle AI Plan Guide"
              >
                <Sparkles className={`w-3.5 h-3.5 ${infoBoxOpen ? 'text-cyan-300' : 'text-blue-500'} animate-pulse`} />
                <span className="text-[11px] font-bold">
                  {infoBoxOpen ? 'Close Info' : 'Plan Guide'}
                </span>
              </button>
            </div>

            {/* Right Value Points - Interactive Buttons */}
            <div className="hidden sm:flex flex-col gap-2.5 absolute right-0 top-1/2 -translate-y-1/2 z-20">
              {[
                { id: 'plan' as const, label: 'Right Plan', icon: CheckCircle2, color: 'text-blue-500' },
                { id: 'people' as const, label: 'Better People', icon: Users, color: 'text-purple-500' },
                { id: 'productivity' as const, label: 'Higher Productivity', icon: Rocket, color: 'text-emerald-500' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  id={`pricing-val-btn-${item.id}`}
                  onClick={() => {
                    setActiveValuePoint(item.id);
                    setInfoBoxOpen(true);
                  }}
                  onMouseEnter={() => {
                    setActiveValuePoint(item.id);
                    setInfoBoxOpen(true);
                  }}
                  className={`px-3.5 py-2 rounded-xl backdrop-blur border text-xs font-semibold flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                    activeValuePoint === item.id && infoBoxOpen
                      ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20 translate-x-1'
                      : 'bg-white/95 dark:bg-slate-900/95 border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-blue-50/80 dark:hover:bg-blue-950/60 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 hover:translate-x-1 shadow-sm'
                  }`}
                >
                  <item.icon className={`w-3.5 h-3.5 ${activeValuePoint === item.id && infoBoxOpen ? 'text-white' : item.color} transition-colors`} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* OUR PLANS - 4 TIERS SECTION                               */}
      {/* ========================================================= */}
      <section id="our-plans-section" className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-100 dark:border-slate-800 gap-4">
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 mb-2">
              OUR PLANS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Plans for Every <span className="text-gradient-brand">Stage of Growth</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              From startups to enterprises — HRIFY grows with you.
            </p>
          </div>

          {/* Monthly / Yearly Billing Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 self-start md:self-auto">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                billingCycle === 'yearly'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Yearly</span>
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-extrabold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 4 Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier) => {
            const price = billingCycle === 'yearly' && tier.monthlyPrice > 0
              ? Math.round(tier.monthlyPrice * 0.8)
              : tier.monthlyPrice;

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  tier.isPopular
                    ? 'bg-white dark:bg-slate-900 border-2 border-purple-500 shadow-xl shadow-purple-500/10 lg:-translate-y-2'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-subtle hover:shadow-card-hover'
                }`}
              >
                {/* Most Popular Badge */}
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-purple-600 text-white text-[10px] font-extrabold tracking-wider uppercase shadow-md">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      {getTierIcon(tier.icon)}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">{tier.name}</h3>
                      <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400">{tier.employees}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 min-h-[32px]">
                    {tier.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                    {tier.customPrice ? (
                      <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
                        {tier.customPrice}
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs font-bold text-slate-500">PKR</span>
                        <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                          {price.toLocaleString()}
                        </span>
                        <span className="text-xs text-slate-400">/ month</span>
                      </div>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-6">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                        <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          tier.isPopular ? 'bg-purple-600 text-white' : 'bg-blue-600 text-white'
                        }`}>
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    setSelectedTier(tier);
                    onOpenDemo();
                  }}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm ${
                    tier.isPopular
                      ? 'bg-gradient-brand text-white shadow-purple-500/25 hover:brightness-105'
                      : 'border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* TRUST GUARANTEES BAR                                      */}
      {/* ========================================================= */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
          {trustGuarantees.map((item) => (
            <div key={item.title} className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60">
                {getTrustIcon(item.icon)}
              </div>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* BOTTOM CTA BANNER (Ready to streamline your HR?)          */}
      {/* ========================================================= */}
      <section className="pt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">Ready to streamline your HR?</h3>
              <p className="text-xs text-blue-100 mt-0.5">
                Book a free demo and see how HRIFY can work for your team.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 shrink-0">
            <button
              onClick={onOpenDemo}
              className="px-6 py-2.5 rounded-full bg-white text-blue-600 font-bold text-xs sm:text-sm shadow-md hover:bg-blue-50 transition-colors flex items-center gap-1.5"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Customer Avatars from Pakistan and beyond */}
            <div className="hidden sm:flex items-center gap-3 border-l border-white/20 pl-5">
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&q=80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80',
                ].map((src, i) => (
                  <img key={i} src={src} alt="Client" className="w-7 h-7 rounded-full border border-white object-cover" />
                ))}
              </div>
              <div className="text-[11px] leading-tight">
                <p className="font-bold text-white">Trusted by 200+ organizations</p>
                <p className="text-[10px] text-blue-200">across Pakistan and beyond.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
