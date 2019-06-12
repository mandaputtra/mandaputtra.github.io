<template>
  <div>
    <section name="post-header" class="mb-6 font-sans flex">
      <div class="w-full mt-4 tracking-wide leading-normal">
        <a
          style="text-decoration: none;"
          class="text-black text-base"
          href="https://www.youtube.com/playlist?list=PL2FF649D0C4407B30"
        >
          always learning to learn...
        </a>
      </div>
    </section>

    <section name="post-list" class="font-sans ml-4">
      <ol>
        <li v-for="(post, index) in posts" :key="index" class="my-6 leading-normal text-base">
          <nuxt-link
            :to="`blog/${post.slug}`"
            class="nuxt-link-blog"
          >
            <span class="font-bold">{{ post.created_date }}</span> - {{ post.title }}
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
