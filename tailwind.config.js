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
        dark: {
          950: '#050507',
          900: '#09090d',
          850: '#0e0e14',
          800: '#14141c',
          700: '#1e1e2a',
          600: '#2d2d3d',
        },
        accent: {
          DEFAULT: '#CCFF00', // Electric lime
          hover: '#b8e600',
          glow: 'rgba(204, 255, 0, 0.35)',
          subtle: 'rgba(204, 255, 0, 0.08)',
          border: 'rgba(204, 255, 0, 0.25)',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      letterSpacing: {
        'ultra-wide': '0.35em',
        'super-wide': '0.5em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
