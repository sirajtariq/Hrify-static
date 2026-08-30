import { useState } from 'react'
import { Calculator as CalcIcon, AlertTriangle } from 'lucide-react'

export default function Calculator() {
  const [staffCount, setStaffCount] = useState(25)
  const [weeklyForms, setWeeklyForms] = useState(50)

  // Calculations based on typical industry transformation averages
  const estHoursSavedWeekly = Math.round(weeklyForms * 0.35 + staffCount * 0.8)
  const estPaperSavedAnnually = Math.round(weeklyForms * 52)
  const turnaroundSpeedup = staffCount > 50 ? '5.2x' : '4.5x'

  return (
    <section id="calculator" className="py-20 bg-warm-50 dark:bg-warm-900 border-t border-warm-200 dark:border-warm-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-900 mb-4 text-brand-700 dark:text-brand-450 text-xs font-semibold tracking-wide">
            <CalcIcon className="h-3 w-3 text-brand-500" />
            <span>Operational Efficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-warm-800 dark:text-warm-50 tracking-tight mb-4">
            Transformation Impact Estimator
          </h2>
          <p className="text-warm-600 dark:text-warm-300">
            Estimate the resource conservation and time savings your organization can experience by shifting from paper filing systems to digital workflow tracking.
          </p>
        </div>

        {/* Calculator layout */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Form (5 cols) */}
          <div className="md:col-span-5 bg-white dark:bg-warm-850 border border-warm-200 dark:border-warm-800 p-6 rounded-xl shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-warm-800 dark:text-warm-100 text-lg border-b border-warm-100 dark:border-warm-800 pb-3">
                Your Organization Profile
              </h3>
              
              {/* Slider 1: Staff Count */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="staff-count" className="text-xs font-bold text-warm-700 dark:text-warm-300">
                    Total Staff Members
                  </label>
                  <span className="font-mono text-xs font-bold bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-400 px-2 py-0.5 rounded border border-brand-100 dark:border-brand-900">
                    {staffCount}
                  </span>
                </div>
                <input
                  id="staff-count"
                  type="range"
                  min="5"
                  max="200"
                  value={staffCount}
                  onChange={(e) => setStaffCount(parseInt(e.target.value))}
                  className="w-full accent-brand-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-warm-400 mt-1">
                  <span>5</span>
                  <span>100</span>
                  <span>200</span>
                </div>
              </div>

              {/* Slider 2: Weekly Paper Forms */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="weekly-forms" className="text-xs font-bold text-warm-700 dark:text-warm-300">
                    Weekly Paper Documents Handled
                  </label>
                  <span className="font-mono text-xs font-bold bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-400 px-2 py-0.5 rounded border border-brand-100 dark:border-brand-900">
                    {weeklyForms}
                  </span>
                </div>
                <input
                  id="weekly-forms"
                  type="range"
                  min="10"
                  max="500"
                  value={weeklyForms}
                  onChange={(e) => setWeeklyForms(parseInt(e.target.value))}
                  className="w-full accent-brand-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-warm-400 mt-1">
                  <span>10</span>
                  <span>250</span>
                  <span>500</span>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 flex items-start space-x-2 p-3 bg-accent-50/50 dark:bg-accent-950/20 border border-accent-100 dark:border-accent-900/50 rounded-lg text-[10px] text-accent-700 dark:text-accent-400">
              <AlertTriangle className="h-4 w-4 flex-shrink-0 text-accent-500" />
              <span>
                <strong>Demo Impact Disclaimer:</strong> All results are estimated/demo calculations based on average paper-to-digital transformations. Actual savings will vary by internal process design.
              </span>
            </div>
          </div>

          {/* Results Display (7 cols) */}
          <div className="md:col-span-7 bg-brand-50/30 dark:bg-brand-950/15 border border-brand-200/60 dark:border-brand-900/60 p-6 sm:p-8 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-warm-800 dark:text-warm-100 text-lg mb-6 border-b border-brand-100 dark:border-brand-900/60 pb-3">
                Estimated Annual Impact
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Result 1 */}
                <div className="bg-white dark:bg-warm-850 p-4 rounded-lg border border-warm-150 dark:border-warm-800">
                  <p className="text-[10px] font-bold text-warm-500 uppercase tracking-wider mb-1">Weekly Time Saved</p>
                  <p className="text-3xl font-display font-extrabold text-brand-650 dark:text-brand-400">
                    ~{estHoursSavedWeekly} <span className="text-sm font-medium text-warm-500 dark:text-warm-400">hours</span>
                  </p>
                  <p className="text-[11px] text-warm-500 mt-2 font-light">Hours saved from manual data entry & filing lookup.</p>
                </div>

                {/* Result 2 */}
                <div className="bg-white dark:bg-warm-850 p-4 rounded-lg border border-warm-150 dark:border-warm-800">
                  <p className="text-[10px] font-bold text-warm-500 uppercase tracking-wider mb-1">Paper Conserved</p>
                  <p className="text-3xl font-display font-extrabold text-brand-650 dark:text-brand-400">
                    {estPaperSavedAnnually.toLocaleString()} <span className="text-sm font-medium text-warm-500 dark:text-warm-400">sheets</span>
                  </p>
                  <p className="text-[11px] text-warm-500 mt-2 font-light">Fewer sheets printed, filed, and processed per year.</p>
                </div>

                {/* Result 3 */}
                <div className="bg-white dark:bg-warm-850 p-4 rounded-lg border border-warm-150 dark:border-warm-800 sm:col-span-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-bold text-warm-500 uppercase tracking-wider mb-1">Workflow Acceleration</p>
                      <p className="text-2xl font-display font-extrabold text-warm-800 dark:text-warm-100">
                        {turnaroundSpeedup} Faster Processing
                      </p>
                    </div>
                    <span className="bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-450 text-[10px] font-bold px-2 py-1 rounded">
                      Est. Speedup
                    </span>
                  </div>
                  <p className="text-[11px] text-warm-500 mt-2 font-light">Average turnaround time speedup for signatures and task approvals.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-brand-100 dark:border-brand-900/60 pt-4 text-[10px] text-warm-500 text-center font-light">
              Results based on transition to digital forms, online verification, and centralized storage.
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
