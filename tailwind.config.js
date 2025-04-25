/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0C0C1E",
        surface: "#1A1B2D",
        primary: "#F57373",
        secondary: "#60E1E0",
        highlight: "#9B5DE5",
        text: {
          primary: "#FDFDFD",
          secondary: "#A0A1B8"
        }
      }
    },
  },
  plugins: [],
} 