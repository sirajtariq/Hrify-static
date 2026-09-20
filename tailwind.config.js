/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#172554',
          accent: '#1E50FF',
          purple: '#6D28D9',
          cyan: '#00C2FF',
          dark: '#0F172A',
        },
        darkbg: {
          900: '#0B0F19',
          800: '#111827',
          700: '#151E32',
          600: '#1E293B',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        handwritten: ['"Caveat"', '"Patrick Hand"', 'cursive'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(30, 80, 255, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card': '0 10px 30px -5px rgba(0, 50, 150, 0.07), 0 4px 10px -2px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 40px -10px rgba(30, 80, 255, 0.15), 0 8px 16px -4px rgba(0, 0, 0, 0.06)',
        'glow-blue': '0 0 40px -10px rgba(30, 80, 255, 0.5)',
        'glow-purple': '0 0 40px -10px rgba(124, 58, 237, 0.4)',
      },
    },
  },
  plugins: [],
}
