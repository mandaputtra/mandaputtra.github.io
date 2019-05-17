<template>
  <div>
    <div class="h-8 w-full flex my-8">
      <p class="tracking-wide text-4xl text-black font-display font-bold">
        <nuxt-link to="blog" class="no-underline text-black">
          Blog
        </nuxt-link>
      </p>
    </div>
    <div class="h-8 w-full flex my-8">
      <p class="tracking-wide text-4xl font-display font-bold">
        <nuxt-link to="about" class="no-underline text-black">
          About
        </nuxt-link>
      </p>
    </div>
    <div class="h-8 w-full flex my-8">
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
  }
}
</script>
