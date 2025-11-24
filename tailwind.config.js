/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(15, 23, 42, 0.35)",
      },
    },
  },
  plugins: [],
};
