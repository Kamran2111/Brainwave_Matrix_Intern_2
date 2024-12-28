module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#2A254B",
        btnCol: "#494565",
      },
    },
    screens: {
      sm: "240px",
      lg: "760px",
      xl: "1200px",
    },
  },
  plugins: [],
};
