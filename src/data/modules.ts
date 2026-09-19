export interface ModuleItem {
  id: string;
  title: string;
  description: string;
  category: 'core' | 'operations' | 'engagement' | 'analytics';
  icon: string;
  color: string;
  glow: string;
  accent: string;
  badge?: string;
}

export const coreModules: ModuleItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    description: 'Get a real-time overview of your people, processes and key HR metrics.',
    category: 'core',
    icon: 'LayoutDashboard',
    color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/30 group-hover:bg-blue-600 group-hover:text-white',
    glow: 'hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.22)] hover:border-blue-400/60 dark:hover:border-blue-500/50',
    accent: 'from-blue-500/10 to-indigo-500/5',
  },
  {
    id: 'employee-mgmt',
    title: 'Employee Management',
    description: 'Centralized employee records, organization structure and complete employee lifecycle.',
    category: 'core',
    icon: 'Users',
    color: 'text-sky-500 bg-sky-50 dark:bg-sky-900/30 group-hover:bg-sky-600 group-hover:text-white',
    glow: 'hover:shadow-[0_20px_40px_-15px_rgba(2,132,199,0.22)] hover:border-sky-400/60 dark:hover:border-sky-500/50',
    accent: 'from-sky-500/10 to-blue-500/5',
  },
  {
    id: 'ess',
    title: 'Employee Self Services',
    description: 'Empower employees to manage their own information, requests and documents.',
    category: 'engagement',
    icon: 'UserCheck',
    color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 group-hover:bg-emerald-600 group-hover:text-white',
    glow: 'hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.22)] hover:border-emerald-400/60 dark:hover:border-emerald-500/50',
    accent: 'from-emerald-500/10 to-teal-500/5',
  },
  {
    id: 'attendance-leave',
    title: 'Attendance & Leave',
    description: 'Smart attendance tracking, flexible leave policies and real-time insights.',
    category: 'operations',
    icon: 'CalendarDays',
    color: 'text-teal-500 bg-teal-50 dark:bg-teal-900/30 group-hover:bg-teal-600 group-hover:text-white',
    glow: 'hover:shadow-[0_20px_40px_-15px_rgba(13,148,136,0.22)] hover:border-teal-400/60 dark:hover:border-teal-500/50',
    accent: 'from-teal-500/10 to-emerald-500/5',
  },
  {
    id: 'payroll',
    title: 'Payroll Automation',
    description: 'Accurate, automated and compliant payroll processing with ease.',
    category: 'operations',
    icon: 'DollarSign',
    color: 'text-rose-500 bg-rose-50 dark:bg-rose-900/30 group-hover:bg-rose-600 group-hover:text-white',
    glow: 'hover:shadow-[0_20px_40px_-15px_rgba(225,29,72,0.22)] hover:border-rose-400/60 dark:hover:border-rose-500/50',
    accent: 'from-rose-500/10 to-pink-500/5',
  },
  {
    id: 'recruitment-ats',
    title: 'Recruitment & ATS',
    description: 'Attract, track and hire the right talent with an efficient recruitment workflow.',
    category: 'core',
    icon: 'UserPlus',
    color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/30 group-hover:bg-purple-600 group-hover:text-white',
    glow: 'hover:shadow-[0_20px_40px_-15px_rgba(147,51,234,0.22)] hover:border-purple-400/60 dark:hover:border-purple-500/50',
    accent: 'from-purple-500/10 to-indigo-500/5',
  },
  {
    id: 'performance',
    title: 'Performance Management',
    description: 'Set goals, track progress and drive high performance across teams.',
    category: 'engagement',
    icon: 'BarChart3',
    color: 'text-amber-500 bg-amber-50 dark:bg-amber-900/30 group-hover:bg-amber-600 group-hover:text-white',
    glow: 'hover:shadow-[0_20px_40px_-15px_rgba(217,119,6,0.22)] hover:border-amber-400/60 dark:hover:border-amber-500/50',
    accent: 'from-amber-500/10 to-orange-500/5',
  },
  {
    id: 'learning',
    title: 'Learning & Development',
    description: 'Create learning programs and help your people grow their skills.',
    category: 'engagement',
    icon: 'BookOpen',
    color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 group-hover:bg-indigo-600 group-hover:text-white',
    glow: 'hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.22)] hover:border-indigo-400/60 dark:hover:border-indigo-500/50',
    accent: 'from-indigo-500/10 to-violet-500/5',
  },
  {
    id: 'tasks',
    title: 'Task Management',
    description: 'Create, assign and track tasks for individuals and teams. Improve collaboration and accountability.',
    category: 'operations',
    icon: 'CheckSquare',
    color: 'text-violet-500 bg-violet-50 dark:bg-violet-900/30 group-hover:bg-violet-600 group-hover:text-white',
    glow: 'hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.22)] hover:border-violet-400/60 dark:hover:border-violet-500/50',
    accent: 'from-violet-500/10 to-purple-500/5',
  },
  {
    id: 'team-chat',
    title: 'HRIFY Team',
    description: 'Internal communication with real-time chat, audio/video calls and file sharing. Keep your teams connected.',
    category: 'engagement',
    icon: 'MessageSquare',
    color: 'text-pink-500 bg-pink-50 dark:bg-pink-900/30 group-hover:bg-pink-600 group-hover:text-white',
    glow: 'hover:shadow-[0_20px_40px_-15px_rgba(236,72,153,0.22)] hover:border-pink-400/60 dark:hover:border-pink-500/50',
    accent: 'from-pink-500/10 to-rose-500/5',
  },
  {
    id: 'serve-now',
    title: 'Employee Serve Now',
    description: 'Request and manage employee letters (experience, salary, etc.), certificates and other HR services — all in one place.',
    category: 'operations',
    icon: 'FileText',
    color: 'text-cyan-500 bg-cyan-50 dark:bg-cyan-900/30 group-hover:bg-cyan-600 group-hover:text-white',
    glow: 'hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.22)] hover:border-cyan-400/60 dark:hover:border-cyan-500/50',
    accent: 'from-cyan-500/10 to-sky-500/5',
  },
  {
    id: 'reports',
    title: 'Reports & Analytics',
    description: 'Turn your people data into actionable insights with powerful reports and dashboards.',
    category: 'analytics',
    icon: 'PieChart',
    color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 group-hover:bg-blue-600 group-hover:text-white',
    glow: 'hover:shadow-[0_20px_40px_-15px_rgba(29,78,216,0.22)] hover:border-blue-500/60 dark:hover:border-blue-500/50',
    accent: 'from-blue-600/10 to-cyan-500/5',
  },
];
