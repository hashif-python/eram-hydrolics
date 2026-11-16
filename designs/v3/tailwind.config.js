/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef4f8',
          100: '#d5e3ec',
          200: '#a9c6d9',
          300: '#73a3be',
          400: '#43799c',
          500: '#1f5a80',
          600: '#174a6a',
          700: '#123a55',
          800: '#0c2a40',
          900: '#071b2b',
        },
        accent: {
          50: '#fff8eb',
          100: '#ffeccc',
          200: '#ffd88f',
          300: '#fdc04f',
          400: '#f5a524',
          500: '#e08a0c',
          600: '#bd6c08',
          700: '#8f5008',
        },
        success: { 500: '#16a34a', 600: '#15803d' },
        warning: { 500: '#d97706', 600: '#b45309' },
        error: { 500: '#dc2626', 600: '#b91c1c' },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
