import { useState, useEffect } from 'react'
import { Sun, Moon, Layers, Menu, X } from 'lucide-react'

interface NavbarProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Mission', href: '#mission' },
    { name: 'Impact Calculator', href: '#calculator' },
    { name: 'Get in Touch', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-warm-50/95 dark:bg-warm-900/95 border-warm-200 dark:border-warm-850 shadow-sm backdrop-blur-md'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2 text-brand-700 dark:text-brand-400 font-display font-bold text-xl tracking-tight">
              <Layers className="h-6 w-6 text-brand-600 dark:text-brand-400" />
              <span>Hrify-AI</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-warm-600 dark:text-warm-300 hover:text-brand-600 dark:hover:text-brand-400 text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-warm-100 dark:bg-warm-800 text-warm-600 dark:text-warm-300 hover:text-brand-600 dark:hover:text-brand-400 focus:outline-none transition-colors border border-warm-200 dark:border-warm-700"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-warm-100 dark:bg-warm-800 text-warm-600 dark:text-warm-300 hover:text-brand-600 dark:hover:text-brand-400 focus:outline-none transition-colors border border-warm-200 dark:border-warm-700"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-warm-600 dark:text-warm-300 hover:bg-warm-100 dark:hover:bg-warm-800 focus:outline-none border border-transparent hover:border-warm-200 dark:hover:border-warm-700"
              aria-label="Toggle main menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-warm-50 dark:bg-warm-900 border-b border-warm-200 dark:border-warm-800">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 pt-2 pb-2 rounded-md text-base font-medium text-warm-600 dark:text-warm-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-warm-100 dark:hover:bg-warm-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
