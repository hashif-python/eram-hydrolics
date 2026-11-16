/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f4f5f6',
          100: '#e6e8eb',
          200: '#c9cdd3',
          300: '#a3aab4',
          400: '#7b8491',
          500: '#5a6370',
          600: '#444c57',
          700: '#2f3640',
          800: '#1c2128',
          900: '#12161c',
          950: '#0a0d11',
        },
        signal: {
          50: '#fff9eb',
          100: '#fff0c7',
          200: '#ffe08a',
          300: '#ffcc4d',
          400: '#ffb81f',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        success: { 500: '#16a34a', 600: '#15803d' },
        warning: { 500: '#d97706', 600: '#b45309' },
        error: { 500: '#dc2626', 600: '#b91c1c' },
      },
      fontFamily: {
        sans: ['Barlow', 'system-ui', 'sans-serif'],
        display: ['"Barlow Condensed"', 'Barlow', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        progress: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        marquee: 'marquee 32s linear infinite',
        progress: 'progress 7s linear forwards',
      },
    },
  },
  plugins: [],
};
