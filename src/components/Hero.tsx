import { ArrowRight, Sparkles, FileText, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-brand-50/30 via-warm-50 to-warm-50 dark:from-brand-950/10 dark:via-warm-900 dark:to-warm-900">
      {/* Decorative Warm Accents */}
      <div className="absolute top-1/4 -left-36 w-72 h-72 rounded-full bg-brand-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-36 w-72 h-72 rounded-full bg-accent-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800/80 mb-6 text-brand-700 dark:text-brand-400 text-xs sm:text-sm font-medium tracking-wide">
            <Sparkles className="h-3 w-3 text-brand-500" />
            <span>Digital Workflow Enablement</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-warm-800 dark:text-warm-50 tracking-tight leading-tight mb-6">
            Turn Paperwork <br className="hidden sm:inline" />
            Into <span className="text-brand-600 dark:text-brand-400">Progress.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-warm-600 dark:text-warm-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Hrify-AI builds practical software solutions that help organizations move from paper-based processes to efficient digital workflows.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#products"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-medium text-center shadow-md shadow-brand-600/10 hover:shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white dark:bg-warm-850 hover:bg-warm-100 dark:hover:bg-warm-800 text-warm-700 dark:text-warm-200 font-medium text-center border border-warm-250 dark:border-warm-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Visual Concept Illustration (subtle and clean) */}
          <div className="relative mt-8 max-w-3xl mx-auto p-4 bg-white dark:bg-warm-850 border border-warm-200 dark:border-warm-800 rounded-xl shadow-xl shadow-warm-200/20 dark:shadow-none">
            <div className="flex items-center justify-between border-b border-warm-150 dark:border-warm-750 pb-3 mb-4 text-xs text-warm-450">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <span className="font-mono">hrify-ai-concept.md</span>
              <span className="text-brand-500 font-medium">Demo Preview</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left p-2 sm:p-4">
              <div className="p-4 bg-warm-50 dark:bg-warm-900 rounded-lg border border-warm-200 dark:border-warm-800">
                <div className="flex items-center space-x-2 mb-2 text-warm-500 dark:text-warm-400">
                  <FileText className="h-4 w-4 text-accent-500" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Before: Manual Paperwork</span>
                </div>
                <ul className="text-sm text-warm-500 space-y-2 font-light">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✕</span> Filing cabinets and lost forms
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✕</span> Hours of typing data manually
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✕</span> Delayed approvals and physical handoffs
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-brand-50/50 dark:bg-brand-950/20 rounded-lg border border-brand-200/50 dark:border-brand-900/50">
                <div className="flex items-center space-x-2 mb-2 text-brand-700 dark:text-brand-400">
                  <CheckCircle2 className="h-4 w-4 text-brand-500" />
                  <span className="text-xs font-semibold uppercase tracking-wider">After: Hrify-AI Digitization</span>
                </div>
                <ul className="text-sm text-warm-600 dark:text-warm-350 space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-600 dark:text-brand-400 mr-2">✓</span> Searchable, organized digital repository
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-600 dark:text-brand-400 mr-2">✓</span> Automatic data validation and capture
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-600 dark:text-brand-400 mr-2">✓</span> Instant electronic sign-offs & progress tracking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
