/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        'Raleway' : 'Raleway',
        'Kanit' : 'Kanit'
      },
      screens: {
        'phone': '375px',
      },
    },
  },
  plugins: [],
}

