/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('../public/back.jpg')",
        'Moon': "url('../public/moon.jpg')"
      },
      fontFamily:{
        'Font': 'Montserrat',
        'logo': 'Anton'
      },
      width:{
        'body' : '80%'
      },
      letterSpacing:{
        'tightest':'-0.025rem'
      }
    },
  },
  plugins: [],
}

