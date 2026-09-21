import React, { useState } from 'react';
import { 
  Linkedin, 
  Youtube, 
  Twitter, 
  Facebook, 
  ArrowRight, 
  MapPin, 
  Mail, 
  Sparkles, 
  ShieldCheck, 
  Check, 
  Copy,
  Clock
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenDemo?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDemo }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const email = 'info@hrify-ai.com';
  const officeAddress = 'Office No 220, 2nd Floor ISE Towers, Jinnah Avenue, Islamabad';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setNewsletterEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="w-full relative overflow-hidden bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/80 pt-16 pb-8 transition-colors">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[250px] bg-blue-400/10 dark:bg-blue-600/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 w-[500px] h-[250px] bg-purple-400/10 dark:bg-purple-600/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* TOP BANNER / NEWSLETTER CTA                               */}
        {/* ========================================================= */}
        <div className="relative rounded-3xl p-6 sm:p-8 mb-14 bg-gradient-to-r from-blue-50/90 via-indigo-50/60 to-purple-50/80 dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-purple-950/40 border border-blue-100 dark:border-blue-900/50 shadow-xl backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center lg:text-left flex-col sm:flex-row">
            <div className="w-12 h-12 rounded-2xl bg-gradient-brand flex items-center justify-center text-white shadow-lg shadow-blue-500/25 shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Transform Your Workforce with <span className="text-gradient-brand">HRIFY AI</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
                Stay updated with the latest AI-driven HR strategies, employee lifecycle insights, and product updates.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-2">
            <div className="relative w-full sm:w-72">
              <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your work email"
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-brand text-white font-bold text-xs shadow-lg shadow-blue-500/20 hover:brightness-105 active:scale-95 transition-all shrink-0 flex items-center justify-center gap-2"
            >
              {newsletterSubscribed ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <span>Get Started</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* ========================================================= */}
        {/* MAIN FOOTER CONTENT GRID                                  */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-100 dark:border-slate-800">
          
          {/* Column 1: Brand Info & Socials (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Original Brand Logo */}
              <div 
                className="flex items-center cursor-pointer mb-3 inline-flex group"
                onClick={() => {
                  onNavigate('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <img
                  src="/Assests/HRIFY_Logo_White_Background.png"
                  alt="HRIFY - People Process Progress"
                  className="h-10 w-auto object-contain dark:hidden transition-transform duration-200 group-hover:scale-[1.02]"
                />
                <img
                  src="/Assests/HRIFY_Logo_Dark_Background.png"
                  alt="HRIFY - People Process Progress"
                  className="h-10 w-auto object-contain hidden dark:block transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6 max-w-sm">
                Next-generation, AI-powered Human Resource Management Platform designed to streamline the complete employee lifecycle, empower teams, and accelerate business growth.
              </p>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-[11px] text-slate-700 dark:text-slate-300 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                <span className="font-semibold text-slate-800 dark:text-slate-200">AI Platform Online</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 dark:text-slate-400">v2.4 Enterprise</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Connect With Us</p>
              <div className="flex items-center gap-2.5">
                {[
                  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', hover: 'hover:bg-blue-600 hover:text-white hover:border-blue-600' },
                  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube', hover: 'hover:bg-rose-600 hover:text-white hover:border-rose-600' },
                  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', hover: 'hover:bg-slate-900 hover:text-white hover:border-slate-900 dark:hover:bg-sky-500 dark:hover:border-sky-500' },
                  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', hover: 'hover:bg-blue-700 hover:text-white hover:border-blue-700' },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className={`w-9 h-9 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 transition-all duration-200 shadow-sm ${social.hover}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Platform Links (2.5 Cols) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              {[
                { name: 'Core HR & Staffing', page: 'product' },
                { name: 'Attendance & Leave', page: 'product' },
                { name: 'Payroll & Benefits', page: 'product' },
                { name: 'Recruitment & ATS', page: 'product' },
                { name: 'Performance & Goals', page: 'product' },
                { name: 'AI Employee Chat', page: 'product' },
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      onNavigate(item.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 text-left font-medium"
                  >
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation (2.5 Cols) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              {[
                { name: 'Home', page: 'home' },
                { name: 'Our Product', page: 'product' },
                { name: 'Solutions', page: 'solutions' },
                { name: 'Pricing Plans', page: 'pricing' },
                { name: 'Resources & Blog', page: 'resources' },
                { name: 'About Company', page: 'company' },
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      onNavigate(item.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1 text-left font-medium"
                  >
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Office Address & Contact Info (3 Cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Head Office & Contact
            </h4>

            {/* Address Card */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-blue-300 dark:hover:border-slate-700 transition-all flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-0.5">
                  Corporate Office
                </span>
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                  {officeAddress}
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-purple-300 dark:hover:border-slate-700 transition-all flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                title="Copy Email"
                className="p-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-all text-[10px] flex items-center gap-1 shadow-sm"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied</span>
                  </>
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* Hours & Response Guarantee */}
            <div className="p-3 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Mon – Fri: 9:00 AM – 6:00 PM PKT</span>
              </div>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> 24/7 AI Online
              </span>
            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM COPYRIGHT & COMPLIANCE BAR                         */}
        {/* ========================================================= */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} HRIFY Technologies Inc. All rights reserved.</p>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Enterprise Grade Security • ISO 27001 Certified</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-slate-500 dark:text-slate-400">
            <span className="hover:text-blue-600 dark:hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-blue-600 dark:hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-blue-600 dark:hover:text-white cursor-pointer transition-colors">Security & Trust</span>
            <span className="hover:text-blue-600 dark:hover:text-white cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
