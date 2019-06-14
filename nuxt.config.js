/* eslint-disable prettier/prettier */
const path = require('path')
const pkg = require('./package')
const tailwindJS = path.join(__dirname, 'tailwind.js')

const blogJSON = require('./blogposts.json')

function generateStaticRoute() {
  const route = []
  for (let i = 0; i < blogJSON.length; i++) {
    const blog = blogJSON[i].slug.replace(/^/, '/blog/')
    route.push(blog)
  }
  return route
}

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  router: { base: '/' },
  head: {
    title: 'A blog to @mandaputtra',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'title', name: 'title', content: 'mandaputtra' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap' }
    ]
  },
  generate: {
    routes: generateStaticRoute()
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/normalize.css',
    '~/assets/css/prism.css',
    '~/assets/css/global.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
    '@nuxtjs/google-analytics',
    '@nuxtjs/dotenv',
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  markdownit: {
    html: true,
    preset: 'default',
    linkify: true,
    breaks: true
  },
  googleAnalytics: {
    id: process.env.GA_ID || 'UA-138696364-1'
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-nested': {},
        tailwindcss: tailwindJS
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
