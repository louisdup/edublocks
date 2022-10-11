/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "inter"
      },
      colors: {
        blue: colors.sky
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
