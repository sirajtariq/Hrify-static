import { Mail, Layers } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-warm-100 dark:bg-warm-950/60 border-t border-warm-200 dark:border-warm-850 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand */}
        <div className="flex items-center justify-center space-x-2 text-brand-700 dark:text-brand-400 font-display font-bold text-lg mb-4">
          <Layers className="h-5 w-5 text-brand-650 dark:text-brand-400" />
          <span>Hrify-AI</span>
        </div>

        {/* Description */}
        <p className="text-xs text-warm-500 dark:text-warm-400 max-w-md mx-auto mb-6 leading-relaxed">
          Hrify-AI is a dedicated non-profit organization focused on making digital transformation accessible, lowering operational waste, and building software that serves a genuine purpose.
        </p>

        {/* Contact info */}
        <div className="flex items-center justify-center space-x-2 mb-8 text-xs text-warm-650 dark:text-warm-350">
          <Mail className="h-4 w-4 text-brand-500" />
          <a href="mailto:info@hrify-ai.com" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors font-mono">
            info@hrify-ai.com
          </a>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-warm-250 dark:bg-warm-800 mx-auto mb-6" />

        {/* Copyright */}
        <p className="text-[11px] text-warm-500 dark:text-warm-450 tracking-wider">
          © 2026 Hrify-AI — Non-Profit Software Organization. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
