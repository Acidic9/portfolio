const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./src/**/*.ts', './src/**/*.tsx'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],

  whitelistPatterns: [/.*bg-project-.*/g],
})

module.exports = () => ({
  plugins: [
    require('postcss-import-url'),
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
})
