/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        BeCool: ['BeCool', 'sans-serif'],
      },
    },
  },
  plugins: [],
}