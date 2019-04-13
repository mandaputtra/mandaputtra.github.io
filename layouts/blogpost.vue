<template>
  <div class="blogpost-container font-sans">
    <compactHeader @back="backToTitle" />
    <nuxt />
    <footer class="h-10 min-w-full flex flex-row bg-yellow">
      <div class="w-16 h-full bg-black pt-2 pl-1">
        <p class="text-base font-medium text-yellow">
          {{ new Date().getFullYear() }}
          <sup>©</sup>
        </p>
      </div>
      <div class="inline-flex w-full text-center pt-2">
        <nuxt-link class="flex-1" :to="{ path: '/' }">
          ABOUT
        </nuxt-link>
        <nuxt-link class="flex-1" :to="{ path: '/' }">
          WORK
        </nuxt-link>
        <nuxt-link class="flex-1" :to="{ path: '/' }">
          BLOG
        </nuxt-link>
      </div>
    </footer>
  </div>
</template>

<script>
import compactHeader from '../components/compact-header'

export default {
  components: {
    compactHeader
  },
  methods: {
    backToTitle() {
      this.$router.replace('/blog')
    }
  }
}
</script>
