<template>
  <div class="blogpost-container font-sans">
    <compactHeader @back="backToTitle" />
    <nuxt />
    <footer class="h-10 min-w-full flex flex-row">
      <div class="w-16 h-full pt-2">
        <p class="text-base font-medium text-black">
          {{ new Date().getFullYear() }}
          <sup>©</sup>
        </p>
      </div>
      <div class="inline-flex w-full text-center pt-2">
        <nuxt-link class="flex-1 text-black" :to="{ path: '/about' }">
          About
        </nuxt-link>
        <nuxt-link class="flex-1 text-black" :to="{ path: '/about' }">
          Work
        </nuxt-link>
        <nuxt-link class="flex-1 text-black" :to="{ path: '/blog' }">
          Blog
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
