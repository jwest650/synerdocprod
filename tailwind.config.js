/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'main-light-bg': '#f8f8f8',
        'secondary-light-bg': '#f1f1f1',
        'main-dark-bg': '#0e1922',
        'secondary-dark-bg': '#152937',
      },
      colors: {
        'main-text-light': '#000000',
        'secondary-text-light': '#0e1922',
        'main-text-dark': '#ffffff',
        'secondary-text-dark': '#9ca3af',
      },
    },
  },
  plugins: [],
};
