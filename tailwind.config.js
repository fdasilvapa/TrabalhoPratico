/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'mario-red': '#E52521',
        'mario-blue': '#00439C',
        'mario-yellow': '#FBD000',
        'mario-green': '#43B047',
        'mario-sky': '#5C94FC',
      },
      fontFamily: {
        mario: ['"Press Start 2P"', 'system-ui', 'cursive'],
      },
    },
  },
  plugins: [],
}