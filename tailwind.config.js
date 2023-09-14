/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  darkMode: "media",
  theme: {
    screens: {
      tablet: "767px",
      laptop: "1260px",
      desktop: "1600px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
