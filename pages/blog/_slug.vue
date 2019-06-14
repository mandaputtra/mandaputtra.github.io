<template>
  <article class="mt-8 pt-8">
    <div class="article" v-html="postContent.default" />
  </article>
</template>

<script>
import Prism from 'prismjs'

export default {
  head() {
    return {
      title: `mptr | ${this.post.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.post.title
        }
      ]
    }
  },
  layout: 'blogpost',
  transition: 'bounce',
  computed: {
    post() {
      return this.$store.state.post
    },
    postContent() {
      const post = this.$store.state.post
      return require(`../../content/post/${post.filename}.md`)
    }
  },
  fetch({ store, params }) {
    // in case user reload the page
    store.dispatch('getListOfPost')
    //  fetch post
    store.dispatch('getPost', params.slug)
  },
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
}
</script>
