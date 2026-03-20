import type { LucideIcon } from 'lucide-react';
import { 
  Users, 
  UserPlus, 
  Rocket, 
  Globe, 
  FileSignature, 
  AlertCircle, 
  Palmtree, 
  ClipboardList, 
  Award, 
  Briefcase, 
  Lock, 
  FileText, 
  Monitor,
  Sparkles
} from 'lucide-react';

interface FeatureEntry {
  title: string;
  icon: LucideIcon;
  description: string;
  longDescription: string;
  benefits: string[];
  link?: string;
}

export type FeaturesData = Record<string, FeatureEntry>;


export const featuresData: FeaturesData = {
  "core-h2r": {
    title: "Core H2R",
    icon: Users,
    description: "Manage the entire employee lifecycle from Hire to Retire in one unified, AI-driven platform.",
    longDescription: "Our Core H2R module is the backbone of your HR operations. It provides a single source of truth for all employee data, automating routine tasks and providing deep insights into your workforce dynamics. From personal details to organizational structure, everything is managed with precision and intelligence.",
    benefits: [
      "Unified employee database",
      "Automated lifecycle workflows",
      "Real-time organizational charts",
      "Compliance-ready record keeping"
    ]
  },
  "recruiting": {
    title: "Recruiting",
    icon: UserPlus,
    description: "AI-powered applicant tracking and sourcing to find the best talent faster than ever.",
    longDescription: "Transform your hiring process with AI. Our recruiting module helps you source, screen, and select the best candidates using advanced matching algorithms. Reduce time-to-hire and improve quality-of-hire with data-driven insights and automated communication.",
    benefits: [
      "AI resume screening",
      "Automated interview scheduling",
      "Collaborative hiring workflows",
      "Advanced talent sourcing"
    ]
  },
  "onboarding": {
    title: "Onboarding",
    icon: Rocket,
    description: "Seamless digital onboarding experiences that make new hires feel welcome and productive from day one.",
    longDescription: "First impressions matter. Our onboarding module ensures every new hire has a smooth transition into your company. Digital document signing, automated task lists, and personalized welcome portals help new employees hit the ground running.",
    benefits: [
      "Digital welcome kits",
      "Automated task management",
      "E-signature integration",
      "Progress tracking for managers"
    ]
  },
  "regional-configuration": {
    title: "Regional Configuration",
    icon: Globe,
    description: "Stay compliant globally with localized settings for taxes, labor laws, and cultural requirements.",
    longDescription: "Scale your business globally without the compliance headaches. Our regional configuration module allows you to set up localized HR policies, tax rules, and labor law compliance for every country you operate in.",
    benefits: [
      "Localized tax calculations",
      "Country-specific labor law compliance",
      "Multi-currency support",
      "Cultural holiday calendars"
    ]
  },
  "e-signature": {
    title: "E-Signature",
    icon: FileSignature,
    description: "Secure, legally binding digital signatures integrated directly into your HR workflows.",
    longDescription: "Eliminate paper and speed up approvals. Our integrated e-signature solution allows you to send, sign, and store documents securely within the HR platform. Fully compliant with global digital signature standards.",
    benefits: [
      "Legally binding signatures",
      "Automated document tracking",
      "Secure cloud storage",
      "Mobile-friendly signing"
    ]
  },
  "grievance-management": {
    title: "Grievance Management",
    icon: AlertCircle,
    description: "A transparent and fair system for managing employee concerns and resolving conflicts efficiently.",
    longDescription: "Build a culture of trust and transparency. Our grievance management module provides a secure channel for employees to raise concerns, with automated workflows for investigation, resolution, and documentation.",
    benefits: [
      "Anonymous reporting options",
      "Structured resolution workflows",
      "Confidential documentation",
      "Sentiment analysis and trends"
    ]
  },
  "time-off": {
    title: "Time Off",
    icon: Palmtree,
    description: "Automated leave tracking with flexible policies and real-time balance updates for all employees.",
    longDescription: "Simplify leave management for everyone. Employees can request time off in seconds, and managers can approve with full visibility into team availability. Flexible policy engines handle everything from PTO to parental leave.",
    benefits: [
      "Real-time balance tracking",
      "Flexible leave policy engine",
      "Team availability calendars",
      "Automated accruals"
    ]
  },
  "surveys": {
    title: "Surveys",
    icon: ClipboardList,
    description: "Gather actionable feedback with AI-analyzed sentiment and engagement surveys.",
    longDescription: "Listen to your employees at scale. Our survey module uses AI to analyze sentiment and identify key engagement drivers. From pulse surveys to annual reviews, get the insights you need to improve company culture.",
    benefits: [
      "AI sentiment analysis",
      "Pulse and engagement surveys",
      "Anonymous feedback loops",
      "Actionable culture insights"
    ]
  },
  "proficiency-levels": {
    title: "Proficiency Levels",
    icon: Award,
    description: "Track and develop employee skills with clear proficiency mapping and growth paths.",
    longDescription: "Develop your talent with data. Map out skills and proficiency levels across your organization to identify gaps and create personalized development plans. Align employee growth with company goals.",
    benefits: [
      "Skill gap analysis",
      "Personalized growth paths",
      "Competency mapping",
      "Performance alignment"
    ]
  },
  "projects-attendance": {
    title: "Projects & Attendance",
    icon: Briefcase,
    description: "Integrated time tracking linked to projects for precise resource management and billing.",
    longDescription: "Bridge the gap between HR and operations. Track attendance and link time spent directly to projects. Perfect for professional services and project-based organizations needing precise billing and resource allocation.",
    benefits: [
      "Project-based time tracking",
      "Automated attendance logs",
      "Resource utilization reports",
      "Seamless billing integration"
    ]
  },
  "access-levels": {
    title: "Access Levels",
    icon: Lock,
    description: "Granular permission controls to ensure data security and privacy across the entire organization.",
    longDescription: "Security is built-in, not bolted on. Our granular access control module ensures that every user has exactly the permissions they need, protecting sensitive employee data and maintaining privacy standards.",
    benefits: [
      "Role-based access control",
      "Field-level security",
      "Audit logs and tracking",
      "Custom permission sets"
    ]
  },
  "reports": {
    title: "Reports",
    icon: FileText,
    description: "Deep-dive analytics and automated reporting for data-driven HR decision making.",
    longDescription: "Turn HR data into strategic insights. Our reporting engine provides beautiful, automated reports on everything from turnover rates to diversity metrics. Empower your leadership with data-driven decisions.",
    benefits: [
      "Automated report generation",
      "Interactive data dashboards",
      "Predictive HR analytics",
      "Exportable data formats"
    ]
  },
  "asset-management": {
    title: "Asset Management",
    icon: Monitor,
    description: "Track company hardware and software assets assigned to employees throughout their tenure.",
    longDescription: "Keep track of your company's physical and digital assets. From laptops to software licenses, manage the entire lifecycle of assets assigned to employees, ensuring accountability and easy offboarding.",
    benefits: [
      "Hardware asset tracking",
      "Software license management",
      "Automated assignment logs",
      "Inventory audit tools"
    ]
  },
  "ai-career-journey": {
    title: "AI Career Journey",
    icon: Sparkles,
    description: "Empower your employees with AI-generated summaries of their entire career path, achievements, and milestones from hire to retire.",
    longDescription: "The future of employee engagement. Our AI Career Journey module creates a living narrative of an employee's time at the company, highlighting growth, achievements, and future potential. It's the ultimate tool for retention and recognition.",
    benefits: [
      "AI-generated career narratives",
      "Milestone tracking",
      "Impact visualization",
      "Automated exit summaries"
    ],
    link: "/career-journey"
  }
};
