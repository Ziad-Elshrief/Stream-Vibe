/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        red45: "#e50000",
        red50: "#FF0000",
        red55: "#FF1919",
        red60: "#FF3333",
        black06: "#0f0f0f",
        black08: "#141414",
        black10: "#1A1A1A",
        black12: "#1F1f1f",
        black15: "#262626",
        gray60: "#999999",
        redGrad: "rgb(229, 0, 0, 0.5)",
      },
      backgroundImage: {
        "gradient-65": "linear-gradient(65deg, var(--tw-gradient-stops))",
      },
      fontFamily: {
        manrope: "Manrope",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "0.75rem",
          paddingRight: "0.75rem",
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1140px",
          },
          "@screen 2xl": {
            maxWidth: "1320px",
          },
        },
      });
    },
  ],
};
