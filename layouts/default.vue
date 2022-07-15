<template>
  <div
    class="
      flex flex-col
      min-h-screen
      font-montserrat
      text-lg
      tracking-wide
      text-gray-600
      dark:text-gray-300
    "
  >
    <!--bg-svg-light-sm
      md:bg-svg-light bg-right
      dark:bg-svg-dark-sm
      dark:md:bg-svg-dark-->
    <div
      :class="`inset-0 w-full fixed h-full -z-50 block pointer-events-none bg-gray-200 dark:bg-chaos-primary`"
    >
      <svg width="100%" height="100vh" class="absolute -z-40">
        <g v-for="(poss, i) in items" :key="`bgItem-${i}`">
          <marker
            :id="`endLine${i}`"
            class="relative"
            viewBox="0 0 22 22"
            refX="10"
            refY="10"
            markerUnits="userSpaceOnUse"
            markerWidth="22"
            markerHeight="22"
          >
            <circle
              :class="`transition-all duration-[2000ms] ease-in transform absolute -z-30 rounded-full stroke-maid-${
                colors[Math.floor(Math.random() * colors.length)]
              } fill-maid-${colors[Math.floor(Math.random() * colors.length)]}`"
              cx="10"
              cy="10"
              r="10px"
            />
          </marker>
          <path
            :d="`${
//              i === 0
//                ? `M ${windowWidth(items[i + 1]?.[0] || poss[0])} ${windowHeight(items[i + 1]?.[0] || poss[0])}`
                `M ${windowWidth(poss[0])} ${windowHeight(poss[1])}`
            } L ${windowWidth(items[i + 1]?.[0] || poss[0])} ${windowHeight(
              items[i + 1]?.[1] || poss[1]
            )}`"
            stroke-width="0.5px"
            :class="`stroke-maid-${
              colors[Math.floor(Math.random() * colors.length)]
            } opacity-50 transition-all duration-1000 ease-in transform item${i}`"
            :marker-end="`url(#endLine${i})`"
            :marker-start="!i ? `url(#endLine${i})` : undefined"
          />
        </g>
      </svg>
    </div>
    <div
      class="
        inset-0
        w-full
        fixed
        h-full
        -z-10
        block
        pointer-events-none
        dark:bg-chaos-primary/50
        bg-gray-300/50
      "
    />
    <main class="flex-1 w-full max-w-7xl p-4 mx-auto md:px-8 py-4 mt-5">
      <slot />
    </main>
    <ErenaFooter />
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

@keyframes dash {
  to {
    stroke-dashoffset: 1000;
  }
}
</style> 
<script setup>
const nuxtApp = useNuxtApp();
const route = useRoute();

useHead({ title: route.meta.title, description: route.meta.description });
const colors = [100, 200, 300, 400, 500, 600];
let items = ref([]);

function windowWidth(x) {
  return (window.innerWidth * x) / 100;
}
function windowHeight(x) {
  return (window.innerHeight * x) / 100;
}
function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.abs((x2 - x1) ** 2) - Math.abs((y2 - y1) ** 2));
}
onMounted(() => {
  const arr = new Array(
    Math.floor(windowWidth(1)) + Math.floor(Math.random() * 5)
  ).fill(null);
  for (let n in arr) {
    items.value.push([
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ]);
  }
  window.movingItem = setInterval(() => {
    items.value = items.value.map((x) => [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ]);
  }, 1000);
});
</script>
