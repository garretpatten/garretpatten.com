/** @type {import('tailwindcss').Config} */
/* Everforest Dark Hard palette (accent scales + semantic surfaces) */
const evfBlue = {
  DEFAULT: "#7fbbb3",
  50: "#f3faf9",
  100: "#e2f3f1",
  200: "#c6e8e4",
  300: "#9ed5cf",
  400: "#7fbbb3",
  500: "#679d96",
  600: "#558480",
  700: "#476d6a",
  800: "#3c5b58",
  900: "#2a4543",
};

const evfGreen = {
  DEFAULT: "#a7c080",
  50: "#f4f7ee",
  100: "#e5ecd6",
  200: "#cdddb5",
  300: "#b3c991",
  400: "#a7c080",
  500: "#8da66a",
  600: "#758857",
  700: "#5f6f48",
  800: "#4d5a3c",
  900: "#3a4630",
};

const evfPurple = {
  DEFAULT: "#d699b6",
  50: "#faf4f7",
  100: "#f3e4ec",
  200: "#e9ccd9",
  300: "#ddb3c7",
  400: "#d699b6",
  500: "#be7fa0",
  600: "#9e6885",
  700: "#835771",
  800: "#6b495e",
  900: "#4d3544",
};

const evfYellow = {
  DEFAULT: "#dbbc7f",
  50: "#fbf7ed",
  100: "#f5ecd4",
  200: "#eedcb3",
  300: "#e4ca92",
  400: "#dbbc7f",
  500: "#c9a563",
  600: "#a8884f",
  700: "#8a7041",
  800: "#6f5b35",
  900: "#574628",
};

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        evf: {
          bg: "#272e33",
          panel: "#2d353b",
          raised: "#343f44",
          line: "#475258",
          fg: "#d3c6aa",
          "fg-bright": "#e6e2cc",
          muted: "#859289",
          black: "#4b565c",
        },
        navy: evfBlue,
        cobalt: evfBlue,
        iris: evfPurple,
        forest: evfGreen,
        sun: evfYellow,
        pine: evfGreen,
      },
    },
  },
  plugins: [],
};
