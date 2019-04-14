<template>
  <details class="my-4">
    <summary class="font-bold mb-2 text-center">
      {{ summary-title }}
    </summary>
    <section class="mx-4" v-html="content" />
  </details>
</template>

<script>
export default {
  props: ['summaryTitleContent']
}
</script>
