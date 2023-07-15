/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      colors: {
        dirtywhite: "#F8F4EA",
        primary: "#402218",
        secondary: {
          200: "#865439",
          100: "#C68B59",
        },
      },
      borderRadius: {
        "6xl": "6rem",
      },
    },
  },
  plugins: [],
};
