const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/components/*.{js,jsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        screen90: "85vh",
      },
      width: {
        ch30: "35ch",
      },
      minHeight: {
        "1/5": "3ch",
      },
      fontFamily: {
        Monte: ["Montserrat", "Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        orange: colors.orange,
        paleSpringBud: "#ccd5aeff",
        lightGoldenrodYellow: "#e9edc9ff",
        cornsilk: "#fefae0ff",
        papayaWhip: "#faedcdff",
        fawn: "#d4a373ff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
