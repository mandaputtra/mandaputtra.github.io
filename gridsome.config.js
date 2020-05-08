module.exports = {
  siteName: 'mandaputtra',
  siteDescription: 'Someone tell me that a website is home for many ideas, this is what I do now.',
  siteUrl: 'https://mandaputtra.github.io',
  titleTemplate: '%s | mandaputtra',
  icon: 'src/favicon.png',
  chainWebpack: config => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => {
        options.plugins.unshift(...[
          require('autoprefixer'),
          require('tailwindcss')
        ])

        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(...[
            require('@fullhuman/postcss-purgecss')({
              content: [
                'src/assets/**/*.css',
                'src/**/*.vue',
                'src/**/*.js'
              ],
              defaultExtractor: content => content.match(/[\w-/:%]+(?<!:)/g) || []
            })
          ])
        }

        return options
      })
  }
}
