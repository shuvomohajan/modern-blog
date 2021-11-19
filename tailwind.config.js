const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        basic: 'rgb(108, 52, 156)',
        gradientPrimaryStart: 'rgb(101, 121, 155)',
        gradientPrimaryEnd: 'rgb(94, 37, 99)',
        gray: colors.trueGray,
        white: colors.white,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
