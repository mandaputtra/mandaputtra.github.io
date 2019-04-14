<template>
  <section class="p-2 tracking-normal font-normal text-dark leading-normal text-sm" name="aboutme" data-me="mandaputtra">
    <article class="article">
      <p class="font-medium text-center my-4">
        Hey my name is Manda Putra another Full Stack Developer,
        I was born in 1997. I profesionally code since 2018
      </p>

      <details :open="true" class="my-4">
        <summary class="font-bold mb-2 ml-4">
          Read My Story
        </summary>
        <section class="mx-4" v-html="storyPost" />
      </details>

      <details class="my-4">
        <summary class="font-bold mb-2 ml-4">
          Prefer My Resume/CV?
        </summary>
        <p class="text-center">
          on progress create new Resume/CV
        </p>
      </details>

      <details class="my-4">
        <summary class="font-bold mb-2 ml-4">
          My go to tools ...
        </summary>
        <section class="mx-4" v-html="tools" />
      </details>

      <details class="my-4">
        <summary class="font-bold mb-2 ml-4">
          My dreams
        </summary>
        <section class="mx-4" v-html="dreams" />
      </details>

      <details class="my-4">
        <summary class="font-bold mb-2 ml-4">
          Contact me?
        </summary>
        <section class="mx-4" v-html="contact" />
      </details>

      <details class="my-4">
        <summary class="font-bold mb-2 ml-4">
          My notes about this website
        </summary>
        <section class="mx-4" v-html="notes" />
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
