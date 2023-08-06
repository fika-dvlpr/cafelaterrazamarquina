/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "index.html",
    "./Menu/index.html",
  ],
  theme: {
    extend: {
      colors: {
        dirtywhite: "#F8F4EA",
        saddlebrown: "#8b4513",
        saddlebrownhover: "#c06e33",
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
  plugins: [require("flowbite/plugin")],
};
