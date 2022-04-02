<template>
  <div class="
      flex flex-col
      min-h-screen
      font-montserrat text-lg
      tracking-wide
      text-gray-600
      dark:text-gray-300
    ">
    <!--bg-svg-light-sm
      md:bg-svg-light bg-right
      dark:bg-svg-dark-sm
      dark:md:bg-svg-dark-->
    <div :class="`inset-0 w-full fixed h-full -z-50 block pointer-events-none bg-gray-200 dark:bg-maid-bg`">
      <div
        v-for="poss, i in items"
        :key="`bgItem-${i}`"
      >
        <div
          :class="`transition-all duration-1000 ease-in-out transform absolute -z-30 w-5 h-5 -translate-x-1 -translate-y-2 rounded-full bg-maid-${colors[Math.floor(Math.random() * colors.length)]}`"
          :style="{top: poss[1] + '%', left: poss[0] + '%'}"
        />
        <!--
        <svg
          v-if="items[i+1]"
          width="100%"
          height="100vh"
          class="absolute -z-40"
        >
          <g class="transition-all duration-1000 ease-in transform">
            <line
              :x1="windowWidth(poss[0])"
              :y1="windowHeight(poss[1])"
              :x2="windowWidth(items[i+1][0])"
              :y2="windowHeight(items[i+1][1])"
              :class="`stroke-maid-${colors[Math.floor(Math.random() * colors.length)]}`"
              :style="{animation: 'dash 5s cubic-bezier(.86,0,.07,1)', strokeDasharray: distance(windowWidth(poss[0]), windowHeight(poss[1]), windowWidth(items[i+1][0]), windowHeight(items[i+1][1]))}"
            />
          </g>
        </svg>
        -->
      </div>
    </div>
    <LayoutHeader :title="nuxtApp._route.path.split('/').reverse()[0] || 'home'" />
    <main class="flex-1 w-full max-w-7xl p-4 mx-auto md:px-8 py-16 mt-5">
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
<script>
export default {
  data() {
    return {
      nuxtApp: useNuxtApp(),
      colors: [100, 200, 300, 400, 500, 600, "bg"],
      items: [],
    };
  },
  methods: {
    windowWidth(x) {
      return (document.body.scrollWidth * x) / 100;
    },
    windowHeight(x) {
      return (document.body.scrollHeight * x) / 100;
    },
    distance(x1, y1, x2, y2) {
      return Math.sqrt(Math.abs((x2 - x1) ** 2) - Math.abs((y2 - y1) ** 2));
    },
  },
  mounted() {
    this.$nextTick(() => {
      const newItems = [];
      const arr = new Array(5 + Math.floor(Math.random() * 10)).fill(null);
      for (let n in arr) {
        console.log(n);
        newItems.push([
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
        ]);
      }
      this.items = newItems;
      setInterval(() => {
        this.items = this.items.map((x) => [
          Math.floor(Math.random() * 100),
          Math.floor(Math.random() * 100),
        ]);
      }, 1000);
    });
  },
};
</script>
