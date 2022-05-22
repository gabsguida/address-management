module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#EAA7FF",
          100: "#E592FF",
          200: "#DC69FF",
          300: "#D241FF",
          400: "#C918FF",
          500: "#B600EE",
          600: "#8B00B6",
          700: "#60007E",
          800: "#350046",
          900: "#0A000E",
        },
        secondary: {
          50: "#FEE4E4",
          100: "#FED1D1",
          200: "#FCA9A9",
          300: "#FB8181",
          400: "#FA5A5A",
          500: "#F93232",
          600: "#EC0707",
          700: "#B50505",
          800: "#7F0404",
          900: "#480202",
        },
        terciary: {
          50: "#DDAAFD",
          100: "#D596FC",
          200: "#C56EFB",
          300: "#B546FA",
          400: "#A51FF9",
          500: "#9206E9",
          600: "#7005B2",
          700: "#4D037C",
          800: "#2B0245",
          900: "#09000E",
        },
        dark: "#20272C",
        gray: {
          200: '#BBC4CE',
          400: '#424E59'
        }
      },
    },
  },
  plugins: [],
};
