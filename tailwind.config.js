/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  daisyui: {
    themes: [
      {
        land: {
          accent: "#18181B",
          primary: "#E9D2AF",
          info: "#9E9281",
          neutral: "#5F5851",
        },
      },
    ],
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
