/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
        "josefin-sans": ["Josefin Sans", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      colors: {
        "brand-purple": "#AB47BC",
        "brand-blue": "#5c6bc0",
      },
    },
  },
  plugins: [],
}
