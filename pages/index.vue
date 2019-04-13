<template>
  <div>
    <div
      class="h-8 w-full bg-yellow box flex items-center justify-center"
    >
      <p class="tracking-wide text-4xl text-black font-sans font-bold">
        <nuxt-link to="blog" class="no-underline text-black">
          BLOG
        </nuxt-link>
      </p>
    </div>
    <div class="h-8 w-full bg-yellow-lighter box flex items-center justify-center">
      <p class="tracking-wide text-4xl font-sans font-bold">
        <nuxt-link to="about" class="no-underline text-black">
          ABOUT
        </nuxt-link>
      </p>
    </div>
    <div class="h-8 w-full bg-yellow-lightest box flex flex-row items-center justify-center">
      <socialIcon
        image="twitter"
        alt="twitter-icon"
        url="https://twitter.com/_mandaputtra"
      />
      <socialIcon
        image="github"
        alt="github-icon"
        url="https://github.com/mandaputtra"
      />
    </div>
  </div>
</template>


<script>
import socialIcon from '../components/social-icon'

export default {
  components: {
    socialIcon
  },
  mounted() {
    const homePageHeight = (window.innerHeight - 128) / 3
    this.$anime({
      targets: '.box',
      duration: 1500,
      height: homePageHeight
    })
  }
}
</script>
