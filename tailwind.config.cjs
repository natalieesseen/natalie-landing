/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'beige': '#faf9f7',
      'brown': '#bb4f08',
      'orange': '#f3b26b',
    },
    extend: {
      fontFamily: {
        'sans': ['Karla', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
