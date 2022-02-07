module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        screen90: "80vh",
      },
      width: {
        ch30: "35ch",
        ch25: "25ch",
      },
      minHeight: {
        "1/5": "3ch",
      },
      fontFamily: {
        Comfortaa: ["Comfortaa", "Arial", "Helvetica", "sans-serif"],
        Shadows: ["Shadows Into Light Two", "Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        prim1: "#FEECE9",
        prim2: "#CCD1E4",
        prim2Dark: "#a5b4fc",
        sec: "#2F3A8F",
        highl: "#FE7E6D",
        paleSpringBud: "#ccd5aeff",
        lightGoldenrodYellow: "#e9edc9ff",
        cornsilk: "#fefae0ff",
        papayaWhip: "#faedcdff",
        fawn: "#d4a373ff",
      },
    },
  },
  plugins: [],
};
