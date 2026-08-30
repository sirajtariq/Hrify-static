import { useState } from 'react'
import { CheckSquare, Square, Check, Shield, RefreshCw, Building, Briefcase, Landmark } from 'lucide-react'

// 1. AI-Based HR System Onboarding Checklist Preview
function HRSystemPreview() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Upload Identity Proof', done: true },
    { id: 2, text: 'Sign Employment Offer', done: false },
    { id: 3, text: 'Submit Direct Deposit Form', done: false },
    { id: 4, text: 'Complete Compliance Briefing', done: false },
  ])

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const completedCount = tasks.filter(t => t.done).length
  const progressPercent = Math.round((completedCount / tasks.length) * 100)

  return (
    <div className="bg-warm-50 dark:bg-warm-900 border border-warm-200 dark:border-warm-800 rounded-lg p-4 font-sans text-xs">
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-warm-700 dark:text-warm-350">Onboarding Checklist</span>
        <span className="font-mono text-brand-700 dark:text-brand-400 font-bold">{progressPercent}%</span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-warm-200 dark:bg-warm-800 h-1.5 rounded-full mb-4 overflow-hidden">
        <div 
          className="bg-brand-600 dark:bg-brand-500 h-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Task List */}
      <div className="space-y-2.5">
        {tasks.map(task => (
          <button
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className="w-full flex items-center space-x-2.5 p-2 rounded hover:bg-warm-100 dark:hover:bg-warm-850 text-left transition-colors focus:outline-none"
          >
            {task.done ? (
              <CheckSquare className="h-4.5 w-4.5 text-brand-600 dark:text-brand-500 flex-shrink-0" />
            ) : (
              <Square className="h-4.5 w-4.5 text-warm-400 dark:text-warm-600 flex-shrink-0" />
            )}
            <span className={`${task.done ? 'line-through text-warm-450 dark:text-warm-500' : 'text-warm-700 dark:text-warm-300'}`}>
              {task.text}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-3 text-[10px] text-warm-450 text-center italic">
        Click items to update onboarding progress.
      </div>
    </div>
  )
}

// 2. B2I — Business to Intelligence Data Ingestion Preview
function B2IPreview() {
  const [pipelines, setPipelines] = useState([
    { id: 1, name: 'Staff Attendance Sync', type: 'CSV Parse', status: 'pending' },
    { id: 2, name: 'Night Audit Financials', type: 'JSON Stream', status: 'pending' },
  ])
  const [insightScore, setInsightScore] = useState(82)

  const processPipeline = (id: number) => {
    setPipelines(pipelines.map(p => p.id === id ? { ...p, status: 'processed' } : p))
    setInsightScore(prev => Math.min(prev + 8, 98))
  }

  return (
    <div className="bg-warm-50 dark:bg-warm-900 border border-warm-200 dark:border-warm-800 rounded-lg p-4 font-sans text-xs">
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-warm-700 dark:text-warm-350">Data Stream Monitor</span>
        <span className="bg-brand-50 dark:bg-brand-950/30 text-brand-700 dark:text-brand-400 border border-brand-100 dark:border-brand-900 px-2 py-0.5 rounded text-[10px] font-medium">
          Insights: {insightScore}%
        </span>
      </div>

      <div className="space-y-3">
        {pipelines.map(pipe => (
          <div 
            key={pipe.id} 
            className="p-2.5 bg-white dark:bg-warm-850 border border-warm-150 dark:border-warm-800 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-medium text-warm-700 dark:text-warm-300 text-left">{pipe.name}</p>
              <p className="text-[10px] text-warm-450 text-left">{pipe.type} • {pipe.status === 'pending' ? 'Unresolved' : 'Active Index'}</p>
            </div>
            
            <div>
              {pipe.status === 'pending' ? (
                <button
                  onClick={() => processPipeline(pipe.id)}
                  className="px-2 py-1 rounded bg-brand-50 hover:bg-brand-100 text-brand-700 dark:bg-brand-950/40 dark:hover:bg-brand-900/60 dark:text-brand-400 font-semibold transition-colors focus:outline-none"
                >
                  Verify
                </button>
              ) : (
                <span className="text-[10px] font-semibold text-brand-600 dark:text-brand-450 flex items-center space-x-1">
                  <Check className="h-3.5 w-3.5 text-brand-500" />
                  <span>Indexed</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[10px] text-warm-450 text-center italic">
        Click "Verify" to validate schemas and index records.
      </div>
    </div>
  )
}

// 3. Hotel Management System Rooms Board Preview
function HotelSystemPreview() {
  const [rooms, setRooms] = useState([
    { number: '101', type: 'Double Suite', ready: false },
    { number: '102', type: 'Single Deluxe', ready: true },
    { number: '201', type: 'Double Suite', ready: false },
    { number: '202', type: 'King Premium', ready: true },
  ])

  const toggleRoom = (number: string) => {
    setRooms(rooms.map(r => r.number === number ? { ...r, ready: !r.ready } : r))
  }

  return (
    <div className="bg-warm-50 dark:bg-warm-900 border border-warm-200 dark:border-warm-800 rounded-lg p-4 font-sans text-xs">
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-warm-700 dark:text-warm-350">Room Cleaning Schedule</span>
        <span className="text-[10px] text-warm-500">
          Ready: {rooms.filter(r => r.ready).length}/{rooms.length}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {rooms.map(room => (
          <button
            key={room.number}
            onClick={() => toggleRoom(room.number)}
            className={`p-2 rounded border text-left transition-all focus:outline-none ${
              room.ready 
                ? 'bg-brand-50/50 dark:bg-brand-950/15 border-brand-200 dark:border-brand-900/60 hover:bg-brand-50 dark:hover:bg-brand-950/20' 
                : 'bg-white dark:bg-warm-850 border-warm-200 dark:border-warm-800 hover:bg-warm-100 dark:hover:bg-warm-800'
            }`}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-warm-800 dark:text-warm-200">Room {room.number}</span>
              <span className={`w-2 h-2 rounded-full ${room.ready ? 'bg-brand-500' : 'bg-amber-500'}`} />
            </div>
            <p className="text-[10px] text-warm-500 dark:text-warm-450 mb-1.5">{room.type}</p>
            <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${
              room.ready 
                ? 'bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-400' 
                : 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400'
            }`}>
              {room.ready ? 'Clean / Ready' : 'Needs Cleaning'}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-3 text-[10px] text-warm-450 text-center italic">
        Toggle room statuses to update tasks.
      </div>
    </div>
  )
}

export default function Products() {
  const products = [
    {
      id: 'hr-system',
      title: 'AI-Based HR System',
      badge: 'Human Resources',
      icon: Briefcase,
      desc: 'Seamlessly digitize employee onboarding, documents filing, and task delegation. Designed to eliminate manual staff checklists.',
      preview: <HRSystemPreview />,
    },
    {
      id: 'b2i-system',
      title: 'B2I — Business to Intelligence',
      badge: 'Business Intelligence',
      icon: Landmark,
      desc: 'Converts organization streams, document schemas, and reports into validated indices. Moves metrics off paper sheets.',
      preview: <B2IPreview />,
    },
    {
      id: 'hosp-system',
      title: 'Hotel Management System',
      badge: 'Hospitality & Operations',
      icon: Building,
      desc: 'Real-time room management and team cleaning boards. Helps boutique hotels coordinate operations without printouts.',
      preview: <HotelSystemPreview />,
    },
  ]

  return (
    <section id="products" className="py-20 bg-warm-50 dark:bg-warm-900 border-t border-warm-200 dark:border-warm-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-900 mb-4 text-brand-700 dark:text-brand-400 text-xs font-semibold tracking-wide">
            <Shield className="h-3 w-3 text-brand-500" />
            <span>Digital Solutions Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-warm-800 dark:text-warm-50 tracking-tight mb-4">
            Our Core Software Solutions
          </h2>
          <p className="text-warm-600 dark:text-warm-300">
            We build focused, practical tools designed to solve specific operational bottlenecks. No unnecessary bloat—just clear digital progress.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <div 
                key={product.id}
                className="flex flex-col bg-white dark:bg-warm-850 rounded-xl border border-warm-200 dark:border-warm-800 p-6 shadow-sm hover:shadow-md transition-shadow relative"
              >
                {/* Header info */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 border border-brand-100 dark:border-brand-900 px-2.5 py-1 rounded-full">
                      {product.badge}
                    </span>
                    <Icon className="h-5 w-5 text-warm-450 dark:text-warm-550" />
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-warm-800 dark:text-warm-100 mb-2">
                    {product.title}
                  </h3>
                  
                  <p className="text-sm text-warm-600 dark:text-warm-350 leading-relaxed text-left">
                    {product.desc}
                  </p>
                </div>

                {/* Interactive Preview Container */}
                <div className="mt-auto border-t border-warm-100 dark:border-warm-800 pt-5">
                  <div className="flex items-center space-x-1.5 mb-3 text-[10px] text-brand-700 dark:text-brand-400 uppercase tracking-wider font-semibold">
                    <RefreshCw className="h-3 w-3 animate-spin-slow text-brand-500" />
                    <span>Interactive Preview</span>
                  </div>
                  {product.preview}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
