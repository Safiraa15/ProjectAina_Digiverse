/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#f5f3ff",
          100: "#e9f4feff",
          200: "#d6e7feff",
          300: "#b5e3fdff",
          400: "#8bbffaff",
          500: "#5cacf6ff",  
          600: "#3ab4edff",
          700: "#2883d9ff",
          800: "#2167b6ff",
          900: "#1d5f95ff",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};