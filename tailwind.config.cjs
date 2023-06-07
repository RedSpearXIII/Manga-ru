/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Geologica', 'sans-serif'],
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('./tw-plugins/tailwind-scrollbar.cjs'),
  ],
  darkMode: "class"
}
