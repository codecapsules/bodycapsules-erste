/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "japan-red-1": "",
        "japan-red-2": "",
        "japan-red-3": "",
        "japan-blue-1": "#2176FF",
      },
      boxShadow: {
        blue: "0 0 2px 2px #2176FF"
      }
    },
  },
  plugins: [],
};
