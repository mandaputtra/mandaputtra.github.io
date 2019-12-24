const tailwindcss = require('tailwindcss')

module.exports = {
  siteName: 'mandaputtra',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ]
      }
    }
  }
}
