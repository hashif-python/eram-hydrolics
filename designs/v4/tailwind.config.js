/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef3f8',
          100: '#d5e0ec',
          200: '#aec3da',
          300: '#7fa0bf',
          400: '#4f7aa3',
          500: '#2f5e88',
          600: '#1f4a72',
          700: '#173859',
          800: '#10263f',
          900: '#0a1a2e',
          950: '#06111f',
        },
        steel: {
          50: '#f2f6f9',
          100: '#e0e9f0',
          200: '#c3d3e0',
          300: '#9ab3c8',
          400: '#7593ae',
          500: '#5a7a96',
          600: '#48627a',
          700: '#3b4f63',
          800: '#2f3f50',
          900: '#243240',
        },
        gold: {
          50: '#fbf7ea',
          100: '#f5ecc9',
          200: '#ebd896',
          300: '#dfc063',
          400: '#d4aa3f',
          500: '#b8912b',
          600: '#9a7622',
          700: '#7a5c1c',
          800: '#5e4719',
          900: '#433313',
        },
        success: {
          50: '#edf7f1',
          100: '#d1ecdb',
          500: '#2f7d50',
          700: '#1f5a38',
        },
        warning: {
          50: '#fdf6e7',
          100: '#f9e7bf',
          500: '#a86f0c',
          700: '#7a4f08',
        },
        error: {
          50: '#fcf0ef',
          100: '#f6d5d2',
          500: '#b3352b',
          700: '#862319',
        },
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};
