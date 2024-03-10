<template>
  <div class="
      flex flex-col
      min-h-screen
      font-montserrat text-lg
      tracking-wide
      text-gray-600 dark:bg-maid-bg
      dark:text-gray-300
    ">
    <!--bg-svg-light-sm
      md:bg-svg-light bg-right
      dark:bg-svg-dark-sm
      dark:md:bg-svg-dark-->
    <LayoutHeader :title="$route.path.split('/').reverse()[0] || 'home'" />
    <div class="inset-0 w-full fixed h-full -z-10 block pointer-events-none dark:bg-maid-bg/50 bg-gray-300/50" />
    <main class="flex-1 w-full max-w-7xl p-4 mx-auto md:px-8 py-4 mt-5">
      <slot />
    </main>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

@keyframes dash {
  to {
    stroke-dashoffset: 1000;
  }
}
</style>
