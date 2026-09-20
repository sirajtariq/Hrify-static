import React, { useState } from 'react';
import { 
  Users, 
  CalendarCheck, 
  UserMinus, 
  Briefcase, 
  Search, 
  ChevronRight, 
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Calendar,
  MessageSquare,
  MoreHorizontal,
  Home,
  FileText
} from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="relative w-full max-w-6xl mx-auto my-8 select-none">
      {/* Background ambient lighting */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[85%] h-[380px] bg-gradient-to-r from-blue-400/20 via-sky-300/20 to-purple-400/20 blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Handwritten tag over phone */}
      <div className="hidden lg:block absolute -top-8 right-2 lg:right-6 z-30 text-right transform rotate-[-4deg]">
        <span className="font-handwritten text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 font-bold leading-none block">
          Manage Your Workforce
        </span>
        <span className="font-handwritten text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 font-bold leading-none block">
          Anytime, Anywhere
        </span>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
        {/* Laptop Mockup */}
        <div className="relative w-full lg:w-[75%] max-w-[850px] transition-transform duration-300 hover:scale-[1.01]">
          {/* Laptop Screen Bezel */}
          <div className="relative rounded-t-2xl p-2.5 sm:p-3.5 bg-slate-900 shadow-2xl border border-slate-700/80">
            {/* Camera dot */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-700" />
            
            {/* Laptop Display Inner Frame */}
            <div className="rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 text-xs sm:text-sm">
              <div className="flex h-[360px] sm:h-[430px]">
                {/* Internal App Sidebar */}
                <div className="w-36 sm:w-44 bg-slate-900 text-slate-300 p-3 hidden sm:flex flex-col justify-between select-none">
                  <div>
                    {/* App Logo */}
                    <div className="flex items-center gap-2 mb-4 px-1">
                      <div className="w-6 h-6 rounded-lg bg-gradient-brand flex items-center justify-center text-white font-black text-xs">
                        H
                      </div>
                      <span className="font-extrabold text-white text-sm tracking-wide">HRIFY</span>
                    </div>

                    {/* Nav links */}
                    <div className="space-y-0.5">
                      {[
                        { name: 'Dashboard', icon: 'LayoutDashboard' },
                        { name: 'Employees', icon: 'Users' },
                        { name: 'Attendance', icon: 'Calendar' },
                        { name: 'Leave', icon: 'Clock' },
                        { name: 'Payroll', icon: 'CreditCard' },
                        { name: 'Recruitment', icon: 'UserPlus' },
                        { name: 'Performance', icon: 'Award' },
                        { name: 'Reports', icon: 'BarChart' },
                        { name: 'Settings', icon: 'Settings' },
                      ].map((item) => (
                        <button
                          key={item.name}
                          onClick={() => setActiveTab(item.name)}
                          className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center gap-2 text-xs transition-colors ${
                            activeTab === item.name
                              ? 'bg-blue-600 text-white font-semibold'
                              : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                          }`}
                        >
                          <span className="truncate">{item.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-800/60 text-[10px] text-slate-400 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>AI Engine v2.4 Active</span>
                  </div>
                </div>

                {/* Internal App Main Content */}
                <div className="flex-1 bg-white dark:bg-[#0d1527] p-3.5 sm:p-5 overflow-hidden flex flex-col justify-between">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-400 text-xs">HR Portal</span>
                      <span className="text-slate-300">/</span>
                      <span className="font-bold text-slate-700 dark:text-slate-200 text-xs">Overview</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="relative hidden md:block">
                        <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          readOnly
                          placeholder="Search anything..."
                          className="pl-8 pr-3 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-800 border-none w-44 text-slate-500 cursor-default"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                          alt="Umair Safdar"
                          className="w-7 h-7 rounded-full object-cover border border-blue-500"
                        />
                        <div className="hidden sm:block text-left leading-tight">
                          <p className="font-bold text-xs text-slate-800 dark:text-slate-100">Umair Safdar</p>
                          <p className="text-[10px] text-slate-400">HR Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Greeting */}
                  <div className="pt-2">
                    <h4 className="font-bold text-base text-slate-900 dark:text-white">Good Morning, Umair!</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Here's what's happening today in your organization.</p>
                  </div>

                  {/* 4 Stat Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-1">
                    <div className="p-2.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-blue-500 text-white">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-slate-900 dark:text-white">124</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">Total Staff</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-emerald-500 text-white">
                        <CalendarCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-slate-900 dark:text-white">92%</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">Attendance</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/40 flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-rose-500 text-white">
                        <UserMinus className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-slate-900 dark:text-white">6</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">On Leave</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/40 flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-amber-500 text-white">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-slate-900 dark:text-white">8</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">Open Jobs</div>
                      </div>
                    </div>
                  </div>

                  {/* Chart & Upcoming Section */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                    {/* Growth Chart Mockup */}
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-xs text-slate-700 dark:text-slate-300">Employee Growth</span>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold flex items-center gap-0.5">
                          <ArrowUpRight className="w-3 h-3" /> 12%
                        </span>
                      </div>
                      {/* Bar graph bars */}
                      <div className="flex items-end justify-between h-20 pt-3 px-2">
                        {[
                          { month: 'Jan', h: '35%' },
                          { month: 'Feb', h: '45%' },
                          { month: 'Mar', h: '60%' },
                          { month: 'Apr', h: '75%' },
                          { month: 'May', h: '88%' },
                          { month: 'Jun', h: '100%' },
                        ].map((bar) => (
                          <div key={bar.month} className="flex flex-col items-center gap-1">
                            <div
                              style={{ height: bar.h }}
                              className="w-3.5 sm:w-4 rounded-t bg-gradient-to-t from-blue-600 to-sky-400 shadow-sm"
                            />
                            <span className="text-[9px] text-slate-400">{bar.month}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Upcoming Activities */}
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-xs text-slate-700 dark:text-slate-300">Upcoming Activities</span>
                        <span className="text-blue-600 text-[10px] font-medium cursor-pointer">View All</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between p-1.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/50">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            <div>
                              <p className="font-semibold text-[11px] text-slate-800 dark:text-slate-200">Interview - Marketing Lead</p>
                              <p className="text-[9px] text-slate-400">10:00 AM • Room 402</p>
                            </div>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                        <div className="flex items-center justify-between p-1.5 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/50">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <div>
                              <p className="font-semibold text-[11px] text-slate-800 dark:text-slate-200">Team Sprint Sync</p>
                              <p className="text-[9px] text-slate-400">12:00 PM • Virtual</p>
                            </div>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Laptop Base Stand */}
          <div className="relative mx-auto w-[96%] h-3.5 bg-slate-800 rounded-b-xl shadow-xl flex items-center justify-center">
            <div className="w-16 h-1 bg-slate-600 rounded-full" />
          </div>
        </div>

        {/* Mobile Phone Mockup */}
        <div className="relative w-48 sm:w-56 shrink-0 transition-transform duration-300 hover:scale-105">
          <div className="relative rounded-[32px] p-2.5 bg-slate-900 shadow-2xl border-2 border-slate-700/80">
            {/* Speaker notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-3 bg-slate-900 rounded-full z-20 flex items-center justify-center">
              <div className="w-6 h-1 bg-slate-800 rounded-full" />
            </div>

            {/* Phone Screen */}
            <div className="rounded-[24px] overflow-hidden bg-white dark:bg-slate-950 p-3 pt-6 text-slate-800 dark:text-slate-100 flex flex-col justify-between h-[360px] border border-slate-100 dark:border-slate-800 text-[11px]">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-black text-blue-600 tracking-wider">HRIFY</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                </div>

                <div className="mb-3">
                  <p className="font-bold text-xs">Hello, Ali! 👋</p>
                  <p className="text-[10px] text-slate-400">How can I help you today?</p>
                </div>

                {/* 4 Quick Action Cards */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50 text-center">
                    <Calendar className="w-4 h-4 mx-auto mb-1 text-blue-500" />
                    <span className="font-semibold text-[10px]">Apply Leave</span>
                  </div>
                  <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/50 border border-purple-100 dark:border-purple-900/50 text-center">
                    <CheckCircle2 className="w-4 h-4 mx-auto mb-1 text-purple-500" />
                    <span className="font-semibold text-[10px]">My Tasks</span>
                  </div>
                  <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900/50 text-center">
                    <FileText className="w-4 h-4 mx-auto mb-1 text-emerald-500" />
                    <span className="font-semibold text-[10px]">View Payslip</span>
                  </div>
                  <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-100 dark:border-amber-900/50 text-center">
                    <MessageSquare className="w-4 h-4 mx-auto mb-1 text-amber-500" />
                    <span className="font-semibold text-[10px]">Letters</span>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-gradient-brand text-white text-center text-[10px]">
                  <span>AI Assistant Online</span>
                </div>
              </div>

              {/* Bottom Nav Bar */}
              <div className="flex items-center justify-around pt-2 border-t border-slate-100 dark:border-slate-800 text-slate-400">
                <div className="flex flex-col items-center text-blue-600">
                  <Home className="w-3.5 h-3.5" />
                  <span className="text-[8px] font-bold">Home</span>
                </div>
                <div className="flex flex-col items-center">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span className="text-[8px]">Chat</span>
                </div>
                <div className="flex flex-col items-center">
                  <MoreHorizontal className="w-3.5 h-3.5" />
                  <span className="text-[8px]">More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
