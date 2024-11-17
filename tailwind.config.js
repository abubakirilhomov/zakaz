/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kugile: ['Kugile', 'sans-serif'], // Ваш кастомный шрифт
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}