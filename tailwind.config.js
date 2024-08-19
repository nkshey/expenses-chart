/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "soft-red": "hsl(10, 79%, 65%)",
      cyan: "hsl(186, 34%, 60%)",

      "dark-brown": "hsl(25, 47%, 15%)",
      "medium-brown": "hsl(28, 10%, 53%)",
      ream: "hsl(27, 66%, 92%)",
      "very-pale-orange": "hsl(33, 100%, 98%)",
    },

    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },

    fontWeight: {
      light: "200",
      normal: "400",
      semibold: "600",
      bold: "700",
    },

    screens: {
      md: "572px",
    },

    extend: {},
  },
  plugins: [],
};
