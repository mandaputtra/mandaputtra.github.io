<template>
  <nav class="relative h-16 font-display">
    <div class="min-w-full flex flex-col items-center justify-center" @click="back()">
      <div class="w-full">
        <h1 class="tracking-wide font-light">
          {{ this.$store.state.post.title }}
        </h1>
      </div>
      <div class="w-full">
        <h6 class="tracking-wide text-black font-sans text-dark">
          {{ this.$store.state.post.created_date }} - Manda Putra
        </h6>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    back() {
      this.$emit('back')
    }
  }
}
</script>
