import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Lightbulb, 
  Users, 
  Search, 
  FileText, 
  Briefcase, 
  FileSpreadsheet, 
  Video, 
  CheckSquare, 
  HelpCircle, 
  Mail, 
  Play, 
  Download,
  X
} from 'lucide-react';
import { featuredResources, resourceCategories, ResourceItem } from '../data/resources';

interface ResourcesProps {
  onOpenDemo: () => void;
  onOpenAI?: (topic?: string) => void;
}

export const Resources: React.FC<ResourcesProps> = ({ onOpenDemo, onOpenAI }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [emailSub, setEmailSub] = useState('');
  const [subSuccess, setSubSuccess] = useState(false);
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [infoBoxOpen, setInfoBoxOpen] = useState(false);
  const [activeAction, setActiveAction] = useState<'content' | 'answers' | 'templates'>('content');

  const actionDetails: Record<'content' | 'answers' | 'templates', { title: string; desc: string; filterTarget: string; icon: any; color: string }> = {
    content: {
      title: 'Relevant HR Content',
      desc: 'Explore 50+ curated guides, case studies, and compliance checklists tailored for modern workplaces.',
      filterTarget: 'guide',
      icon: Search,
      color: 'text-blue-500'
    },
    answers: {
      title: 'Get Instant Answers',
      desc: 'Ask HRIFY AI any question regarding labor compliance, leave policies, or talent management.',
      filterTarget: 'faq',
      icon: FileText,
      color: 'text-purple-500'
    },
    templates: {
      title: 'Download Templates',
      desc: 'Access ready-to-use policy handbooks, offer letters, NDA agreements, and performance appraisal forms.',
      filterTarget: 'template',
      icon: Download,
      color: 'text-emerald-500'
    }
  };

  const filterTabs = [
    { id: 'all', label: 'All Resources' },
    { id: 'blog', label: 'Blog & Insights' },
    { id: 'case-study', label: 'Case Studies' },
    { id: 'whitepaper', label: 'Whitepapers' },
    { id: 'webinar', label: 'Webinars' },
    { id: 'template', label: 'Templates' },
    { id: 'guide', label: 'Product Guides' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSub) return;
    setSubSuccess(true);
    setTimeout(() => {
      setEmailSub('');
      setSubSuccess(false);
    }, 3000);
  };

  const filteredList = activeFilter === 'all'
    ? featuredResources
    : featuredResources.filter((r) => r.category === activeFilter);

  return (
    <div className="w-full relative overflow-hidden pb-16">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-1/3 w-[600px] h-[350px] bg-blue-400/10 dark:bg-blue-600/10 blur-[130px] pointer-events-none -z-10" />

      {/* ========================================================= */}
      {/* HERO SECTION (Matches Resources.jpeg)                     */}
      {/* ========================================================= */}
      <section className="pt-8 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
                RESOURCES
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              Knowledge for <br />
              <span className="text-gradient-brand">Smarter HR.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Explore insights, guides, templates and expert content to help you build a better, more people-centric workplace.
            </p>

            {/* 3 Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                <span>Learn Best Practices</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
                <span>Get Expert Insights</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <Users className="w-3.5 h-3.5 text-blue-600" />
                <span>Grow with HRIFY</span>
              </div>
            </div>
          </div>

          {/* Right Visual: AI Assistant with Ask HRIFY AI card */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-blue-400/20 via-sky-300/20 to-purple-400/20 blur-2xl -z-10" />

            {/* Handwritten note */}
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
                id="resources-info-box"
                className="absolute -top-6 right-6 sm:right-24 z-40 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl border border-blue-100 dark:border-blue-900/50 max-w-[240px] animate-in fade-in zoom-in-95 duration-200"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{actionDetails[activeAction].title}</span>
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
                  {actionDetails[activeAction].desc}
                </p>
                <div className="flex flex-col gap-1.5">
                  <button
                    type="button"
                    onClick={() => onOpenAI ? onOpenAI('resources') : onOpenDemo()}
                    className="w-full py-1.5 px-2.5 rounded-lg bg-gradient-brand text-white text-[11px] font-bold shadow-md shadow-blue-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Ask HRIFY AI</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveFilter(actionDetails[activeAction].filterTarget);
                      setInfoBoxOpen(false);
                      document.getElementById('resources-filter-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[10px] text-center font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer py-0.5"
                  >
                    Browse resources below ↓
                  </button>
                </div>
              </div>
            )}

            {/* 3D Mascot Image with AI trigger badge */}
            <div className="relative z-10 w-64 sm:w-72">
              <img
                src="/assets/ai-assistant.jpg"
                alt="HRIFY AI Advisor"
                className="w-full h-auto object-cover rounded-3xl drop-shadow-2xl"
              />

              {/* Trigger Button on the Assistant */}
              <button
                type="button"
                id="resources-ai-trigger"
                onClick={() => setInfoBoxOpen(!infoBoxOpen)}
                onMouseEnter={() => setInfoBoxOpen(true)}
                className={`absolute -top-3 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg border transition-all duration-200 cursor-pointer ${
                  infoBoxOpen 
                    ? 'bg-blue-600 text-white border-blue-500 shadow-blue-500/30 scale-105' 
                    : 'bg-white/95 dark:bg-slate-900/95 text-slate-700 dark:text-slate-200 border-slate-200/80 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-800 hover:scale-105'
                }`}
                title="Toggle AI Resource Guide"
              >
                <Sparkles className={`w-3.5 h-3.5 ${infoBoxOpen ? 'text-cyan-300' : 'text-blue-500'} animate-pulse`} />
                <span className="text-[11px] font-bold">
                  {infoBoxOpen ? 'Close Info' : 'Resource Guide'}
                </span>
              </button>
            </div>

            {/* Quick Action links - Interactive Buttons */}
            <div className="hidden sm:flex flex-col gap-2.5 absolute right-0 top-1/2 -translate-y-1/2 z-20">
              {[
                { id: 'content' as const, label: 'Find relevant content', icon: Search, color: 'text-blue-500' },
                { id: 'answers' as const, label: 'Get instant answers', icon: FileText, color: 'text-purple-500' },
                { id: 'templates' as const, label: 'Download templates', icon: Download, color: 'text-emerald-500' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  id={`resources-action-btn-${item.id}`}
                  onClick={() => {
                    setActiveAction(item.id);
                    setInfoBoxOpen(true);
                    if (item.id === 'content') {
                      setActiveFilter('guide');
                      document.getElementById('resources-filter-section')?.scrollIntoView({ behavior: 'smooth' });
                    } else if (item.id === 'answers') {
                      if (onOpenAI) onOpenAI('resources');
                      else onOpenDemo();
                    } else if (item.id === 'templates') {
                      setActiveFilter('template');
                      document.getElementById('resources-filter-section')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  onMouseEnter={() => {
                    setActiveAction(item.id);
                    setInfoBoxOpen(true);
                  }}
                  className={`px-3.5 py-2 rounded-xl backdrop-blur border text-xs font-semibold flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                    activeAction === item.id && infoBoxOpen
                      ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20 translate-x-1'
                      : 'bg-white/95 dark:bg-slate-900/95 border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-blue-50/80 dark:hover:bg-blue-950/60 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 hover:translate-x-1 shadow-sm'
                  }`}
                >
                  <item.icon className={`w-3.5 h-3.5 ${activeAction === item.id && infoBoxOpen ? 'text-white' : item.color} transition-colors`} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FILTER TABS (Matches Resources.jpeg)                      */}
      {/* ========================================================= */}
      <section id="resources-filter-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeFilter === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-blue-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* FEATURED RESOURCES (4 Cards)                              */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="mb-6">
          <div className="inline-block px-3 py-0.5 rounded-full text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 mb-1">
            FEATURED
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Featured Resources</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Handpicked content to help you get the most out of HRIFY.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredList.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedResource(item)}
              className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-subtle hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative h-40 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold text-white bg-slate-900/80 backdrop-blur-sm tracking-wider">
                    {item.typeLabel}
                  </div>
                  {item.category === 'webinar' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="w-10 h-10 rounded-full bg-white/90 text-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 fill-blue-600 ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedResource(item);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:underline"
                >
                  <span>{item.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* EXPLORE BY CATEGORY                                       */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="mb-6">
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Explore by Category</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Find the content that matters to you.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {resourceCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className={`w-8 h-8 rounded-lg ${cat.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform text-xs`}>
                  {cat.id === 'blog' && <FileText className="w-4 h-4" />}
                  {cat.id === 'case-study' && <Briefcase className="w-4 h-4" />}
                  {cat.id === 'whitepaper' && <FileSpreadsheet className="w-4 h-4" />}
                  {cat.id === 'webinar' && <Video className="w-4 h-4" />}
                  {cat.id === 'template' && <CheckSquare className="w-4 h-4" />}
                  {cat.id === 'guide' && <BookOpen className="w-4 h-4" />}
                  {cat.id === 'faq' && <HelpCircle className="w-4 h-4" />}
                </div>
                <h4 className="font-bold text-xs text-slate-900 dark:text-white mb-1">
                  {cat.title}
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-2">
                  {cat.description}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1 text-[11px] font-bold text-blue-600 dark:text-blue-400">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* STAY UPDATED NEWSLETTER (Matches Resources.jpeg)          */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-brand text-white p-6 sm:p-8 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-black">Stay Updated</h3>
              <p className="text-xs text-blue-100 mt-0.5">
                Get the latest HR insights, product updates and resources delivered to your inbox.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-2">
            {subSuccess ? (
              <div className="px-5 py-2.5 rounded-full bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow">
                <span>✓ Successfully Subscribed!</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  value={emailSub}
                  onChange={(e) => setEmailSub(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full sm:w-64 px-4 py-2.5 rounded-full bg-white/95 text-slate-900 text-xs focus:outline-none placeholder:text-slate-400 shadow-inner"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs shadow-md hover:bg-slate-800 transition-colors flex items-center justify-center gap-1"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </>
            )}
          </form>

          {/* Right handwritten note */}
          <div className="hidden xl:block select-none text-right opacity-80">
            <span className="font-handwritten text-3xl font-bold leading-none block">
              People Process Progress
            </span>
          </div>
        </div>
      </section>

      {/* Resource Download / View Modal */}
      {selectedResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400 mb-2 inline-block">
              {selectedResource.typeLabel}
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{selectedResource.title}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {selectedResource.description}
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedResource(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedResource(null);
                  onOpenDemo();
                }}
                className="px-5 py-2 rounded-xl bg-gradient-brand text-white text-xs font-bold shadow-md hover:brightness-105 transition-all"
              >
                {selectedResource.actionText}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
