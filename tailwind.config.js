/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust based on your file structure
  ],
  darkMode: 'class', // Enable dark mode via 'class' strategy
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.5rem',
      },
      maxWidth: {
        '6xl': '72rem',
      },
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      colors: {
        'light-accent': '#ffffff',
        'dark-primary': '#4a5568',
      },
    },
  },
  plugins: [],
}