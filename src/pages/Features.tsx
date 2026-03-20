import { motion } from 'motion/react';
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
  Zap,
  Sparkles
} from 'lucide-react';
import { FeatureCard } from '../components/Cards';

const Features = () => {
  const allFeatures = [
    {
      icon: Users,
      title: "Core H2R",
      description: "Manage the entire employee lifecycle from Hire to Retire in one unified, AI-driven platform.",
      link: "/features/core-h2r"
    },
    {
      icon: UserPlus,
      title: "Recruiting",
      description: "AI-powered applicant tracking and sourcing to find the best talent faster than ever.",
      link: "/features/recruiting"
    },
    {
      icon: Rocket,
      title: "Onboarding",
      description: "Seamless digital onboarding experiences that make new hires feel welcome and productive from day one.",
      link: "/features/onboarding"
    },
    {
      icon: Globe,
      title: "Regional Configuration",
      description: "Stay compliant globally with localized settings for taxes, labor laws, and cultural requirements.",
      link: "/features/regional-configuration"
    },
    {
      icon: FileSignature,
      title: "E-Signature",
      description: "Secure, legally binding digital signatures integrated directly into your HR workflows.",
      link: "/features/e-signature"
    },
    {
      icon: AlertCircle,
      title: "Grievance Management",
      description: "A transparent and fair system for managing employee concerns and resolving conflicts efficiently.",
      link: "/features/grievance-management"
    },
    {
      icon: Palmtree,
      title: "Time Off",
      description: "Automated leave tracking with flexible policies and real-time balance updates for all employees.",
      link: "/features/time-off"
    },
    {
      icon: ClipboardList,
      title: "Surveys",
      description: "Gather actionable feedback with AI-analyzed sentiment and engagement surveys.",
      link: "/features/surveys"
    },
    {
      icon: Award,
      title: "Proficiency Levels",
      description: "Track and develop employee skills with clear proficiency mapping and growth paths.",
      link: "/features/proficiency-levels"
    },
    {
      icon: Briefcase,
      title: "Projects & Attendance",
      description: "Integrated time tracking linked to projects for precise resource management and billing.",
      link: "/features/projects-attendance"
    },
    {
      icon: Lock,
      title: "Access Levels",
      description: "Granular permission controls to ensure data security and privacy across the entire organization.",
      link: "/features/access-levels"
    },
    {
      icon: FileText,
      title: "Reports",
      description: "Deep-dive analytics and automated reporting for data-driven HR decision making.",
      link: "/features/reports"
    },
    {
      icon: Monitor,
      title: "Asset Management",
      description: "Track company hardware and software assets assigned to employees throughout their tenure.",
      link: "/features/asset-management"
    },
    {
      icon: Sparkles,
      title: "AI Career Journey",
      description: "Empower your employees with AI-generated summaries of their entire career path, achievements, and milestones from hire to retire.",
      link: "/career-journey"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-gray-200 text-xs font-semibold text-purple-600 mb-6 shadow-sm"
          >
            <Zap className="w-3 h-3 fill-purple-600" />
            <span>THE COMPLETE HR SUITE</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
          >
            One Platform. <br /><span className="text-purple-600">Every HR Need.</span>
          </motion.h1>
          <p className="text-gray-600 max-w-2xl mx-auto">HRify-Ai brings together every module you need to manage a modern, global workforce with intelligence and ease.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
