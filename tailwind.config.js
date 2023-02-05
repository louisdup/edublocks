/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

// Navy
const navy_100 = "#ECEEF6";
const navy_200 = "#C7CCE4";
const navy_300 = "#8F99C9";
const navy_400 = "#6977B7";
const navy_500 = "#4455A5";

// Pink
const pink_100 = "#FDE8EF";
const pink_200 = "#F8BBD1";
const pink_300 = "#F177A2";
const pink_400 = "#EC4A83";
const pink_500 = "#E71D64";

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
        navy: {
          100: navy_100,
          200: navy_200,
          300: navy_300,
          400: navy_400,
          500: navy_500,
        },
        pink: {
          100: pink_100,
          200: pink_200,
          300: pink_300,
          400: pink_400,
          500: pink_500,
        },
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
      },
      height: {
        page: "calc(100vh - 9rem)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
