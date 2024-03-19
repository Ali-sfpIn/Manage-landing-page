/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        hoveredBrightRed: "hsl(12, 87%, 70%)",
        lightGray: "#96979b;",
        darkBlue: " hsl(228, 39%, 23%)",
        seaShell: "hsl(11, 73%, 90%)",
      },
      boxShadow: {
        brightRedBox: "0px 7px 17px -3px hsl(12, 88%, 59%)",
        pink: "31px 0 0 0 hsl(11, 73%, 90%);",
      },
      screens: {
        smallV: "340px",
        small: "480px",
      },
    },
  },
  plugins: [],
};
