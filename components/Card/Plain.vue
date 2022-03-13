<template>
  <div class="p-4">
    <div class="max-w-2xl rounded-xl bg-gray-300/50 dark:bg-maid-bg/50 w-full p-4">
      <div class="flex flex-col items-stretch space-y-4">
          <div class="text-3xl font-semibold">{{title}}</div>
          <div v-for = '(desc, i) in description' :key = "`desc${i}`" class="text-base dark:text-zinc-100 text-zinc-900">{{desc}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    description: {
      type: Array,
      default: null,
    },
  },
};
</script>