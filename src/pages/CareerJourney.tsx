import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Download, 
  Mail, 
  TrendingUp, 
  Award, 
  Star, 
  ChevronRight,
  Calendar,
  Briefcase,
  Zap
} from 'lucide-react';

const CareerJourney = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowSuccess(true);
      
      const link = document.createElement('a');
      link.href = '/career-journey-example.png';
      link.download = 'HRify-Ai-Career-Journey-Summary.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => setShowSuccess(false), 3000);
    }, 2000);
  };

  const journeyData = [
    {
      date: "Mar 2024",
      title: "Onboarded as Senior Professional",
      type: "milestone",
      description: "Joined the organization to lead key strategic initiatives.",
      impact: "High"
    },
    {
      date: "Aug 2024",
      title: "Promotion to Lead Engineer",
      type: "promotion",
      description: "Recognized for exceptional leadership in the AI integration project.",
      impact: "Critical"
    },
    {
      date: "Dec 2024",
      title: "15% Salary Hike",
      type: "hike",
      description: "Annual performance review exceeded all KPIs.",
      impact: "Reward"
    },
    {
      date: "Feb 2025",
      title: "Successfully Completed Major Project",
      type: "achievement",
      description: "Led the successful deployment of a critical system module used across the organization.",
      impact: "Global"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-xs font-bold text-purple-600 mb-4 shadow-sm"
            >
              <Sparkles className="w-3 h-3" />
              <span>AI CAREER INSIGHTS</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900"
            >
              Your Career <span className="text-purple-600">Journey</span>
            </motion.h1>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="px-6 py-3 rounded-xl bg-purple-600 text-white font-bold flex items-center gap-2 hover:bg-purple-700 hover:scale-105 transition-all disabled:opacity-50 shadow-lg shadow-purple-600/20"
            >
              {isGenerating ? (
                <Zap className="w-4 h-4 animate-spin" />
              ) : (
                <Download className="w-4 h-4" />
              )}
              {isGenerating ? "Generating..." : "Download AI Summary"}
            </button>
            <button className="px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 font-bold flex items-center gap-2 hover:bg-gray-50 transition-all shadow-sm">
              <Mail className="w-4 h-4" />
              Send to Personal Email
            </button>
          </div>
        </div>


        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass p-8 rounded-[2.5rem] border-gray-200 mb-12 relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Sparkles className="w-32 h-32 text-purple-600" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                <TrendingUp className="text-purple-600 w-5 h-5" />
              </div>
              AI Career Narrative
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mb-8">
              "Since joining in March 2024, your trajectory has been marked by rapid professional growth and leadership excellence. You successfully transitioned from a Senior role to a Lead position within 6 months, a feat achieved by only 2% of the workforce. Your contributions to key projects have directly impacted your department's efficiency by 14%. You are currently on a high-growth path with a focus on strategic leadership."
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm">
                <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">Total Hikes</div>
                <div className="text-2xl font-bold text-green-600">+15%</div>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm">
                <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">Promotions</div>
                <div className="text-2xl font-bold text-purple-600">1</div>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm">
                <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">Achievements</div>
                <div className="text-2xl font-bold text-blue-600">12</div>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm">
                <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">Tenure</div>
                <div className="text-2xl font-bold text-gray-900">1.2 Years</div>
              </div>
            </div>
          </div>
        </motion.div>


        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900">
              <Calendar className="text-blue-600 w-6 h-6" />
              Career Timeline
            </h3>
            
            <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
              {journeyData.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12 group"
                >
                  <div className={`absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-transform group-hover:scale-110 ${
                    item.type === 'promotion' ? 'bg-purple-600 shadow-lg shadow-purple-600/30' :
                    item.type === 'hike' ? 'bg-green-600 shadow-lg shadow-green-600/30' :
                    'bg-blue-600 shadow-lg shadow-blue-600/30'
                  }`}>
                    {item.type === 'promotion' ? <TrendingUp className="w-5 h-5 text-white" /> :
                     item.type === 'hike' ? <Star className="w-5 h-5 text-white" /> :
                     <Briefcase className="w-5 h-5 text-white" />}
                  </div>
                  
                  <div className="glass p-6 rounded-2xl border-gray-200 hover:border-gray-300 transition-all shadow-sm hover:shadow-md">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{item.date}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        item.impact === 'Critical' ? 'bg-red-100 text-red-600' :
                        item.impact === 'Reward' ? 'bg-green-100 text-green-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {item.impact} IMPACT
                      </span>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>


          <div className="space-y-8">
            <div className="glass p-8 rounded-[2rem] border-gray-200 shadow-sm">
              <h4 className="font-bold mb-6 flex items-center gap-2 text-gray-900">
                <Award className="text-yellow-600 w-5 h-5" />
                Key Skills Mastered
              </h4>
              <div className="flex flex-wrap gap-2">
                {["React Architecture", "AI Integration", "Team Leadership", "Cloud Infrastructure", "Performance Optimization"].map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-[2rem] border-gray-200 relative overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h4 className="font-bold mb-2 text-gray-900">Resignation Summary</h4>
                <p className="text-sm text-gray-600 mb-4">Generate your final exit document with full career highlights.</p>
                <div className="flex items-center text-purple-600 text-sm font-bold gap-1">
                  Learn More <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Toast */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-12 left-1/2 -translate-x-1/2 glass px-8 py-4 rounded-2xl border-green-500/30 text-green-400 font-bold flex items-center gap-3 z-50 shadow-2xl"
            >
              <Zap className="w-5 h-5 fill-green-400" />
              AI Summary Generated & Saved!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CareerJourney;
