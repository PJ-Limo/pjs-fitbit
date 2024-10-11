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
        Yellow: '#ffbC00' // Define your custom color here
      },
      fontFamily: {
        OpenSans : ["Open Sans", "sans-serif"], 
        }
    },
  },

  plugins: [],
  darkMode: "class",
}