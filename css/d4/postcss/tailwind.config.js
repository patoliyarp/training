/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "custom-primary": "#212121",
      },
      fontFamily: {
        heading: ["sans-serif"],
      },
    },
  },
  plugins: [],
};
