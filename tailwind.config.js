const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        50: '#f5f8f6',
        100: '#dee9e2',
        200: '#bdd2c4',
        300: '#94b49f',
        400: '#628670',
        500: '#537963',
        600: '#41604f',
        700: '#364f41',
        800: '#2e4136',
        900: '#2a3730',
        950: '#141f19',
      },
      orange: colors.orange,
      yellow: colors.yellow,
      amber: colors.amber,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
    },
    extend: {},
  },
  plugins: [],
};
