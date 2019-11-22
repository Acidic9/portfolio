module.exports = () => ({
  plugins: [
    require('postcss-import-url'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
})
