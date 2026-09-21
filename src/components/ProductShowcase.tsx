import React, { useState } from 'react';
import { 
  Users, 
  UserPlus,
  UserCheck,
  CalendarDays,
  Calendar,
  DollarSign, 
  TrendingUp,
  GraduationCap,
  CheckSquare,
  MessageSquare,
  LifeBuoy,
  BarChart3,
  Settings,
  Search, 
  Bell, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
  Home,
  FileText,
  Clock,
  User,
  Fingerprint,
  CreditCard,
  Folder,
  ShieldCheck,
  Headphones,
  Check,
  FileCheck,
  Briefcase
} from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  const [activeDesktopTab, setActiveDesktopTab] = useState('Dashboard');
  const [activeMobileNav, setActiveMobileNav] = useState('Home');

  return (
    <div className="relative w-full max-w-7xl mx-auto my-6 select-none">
      {/* Background ambient lighting */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[90%] h-[420px] bg-gradient-to-r from-blue-400/20 via-sky-300/20 to-purple-400/20 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-6 lg:gap-8 pt-4">
        
        {/* ========================================================================= */}
        {/* 1. DESKTOP SCREEN MOCKUP (HR Portal Dashboard)                            */}
        {/* ========================================================================= */}
        <div className="relative w-full lg:w-[68%] max-w-[850px] transition-transform duration-300 hover:scale-[1.006]">
          {/* Laptop Screen Bezel */}
          <div className="relative rounded-t-2xl p-2 sm:p-2.5 bg-slate-900 shadow-2xl border border-slate-700/80">
            {/* Camera notch */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-2.5 bg-slate-900 rounded-b-lg z-30 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            </div>
            
            {/* Display Inner Content */}
            <div className="rounded-xl overflow-hidden bg-white dark:bg-[#0b101f] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 text-xs">
              <div className="flex h-[430px] sm:h-[490px]">
                
                {/* Desktop App Sidebar */}
                <div className="w-40 sm:w-48 bg-[#F8FAFC] dark:bg-[#070b14] p-2.5 hidden sm:flex flex-col justify-between select-none border-r border-slate-200/80 dark:border-slate-800/80 shrink-0">
                  <div>
                    {/* HRIFY Original Logo with collapse icon */}
                    <div className="flex items-center justify-between mb-3 px-1">
                      <img
                        src="/Assests/HRIFY_Logo_White_Background.png"
                        alt="HRIFY"
                        className="h-7 w-auto object-contain dark:hidden"
                      />
                      <img
                        src="/Assests/HRIFY_Logo_Dark_Background.png"
                        alt="HRIFY"
                        className="h-7 w-auto object-contain hidden dark:block"
                      />
                      <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5">
                        <ChevronLeft className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Nav links */}
                    <div className="space-y-0.5 max-h-[310px] overflow-y-auto scrollbar-none pr-0.5">
                      {[
                        { name: 'Dashboard', icon: Home },
                        { name: 'Employee Management', icon: Users },
                        { name: 'Recruitment & ATS', icon: UserPlus },
                        { name: 'Employee Self Services', icon: UserCheck },
                        { name: 'Attendance & Leave', icon: CalendarDays },
                        { name: 'Payroll', icon: DollarSign },
                        { name: 'Performance', icon: TrendingUp },
                        { name: 'Learning & Development', icon: GraduationCap },
                        { name: 'Task Management', icon: CheckSquare },
                        { name: 'HRIFY Team', icon: MessageSquare },
                        { name: 'Employee Serve Now', icon: LifeBuoy },
                        { name: 'Reports & Analytics', icon: BarChart3 },
                        { name: 'Settings', icon: Settings },
                      ].map((item) => {
                        const Icon = item.icon;
                        const isActive = activeDesktopTab === item.name;
                        return (
                          <button
                            key={item.name}
                            onClick={() => setActiveDesktopTab(item.name)}
                            className={`w-full text-left px-2 py-1.5 rounded-xl flex items-center gap-2 text-[10px] font-medium transition-all ${
                              isActive
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm font-semibold'
                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                            }`}
                          >
                            <Icon className="w-3 h-3 shrink-0" />
                            <span className="truncate">{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom Brand Card */}
                  <div className="p-2 rounded-xl bg-gradient-to-br from-blue-50/80 to-indigo-50/60 dark:from-slate-800/80 dark:to-slate-900/80 border border-blue-100/60 dark:border-slate-700/50">
                    <p className="text-[9px] font-bold text-slate-800 dark:text-slate-200 leading-tight">People</p>
                    <p className="text-[9px] font-bold text-slate-800 dark:text-slate-200 leading-tight">Process</p>
                    <p className="text-[9px] font-bold text-slate-800 dark:text-slate-200 leading-tight">Progress</p>
                    <div className="w-full h-0.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mt-1" />
                  </div>
                </div>

                {/* Desktop App Main Content Body */}
                <div className="flex-1 bg-[#F1F5F9]/60 dark:bg-[#0B101E] p-2.5 sm:p-3.5 overflow-y-auto flex flex-col space-y-2.5 scrollbar-none">
                  
                  {/* Top Bar with Search and Actions */}
                  <div className="flex items-center justify-between gap-2.5 bg-white dark:bg-[#0F172A] p-2 rounded-2xl border border-slate-200/70 dark:border-slate-800 shadow-sm shrink-0">
                    {/* Search Input */}
                    <div className="relative flex-1 max-w-sm">
                      <Search className="w-3 h-3 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        readOnly
                        placeholder="Search employees, modules, requests, or anything..."
                        className="w-full pl-7 pr-10 py-1 text-[10px] rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 cursor-default"
                      />
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[8px] font-medium text-slate-400 px-1 py-0.5 rounded bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                        ⌘ K
                      </span>
                    </div>

                    {/* Right Header Buttons */}
                    <div className="flex items-center gap-1.5">
                      <div className="relative p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer">
                        <Bell className="w-3 h-3" />
                        <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-rose-500" />
                      </div>
                      <div className="p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer">
                        <MessageSquare className="w-3 h-3" />
                      </div>
                      <div className="p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer">
                        <Settings className="w-3 h-3" />
                      </div>

                      {/* Ask HRIFY AI Gradient Pill */}
                      <button className="px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-[10px] flex items-center gap-1 shadow-sm shadow-indigo-500/20 hover:brightness-105 active:scale-95 transition-all">
                        <Sparkles className="w-3 h-3 text-cyan-200" />
                        <span>Ask HRIFY AI</span>
                      </button>
                    </div>
                  </div>

                  {/* 4 KPI Metric Cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                    {/* 1. Total Employees */}
                    <div className="p-2.5 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200/70 dark:border-slate-800 shadow-sm flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <div className="w-6 h-6 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                            <Users className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-[9px] font-medium text-slate-500 dark:text-slate-400">Total Employees</span>
                        </div>
                        <div className="text-base font-extrabold text-slate-900 dark:text-white leading-tight">248</div>
                        <div className="text-[8px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5 mt-0.5">
                          <ArrowUp className="w-2 h-2" /> +12% <span className="font-normal text-slate-400">vs last month</span>
                        </div>
                      </div>
                      <div className="flex items-end gap-0.5 h-7">
                        <div className="w-1.5 h-2.5 bg-blue-200 dark:bg-blue-900 rounded-t" />
                        <div className="w-1.5 h-3.5 bg-blue-300 dark:bg-blue-800 rounded-t" />
                        <div className="w-1.5 h-5 bg-blue-400 dark:bg-blue-700 rounded-t" />
                        <div className="w-1.5 h-7 bg-blue-600 rounded-t" />
                      </div>
                    </div>

                    {/* 2. On Leave Today */}
                    <div className="p-2.5 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200/70 dark:border-slate-800 shadow-sm flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <div className="w-6 h-6 rounded-lg bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                            <CalendarDays className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-[9px] font-medium text-slate-500 dark:text-slate-400">On Leave Today</span>
                        </div>
                        <div className="text-base font-extrabold text-slate-900 dark:text-white leading-tight">18</div>
                        <div className="text-[8px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5 mt-0.5">
                          <ArrowUp className="w-2 h-2" /> +2% <span className="font-normal text-slate-400">vs last month</span>
                        </div>
                      </div>
                      <div className="flex items-end gap-0.5 h-7">
                        <div className="w-1.5 h-4 bg-cyan-200 dark:bg-cyan-900 rounded-t" />
                        <div className="w-1.5 h-3 bg-cyan-300 dark:bg-cyan-800 rounded-t" />
                        <div className="w-1.5 h-5 bg-cyan-400 dark:bg-cyan-700 rounded-t" />
                        <div className="w-1.5 h-6 bg-cyan-500 rounded-t" />
                      </div>
                    </div>

                    {/* 3. New Joiners */}
                    <div className="p-2.5 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200/70 dark:border-slate-800 shadow-sm flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <div className="w-6 h-6 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                            <UserPlus className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-[9px] font-medium text-slate-500 dark:text-slate-400">New Joiners</span>
                        </div>
                        <div className="text-base font-extrabold text-slate-900 dark:text-white leading-tight">6</div>
                        <div className="text-[8px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5 mt-0.5">
                          <ArrowUp className="w-2 h-2" /> +100% <span className="font-normal text-slate-400">vs last month</span>
                        </div>
                      </div>
                      <div className="flex items-end gap-0.5 h-7">
                        <div className="w-1.5 h-2 bg-indigo-200 dark:bg-indigo-900 rounded-t" />
                        <div className="w-1.5 h-3 bg-indigo-300 dark:bg-indigo-800 rounded-t" />
                        <div className="w-1.5 h-4 bg-indigo-400 dark:bg-indigo-700 rounded-t" />
                        <div className="w-1.5 h-7 bg-indigo-600 rounded-t" />
                      </div>
                    </div>

                    {/* 4. Open Positions */}
                    <div className="p-2.5 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200/70 dark:border-slate-800 shadow-sm flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <div className="w-6 h-6 rounded-lg bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                            <Briefcase className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-[9px] font-medium text-slate-500 dark:text-slate-400">Open Positions</span>
                        </div>
                        <div className="text-base font-extrabold text-slate-900 dark:text-white leading-tight">14</div>
                        <div className="text-[8px] font-bold text-rose-500 flex items-center gap-0.5 mt-0.5">
                          <ArrowDown className="w-2 h-2" /> -22% <span className="font-normal text-slate-400">vs last month</span>
                        </div>
                      </div>
                      <div className="flex items-end gap-0.5 h-7">
                        <div className="w-1.5 h-6 bg-purple-200 dark:bg-purple-900 rounded-t" />
                        <div className="w-1.5 h-5 bg-purple-300 dark:bg-purple-800 rounded-t" />
                        <div className="w-1.5 h-4 bg-purple-400 dark:bg-purple-700 rounded-t" />
                        <div className="w-1.5 h-3 bg-purple-600 rounded-t" />
                      </div>
                    </div>
                  </div>

                  {/* Middle Row (3 Columns: Headcount, Department Distribution, Upcoming Events) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    
                    {/* 1. Employee Headcount Bar Chart */}
                    <div className="p-2.5 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200/70 dark:border-slate-800 shadow-sm">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-[10px] text-slate-900 dark:text-white">Employee Headcount</span>
                        <div className="flex items-center gap-1 text-[8px] font-medium text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                          <span>This Year</span>
                          <ChevronDown className="w-2 h-2" />
                        </div>
                      </div>
                      
                      {/* Bar graph */}
                      <div className="flex items-end justify-between h-24 pt-2 px-1">
                        {[
                          { m: 'Jan', h: 40 },
                          { m: 'Feb', h: 55 },
                          { m: 'Mar', h: 70 },
                          { m: 'Apr', h: 60 },
                          { m: 'May', h: 80 },
                          { m: 'Jun', h: 95 },
                          { m: 'Jul', h: 110 },
                          { m: 'Aug', h: 130 },
                          { m: 'Sep', h: 155 },
                          { m: 'Oct', h: 180 },
                          { m: 'Nov', h: 210 },
                          { m: 'Dec', h: 248 },
                        ].map((item) => (
                          <div key={item.m} className="flex flex-col items-center gap-1 flex-1">
                            <div
                              style={{ height: `${(item.h / 250) * 100}%` }}
                              className="w-1.5 sm:w-2 rounded-t bg-gradient-to-t from-blue-500 to-indigo-500 hover:brightness-125 transition-all"
                            />
                            <span className="text-[6.5px] text-slate-400">{item.m[0]}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 2. Department Distribution Donut Chart */}
                    <div className="p-2.5 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200/70 dark:border-slate-800 shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-[10px] text-slate-900 dark:text-white">Department Distribution</span>
                        <div className="flex items-center gap-1 text-[8px] font-medium text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                          <span>All</span>
                          <ChevronDown className="w-2 h-2" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-1.5 pt-0.5">
                        <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                            <path className="text-slate-100 dark:text-slate-800" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-blue-500" strokeDasharray="32, 100" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-cyan-400" strokeDasharray="18, 100" strokeDashoffset="-32" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-indigo-500" strokeDasharray="12, 100" strokeDashoffset="-50" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-amber-500" strokeDasharray="15, 100" strokeDashoffset="-62" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-emerald-500" strokeDasharray="10, 100" strokeDashoffset="-77" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-sky-300" strokeDasharray="13, 100" strokeDashoffset="-87" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <span className="font-extrabold text-[10px] text-slate-900 dark:text-white leading-none">248</span>
                            <span className="text-[5.5px] text-slate-400">Staff</span>
                          </div>
                        </div>

                        <div className="flex-1 grid grid-cols-1 gap-0.5 text-[7.5px]">
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Eng.</span>
                            <span className="font-bold text-slate-900 dark:text-white">32%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Ops</span>
                            <span className="font-bold text-slate-900 dark:text-white">18%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> HR</span>
                            <span className="font-bold text-slate-900 dark:text-white">12%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Sales</span>
                            <span className="font-bold text-slate-900 dark:text-white">15%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Fin</span>
                            <span className="font-bold text-slate-900 dark:text-white">10%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3. Upcoming Events */}
                    <div className="p-2.5 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200/70 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-[10px] text-slate-900 dark:text-white">Upcoming Events</span>
                        <span className="text-[8px] font-bold text-blue-600 dark:text-blue-400 cursor-pointer">View All</span>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
                          <div className="w-6 h-6 rounded-lg bg-rose-50 dark:bg-rose-950/50 text-rose-500 flex flex-col items-center justify-center shrink-0 leading-none">
                            <span className="text-[5.5px] font-bold">SEP</span>
                            <span className="text-[8px] font-black">21</span>
                          </div>
                          <div className="leading-tight">
                            <p className="font-bold text-[8.5px] text-slate-900 dark:text-white">HRIFY Bootcamp</p>
                            <p className="text-[7px] text-slate-400">10:00 AM – 11:00 AM</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
                          <div className="w-6 h-6 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-500 flex flex-col items-center justify-center shrink-0 leading-none">
                            <span className="text-[5.5px] font-bold">SEP</span>
                            <span className="text-[8px] font-black">25</span>
                          </div>
                          <div className="leading-tight">
                            <p className="font-bold text-[8.5px] text-slate-900 dark:text-white">Performance Review</p>
                            <p className="text-[7px] text-slate-400">09:00 AM – 05:00 PM</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
                          <div className="w-6 h-6 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-500 flex flex-col items-center justify-center shrink-0 leading-none">
                            <span className="text-[5.5px] font-bold">SEP</span>
                            <span className="text-[8px] font-black">28</span>
                          </div>
                          <div className="leading-tight">
                            <p className="font-bold text-[8.5px] text-slate-900 dark:text-white">Monthly Townhall</p>
                            <p className="text-[7px] text-slate-400">03:00 PM – 04:00 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row (3 Columns: Recent Joiners, Leave Summary, Quick Actions) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    
                    {/* 1. Recent Joiners */}
                    <div className="p-2.5 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200/70 dark:border-slate-800 shadow-sm">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-[10px] text-slate-900 dark:text-white">Recent Joiners</span>
                        <span className="text-[8px] font-bold text-blue-600 dark:text-blue-400 cursor-pointer">View All</span>
                      </div>
                      
                      <div className="space-y-1">
                        {[
                          { initials: 'AK', name: 'Areeba Khan', role: 'AI Engineer', date: 'Sep 18', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300' },
                          { initials: 'BA', name: 'Bilal Ahmed', role: 'Product Designer', date: 'Sep 16', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/60 dark:text-purple-300' },
                          { initials: 'SF', name: 'Sana Fatima', role: 'HR Executive', date: 'Sep 14', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300' },
                        ].map((user) => (
                          <div key={user.name} className="flex items-center justify-between p-0.5 rounded-lg">
                            <div className="flex items-center gap-1.5">
                              <div className={`relative w-5 h-5 rounded-full flex items-center justify-center font-bold text-[7px] ${user.color}`}>
                                {user.initials}
                                <span className="absolute bottom-0 right-0 w-1 h-1 rounded-full bg-emerald-500" />
                              </div>
                              <div className="leading-none">
                                <p className="font-bold text-[8.5px] text-slate-900 dark:text-white">{user.name}</p>
                                <p className="text-[6.5px] text-slate-400">{user.role}</p>
                              </div>
                            </div>
                            <span className="text-[6.5px] text-slate-400">{user.date}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 2. Leave Summary Donut */}
                    <div className="p-2.5 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200/70 dark:border-slate-800 shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-[10px] text-slate-900 dark:text-white">Leave Summary</span>
                        <div className="flex items-center gap-1 text-[8px] font-medium text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                          <span>Month</span>
                          <ChevronDown className="w-2 h-2" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-1.5 pt-0.5">
                        <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                            <path className="text-slate-100 dark:text-slate-800" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-blue-500" strokeDasharray="50, 100" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-cyan-400" strokeDasharray="22, 100" strokeDashoffset="-50" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-purple-500" strokeDasharray="16, 100" strokeDashoffset="-72" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="text-indigo-300" strokeDasharray="12, 100" strokeDashoffset="-88" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <span className="font-extrabold text-[10px] text-slate-900 dark:text-white leading-none">18</span>
                            <span className="text-[5.5px] text-slate-400">On Leave</span>
                          </div>
                        </div>

                        <div className="flex-1 space-y-0.5 text-[7.5px]">
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-blue-500" /> Annual</span>
                            <span className="font-bold text-slate-900 dark:text-white">9</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-cyan-400" /> Sick</span>
                            <span className="font-bold text-slate-900 dark:text-white">4</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-purple-500" /> Personal</span>
                            <span className="font-bold text-slate-900 dark:text-white">3</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-indigo-300" /> Other</span>
                            <span className="font-bold text-slate-900 dark:text-white">2</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3. Quick Actions */}
                    <div className="p-2.5 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200/70 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-[10px] text-slate-900 dark:text-white">Quick Actions</span>
                        <Settings className="w-2.5 h-2.5 text-slate-400 cursor-pointer" />
                      </div>

                      <div className="grid grid-cols-3 gap-1">
                        {[
                          { label: 'Add Staff', icon: UserPlus, bg: 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400' },
                          { label: 'Post Job', icon: Briefcase, bg: 'bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400' },
                          { label: 'Leave', icon: CalendarDays, bg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400' },
                          { label: 'Payroll', icon: FileText, bg: 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400' },
                          { label: 'Task', icon: CheckSquare, bg: 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400' },
                          { label: 'Report', icon: BarChart3, bg: 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400' },
                        ].map((act) => {
                          const Icon = act.icon;
                          return (
                            <div
                              key={act.label}
                              className={`p-1 rounded-xl ${act.bg} border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-transform`}
                            >
                              <Icon className="w-3 h-3 mb-0.5" />
                              <span className="text-[6.5px] font-bold leading-tight line-clamp-1">{act.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* Laptop Base Stand */}
          <div className="relative mx-auto w-[96%] h-3 bg-slate-800 rounded-b-xl shadow-xl flex items-center justify-center">
            <div className="w-14 h-0.5 bg-slate-600 rounded-full" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. MOBILE PHONE SCREEN MOCKUP (Maleyka Bilal App UI)                       */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center lg:items-end shrink-0">
          
          {/* Handwritten tag positioned cleanly above the phone with zero overlap */}
          <div className="mb-2 text-center lg:text-right transform rotate-[-3deg] select-none">
            <span className="font-handwritten text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-bold leading-tight block drop-shadow-sm">
              Manage Your Workforce
            </span>
            <span className="font-handwritten text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-bold leading-tight block drop-shadow-sm">
              Anytime, Anywhere
            </span>
          </div>

          {/* Scaled & Sleek Phone Outer Shell */}
          <div className="relative w-[270px] sm:w-[285px] transition-transform duration-300 hover:scale-[1.015]">
            <div className="relative rounded-[40px] p-2.5 bg-gradient-to-b from-slate-800 via-slate-900 to-black shadow-2xl border-[3px] border-slate-700/70">
              
              {/* Screen Glass */}
              <div className="relative rounded-[32px] overflow-hidden bg-white dark:bg-[#0c1222] border border-slate-200/80 dark:border-slate-800/90 text-slate-800 dark:text-slate-100 shadow-inner flex flex-col h-[460px] sm:h-[480px]">
                
                {/* Top iOS Status Bar + Dynamic Island */}
                <div className="relative pt-2 px-4 pb-1 flex items-center justify-between z-20 shrink-0 select-none">
                  <span className="text-[10px] font-bold tracking-tight text-slate-900 dark:text-white">9:41</span>
                  
                  {/* Dynamic Island */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full flex items-center justify-end px-1.5">
                    <div className="w-1 h-1 rounded-full bg-blue-950/80" />
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-900 dark:text-white">
                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 18.25A10.93 10.93 0 0 1 1 12C1 5.92 5.92 1 12 1s11 4.92 11 11c0 2.21-.65 4.27-1.77 6l-.62-.62A8.96 8.96 0 0 0 21 12c0-4.97-4.03-9-9-9z"/>
                    </svg>
                    <div className="w-3.5 h-2 rounded-[2px] border border-current p-[1px] flex items-center">
                      <div className="w-full h-full bg-emerald-500 rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* Scrollable Phone App Body */}
                <div className="flex-1 overflow-y-auto px-3 pt-1 pb-2.5 space-y-2.5 text-[10px] scrollbar-none">
                  
                  {/* App Header: Brand + Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src="/Assests/HRIFY_Logo_White_Background.png"
                        alt="HRIFY"
                        className="h-6 w-auto object-contain dark:hidden"
                      />
                      <img
                        src="/Assests/HRIFY_Logo_Dark_Background.png"
                        alt="HRIFY"
                        className="h-6 w-auto object-contain hidden dark:block"
                      />
                    </div>

                    <div className="flex items-center gap-1">
                      {/* Bell */}
                      <div className="relative w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
                        <Bell className="w-2.5 h-2.5" />
                        <div className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-rose-500" />
                      </div>
                      {/* User profile icon */}
                      <div className="w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                        <User className="w-2.5 h-2.5" />
                      </div>
                      {/* Ask AI Pill Button */}
                      <button className="px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-[8px] flex items-center gap-1 shadow-sm hover:brightness-105 active:scale-95 transition-all">
                        <Sparkles className="w-2 h-2 text-cyan-200" />
                        <span>Ask AI</span>
                      </button>
                    </div>
                  </div>

                  {/* Profile Card & Daily Quote */}
                  <div className="flex items-center justify-between gap-1.5 pt-0.5">
                    <div className="flex items-center gap-1.5">
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
                        alt="Maleyka Bilal"
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-blue-500/40 shadow-sm"
                      />
                      <div>
                        <p className="text-[9px] text-slate-400 leading-none">Good Morning,</p>
                        <h5 className="font-extrabold text-[11px] text-slate-900 dark:text-white leading-tight">
                          Maleyka Bilal
                        </h5>
                        <p className="text-[8px] font-semibold text-slate-600 dark:text-slate-300 leading-none">Product Designer</p>
                        <p className="text-[7px] text-blue-600 dark:text-blue-400 font-medium">People & Culture</p>
                      </div>
                    </div>

                    {/* Motivational Quote Bubble */}
                    <div className="w-24 p-1.5 rounded-xl bg-gradient-to-br from-blue-50/90 to-purple-50/90 dark:from-slate-800/80 dark:to-slate-900/80 border border-blue-100/70 dark:border-blue-900/40 shadow-sm">
                      <p className="text-[6.5px] text-right font-medium text-slate-400 mb-0.5">Sat, 20 Sep</p>
                      <p className="text-[7.5px] italic text-slate-700 dark:text-slate-200 leading-tight">
                        “Small steps make big progress.”
                      </p>
                      <div className="w-full h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mt-1" />
                    </div>
                  </div>

                  {/* 4 Quick Stat Cards */}
                  <div className="grid grid-cols-4 gap-1">
                    {/* Leave Balance */}
                    <div className="p-1 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 text-center flex flex-col items-center justify-between">
                      <div className="w-4 h-4 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-0.5">
                        <CalendarDays className="w-2.5 h-2.5" />
                      </div>
                      <span className="font-extrabold text-[10px] text-slate-900 dark:text-white leading-none">12</span>
                      <span className="text-[6.5px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Leave &gt;</span>
                    </div>

                    {/* Pending Requests */}
                    <div className="p-1 rounded-xl bg-cyan-50/80 dark:bg-cyan-950/40 border border-cyan-100 dark:border-cyan-900/40 text-center flex flex-col items-center justify-between">
                      <div className="w-4 h-4 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-0.5">
                        <FileCheck className="w-2.5 h-2.5" />
                      </div>
                      <span className="font-extrabold text-[10px] text-slate-900 dark:text-white leading-none">4</span>
                      <span className="text-[6.5px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Pending &gt;</span>
                    </div>

                    {/* Today Checkin */}
                    <div className="p-1 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 text-center flex flex-col items-center justify-between">
                      <div className="w-4 h-4 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-0.5">
                        <Clock className="w-2.5 h-2.5" />
                      </div>
                      <span className="font-extrabold text-[8px] text-emerald-600 dark:text-emerald-400 leading-none">
                        ● In
                      </span>
                      <span className="text-[6.5px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">09:02 AM</span>
                    </div>

                    {/* Upcoming Events */}
                    <div className="p-1 rounded-xl bg-purple-50/80 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40 text-center flex flex-col items-center justify-between">
                      <div className="w-4 h-4 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-0.5">
                        <Calendar className="w-2.5 h-2.5" />
                      </div>
                      <span className="font-extrabold text-[10px] text-slate-900 dark:text-white leading-none">0</span>
                      <span className="text-[6.5px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">Events &gt;</span>
                    </div>
                  </div>

                  {/* Employee Self Service (8 Icon Grid) */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-extrabold text-[10px] text-slate-900 dark:text-white">
                        Employee Self Service
                      </span>
                      <span className="text-[8px] font-bold text-blue-600 dark:text-blue-400 cursor-pointer">
                        View All
                      </span>
                    </div>

                    <div className="grid grid-cols-4 gap-1">
                      {[
                        { label: 'My Profile', icon: User, bg: 'bg-purple-50 dark:bg-purple-950/40', text: 'text-purple-600 dark:text-purple-400' },
                        { label: 'Attendance', icon: Fingerprint, bg: 'bg-emerald-50 dark:bg-emerald-950/40', text: 'text-emerald-600 dark:text-emerald-400' },
                        { label: 'Leave', icon: CalendarDays, bg: 'bg-blue-50 dark:bg-blue-950/40', text: 'text-blue-600 dark:text-blue-400' },
                        { label: 'Payslip', icon: CreditCard, bg: 'bg-rose-50 dark:bg-rose-950/40', text: 'text-rose-600 dark:text-rose-400' },
                        { label: 'Documents', icon: Folder, bg: 'bg-sky-50 dark:bg-sky-950/40', text: 'text-sky-600 dark:text-sky-400' },
                        { label: 'Requests', icon: FileText, bg: 'bg-amber-50 dark:bg-amber-950/40', text: 'text-amber-600 dark:text-amber-400' },
                        { label: 'Benefits', icon: ShieldCheck, bg: 'bg-indigo-50 dark:bg-indigo-950/40', text: 'text-indigo-600 dark:text-indigo-400' },
                        { label: 'Help & Supp', icon: Headphones, bg: 'bg-teal-50 dark:bg-teal-950/40', text: 'text-teal-600 dark:text-teal-400' },
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={item.label}
                            className={`p-1 rounded-xl ${item.bg} border border-slate-100 dark:border-slate-800/80 flex flex-col items-center justify-center text-center cursor-pointer hover:scale-105 transition-transform`}
                          >
                            <div className={`w-5 h-5 rounded-lg flex items-center justify-center ${item.text} mb-0.5`}>
                              <Icon className="w-3 h-3" />
                            </div>
                            <span className="text-[6.5px] font-bold text-slate-700 dark:text-slate-300 leading-tight line-clamp-1">
                              {item.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* My Leave Summary Donut Chart Card */}
                  <div className="p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-extrabold text-[10px] text-slate-900 dark:text-white">
                        My Leave Summary
                      </span>
                      <span className="text-[8px] font-bold text-blue-600 dark:text-blue-400 cursor-pointer">
                        View Details
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-1.5">
                      {/* Donut Chart */}
                      <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <path className="text-slate-100 dark:text-slate-800" strokeWidth="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          <path className="text-blue-500" strokeDasharray="60, 100" strokeWidth="3.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          <path className="text-purple-500" strokeDasharray="20, 100" strokeDashoffset="-60" strokeWidth="3.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          <path className="text-indigo-400" strokeDasharray="12, 100" strokeDashoffset="-80" strokeWidth="3.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                          <span className="font-black text-[11px] text-slate-900 dark:text-white leading-none">12</span>
                          <span className="text-[5.5px] text-slate-400 leading-tight">Days Left</span>
                        </div>
                      </div>

                      {/* Donut Legend */}
                      <div className="flex-1 space-y-0.5 text-[7px]">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-blue-500" />
                            <span className="text-slate-600 dark:text-slate-300">Annual Leave</span>
                          </div>
                          <span className="font-extrabold text-slate-900 dark:text-white">12</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-purple-500" />
                            <span className="text-slate-600 dark:text-slate-300">Sick Leave</span>
                          </div>
                          <span className="font-extrabold text-slate-900 dark:text-white">3</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-indigo-400" />
                            <span className="text-slate-600 dark:text-slate-300">Personal Leave</span>
                          </div>
                          <span className="font-extrabold text-slate-900 dark:text-white">2</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                            <span className="text-slate-600 dark:text-slate-300">Other</span>
                          </div>
                          <span className="font-extrabold text-slate-900 dark:text-white">1</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activities */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-extrabold text-[10px] text-slate-900 dark:text-white">
                        Recent Activities
                      </span>
                      <span className="text-[8px] font-bold text-blue-600 dark:text-blue-400 cursor-pointer">
                        View All
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="p-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-500 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3" />
                          </div>
                          <div>
                            <p className="font-bold text-[8px] text-slate-900 dark:text-white leading-tight">
                              Leave Request Approved
                            </p>
                            <p className="text-[6.5px] text-slate-400">Annual Leave (3 Days)</p>
                          </div>
                        </div>
                        <span className="text-[6.5px] text-slate-400">18 Sep</span>
                      </div>

                      <div className="p-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-500 flex items-center justify-center shrink-0">
                            <FileText className="w-3 h-3" />
                          </div>
                          <div>
                            <p className="font-bold text-[8px] text-slate-900 dark:text-white leading-tight">
                              Payslip Generated
                            </p>
                            <p className="text-[6.5px] text-slate-400">August 2026</p>
                          </div>
                        </div>
                        <span className="text-[6.5px] text-slate-400">01 Sep</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Nav Bar */}
                <div className="bg-white/95 dark:bg-[#0c1222]/95 backdrop-blur border-t border-slate-100 dark:border-slate-800/80 px-2 py-1 flex items-center justify-around text-slate-400 shrink-0 select-none z-10">
                  {[
                    { name: 'Home', icon: Home },
                    { name: 'Attendance', icon: Clock },
                    { name: 'Requests', icon: FileCheck },
                    { name: 'Payslip', icon: CreditCard },
                    { name: 'More', icon: MoreHorizontal },
                  ].map((nav) => {
                    const Icon = nav.icon;
                    const isActive = activeMobileNav === nav.name;
                    return (
                      <button
                        key={nav.name}
                        onClick={() => setActiveMobileNav(nav.name)}
                        className={`flex flex-col items-center gap-0.5 transition-colors ${
                          isActive ? 'text-blue-600 dark:text-blue-400 font-bold' : 'hover:text-slate-600 dark:hover:text-slate-300'
                        }`}
                      >
                        <Icon className="w-3 h-3" />
                        <span className="text-[7px]">{nav.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Home indicator bar */}
                <div className="pb-1 pt-0.5 flex justify-center bg-white dark:bg-[#0c1222]">
                  <div className="w-16 h-0.5 bg-slate-300 dark:bg-slate-700 rounded-full" />
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
