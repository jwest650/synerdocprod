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
        'primary-blue': '#0141CF',
        'secondary-blue': '#c6d8ffe1',
        'texiary-blue': '#f6f8fc',
        'primary-gray': '#9ca3af',
        'primary-orange': '#ea580c',

        'main-text-light': '#000000',
        'secondary-text-light': '#0e1922',
        'main-text-dark': '#ffffff',
        'secondary-text-dark': '#9ca3af',
        'primary-color': '#0141CF',
        'primary-light-color': '#3374ff83',
        'light-blue': '#C7D9FF',
        'secondary-color': '#EA580C',
      },
    },
  },
  plugins: [],
};
