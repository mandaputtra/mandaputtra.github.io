const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  siteName: 'mandaputtra',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss,
          ...process.env.NODE_ENV === 'production' ? [purgecss] : []
        ]
      }
    }
  }
}
