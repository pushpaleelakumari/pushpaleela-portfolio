const tailwindcssAnimate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Manrope",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "Sora",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "monospace",
        ],
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 3.5s ease-in-out infinite",
      },
      colors: {
        space: {
          950: "#05060B",
          900: "#0A0D16",
          800: "#111420",
          700: "#1A1E2E",
        },
        accent: {
          300: "#BFE3FF",
          400: "#8EC9FF",
          500: "#5FA8F2",
          600: "#3D7FD9",
          700: "#2A5FB3",
        },
        primary: {
          50: "#F4F5F9",
          100: "#E9EBF3",
          200: "#C7CEE2",
          300: "#9AA6CA",
          400: "#5D71AB",
          500: "#1E3A8A",
          600: "#1A3175",
          700: "#152961",
          800: "#11204C",
          900: "#0C1737"
        },
        secondary: {
          50: "#FFF8F3",
          100: "#FFF1E7",
          200: "#FFE2CE",
          300: "#FFC59D",
          400: "#FF9A54",
          500: "#FF6F0B",
          600: "#D95E09",
          700: "#B34E08",
          800: "#8C3D06",
          900: "#662C04"
        },
      },
    },
  },

  plugins: [
    tailwindcssAnimate,
  ],
};
