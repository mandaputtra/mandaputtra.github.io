<template>
  <div class="font-sans">
    <nav class="h-32 bg-yellow-dark px-4 pt-2">
      <div class="min-w-full flex flex-col justify-center">
        <h1
          class="mb-2 mt-0 font-extrabold text-dark"
          @click="backToHome()"
        >
          mp8
        </h1>
        <h5 class="tracking-normal font-normal text-dark leading-normal">
          personal blog to
          <a
            href="https://github.com/mandaputtra"
            style="text-decoration: none;"
            class="text-red"
          >
            @mandaputtra
          </a>
        </h5>
        <h5 class="tracking-normal font-normal text-dark leading-normal">
          I write code, opinions around code, and some other <s>code</s> related
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
