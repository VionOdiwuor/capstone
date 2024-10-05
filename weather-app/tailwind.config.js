/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  backgroundImage: {
    sunny: "url('/assets/sunny.jpg')",
    cloudy: "url('/assets/cloudy.jpg')",
    rainy: "url('/assets/rainy.jpg')",
    snowy: "url('/assets/snowy.jpg')",
    default: "url('/assets/background.jpg')",
  },
};

