import React, { useState } from 'react';
import { Search, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenDemo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'product', label: 'Product' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'resources', label: 'Resources' },
    { id: 'company', label: 'Company' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-xl border-b border-slate-100 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center cursor-pointer group"
        >
          <img
            src="/Assests/HRIFY_Logo_White_Background.png"
            alt="HRIFY - People Process Progress"
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </div>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="relative py-2 text-sm font-semibold transition-colors duration-150 group"
              >
                <span
                  className={
                    isActive
                      ? 'text-blue-600 font-bold'
                      : 'text-slate-600 hover:text-blue-600'
                  }
                >
                  {link.label}
                </span>

                {/* Underline for active state */}
                {isActive ? (
                  <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-blue-600 rounded-full" />
                ) : (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-400/50 transition-all duration-200 group-hover:w-full rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA / Controls */}
        <div className="hidden sm:flex items-center gap-3 lg:gap-4">
          {/* Search Toggle */}
          <div className="relative">
            {searchOpen ? (
              <div className="flex items-center bg-slate-100 rounded-full px-3 py-1.5 border border-slate-200">
                <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search HRIFY..."
                  className="bg-transparent text-xs text-slate-800 focus:outline-none w-32"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-slate-400 hover:text-slate-600 ml-1 text-xs"
                >
                  ✕
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                title="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Book a Demo Button */}
          <button
            onClick={onOpenDemo}
            className="px-5 py-2.5 rounded-full bg-gradient-brand text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/35 hover:brightness-105 transition-all flex items-center gap-1.5 active:scale-[0.98]"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-2 pb-6 bg-white border-b border-slate-200 shadow-xl space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-left px-3 py-2 rounded-lg text-sm font-semibold ${
                  currentPage === link.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-brand text-white text-sm font-semibold flex items-center justify-center gap-2"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
