/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FDC157",
        secondary: "#374151",
      },
      fontFamily: {
        sans: "Poppins, sans-serif",
        urban: "Urbanist, sans-serif",
        inter: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
