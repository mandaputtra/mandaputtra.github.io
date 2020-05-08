<template>
  <Layout>
    <article class="px-2">
      <section class="flex m-auto mb-4 flex-col max-w-xl">
        <p>Here lies my Current Rig, Learning Resource, and manny things.</p>
      </section>
      <article class="flex m-auto flex-col mb-4 max-w-xl">
        <p class="text-xl font-bold">
          RIG
        </p>
        <p class="mb-1">
          <span class="font-bold">Laptop :</span>
          Acer Nitro 5, 256SSD, 1TB HDD, 16Gb RAM, AMD RX 560X.
        </p>
        <p class="mb-1">
          <span class="font-bold">OS :</span>
          Ubuntu 19.10 (I use this because Linux Mint doesnt include 5.3 linux kernel atm).
        </p>
      </article>
      <article class="flex m-auto flex-col max-w-xl">
        <p class="text-xl font-bold">
          Resources
        </p>
        <Links title="Some website that I follow the update" />
      </article>
    </article>
  </Layout>
</template>

<script>
import Links from '../components/links'
export default {
  components: {
    Links
  }
}
</script>
