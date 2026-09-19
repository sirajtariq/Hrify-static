export interface ResourceItem {
  id: string;
  category: 'whitepaper' | 'case-study' | 'template' | 'webinar' | 'blog' | 'guide' | 'faq';
  typeLabel: string;
  title: string;
  description: string;
  actionText: string;
  image?: string;
  badgeColor?: string;
}

export const featuredResources: ResourceItem[] = [
  {
    id: 'feat-1',
    category: 'whitepaper',
    typeLabel: 'WHITEPAPER',
    title: 'The Future of HR in the Age of AI',
    description: 'Trends, opportunities and how AI is transforming the workplace.',
    actionText: 'Download PDF',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    badgeColor: 'bg-blue-600',
  },
  {
    id: 'feat-2',
    category: 'case-study',
    typeLabel: 'CASE STUDY',
    title: 'How a Growing Tech Company Scaled HR with HRIFY',
    description: 'From 50 to 500 employees with seamless HR operations.',
    actionText: 'Read Case Study',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    badgeColor: 'bg-indigo-600',
  },
  {
    id: 'feat-3',
    category: 'template',
    typeLabel: 'TEMPLATE',
    title: 'Employee Onboarding Checklist',
    description: 'A ready-to-use checklist for a smooth onboarding experience.',
    actionText: 'Download Template',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
    badgeColor: 'bg-sky-500',
  },
  {
    id: 'feat-4',
    category: 'webinar',
    typeLabel: 'WEBINAR',
    title: 'Building a People-First Workplace',
    description: 'Watch our expert discussion on modern HR strategies.',
    actionText: 'Watch Now',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80',
    badgeColor: 'bg-purple-600',
  },
];

export const resourceCategories = [
  {
    id: 'blog',
    title: 'Blog & Insights',
    description: 'Tips, trends and expert opinions on modern HR.',
    icon: 'FileText',
    color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/30',
  },
  {
    id: 'case-study',
    title: 'Case Studies',
    description: 'Real stories. Real results.',
    icon: 'Briefcase',
    color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30',
  },
  {
    id: 'whitepaper',
    title: 'Whitepapers',
    description: 'In-depth research and industry reports.',
    icon: 'FileSpreadsheet',
    color: 'text-rose-500 bg-rose-50 dark:bg-rose-900/30',
  },
  {
    id: 'webinar',
    title: 'Webinars',
    description: 'Watch on-demand sessions and events.',
    icon: 'Video',
    color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/30',
  },
  {
    id: 'template',
    title: 'Templates',
    description: 'Ready-to-use HR templates and checklists.',
    icon: 'CheckSquare',
    color: 'text-amber-500 bg-amber-50 dark:bg-amber-900/30',
  },
  {
    id: 'guide',
    title: 'Product Guides',
    description: 'Step-by-step guides for HRIFY.',
    icon: 'BookOpen',
    color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30',
  },
  {
    id: 'faq',
    title: 'FAQ',
    description: 'Quick answers to common questions.',
    icon: 'HelpCircle',
    color: 'text-teal-500 bg-teal-50 dark:bg-teal-900/30',
  },
];
