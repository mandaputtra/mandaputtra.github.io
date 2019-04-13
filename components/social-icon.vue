<template>
  <div class="flex-1">
    <img
      :src="require(`../static/img/${image}.svg`)"
      class="h-10 w-10 block mx-auto"
      :alt="alt"
      @click="openLinks()"
    >
  </div>
</template>

<script>
export default {
  props: ['image', 'url', 'alt'],
  methods: {
    openLinks() {
      // window.open(this.url)
      console.log('URL', this.imageSrc)
    }
  }
}
</script>
