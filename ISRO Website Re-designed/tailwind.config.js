/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      screens: {
        phone: '375px'
      },
      fontFamily: {
        'Montserrat' : 'Montserrat'
      },
      fontSize: {
        'xxs':'8px',
        's': '10px',
        'xs': '6px'
      },
      height: {
        '50%' : '50%',
        '70%': '70%',
        '40%': '40%',
        '80%': '80%',
        '20%': '20%',
        '10%': '10%',
      },
      width: {
        '50%' : '50%',
        '80%': '80%',
        '70%': '70%',
        '20%': '20%',
        '12%': '12%',
        '40%': '40%',
        '30%': '30%'
      },
      animation: {
        'loop-up': 'loop-up 5s linear infinite',
      },
      keyframes: {
        'loop-up': {
          from: {
            transform: "translateY(0)"
          },
          to: {
            transform: "translateY(-100%)"
          }
        },
      }
    },
  },
  plugins: [],
}

