module.exports = {
  theme: {
    fontFamily: {
      display: ["Inter"],
      body: ["Inter"],
    },
    extend: {
      colors: {
        primary: "#FF6B35",
        primarytwo: "#FDC46B",
        secondary: "#05668D",
        black: "#212429",
        blacktwo: "#2124295c",
        gray: "#495057",
        graytwo: "#ACB5BD",
        graythree: "#DDE2E5",
        grayfour: "#FAFAFA",
        error: "#F03D3E",
        info: "#374FC7",
        success: "#57c4671a",
        mainSuccess: "#57C467",
        lightsecondary: "#05668d1a",
        blur: "#0000004a",
      },
    },
  },

  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    borderColor: ["responsive", "hover", "focus", "focus-within"],
  },

  plugins: [],
};
