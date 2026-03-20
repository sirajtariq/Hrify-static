import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Zap, ArrowRight, CheckCircle2, Sparkles, ArrowUpRight, 
  Shield, Cpu, Globe, BarChart3, Users, Clock, FileText, 
  Layers, MessageSquare, Star, Play, TrendingUp, Award,
  MousePointer2, Fingerprint, Activity
} from 'lucide-react';
import { Link } from 'react-router';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="bg-[#f8f9fa] text-gray-900 selection:bg-purple-500/20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(circle_at_50%_40%,rgba(124,58,237,0.05),transparent_60%)] -z-10" />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/5 blur-[140px] rounded-full -z-10 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[140px] rounded-full -z-10" />
        

        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <motion.div 
            style={{ opacity, scale }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/5 border border-purple-500/10 text-[10px] font-bold uppercase tracking-[0.3em] text-purple-600 mb-10"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                Next-Gen Workforce Intelligence
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-bold tracking-tight mb-8 leading-[0.9] sm:leading-[0.85] text-gray-900"
              >
                The HR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 italic font-serif">Operating System.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="max-w-lg text-xl text-gray-600 mb-12 leading-relaxed font-light"
              >
                HRify-Ai is the first AI-native platform that unifies payroll, compliance, and employee growth into a single, autonomous intelligence layer.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
              >
                <Link to="/contact" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gray-900 text-white font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-[0_10px_40px_rgba(0,0,0,0.1)] text-center">
                  Get Started
                </Link>
                <Link to="/features" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gray-100 border border-gray-200 font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] hover:bg-gray-200 transition-all flex items-center justify-center gap-3 group text-gray-900">
                  Explore Features
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-16 flex items-center gap-6"
              >
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#f8f9fa] bg-gray-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-xs text-gray-500">
                  <span className="text-gray-900 font-bold">500+</span> companies scaling with HRify-Ai
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="relative lg:block hidden"
            >
              {/* Premium Feature Card: AI Career Journey */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[3.2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative glass p-1 rounded-[3.2rem] border-gray-200 shadow-2xl">
                  <div className="bg-white rounded-[3rem] overflow-hidden border border-gray-100 p-10">
                    <div className="flex items-center justify-between mb-16">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                          <Sparkles className="text-white w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-[10px] text-purple-600 uppercase tracking-[0.3em] font-black">AI Career Journey</div>
                          <div className="text-lg font-bold text-gray-900">Professional Trajectory</div>
                        </div>
                      </div>
                      <Link to="/career-journey" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <ArrowUpRight className="w-5 h-5 text-gray-400" />
                      </Link>
                    </div>

                    <div className="space-y-10">
                      <div className="relative">
                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "82%" }}
                            transition={{ delay: 1.2, duration: 2, ease: "circOut" }}
                            className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500" 
                          />
                        </div>
                        <div className="flex justify-between mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                          <span>Joined: 2023</span>
                          <span className="text-purple-600">Next: Senior Director</span>
                        </div>
                      </div>

                      <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                          <Cpu className="w-12 h-12 text-gray-900" />
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed font-light italic">
                          "Based on your current velocity and leadership impact, you are on track for a 15% salary adjustment in Q3. Focus on cross-functional mentorship to accelerate."
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { label: 'Velocity', val: 'High', color: 'text-purple-600' },
                          { label: 'Growth', val: '+24%', color: 'text-emerald-600' },
                          { label: 'Impact', val: '9.8', color: 'text-blue-600' }
                        ].map((stat, i) => (
                          <div key={i} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-center">
                            <div className="text-[9px] text-gray-400 uppercase tracking-widest mb-1 font-bold">{stat.label}</div>
                            <div className={`text-xl font-bold ${stat.color}`}>{stat.val}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 glass p-5 rounded-3xl border-gray-200 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <CheckCircle2 className="text-emerald-600 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Compliance</div>
                    <div className="text-sm font-bold text-gray-900">100% Verified</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 glass p-5 rounded-3xl border-gray-200 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <Activity className="text-purple-600 w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Real-time</div>
                    <div className="text-sm font-bold text-gray-900">Live Sync Active</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      <section className="py-20 border-y border-gray-100 bg-gray-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">Powering the world's most ambitious teams</p>
        </div>
        <div className="flex gap-20 animate-marquee whitespace-nowrap">
          {[1,2].map(set => (
            <div key={set} className="flex gap-20 items-center opacity-40 grayscale hover:grayscale-0 transition-all">
              {['TECHCORP', 'GLOBALFLOW', 'INNOVATE', 'QUANTUM', 'NEXUS', 'AETHER', 'ORBIT', 'VORTEX'].map((brand) => (
                <span key={brand} className="text-2xl font-black tracking-tighter text-gray-900 hover:text-purple-600 transition-colors cursor-default">{brand}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { label: 'Time Saved', val: '50%', desc: 'Reduction in manual HR tasks' },
              { label: 'Accuracy', val: '99.9%', desc: 'Payroll and compliance precision' },
              { label: 'Retention', val: '+15%', desc: 'Increase in employee engagement' },
              { label: 'Deployment', val: '24h', desc: 'Average setup time for enterprise' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2 tracking-tighter text-gray-900">{stat.val}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-600 mb-3">{stat.label}</div>
                <p className="text-sm text-gray-500 font-light">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 md:py-48 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-32">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-6"
            >
              The Process
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">Three steps to <br /><span className="text-purple-600 italic font-serif">HR autonomy.</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent hidden md:block" />
            
            {[
              { 
                step: '01', 
                title: 'Connect Systems', 
                desc: 'Sync your existing payroll, ERP, and communication tools in minutes.',
                icon: Globe
              },
              { 
                step: '02', 
                title: 'Train Intelligence', 
                desc: 'Our AI learns your business rules, regional laws, and company culture.',
                icon: Cpu
              },
              { 
                step: '03', 
                title: 'Go Autonomous', 
                desc: 'Watch as HRify-Ai handles onboarding, payroll, and growth automatically.',
                icon: Zap
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 group"
              >
                <div className="w-20 h-20 rounded-[2rem] bg-white border border-gray-100 flex items-center justify-center mb-10 group-hover:border-purple-500/50 transition-all duration-500 shadow-xl">
                  <item.icon className="w-8 h-8 text-purple-600" />
                  <div className="absolute -top-4 -right-4 text-4xl font-black text-gray-100 group-hover:text-purple-500/10 transition-colors">{item.step}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-gray-900">{item.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold uppercase tracking-[0.3em] text-purple-400 mb-6"
              >
                <Layers className="w-3 h-3" />
                Capabilities
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.9]">One platform. <br /><span className="text-gray-500 italic font-serif">Infinite scale.</span></h2>
            </div>
            <Link to="/features" className="px-8 py-4 rounded-full bg-gray-100 border border-gray-200 text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-all text-gray-900">
              Explore All Modules
            </Link>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Global Compliance - 8 cols */}
            <div className="md:col-span-8 glass p-10 rounded-[3rem] border-gray-200 relative overflow-hidden group min-h-[400px] flex flex-col justify-between shadow-sm">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Globe className="w-64 h-64 text-gray-900" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-purple-600/10 flex items-center justify-center mb-8">
                  <Globe className="text-purple-600 w-7 h-7" />
                </div>
                <h3 className="text-4xl font-bold mb-6 tracking-tight text-gray-900">Global Compliance Engine</h3>
                <p className="text-gray-600 text-lg max-w-md font-light leading-relaxed">Automated regional configurations for payroll, taxes, and labor laws across 150+ countries. Stay compliant without the manual overhead.</p>
              </div>
              <div className="relative z-10 flex gap-4 mt-12">
                {['150+ Countries', 'Auto-Tax', 'Legal Guard'].map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-xl bg-gray-100 border border-gray-200 text-[10px] font-bold uppercase tracking-widest text-gray-500">{tag}</span>
                ))}
              </div>
            </div>

            {/* Security - 4 cols */}
            <div className="md:col-span-4 glass p-10 rounded-[3rem] border-gray-200 flex flex-col justify-between group relative overflow-hidden shadow-sm">
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Shield className="w-48 h-48 text-gray-900" />
              </div>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-8">
                  <Shield className="text-blue-600 w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight text-gray-900">Enterprise <br />Security</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">Bank-grade encryption and granular access controls to keep your sensitive employee data protected.</p>
              </div>
              <div className="mt-12">
                <div className="flex items-center gap-2 mb-2">
                  <Fingerprint className="w-4 h-4 text-blue-600" />
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">SOC2 Type II</span>
                </div>
                <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-blue-600" />
                </div>
              </div>
            </div>

            {/* Analytics - 4 cols */}
            <div className="md:col-span-4 glass p-10 rounded-[3rem] border-gray-200 flex flex-col justify-between group relative overflow-hidden shadow-sm">
              <div className="absolute -top-10 -left-10 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                <BarChart3 className="w-48 h-48 text-gray-900" />
              </div>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-600/10 flex items-center justify-center mb-8">
                  <BarChart3 className="text-emerald-600 w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight text-gray-900">Predictive <br />Analytics</h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">AI-driven insights into retention risks, performance trends, and workforce planning.</p>
              </div>
              <div className="mt-12 flex items-end gap-2 h-16">
                {[40, 70, 100, 60, 85].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1, duration: 1 }}
                    className="flex-1 bg-emerald-600/20 rounded-t-lg border-t border-emerald-600/30" 
                  />
                ))}
              </div>
            </div>

            {/* Workflows - 8 cols */}
            <div className="md:col-span-8 glass p-10 rounded-[3rem] border-gray-200 relative overflow-hidden group min-h-[400px] flex flex-col justify-between shadow-sm">
              <div className="absolute bottom-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Cpu className="w-64 h-64 text-gray-900" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-8">
                  <Cpu className="text-blue-600 w-7 h-7" />
                </div>
                <h3 className="text-4xl font-bold mb-6 tracking-tight text-gray-900">Autonomous Workflows</h3>
                <p className="text-gray-600 text-lg max-w-lg font-light leading-relaxed">Let AI handle the repetitive tasks. From onboarding sequences to expense approvals, HRify-Ai learns your business rules and executes them flawlessly.</p>
              </div>
              <div className="relative z-10 grid grid-cols-2 gap-12 mt-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center shrink-0">
                    <MousePointer2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Zero-Touch Onboarding</div>
                    <div className="text-xs text-gray-500">Auto-provisioning & docs</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Smart Approvals</div>
                    <div className="text-xs text-gray-500">Rule-based automation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900">Loved by <br /><span className="text-purple-600 italic font-serif">modern leaders.</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "HRify-Ai transformed our entire HR department from a cost center into a strategic intelligence unit. The AI Career Journey is a game changer for retention.",
                author: "Sarah Jenkins",
                role: "CHRO at TechCorp",
                avatar: "https://picsum.photos/seed/sarah/100/100"
              },
              {
                text: "The global compliance engine saved us hundreds of hours in legal research. We expanded to 4 new countries in record time without hiring more HR staff.",
                author: "Marcus Chen",
                role: "VP Operations at GlobalFlow",
                avatar: "https://picsum.photos/seed/marcus/100/100"
              },
              {
                text: "Finally, an HR system that employees actually love using. The transparency in salary reports and career tracking has built immense trust in our team.",
                author: "Elena Rodriguez",
                role: "CEO at Innovate",
                avatar: "https://picsum.photos/seed/elena/100/100"
              }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-10 rounded-[2.5rem] border-gray-200 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex gap-1 mb-8">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-purple-600 text-purple-600" />)}
                  </div>
                  <p className="text-gray-600 text-lg font-light leading-relaxed italic">"{t.text}"</p>
                </div>
                <div className="mt-12 flex items-center gap-4">
                  <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" />
                  <div>
                    <div className="font-bold text-sm text-gray-900">{t.author}</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-24 md:py-48 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 blur-[180px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-8"
            >
              <Layers className="w-3 h-3" />
              Transparency
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tight leading-[0.85] text-gray-900">Radical <br />clarity <br /><span className="text-blue-600 italic font-serif">by design.</span></h2>
            <p className="text-gray-600 text-xl mb-16 leading-relaxed font-light">We believe HR should serve the employee first. HRify-Ai provides a direct window into every aspect of their professional life, from salary breakdowns to career growth.</p>
            
            <div className="space-y-10">
              {[
                { icon: FileText, title: "Automated Salary Reports", desc: "Detailed monthly breakdowns sent directly to employees." },
                { icon: MessageSquare, title: "Instant Query Resolution", desc: "Direct communication channels for payroll and HR queries." },
                { icon: Users, title: "Self-Service Management", desc: "Employees manage their own data, leaves, and assets." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-8 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-blue-600/50 transition-colors shadow-sm">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h4>
                    <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass p-1 rounded-[4rem] border-blue-600/10 blue-glow relative">
              <div className="absolute -top-10 -right-10 glass p-6 rounded-3xl border-gray-200 shadow-2xl z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center">
                    <Award className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Performance</div>
                    <div className="text-sm font-bold text-gray-900">Top 5% Performer</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[3.8rem] p-12 border border-gray-100 relative overflow-hidden shadow-inner">
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <h5 className="font-bold text-2xl tracking-tight text-gray-900">Salary Breakdown</h5>
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mt-2 font-bold">March 2024 · Verified ✓</p>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-blue-600/10 flex items-center justify-center border border-blue-600/20">
                    <CheckCircle2 className="text-blue-600 w-7 h-7" />
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex justify-between items-center py-4 border-b border-gray-100">
                    <span className="text-gray-500">Base Salary</span>
                    <span className="font-mono font-bold text-lg text-gray-900">$6,500.00</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-gray-100">
                    <span className="text-gray-500">Performance Bonus</span>
                    <span className="font-mono font-bold text-lg text-emerald-600">+$450.00</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-gray-100">
                    <span className="text-gray-500">Deductions (Tax/Ins)</span>
                    <span className="font-mono font-bold text-lg text-red-600">-$100.00</span>
                  </div>
                  <div className="flex justify-between items-center pt-10">
                    <span className="font-bold text-2xl tracking-tight text-gray-900">Net Payable</span>
                    <span className="font-mono text-4xl font-bold text-blue-600 tracking-tighter">$6,850.00</span>
                  </div>
                </div>

                <div className="mt-16 p-8 rounded-3xl bg-gray-50 border border-gray-100 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">AI Insight Engine</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed font-light italic">
                    "Your net payable is 7% higher than last month due to the quarterly performance bonus. All tax calculations are compliant with regional laws."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/5 to-transparent -z-10" />
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-9xl font-bold mb-10 tracking-tighter leading-[0.85] text-gray-900">Ready to build <br /><span className="text-purple-600">the future?</span></h2>
            <p className="text-gray-600 text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">Join hundreds of forward-thinking companies that have transformed their HR operations with HRify-Ai.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link to="/contact" className="w-full sm:w-auto px-14 py-7 rounded-full bg-gray-900 text-white font-bold text-xs uppercase tracking-[0.3em] hover:bg-gray-800 transition-all shadow-xl">
                Get Started Now
              </Link>
              <Link to="/contact" className="w-full sm:w-auto px-14 py-7 rounded-full bg-gray-100 border border-gray-200 text-gray-900 font-bold text-xs uppercase tracking-[0.3em] hover:bg-gray-200 transition-all">
                Talk to Sales
              </Link>
            </div>

            <div className="mt-24 flex flex-wrap items-center justify-center gap-12 text-gray-500">
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 fill-purple-600 text-purple-600" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">4.9/5 Rating</span>
              </div>
              <div className="w-px h-6 bg-gray-200 hidden md:block" />
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Enterprise Ready</span>
              </div>
              <div className="w-px h-6 bg-gray-200 hidden md:block" />
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Global Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
