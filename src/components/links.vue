<template>
  <div>
    <p class="mb-4 font-bold">
      {{ title }}
    </p>
    <ul class="flex w-full flex-col flex-wrap mb-4">
      <li class="mb-1" v-for="(item, index) in items" :key="index">
        <a class="text-red-800 underline" :href="item.link">
          > {{ item.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Just click link below for more stuff.'
    },
    items: {
      type: Array,
      default: () => [
        { text: 'blog', link: 'https://dev.to/mandaputtra/' },
        { text: 'mandaputtra', link: 'https://github.com/mandaputtra' },
        { text: 'email', link: 'mailto:mandaputra8@gmail.com' },
        { text: 'twitter', link: 'https://twitter.com/_mandaputtra' },
        { text: 'linkedin', link: 'https://www.linkedin.com/in/mandaputra8' }
      ]
    }
  }
}
</script>
