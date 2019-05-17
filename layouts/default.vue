<template>
  <div class="font-display">
    <nav class="h-32 pt-2">
      <div class="min-w-full flex flex-col justify-center">
        <h1
          class="mb-2 mt-0 font-medium text-5xl text-black tracking-normal"
          @click="backToHome()"
        >
          mandaputtra
        </h1>
        <h5 class="tracking-normal font-sans font-normal text-lg text-blue leading-normal tracking-normal">
          I write code, opinions around code,
          <a
            href="https://github.com/mandaputtra"
            style="text-decoration: none;"
            class="text-red"
          >
            or just garbage related
          </a>
        </h5>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    backToHome() {
      this.$router.replace('/')
    }
  }
}
</script>
