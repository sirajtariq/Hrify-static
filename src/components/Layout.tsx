import { useState, useEffect } from 'react';
import { Menu, X, Mail, Users, ArrowUpRight, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router';

const Logo = () => (
  <img src="/logo.jpg" alt="Logo" className="w-10 h-10" />
  // <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shadow-lg shadow-purple-500/10 rounded-xl">
  //   <rect width="40" height="40" rx="10" fill="url(#logo-gradient)" />
  //   <path d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20C28 24.4183 24.4183 28 20 28C15.5817 28 12 24.4183 12 20Z" stroke="white" strokeWidth="2.5" />
  //   <path d="M20 16V24M16 20H24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  //   <defs>
  //     <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
  //       <stop stopColor="#7c3aed" />
  //       <stop offset="1" stopColor="#2563eb" />
  //     </linearGradient>
  //   </defs>
  // </svg>
);

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      root.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      root.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      root.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: <Logo /> },
    { name: 'Features', path: '/features', icon: <Menu className="w-5 h-5" /> },
    { name: 'Pricing', path: '/pricing', icon: <Cpu className="w-5 h-5" /> },
    { name: 'About', path: '/about', icon: <Users className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-5 h-5" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${(isScrolled || isMobileMenuOpen) ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <Logo />
          <span className="text-xl font-bold tracking-tighter text-gray-900">HRify<span className="text-purple-600">-Ai</span></span>
        </Link>


        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors ${location.pathname === item.path ? 'text-purple-600' : 'text-gray-500 hover:text-gray-900'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/contact" className="px-6 py-2.5 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-all shadow-lg shadow-gray-200">
            Get Started
          </Link>
        </div>


        <button className="md:hidden text-gray-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{ backgroundColor: 'white' }}
            className="absolute top-full left-0 right-0 border-t border-gray-100 p-8 flex flex-col gap-2 shadow-2xl z-50 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-4 py-4 px-4 rounded-xl transition-all ${location.pathname === item.path ? 'bg-purple-50 text-purple-600' : 'text-gray-900 active:bg-gray-50'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${location.pathname === item.path ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {item.name === 'Home' ? <Logo /> : item.icon}
                </div>
                <span className="text-lg font-bold">{item.name}</span>
              </Link>
            ))}
            <div className="mt-4 pt-6 border-t border-gray-100">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 rounded-xl bg-purple-600 text-white font-bold text-center block shadow-lg shadow-purple-600/20"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => (
  <footer className="py-20 border-t border-gray-100 bg-gray-50/50">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
      <div className="col-span-2">
        <div className="flex items-center gap-3 mb-6">
          <Logo />
          <span className="text-lg font-bold tracking-tighter text-gray-900">HRify<span className="text-purple-600">-Ai</span></span>
        </div>
        <p className="text-gray-500 max-w-xs mb-8 font-light">
          The AI-powered HR management system built for employee-first organizations.
        </p>
      </div>
      <div>
        <h5 className="font-bold mb-6 text-gray-900">Product</h5>
        <ul className="space-y-4 text-gray-500 text-sm">
          <li><Link to="/features" className="hover:text-gray-900 transition-colors">Features</Link></li>
          <li><Link to="/pricing" className="hover:text-gray-900 transition-colors">Pricing</Link></li>
          <li><a href="#" className="hover:text-gray-900 transition-colors">Integrations</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-bold mb-6 text-gray-900">Company</h5>
        <ul className="space-y-4 text-gray-500 text-sm">
          <li><Link to="/about" className="hover:text-gray-900 transition-colors">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-gray-900 transition-colors">Contact</Link></li>
          <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-gray-100 text-center text-gray-400 text-xs">
      © 2026 HRify-Ai. All rights reserved. Built with intelligence.
    </div>
  </footer>
);
