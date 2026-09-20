export interface SolutionCard {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
  colorScheme: {
    badge: string;
    border: string;
    iconBg: string;
    iconColor: string;
    btn: string;
  };
}

export const solutionsData: SolutionCard[] = [
  {
    id: 'smes',
    tag: 'SMEs',
    title: 'For SMEs',
    subtitle: 'Simple. Affordable. Powerful.',
    description: 'Everything you need to set up structured HR processes and manage your growing team.',
    features: [
      'Easy onboarding',
      'Essential HR features',
      'Cost-effective solution',
    ],
    icon: 'Building',
    colorScheme: {
      badge: 'bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300',
      border: 'hover:border-blue-300',
      iconBg: 'bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400',
      iconColor: 'text-blue-600',
      btn: 'border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/50',
    },
  },
  {
    id: 'growing',
    tag: 'Growing Businesses',
    title: 'For Growing Businesses',
    subtitle: 'Scale with Confidence.',
    description: 'Streamline HR operations as your team grows, with automation and insights to support expansion.',
    features: [
      'Scalable infrastructure',
      'Advanced automation',
      'Real-time people insights',
    ],
    icon: 'TrendingUp',
    colorScheme: {
      badge: 'bg-purple-50 text-purple-600 dark:bg-purple-900/40 dark:text-purple-300',
      border: 'hover:border-purple-300',
      iconBg: 'bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400',
      iconColor: 'text-purple-600',
      btn: 'border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950/50',
    },
  },
  {
    id: 'enterprises',
    tag: 'Enterprises',
    title: 'For Enterprises',
    subtitle: 'Centralize. Automate. Empower.',
    description: 'A comprehensive HR solution for large organizations with complex needs.',
    features: [
      'Multi-location support',
      'Advanced security & compliance',
      'Custom integrations',
    ],
    icon: 'Landmark',
    colorScheme: {
      badge: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300',
      border: 'hover:border-emerald-300',
      iconBg: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400',
      iconColor: 'text-emerald-600',
      btn: 'border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/50',
    },
  },
  {
    id: 'hr-teams',
    tag: 'HR Teams',
    title: 'For HR Teams',
    subtitle: 'Do More. Focus on People.',
    description: 'Give your HR team the tools to save time, reduce manual work and focus on strategic initiatives.',
    features: [
      'End-to-end automation',
      'Powerful analytics',
      'AI-driven assistance',
    ],
    icon: 'Users2',
    colorScheme: {
      badge: 'bg-orange-50 text-orange-600 dark:bg-orange-900/40 dark:text-orange-300',
      border: 'hover:border-orange-300',
      iconBg: 'bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400',
      iconColor: 'text-orange-600',
      btn: 'border-orange-600 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950/50',
    },
  },
  {
    id: 'industry',
    tag: 'Industry Specific',
    title: 'Industry Specific Solutions',
    subtitle: 'Built for Your Industry.',
    description: 'Customized HR solutions for healthcare, education, technology, manufacturing, and more.',
    features: [
      'Industry-specific workflows',
      'Regulatory compliance',
      'Tailored reporting',
    ],
    icon: 'Factory',
    colorScheme: {
      badge: 'bg-violet-50 text-violet-600 dark:bg-violet-900/40 dark:text-violet-300',
      border: 'hover:border-violet-300',
      iconBg: 'bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400',
      iconColor: 'text-violet-600',
      btn: 'border-violet-600 text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-950/50',
    },
  },
];

export const industriesList = [
  { name: 'Healthcare', icon: 'HeartPulse' },
  { name: 'Education', icon: 'GraduationCap' },
  { name: 'Technology', icon: 'Laptop' },
  { name: 'Manufacturing', icon: 'Factory' },
  { name: 'Retail', icon: 'ShoppingCart' },
  { name: 'Professional Services', icon: 'Briefcase' },
  { name: 'Government', icon: 'Building2' },
  { name: 'More Industries', icon: 'MoreHorizontal' },
];
