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
          Oh yeah, I'm <span class="font-bold">programmer</span> mostly writting
          <span class="bold">JavaScript</span>, and some another script lang.
          I like scripting and writing programs,
          I mostly interested on real-time alpication, web services,
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
        <p class="mb-4 font-bold">Work with me?</p>
        <p class="mb-4">
          <span class="font-bold">Just contact me via email</span>, Oh yeah if forgot,
          Here my <a href="https://docs.google.com/document/d/1u0HUed_PquAmJDqzSFCkIgMJwnE_Fvq4cu9MAstP-5Q/edit?usp=sharing">CV</a>
        </p>
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
      'Building something.. and try to expand my knowledge upon Open Source projects',
      'I mean we are all building something right'
    ]
  })
}
</script>
