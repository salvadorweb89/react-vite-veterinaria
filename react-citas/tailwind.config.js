/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      screens: {
        'sm': '430px',
        // => @media (min-width: 430px) { ... }
      },
    },
  },
  plugins: [],
}

