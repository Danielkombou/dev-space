/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'bg-Container': "url('../src/assets/container.png')"
      }
    },
  },
  plugins: [],
}