/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'titillium-extralight': ['Titillium Web', 'sans-serif'],
      'titillium-light': ['Titillium Web', 'sans-serif'],
      'titillium-regular': ['Titillium Web', 'sans-serif'],
      'titillium-semibold': ['Titillium Web', 'sans-serif'],
      'titillium-bold': ['Titillium Web', 'sans-serif'],
      'titillium-black': ['Titillium Web', 'sans-serif'],
      'titillium-extralight-italic': ['Titillium Web', 'sans-serif'],
      'titillium-light-italic': ['Titillium Web', 'sans-serif'],
      'titillium-regular-italic': ['Titillium Web', 'sans-serif'],
      'titillium-semibold-italic': ['Titillium Web', 'sans-serif'],
      'titillium-bold-italic': ['Titillium Web', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

