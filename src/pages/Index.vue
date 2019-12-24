<template>
  <Layout>
    <article class="px-2">
      <section class="flex m-auto flex-col max-w-xl">
        <p class="mb-4">
          <span class="font-bold">Hello,</span> I ussualy blog about code <a class="text-blue-600 underline"
            href="https://dev.to/mandaputtra">here</a>, if
          you're
          indonesian some of my blog post are in <a class="text-blue-600 underline"
            href="https://dev.to/search?q=indonesia%20mandaputtra">indonesian</a>.
        </p>
        <p class="mb-4">
          Oh yeah, I'm programmer mostly writting JavaScript, and some another script lang.
          I like scripting and writing programs, I mostly interested on real-time alpication, web services,
          databases, and that kind of stuff.
        </p>
      </section>
      <section class="flex m-auto flex-col max-w-xl">
        <p class="mb-4 font-bold">What I do now?</p>
        <ul class="mb-4">
          <li class="mb-4" v-for="(item, index) in whats" :key="index">
            <div class="w-full border-solid border-4 border-black p-4 shadow-md">
              {{ item }}
            </div>
          </li>
        </ul>
        <links />
      </section>
    </article>
  </Layout>
</template>

<script>
import links from '../components/links'
export default {
  components: {
    links
  },
  data: () => ({
    whats: [
      'Helping Vue.js Indonesia, maintain the github Organizations especially on Docs Translation',
      'Learning new language, Go and Elixir ~ I found it interesting',
      'Building something..',
      'I mean we are all building something right'
    ]
  })
}
</script>
