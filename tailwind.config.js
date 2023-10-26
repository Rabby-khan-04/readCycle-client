/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ee7d54",
        secondary: "#fae436",
        bgColor: "#f5f3ed",
        altBgColor: "#e8e6df",
        grayText: "#807e79",
      },
    },
    fontFamily: {
      oranienbaum: ["Oranienbaum", "serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
