const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './public/*.html'
  ],
  theme: {
    extend: {
      colors:{
        'gray':colors.gray
      }
    },
  },
  plugins: [],
}