<template>
  <div>
    <section name="post-header" class="mb-6 flex flex-col items-center justify-center">
      <div class="w-full text-center bg-yellow-darker p-2 tracking-wide leading-normal">
        <p class="text-sm text-white">
          📖🖐
          <a
            style="text-decoration: none;"
            class="text-white text-base"
            href="https://www.youtube.com/playlist?list=PL2FF649D0C4407B30"
          >
            learning to learn
          </a>
        </p>
      </div>
    </section>

    <section name="post-list" class="px-6">
      <ol>
        <li v-for="(post, index) in posts" :key="index" class="my-6 leading-normal text-base">
          <nuxt-link
            :to="`blog/${post.slug}`"
            class="nuxt-link-blog"
          >
            {{ post.created_date }} - {{ post.title }}
          </nuxt-link>
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  fetch({ store }) {
    store.dispatch('getListOfPost')
  }
}
</script>
