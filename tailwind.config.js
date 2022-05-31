module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      transitionProperty: {
        height: "height",
      },
      colors: {
        lightYellow: {
          500: "#f9deaa",
        },
        customOrange: {
          100: "#fff1e6",
          200: "#fed5b4",
          300: "#fdb982",
          400: "#fc811d",
          500: "#e36703",
          600: "#b15102",
          700: "#7e3a02",
          800: "#4c2301",
          900: "#1a0c00",
        },
        orangishBrown: {
          100: "#fbe1d5",
          200: "#f6bfa7",
          300: "#f19d79",
          400: "#ec7c4b",
          500: "#bd4714",
          600: "#8f360f",
          700: "#61240a",
          800: "#331305",
          900: "#050200",
        },
        brown: {
          400: "#c1521a",
          500: "#672c0e",
          600: "#3a1908",
        },
      },
    },
  },
  plugins: [],
};
