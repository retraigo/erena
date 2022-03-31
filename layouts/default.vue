<template>
    <div
    class="
      flex flex-col
      min-h-screen
      font-montserrat text-lg
      tracking-wide
      bg-svg-light-sm
      md:bg-svg-light bg-right
      dark:bg-svg-dark-sm
      dark:md:bg-svg-dark
      text-gray-600
      dark:text-gray-300
    "
  >
    <LayoutHeader
      :title="nuxtApp._route.path.split('/').reverse()[0] || 'home'"
    />
    <main class="flex-1 w-full max-w-7xl p-4 mx-auto md:px-8 py-16 mt-5">
      <slot />
    </main>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
</style> 
<script setup>
const nuxtApp = useNuxtApp()
</script>

<style>

</style>