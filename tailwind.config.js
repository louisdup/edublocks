// Navy
const navy_100 = "#E8E8EC";
const navy_200 = "#BBB9C5";
const navy_300 = "#76748B";
const navy_400 = "#494564";
const navy_500 = "#1B173D";

// Pink
const pink_100 = "#FDE8EF";
const pink_200 = "#F8BBD1";
const pink_300 = "#F177A2";
const pink_400 = "#EC4A83";
const pink_500 = "#E71D64";

// Blue
const blue_100 = "#ECEEF6";
const blue_200 = "#C7CCE4";
const blue_300 = "#8F99C9";
const blue_400 = "#6977B7";
const blue_500 = "#4455A5";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
        blue: {
          100: blue_100,
          200: blue_200,
          300: blue_300,
          400: blue_400,
          500: blue_500,
        },
      },
    },
  },
  plugins: [],
}
