import { Feather, FolderHeart, Zap, Compass, RefreshCw, HelpCircle } from 'lucide-react'

export default function Mission() {
  const pillars = [
    {
      title: 'Paperless Workflows',
      desc: 'Remove physical friction by converting paper files, receipts, and checklists into searchable, structured digital records.',
      icon: Feather,
    },
    {
      title: 'Better Organization',
      desc: 'Centralize records and schedules, making operations transparent and files immediately locatable for everyone.',
      icon: FolderHeart,
    },
    {
      title: 'Reduced Manual Work',
      desc: 'Automate repetitive follow-ups and data entry so staff can focus on high-impact projects, not logistics.',
      icon: Zap,
    },
    {
      title: 'Accessible Technology',
      desc: 'Develop software that is easy to navigate, lightweight to load, and designed for teams of any technical background.',
      icon: Compass,
    },
    {
      title: 'Digital Transformation',
      desc: 'Empower small teams to modernise their operations systematically, moving steadily from folders to files.',
      icon: RefreshCw,
    },
  ]

  return (
    <section id="mission" className="py-20 bg-warm-100 dark:bg-warm-950/40 border-t border-warm-200 dark:border-warm-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Mission Left Intro (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-900 mb-4 text-brand-700 dark:text-brand-450 text-xs font-semibold tracking-wide">
              <HelpCircle className="h-3 w-3 text-brand-500" />
              <span>Why We Build</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-warm-800 dark:text-warm-50 tracking-tight mb-4">
              Our Transformation Mission
            </h2>
            <p className="text-warm-600 dark:text-warm-300 leading-relaxed">
              Hrify-AI is a non-profit software organization. We design practical utilities to help workplaces transform, reducing overhead and improving day-to-day coordination.
            </p>
          </div>

          {/* Pillars Grid (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div 
                  key={index}
                  className="bg-white dark:bg-warm-850 border border-warm-200 dark:border-warm-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-950/50 border border-brand-100 dark:border-brand-900 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  
                  <h3 className="text-lg font-display font-bold text-warm-800 dark:text-warm-100 mb-2">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-sm text-warm-600 dark:text-warm-350 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
