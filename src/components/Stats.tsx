import { Layers, HelpCircle, Eye, Globe } from 'lucide-react'

export default function Stats() {
  const stats = [
    {
      value: '3',
      label: 'Core Software Solutions',
      desc: 'HR, B2I, and Hotel systems addressing key operations.',
      icon: Layers,
    },
    {
      value: 'Paperless-First',
      label: 'Design Approach',
      desc: 'Optimized to cut physical handoffs and printing.',
      icon: HelpCircle,
    },
    {
      value: 'HR → Fin → Hosp',
      label: 'Target Verticals',
      desc: 'Tailored workflows for staffing, ledger, and hospitality.',
      icon: Eye,
    },
    {
      value: 'Non-Profit',
      label: 'Software Mission',
      desc: 'Purpose-built utility solutions, not for profit.',
      icon: Globe,
    },
  ]

  return (
    <section className="py-16 bg-warm-100 dark:bg-warm-950/40 border-t border-warm-200 dark:border-warm-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div 
                key={idx} 
                className="text-center p-6 bg-white dark:bg-warm-850 border border-warm-200 dark:border-warm-800 rounded-xl shadow-sm"
              >
                <div className="mx-auto w-8 h-8 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-100 dark:border-brand-900 flex items-center justify-center mb-4">
                  <Icon className="h-4.5 w-4.5 text-brand-650 dark:text-brand-400" />
                </div>
                
                <p className="text-2xl sm:text-3xl font-display font-extrabold text-warm-800 dark:text-warm-50 mb-1 tracking-tight">
                  {stat.value}
                </p>
                
                <h4 className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider mb-2">
                  {stat.label}
                </h4>
                
                <p className="text-xs text-warm-500 dark:text-warm-400 font-light">
                  {stat.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
