import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Mission to <br /><span className="gradient-text">Humanize HR</span>
          </motion.h1>
          <p className="text-gray-600 max-w-2xl mx-auto">We believe HR should be invisible, automated, and employee-first. HRify-Ai is built to bridge the gap between management and talent.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <div className="glass p-12 rounded-[3rem] border-gray-200 shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why we started</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Traditional HR systems are built for compliance and control. They often feel cold, bureaucratic, and slow. We wanted to build something different—a system that treats employees like the adults they are.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By leveraging AI, we've automated the boring stuff, allowing HR teams to focus on what actually matters: people, culture, and growth.
            </p>
          </div>
          <div className="relative">
            <div className="w-full aspect-square rounded-[3rem] bg-gradient-to-br from-purple-600/10 to-blue-600/10 flex items-center justify-center">
              <div className="w-1/2 h-1/2 rounded-full bg-purple-500/10 blur-3xl animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Star className="w-24 h-24 text-purple-600 opacity-30" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Trusted by Global Teams</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "HR Director @ TechFlow", content: "HRify-Ai has completely removed the 'payroll week' stress. Our employees love the transparency." },
              { name: "Marcus Chen", role: "CEO @ NexaScale", content: "The self-service portal is a game changer. We've seen a 40% increase in employee satisfaction scores." },
              { name: "Elena Rodriguez", role: "CFO @ GlobalOps", content: "Finally, an HR system that actually understands payroll complexity and automates it perfectly." }
            ].map((t, i) => (
              <div key={i} className="glass p-8 rounded-3xl text-left border-gray-200 shadow-sm">
                <p className="text-gray-600 mb-8 italic">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
