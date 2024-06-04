/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          md: "8rem",
        },
      },
      boxShadow: {
        normal: "0px 1px 10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    addVariablesForColors,
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#1E1E1E",
          },
        },
        light: {
          colors: {
            background: "#F3F4F6",
          },
        },
      },
    }),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
