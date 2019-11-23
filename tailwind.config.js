const {
  borderWidth,
  colors,
  fontFamily,
  fontSize,
  height,
  inset,
  spacing,
} = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        red: {
          ...colors.red,
          '500': '#E5001A',
          'sky-foundry': '#C2242B',
        },
        blue: {
          ...colors.blue,
          nauticus: '#0A1226',
          sine: '#037EC9',
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
    gradients: theme => ({
      'black-to-light': ['to bottom', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0)'],
    }),
    height: theme => ({
      ...height(theme),
      '3/4': '75%',
    }),
    inset: {
      ...inset,
      '1/2': '50%',
    },
    spacing: {
      ...spacing,
      '14': '3.5rem',
    },
    translate: {
      '1/2': '50%',
      '-1/2': '-50%',
      '-1/2-full': ['-50%', '-100%'],
    },
    rotate: {
      '180': '180deg',
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-transforms')(),
    require('tailwindcss-transitions')(),
    require('tailwindcss-plugins/gradients'),
  ],
}
