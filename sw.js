importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/01246b9bd4e66ff476e7.js",
    "revision": "6af553ecee43d9f9491ceacacf44a05d"
  },
  {
    "url": "/_nuxt/031daed3b804c43628f9.js",
    "revision": "e1ba9b98d60eb3fca6880379d77c8070"
  },
  {
    "url": "/_nuxt/0f2e1e527da842427f5b.js",
    "revision": "6e4eb3ce755cd73f1bd1a53ee25470ca"
  },
  {
    "url": "/_nuxt/32de669d1c73843d98a1.js",
    "revision": "2e81acb0d1eafc05e0262f8adb278cd5"
  },
  {
    "url": "/_nuxt/7a80726135d9783d15e5.js",
    "revision": "c641401e7448699e1bddf8a6d40f4e6c"
  },
  {
    "url": "/_nuxt/877dd6c2d6bec7348326.js",
    "revision": "c91d59ac774bab6b8d910dc65a6d5f92"
  },
  {
    "url": "/_nuxt/995f9bfa3a9df0a3c6f5.js",
    "revision": "b519ad5fe39dba09cdf2aa66b80bd2f7"
  },
  {
    "url": "/_nuxt/ca3b79761d0f2148d6f0.js",
    "revision": "eb913c68f92cdea7cf010248a8c02745"
  },
  {
    "url": "/_nuxt/dd248ebccf5bf76ba7e0.css",
    "revision": "d4cb567ef221054847724e76e7bd6c95"
  }
], {
  "cacheId": "mandaputtra.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
