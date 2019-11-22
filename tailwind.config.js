const {
  borderWidth,
  colors,
  fontFamily,
  fontSize,
  height,
  inset,
} = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        red: {
          ...colors.red,
          '500': '#E5001A',
        },
        blue: {
          ...colors.blue,
          nauticus: '#0A1226',
          sine: '#06C4FF',
        },
        gray: {
          ...colors.gray,
          '900': '#272727',
          'pirate-life': '#090909',
        },
      },
    },
    borderWidth: {
      ...borderWidth,
      '16': '16px',
    },
    fontFamily: {
      roboto: ['Roboto', ...fontFamily.sans],
    },
    fontSize: {
      ...fontSize,
      '7xl': '5rem',
      '8xl': '6rem',
    },
    height: theme => ({
      ...height(theme),
      '3/4': '75%',
    }),
    inset: {
      ...inset,
      '1/2': '50%',
    },
    translate: {
      '1/2': '50%',
      '-1/2': '-50%',
      '-1/2-full': ['-50%', '-100%'],
    },
  },
  variants: {},
  plugins: [require('tailwindcss-transforms')()],
}
