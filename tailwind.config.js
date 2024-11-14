/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "0.75rem"
    },
    extend: {
      colors:{
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
      },
      fontFamily: {
        'manrope': 'Manrope',
      }
    },
  },
  plugins: [],
}