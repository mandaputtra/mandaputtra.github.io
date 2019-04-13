<template>
  <nav class="relative h-16 bg-yellow-dark">
    <div class="absolute min-w-full pin flex flex-row items-center justify-center" @click="back()">
      <div class="pt-5 pl-2 h-full bg-black w-16">
        <h6 class="mt-0 tracking-wide font-semibold text-base text-yellow font-sans">
          mp8
        </h6>
      </div>
      <div class="pl-4 w-full mt-0">
        <h6 class="tracking-wide font-semibold text-sm text-dark font-sans">
          {{ this.$store.state.post.title }}
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
