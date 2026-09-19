export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  customPrice?: string;
  employees: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  icon: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Perfect for small teams getting started with HR.',
    monthlyPrice: 10000,
    employees: 'Up to 25 employees',
    features: [
      'Dashboard',
      'Employee Management',
      'Attendance & Leave',
      'Employee Self Services',
      'Task Management',
      'HRIFY Team (Chat)',
      'Standard Reports',
    ],
    ctaText: 'Get Started',
    icon: 'Rocket',
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'Ideal for growing businesses.',
    monthlyPrice: 25000,
    employees: 'Up to 100 employees',
    features: [
      'All Starter features',
      'Payroll Automation',
      'Recruitment & ATS',
      'Performance Management',
      'Employee Serve Now (Letters & Docs)',
      'HRIFY Team (Chat, Calls, File Sharing)',
      'Advanced Reports & Analytics',
    ],
    ctaText: 'Start Free Trial',
    icon: 'Users',
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'Built for established teams and multi-department needs.',
    monthlyPrice: 50000,
    employees: 'Up to 500 employees',
    isPopular: true,
    features: [
      'All Professional features',
      'Advanced Performance & Goals',
      'Learning & Development (LMS)',
      'Custom Workflows & Approvals',
      'Advanced Analytics & Dashboards',
      'Multi-Location Support',
      'Dedicated Account Manager',
    ],
    ctaText: 'Book a Demo',
    icon: 'Building2',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Fully customized for large organizations.',
    monthlyPrice: 0,
    customPrice: 'Custom Pricing',
    employees: '500+ employees',
    features: [
      'All Business features',
      'Custom Integrations (ERP, SSO, etc.)',
      'Advanced Security & Compliance',
      'Industry-Specific Solutions',
      'Dedicated Support & SLA',
      'On-Premise / Private Cloud (Optional)',
      'Custom Modules & Development',
    ],
    ctaText: 'Contact Sales',
    icon: 'Landmark',
  },
];

export const trustGuarantees = [
  { title: 'No Setup Fees', icon: 'Infinity' },
  { title: 'Quick Onboarding', icon: 'UserPlus' },
  { title: 'Secure & Compliant', icon: 'ShieldCheck' },
  { title: '99.9% Uptime', icon: 'Cloud' },
  { title: 'Ongoing Support', icon: 'Headphones' },
];
