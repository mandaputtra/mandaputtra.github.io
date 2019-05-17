<template>
  <section class="tracking-normal font-normal font-sans text-dark leading-normal text-sm" name="aboutme" data-me="mandaputtra">
    <article class="article">
      <p class="font-medium my-4">
        Hey my name is <span class="text-red">Manda Putra</span> another Full Stack Developer,
        I was born in 1997. I profesionally code since 2018
      </p>

      <details class="my-4 -ml-4">
        <summary class="font-bold mb-2 ml-4">
          Read My Story
        </summary>
        <section class="mx-4" v-html="storyPost.default" />
      </details>

      <details class="my-4 -ml-4">
        <summary class="font-bold mb-2 ml-4">
          Prefer My Resume/CV?
        </summary>
        <p class="mx-4">
          See my resume
          <a href="https://docs.google.com/document/d/1u0HUed_PquAmJDqzSFCkIgMJwnE_Fvq4cu9MAstP-5Q/edit">
            here
          </a>
        </p>
      </details>

      <details class="my-4 -ml-4">
        <summary class="font-bold mb-2 ml-4">
          My go to tools ...
        </summary>
        <section class="mx-4" v-html="tools.default" />
      </details>

      <details class="my-4 -ml-4">
        <summary class="font-bold mb-2 ml-4">
          My dreams
        </summary>
        <section class="mx-4" v-html="dreams.default" />
      </details>

      <details class="my-4 -ml-4">
        <summary class="font-bold mb-2 ml-4">
          Contact me?
        </summary>
        <section class="mx-4" v-html="contact.default" />
      </details>

      <details class="my-4 -ml-4">
        <summary class="font-bold mb-2 ml-4">
          My notes about this website
        </summary>
        <section class="mx-4" v-html="notes.default" />
      </details>
    </article>
  </section>
</template>

<script>
export default {
  computed: {
    storyPost() {
      return require(`../content/mystory.md`)
    },
    tools() {
      return require(`../content/tools.md`)
    },
    dreams() {
      return require(`../content/dreams.md`)
    },
    contact() {
      return require(`../content/contact.md`)
    },
    notes() {
      return require(`../content/notes.md`)
    }
  }
}
</script>
