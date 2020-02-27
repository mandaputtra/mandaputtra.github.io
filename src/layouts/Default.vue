<template>
  <div class="h-full bg-yellow-400 border-black border-solid border-4 font-mono">
    <header class="bg-black m-auto text-yellow-400 flex max-w-xl text-center mb-4">
      <div class="flex-auto p-2">
        <p>mandaputtra</p>
      </div>
    </header>
      <dropdownMenu />
    <slot />
  </div>
</template>

<script>
import dropdownMenu from '../components/menu-dropdown'

export default {
  components: {
    dropdownMenu
  }
}
</script>
<style>
  body {
    min-height: 100vh;
  }
</style>
