import { motion } from 'motion/react';
import { PricingCard } from '../components/Cards';

const Pricing = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
          >
            Simple, Transparent <br /><span className="text-blue-600">Pricing</span>
          </motion.h1>
          <p className="text-gray-600">Choose the plan that fits your team size and needs.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard 
            tier="Starter" 
            price="49" 
            features={["Up to 20 employees", "Self-service portal", "Basic leave management", "Email support"]} 
          />
          <PricingCard 
            tier="Professional" 
            price="149" 
            features={["Up to 100 employees", "AI Salary Verification", "Payroll automation", "Priority support", "Performance tracking"]} 
            recommended 
          />
          <PricingCard 
            tier="Enterprise" 
            price="Custom" 
            features={["Unlimited employees", "Custom AI workflows", "Dedicated manager", "SSO & Advanced Security", "API access"]} 
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
