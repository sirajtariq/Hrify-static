import React from 'react';
import { Linkedin, Youtube, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/80 pt-12 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-10 border-b border-slate-100 dark:border-slate-800">
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="/Assests/HRIFY_Logo_White_Background.png"
              alt="HRIFY Logo"
              className="h-10 w-auto object-contain cursor-pointer mb-2"
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <p className="text-xs text-slate-400 mt-1 max-w-xs">
              AI-Powered Human Resource Management System for modern high-performing teams.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Quick Links
            </span>
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'product', label: 'Product' },
                { id: 'solutions', label: 'Solutions' },
                { id: 'pricing', label: 'Pricing' },
                { id: 'resources', label: 'Resources' },
                { id: 'company', label: 'Company' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Socials & Tagline */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Follow Us
            </span>
            <div className="flex items-center gap-3 mb-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-rose-600 hover:text-white transition-all"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-900 hover:text-white transition-all"
                title="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-700 hover:text-white transition-all"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              A smarter workforce for a brighter tomorrow.
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} HRIFY Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span className="hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer">Terms of Service</span>
            <a href="mailto:info@hrify-ai.com" className="text-blue-600 hover:underline">
              info@hrify-ai.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
