/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
    fontfamily:{
      Poppins:["Poppins, sans-serif"],
    },
    container:{
      center: true,
      padding: "1rem",
      screens: {
        lg:"1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
}
