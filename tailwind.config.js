/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#020203",
        },
        white: {
          100: "#fcfcfd",
        },
        grey: {
          100: "#707785",
        },
      },
    },
  },
  plugins: [],
}
