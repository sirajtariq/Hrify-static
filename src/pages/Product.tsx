import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Play, 
  LayoutGrid, 
  List, 
  Sparkles,
  LayoutDashboard,
  Users,
  UserCheck,
  CalendarDays,
  DollarSign,
  UserPlus,
  BarChart3,
  BookOpen,
  CheckSquare,
  MessageSquare,
  FileText,
  PieChart,
  ShieldCheck,
  Smartphone,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { ProductShowcase } from '../components/ProductShowcase';
import { coreModules, ModuleItem } from '../data/modules';

interface ProductProps {
  onOpenDemo: () => void;
  onOpenAI?: () => void;
}

export const Product: React.FC<ProductProps> = ({ onOpenDemo, onOpenAI }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedModule, setSelectedModule] = useState<ModuleItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutDashboard': return <LayoutDashboard className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5" />;
      case 'CalendarDays': return <CalendarDays className="w-5 h-5" />;
      case 'DollarSign': return <DollarSign className="w-5 h-5" />;
      case 'UserPlus': return <UserPlus className="w-5 h-5" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'CheckSquare': return <CheckSquare className="w-5 h-5" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'PieChart': return <PieChart className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const filteredModules = selectedCategory === 'all'
    ? coreModules
    : coreModules.filter((m) => m.category === selectedCategory);

  return (
    <div className="w-full relative overflow-hidden pb-16">
      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-400/10 dark:bg-blue-600/10 blur-[140px] pointer-events-none -z-10" />

      {/* ========================================================= */}
      {/* HERO SECTION (Matches produt page.jpeg)                   */}
      {/* ========================================================= */}
      <section className="pt-8 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/50 mb-4">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wide">
            Our Product
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-[1.15]">
          Everything HR. <br />
          <span className="text-gradient-brand">In One Intelligent Platform.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-3">
          HRIFY brings together people, processes and technology to simplify your entire employee lifecycle — powered by AI.
        </p>

        {/* 3 Check Indicators */}
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
            <span>Secure & Reliable</span>
          </div>
        </div>

        {/* CTAs */}
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

        {/* Product Showcase (Laptop + Mobile mockup) */}
        <ProductShowcase />
      </section>

      {/* ========================================================= */}
      {/* CORE MODULES SECTION                                      */}
      {/* ========================================================= */}
      <section className="pt-12 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 gap-4">
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 mb-2">
              CORE MODULES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Powerful Modules for a <span className="text-gradient-brand">Smarter Workplace</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
              Everything you need to manage people, automate processes and build a more connected, productive organization.
            </p>
          </div>

          {/* Grid / List View Toggle Control (Matches screenshot) */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 self-start md:self-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'list'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>List View</span>
            </button>
          </div>
        </div>

        {/* Module Cards: Grid View / List View */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredModules.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedModule(item)}
                className={`relative overflow-hidden p-6 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-100 dark:border-slate-800/90 shadow-card hover:-translate-y-2 hover:scale-[1.015] transition-all duration-300 ease-out group cursor-pointer flex flex-col justify-between ${item.glow}`}
              >
                {/* Subtle dynamic background ambient gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Diagonal light sheen effect gliding across the card */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 dark:via-white/5 to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Bar: Icon + Reveal Arrow */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                        {getIcon(item.icon)}
                      </div>

                      <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800/80 text-slate-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-sm">
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredModules.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedModule(item)}
                className={`relative overflow-hidden group p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 shadow-subtle hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer ${item.glow}`}
              >
                {/* Subtle dynamic background ambient gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                {/* Diagonal light sheen */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 dark:via-white/5 to-transparent pointer-events-none" />

                <div className="relative z-10 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl shrink-0 ${item.color} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}>
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 group-hover:bg-blue-600 text-slate-400 group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-200 group-hover:-rotate-45 shadow-sm">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Selected Module Detail Modal */}
        {selectedModule && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <div className="relative w-full max-w-md p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl ${selectedModule.color} flex items-center justify-center`}>
                  {getIcon(selectedModule.icon)}
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">{selectedModule.title}</h3>
                  <span className="text-xs text-blue-600 font-semibold uppercase">{selectedModule.category}</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {selectedModule.description}
              </p>
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedModule(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedModule(null);
                    onOpenDemo();
                  }}
                  className="px-5 py-2 rounded-xl bg-gradient-brand text-white text-xs font-bold shadow-md"
                >
                  Book Demo For This Module
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ========================================================= */}
      {/* BOTTOM CTA BANNER (Ready to Transform Your HR?)           */}
      {/* ========================================================= */}
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
