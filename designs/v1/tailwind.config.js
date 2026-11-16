/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: '#f5f6f7',
          100: '#e6e8ea',
          200: '#c4c8cd',
          300: '#9aa0a8',
          400: '#6b727d',
          500: '#4a515c',
          600: '#363c45',
          700: '#272d35',
          800: '#1c2128',
          900: '#12161b',
          950: '#0a0d11',
        },
        navy: {
          50: '#eef2f8',
          100: '#d4dde9',
          200: '#a9bdd3',
          300: '#7e9cbd',
          400: '#537ba7',
          500: '#3a5e85',
          600: '#2d4a6a',
          700: '#203751',
          800: '#152439',
          900: '#0d1828',
        },
        eram: {
          50: '#fef2f2',
          100: '#fde3e3',
          200: '#fbcccc',
          300: '#f7a8a8',
          400: '#f17171',
          500: '#e63b3b',
          600: '#cc1f1f',
          700: '#a81818',
          800: '#871414',
          900: '#6b1212',
        },
        steel: {
          50: '#f4f5f6',
          100: '#e8eaed',
          200: '#cdd1d7',
          300: '#a7adb6',
          400: '#7e858f',
          500: '#5e656e',
          600: '#494f57',
          700: '#3a3f45',
          800: '#2c3035',
          900: '#1e2125',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(3.5rem, 8vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-xl': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(230, 59, 59, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(230, 59, 59, 0.5)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(18, 22, 27, 0.85), rgba(18, 22, 27, 0.7))",
        'grid-pattern': "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
