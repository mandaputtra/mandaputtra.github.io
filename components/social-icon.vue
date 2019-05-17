<template>
  <div class="my-4 mr-2">
    <img
      :src="require(`../static/img/${image}.svg`)"
      class="h-6 w-6 block mx-auto"
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
      window.open(this.url)
    }
  }
}
</script>
