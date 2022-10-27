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
      animation: {
        "top-slide-in": "top-slide-in 1.5s ease infinite",
        "middle-slide-in": "middle-slide-in 1.5s ease infinite",
        "bottom-slide-in": "bottom-slide-in 1.5s ease infinite"
      },
      keyframes: {
        "top-slide-in": {
          "0%": {
            transform: "translateY(50px)",
            opacity: 0
          },
          "33%": {
            transform: "translateY(0px)",
            opacity: 1
          },
        },
        "middle-slide-in": {
          "0%": {
            transform: "translateY(50px)",
            opacity: 0
          },
          "33%": {
            transform: "translateY(50px)",
            opacity: 0
          },
          "66%": {
            transform: "translateY(0px)",
            opacity: 1
          },
        },
        "bottom-slide-in": {
          "0%": {
            transform: "translateY(50px)",
            opacity: 0
          },
          "66%": {
            transform: "translateY(50px)",
            opacity: 0
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: 1
          },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
