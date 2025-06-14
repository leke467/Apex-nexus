/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f1ff",
          100: "#bddaff",
          200: "#94c2ff",
          300: "#6bacfe",
          400: "#4297fd",
          500: "#1a82fc",
          600: "#0066e3",
          700: "#004eb0",
          800: "#00377e",
          900: "#001f4c",
        },
        secondary: {
          50: "#e6fbfa",
          100: "#c0f2ef",
          200: "#99e9e4",
          300: "#6FFFE9",
          400: "#41d6cd",
          500: "#5BC0BE",
          600: "#26a29c",
          700: "#1C2541",
          800: "#0B132B",
          900: "#060e24",
        },
        accent: {
          50: "#fef7ee",
          100: "#fdead2",
          200: "#fbd6a6",
          300: "#f9c179",
          400: "#f7ac4d",
          500: "#f59720",
          600: "#cc7811",
          700: "#9f5d0d",
          800: "#734208",
          900: "#462804",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Satoshi", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      boxShadow: {
        neon: "0 0 5px theme('colors.primary.400'), 0 0 20px theme('colors.primary.300')",
        "neon-lg": "0 0 10px theme('colors.primary.400'), 0 0 30px theme('colors.primary.300'), 0 0 50px theme('colors.primary.200')",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern": "linear-gradient(to right, #1C2541 1px, transparent 1px), linear-gradient(to bottom, #1C2541 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};