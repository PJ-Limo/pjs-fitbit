/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Navy: '#071629',
        NavyB: '#202d3e',
        NavyC: '#6a737f',
        Yellow: '#ffbC00',
        YellowB: '#ffd766' // Define your custom color here
      },
      fontFamily: {
        OpenSans : ["Open Sans", "sans-serif"], 
        },
    },
  },

  plugins: [],
  darkMode: "class",
}