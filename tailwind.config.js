/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./index.html"],
  theme: {
    colors: {
      white: '#FFFFFF',
      primary: '#1a9ad7',
      primary_opacity: {
        '50': '#f1f9fe',
        '100': '#e2f2fc',
        '200': '#bee4f9',
        '300': '#84cff5',
        '400': '#43b7ed',
        '500': '#1a9ad7',
        '600': '#0d7ebc',
        '700': '#0c6498',
        '800': '#0e567e',
        '900': '#124768',
      },
      dark: '#121A33',
      secondary: '#8D8D8D',
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      green: colors.green,
      red: colors.red
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@headlessui/tailwindcss')
  ],
}
