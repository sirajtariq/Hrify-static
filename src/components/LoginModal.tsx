import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, X } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemo?: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onOpenDemo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1500);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
      {/* Background Liquid Silk Ribbons Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-90 dark:opacity-40"
        style={{ backgroundImage: `url('/assets/login-fluid-bg.jpg')` }}
      />

      {/* Floating Header Links */}
      <div className="absolute top-6 left-6 sm:left-10 z-20 flex items-center gap-2">
        <img src="/Assests/HRIFY_Logo_White_Background.png" alt="HRIFY Logo" className="h-9 w-auto object-contain drop-shadow dark:hidden" />
        <img src="/Assests/HRIFY_Logo_Dark_Background.png" alt="HRIFY Logo" className="h-9 w-auto object-contain drop-shadow hidden dark:block" />
      </div>

      <div className="absolute top-6 right-6 sm:right-10 z-20 flex items-center gap-4">
        <div className="hidden sm:block text-right">
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">A Smarter Workforce</p>
          <p className="text-[11px] text-slate-500">for a Brighter Tomorrow.</p>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Side Watermarks */}
      <div className="hidden lg:flex flex-col items-center absolute left-8 top-1/2 -translate-y-1/2 text-slate-400/80 tracking-widest text-xs font-bold pointer-events-none select-none">
        <div className="flex flex-col items-center gap-2">
          <span>P</span><span>E</span><span>O</span><span>P</span><span>L</span><span>E</span>
          <span className="my-1">•</span>
          <span>P</span><span>R</span><span>O</span><span>C</span><span>E</span><span>S</span><span>S</span>
          <span className="my-1">•</span>
          <span>P</span><span>R</span><span>O</span><span>G</span><span>R</span><span>E</span><span>S</span><span>S</span>
        </div>
        <div className="w-0.5 h-16 bg-blue-500/40 mt-4" />
      </div>

      <div className="hidden lg:flex flex-col items-center absolute right-8 top-1/2 -translate-y-1/2 text-slate-400/80 tracking-widest text-xs font-bold pointer-events-none select-none">
        <div className="flex flex-col items-center gap-2">
          <span>E</span><span>M</span><span>P</span><span>O</span><span>W</span><span>E</span><span>R</span><span>I</span><span>N</span><span>G</span>
          <span className="my-1">•</span>
          <span>P</span><span>E</span><span>O</span><span>P</span><span>L</span><span>E</span>
          <span className="my-1">•</span>
          <span>W</span><span>I</span><span>T</span><span>H</span>
          <span className="my-1">•</span>
          <span>A</span><span>I</span>
        </div>
        <div className="w-0.5 h-16 bg-blue-500/40 mt-4" />
      </div>

      {/* Center Frosted Glass Card */}
      <div className="relative z-10 w-full max-w-md p-8 sm:p-10 rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl shadow-2xl border border-white/60 dark:border-slate-700/60 transition-all">
        {/* Card Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src="/Assests/HRIFY_Logo_White_Background.png" alt="HRIFY Logo" className="h-10 w-auto object-contain mb-3 drop-shadow-sm dark:hidden" />
          <img src="/Assests/HRIFY_Logo_Dark_Background.png" alt="HRIFY Logo" className="h-10 w-auto object-contain mb-3 drop-shadow-sm hidden dark:block" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Welcome Back</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 text-center mt-1">
            Log in to your HRIFY account and keep your people moving forward.
          </p>
        </div>

        {isSuccess ? (
          <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-3">
              ✓
            </div>
            <h4 className="font-bold text-emerald-800 dark:text-emerald-200 text-base">Authentication Successful</h4>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">Redirecting to your dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <button
                type="button"
                className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-6 rounded-xl bg-gradient-brand text-white font-semibold text-sm shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Log In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="relative my-6 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-700" />
              </div>
              <span className="relative px-3 bg-white dark:bg-slate-900 text-[11px] text-slate-400">
                or continue with
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm"
              >
                {/* Google Icon SVG */}
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Google</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm"
              >
                {/* Microsoft Icon SVG */}
                <svg className="w-4 h-4" viewBox="0 0 23 23">
                  <path fill="#f35325" d="M1 1h10v10H1z" />
                  <path fill="#81bc06" d="M12 1h10v10H12z" />
                  <path fill="#05a6f0" d="M1 12h10v10H1z" />
                  <path fill="#ffba08" d="M12 12h10v10H12z" />
                </svg>
                <span>Microsoft</span>
              </button>
            </div>

            <div className="text-center pt-2">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onOpenDemo) onOpenDemo();
                  }}
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  Contact Support / Book a Demo
                </button>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
