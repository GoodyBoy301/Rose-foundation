/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        playfair: ["'Playfair Display'", "sans-serif"],
      },
      colors: {
        myRed: "#E12146",
        myDarkRed: "#af1835",
      },
    },
  },
  plugins: [],
};
