---
id: 1
title: Simple Blog Site With Nuxt and Markdown
created_date: 13/04/2019
slug: simple_blog_site_with_nuxt_and_markdown
filename: 13-04-2019-simple_blog_site_with_nuxt_and_markdown
category: tutorial
---

> Selamat tinggal website yang dulu...

Hai! 😃 dan selamat datang di blog baru ini sebelumnya maaf jika ini memakan waktu lama hanya untuk website dengan fitur tak banyak ini. JAMStack sendiri sudah cukup lama berkembang sejak saya mengenalnya 2017 lalu melalui sebuah perusahaan bernama [netlify](https://www.youtube.com/watch?v=rB4Cl5LSe2c) yang berhasil me-*rework* sebuah website yang suka saya kunjungi saat sedang [belajar programming](https://www.smashingmagazine.com/) sampai sekarang berkarir di dunia ini.

## Cukup simple

KISS dengan adanya ~~banyak~~ bantuan dari module di NPM... Cukup simple dan bahkan sebenarnya kita dapat menyelesaikannya satu hari.

## Markdown Parsing

Bagian markdown-parsing saya menggunakan [markdown-it](https://github.com/nuxt-community/modules/tree/master/packages/markdownit) module ofisial dari nuxtjs. Saya agak mendapatakan sedikit trouble menggunakan [mdx](https://github.com/mdx-js/mdx) padahal menurut saya ini lebih powerfull daripada sekedar parsing. Karena saya menganut filosofi *dadi sik update sesuk* maka saya memilih [markdown-it](https://github.com/nuxt-community/modules/tree/master/packages/markdownit)

```js
// nuxt.config.js

modules: ['@nuxtjs/markdownit'],
markdownit: {
  html: true,
  preset: 'default',
  linkify: true,
  breaks: true
},

```

dan kita bisa menggunakannya dengan

```js
// vue template you use

<template>
  <div v-html="postContent"/>
</template>

<script>
export default {
  computed: {
    postContent() {
      const post = this.$store.state.post
      // path to filename
      return require(`../../content/post/${post.filename}.md`)
    }
  }
}
</script>
```

## Content Title and Blogpost Meta

Untuk hal ini saya manfaatkan [YAML front matter](http://assemble.io/docs/YAML-front-matter.html) pada markdown. Sayangnya *markdown-it* mendeteksi YAML front matter ini sebagai `h2` dan di parse ke html 😄 jadi ya saya nemu ~~workaround~~ yang paling tidak bekerja di website saya.

```js
// remove yaml from blogpost 😁
mounted() {
  const h2 = document.getElementsByTagName('h2')
  h2[0].outerHTML = ''
}
```
Kembali ke topik meta tadi untuk parser YAML saya memakai `gray-matter` sebenarnya ini terlalu *powerfull*-sih tapi saya tidak bisa menemukan yang lebih simple lagi di NPM. Lalu kita buat simple script untuk men-generate meta kita.

```js
// create-post-list.js

const fs = require('fs')
const matter = require('gray-matter')
// eslint-disable-next-line no-path-concat
const files = fs.readdirSync(__dirname + '/content/post')

console.time('⏲')

const posts = []

for (const i in files) {
  // eslint-disable-next-line no-path-concat
  const str = fs.readFileSync(__dirname + `/content/post/${files[i]}`, 'utf8')
  const post = matter(str).data
  posts.push(post)
}

//  to JSON
const data = JSON.stringify(posts)
fs.writeFileSync('blogposts.json', data)

console.timeEnd('⏲')
```

Bang! dengan ini kita punya *single source of truth* yang gampang kita gunakan, adanya `blogposts.json` ini bisa digunakan juga untuk [mempermudah](https://xkcd.com/208/) proses generate route di `nuxt.config.js`

```js
// nuxt.config.js

const blogJSON = require('./blogposts.json')

function generateStaticRoute() {
  const route = []
  for (let i = 0; i < blogJSON.length; i++) {
    // add /blog in frot of string
    const blog = blogJSON[i].slug.replace(/^/, '/blog/')
    route.push(blog)
  }
  return route
}

// pages routes automaticaly generated with nuxt 🚄
module.exports = {
  generate: {
    routes: generateStaticRoute()
  }
}
```
dengan tambahan script di `package.json` untuk run ini selesai sudah.

## Code highlighting

Saya pilih yang paling ringan [Prism.js](https://prismjs.com/) penggunaannya cukup simple.

```js
// _slug.vue

mounted() {
  const block = document.querySelectorAll('code')
  for (let i = 0; i < block.length; ++i) {
    block[i].classList.add('language-javascript')
  }
  //  remove yaml title
  const h2 = document.getElementsByTagName('h2')
  h2[0].outerHTML = ''
  // hightlight code
  Prism.highlightAll()
}
```

Enaknya memakai prism sendiri ini style dapat kita kustomisasi dengan mudah 😍.

## Still on progress

Jika anda membaca sampai sini ini isinya hanya curhatan saja. Saya ada juga mengalami blocker lain selain kesusahan saat mengapliaksikan `mdx` di project ini. Salah-satunya adalah [purgecss](https://github.com/FullHuman/purgecss), project ini menggunakan [TailwindCSS](https://tailwindcss.com/docs/what-is-tailwind/) dimana jika tidak di kompress atau dikurangi class yang tidak digunakan maka size CSS-nya cukup besar yaitu 38.6kb.

Saat saya memutuskan menggukan [purgecss](https://github.com/FullHuman/purgecss), CSS custom saya banyak kena *trim* 😄 walaupun susah saya include beberapa class yang tidak boleh di *trim*. Saya selalu strich soal size, saya sering curi *soure code*-nya [lodash](https://lodash.com/docs/4.17.11) kalau hanya dipakai 4/6 fungsi saja pada proyek saya daripada harus meng-install-nya.

**Commenting on blog** sebenarnya saya mau menyematkan fitur komen pada blog ini, menggunakan [utteranc.es](https://utteranc.es/) darapida discus ... tapi kok style-nya kurang cocok jadi saya harus menyesuaikannya sedikit dengan website ini.

Karena saya tidak begitu paham paham benar soal CSS. Kadang masih bingung ini kenapa `height: 100%` kok tidak bisa bisa 😂. Dengan ini saya nyatakan itu fitur berikutnya saja hehe.


![I'm backend dev](https://i.imgur.com/Y0ccb6j.png "I'm backend dev!")

Okay semoga anda menikmati first-post saya ini dan mendapat setidaknya sedikit ilmu 😁 oh yah untuk meninggalkan komen anda dapat mengunjungi github issue [ini](https://github.com/mandaputtra/mandaputtra.github.io/issues/2) sambil saya coba coba integrasi *untterances* tadi.

Tidak lupa source code untuk website ini ada di [sini](https://github.com/mandaputtra/mandaputtra.github.io/tree/develop)