importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/18c506f9f9b508e7e5de.js",
    "revision": "6f1217fb28e00310eea149dbf42e2bd9"
  },
  {
    "url": "/_nuxt/1a711e81a0c5b8a02af0.js",
    "revision": "1137f7d6bcf1d73feec3643599fa97ec"
  },
  {
    "url": "/_nuxt/4e38f23e1ce6286d3cfd.js",
    "revision": "1918ec87d5740092e5e0d7ef9c8598d0"
  },
  {
    "url": "/_nuxt/70afac3435ed62ea3895.js",
    "revision": "d68d9a2847e7c631d84fedbba8239307"
  },
  {
    "url": "/_nuxt/d5b96eaccbdd0105dad8.js",
    "revision": "dbfb91e0a632f1b24aa62bea57d1d336"
  },
  {
    "url": "/_nuxt/de02614126febdaf28eb.js",
    "revision": "8025899378d084b6346c904ad665b4d6"
  },
  {
    "url": "/_nuxt/f1d43813b819fbcf5256.css",
    "revision": "cc14622826a99c5ecc3b8fbe824330ad"
  },
  {
    "url": "/_nuxt/fed2634a6eed0225ad92.js",
    "revision": "f0b572d6d6b102c1ed4414d1868b263e"
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
