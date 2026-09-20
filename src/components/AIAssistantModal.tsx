import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Bot, User, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
  onOpenDemo?: () => void;
}

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({
  isOpen,
  onClose,
  initialTopic = 'general',
  onOpenDemo,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      let welcome = "Hi! I'm HRIFY AI, your personal HR intelligence assistant. How can I help you optimize your workforce today?";
      if (initialTopic === 'pricing') {
        welcome = "Hello! Looking for the best HRIFY plan for your organization? Tell me your team size, and I'll recommend the ideal tier.";
      } else if (initialTopic === 'solutions') {
        welcome = "Welcome to HRIFY Solutions! Whether you're an SME, growing company, or large enterprise, I can tailor the right module setup for you.";
      } else if (initialTopic === 'resources') {
        welcome = "Looking for HR templates, case studies, or whitepapers? Ask me anything about modern HR best practices!";
      }

      setMessages([
        {
          id: 'welcome-1',
          sender: 'ai',
          text: welcome,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  }, [isOpen, initialTopic]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const quickPrompts = [
    'Recommend a plan for 45 employees',
    'How does automated payroll work in Pakistan?',
    'What features are included in Attendance & Leave?',
    'How fast can our team onboard?',
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = "HRIFY brings together employee records, attendance tracking, compliance, and automated payroll into one unified cloud experience. Would you like a personalized live walkthrough?";
      const lower = query.toLowerCase();

      if (lower.includes('plan') || lower.includes('pricing') || lower.includes('45') || lower.includes('cost')) {
        reply = "For a team of 45 employees, our **Professional Plan (PKR 25,000 / month)** is the optimal choice. It supports up to 100 employees, and includes full Payroll Automation, ATS recruitment, and Document workflows. Billed yearly, you also save 20%!";
      } else if (lower.includes('payroll') || lower.includes('tax')) {
        reply = "HRIFY Payroll automatically computes income tax deductions, provident fund contributions, allowances, and generates compliant pay slips in 1-click. Employees can access their digital payslips instantly on the mobile app.";
      } else if (lower.includes('attendance') || lower.includes('leave')) {
        reply = "Attendance & Leave includes biometric machine sync, mobile geo-fencing, flexible shift management, automated overtime calculations, and an instant leave approval workflow.";
      } else if (lower.includes('onboard') || lower.includes('setup')) {
        reply = "Most organizations are fully operational on HRIFY in under 48 hours! We provide bulk CSV employee import, pre-configured policy templates, and dedicated customer success onboarding.";
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[350px] h-[475px] max-h-[80vh] rounded-2xl bg-white shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
      {/* Header */}
      <div className="p-3 bg-gradient-brand text-white flex items-center justify-between shadow-md select-none">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white/50 shadow-sm bg-slate-900 shrink-0">
            <img src="/assets/ai-assistant.jpg" alt="HRIFY AI" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-bold text-xs sm:text-sm leading-tight">HRIFY AI Assistant</h3>
              <Sparkles className="w-3 h-3 text-cyan-300" />
            </div>
            <p className="text-[9.5px] text-blue-100">Always online • Instant HR answers</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          title="Close chat"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Message Feed */}
      <div className="flex-1 p-3 overflow-y-auto space-y-2.5 bg-slate-50/70">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-start gap-1.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {m.sender === 'ai' && (
              <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <Bot className="w-3 h-3" />
              </div>
            )}

            <div
              className={`max-w-[85%] p-2.5 rounded-xl text-xs leading-relaxed shadow-sm ${
                m.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-tr-none'
                  : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
              }`}
            >
              <p className="whitespace-pre-line">{m.text}</p>
              <span
                className={`text-[8.5px] block mt-1 ${
                  m.sender === 'user' ? 'text-blue-200 text-right' : 'text-slate-400'
                }`}
              >
                {m.time}
              </span>
            </div>

            {m.sender === 'user' && (
              <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                <User className="w-3 h-3" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-1.5 text-slate-400 text-[11px] pl-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse delay-150" />
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse delay-300" />
            <span>HRIFY AI is typing...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Suggestion Chips */}
      <div className="px-2.5 py-1.5 border-t border-slate-100 bg-white flex items-center gap-1 overflow-x-auto scrollbar-none">
        {quickPrompts.map((prompt) => (
          <button
            key={prompt}
            onClick={() => handleSend(prompt)}
            className="px-2 py-0.5 rounded-full text-[9.5px] font-medium whitespace-nowrap bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-100 transition-colors"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input & Book Demo Callout */}
      <div className="p-2.5 bg-white border-t border-slate-100 flex flex-col gap-1.5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-1.5"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about HR..."
            className="flex-1 px-3 py-1.5 rounded-full bg-slate-100 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
          <button
            type="submit"
            className="p-1.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

        {onOpenDemo && (
          <button
            onClick={() => {
              onClose();
              onOpenDemo();
            }}
            className="text-center text-[9.5px] font-semibold text-blue-600 hover:underline flex items-center justify-center gap-1"
          >
            <span>Need a custom walkthrough? Book a demo</span>
            <ArrowRight className="w-2.5 h-2.5" />
          </button>
        )}
      </div>
    </div>
  );
};
