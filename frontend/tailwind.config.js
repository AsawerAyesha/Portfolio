/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",   // ✅ enable dark mode
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      spacing: {
        18: "4.5rem", // 72px
      },
    },
  },
  plugins: [],
}
