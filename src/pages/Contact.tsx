import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Phone,
  Sparkles
} from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-xs font-bold text-purple-600 mb-6">
              <Sparkles className="w-3 h-3" />
              <span>GET IN TOUCH</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-gray-900">
              Let's build the <span className="text-purple-600">future of HR</span> together.
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-lg leading-relaxed">
              Have questions about HRify-Ai? Our team is ready to help you transform your workforce management.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center group-hover:border-purple-500/50 transition-colors shadow-sm">
                  <Mail className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-gray-900">Email Us</h4>
                  <p className="text-gray-600">hello@hrify-ai.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center group-hover:border-blue-500/50 transition-colors shadow-sm">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-gray-900">Call Us</h4>
                  <p className="text-gray-600">+1 (888) HRify-Ai</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors shadow-sm">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-gray-900">Visit Us</h4>
                  <p className="text-gray-600">100 AI Plaza, Silicon Valley, CA</p>
                </div>
              </div>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-[2.5rem] border-gray-200 relative overflow-hidden shadow-xl"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-purple-500/50 focus:outline-none transition-all placeholder:text-gray-400 text-gray-900"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Work Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@company.com"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-purple-500/50 focus:outline-none transition-all placeholder:text-gray-400 text-gray-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Company Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Acme Corp"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-purple-500/50 focus:outline-none transition-all placeholder:text-gray-400 text-gray-900"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-purple-500/50 focus:outline-none transition-all placeholder:text-gray-400 text-gray-900 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 rounded-2xl bg-purple-600 text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-purple-700 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 shadow-lg shadow-purple-600/20"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6 relative z-10"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Message Sent!</h3>
                  <p className="text-gray-600 max-w-xs mx-auto">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-purple-600 font-bold hover:text-purple-700 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>


            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
