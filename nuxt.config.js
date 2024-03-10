// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    meta: {
      title: "Pranev",
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', hid: 'theme-color', content: '#ff00c3' },
        { name: 'description', hid: 'description', content: 'I make web apps and random libraries in JavaScript.' },
        { name: 'og:image', hid: 'og-image', content: '/icon.webp' },
        { name: 'og:thumbnail', hid: 'og-thumbnail', content: '/icon.webp' },
      ],
      link: [
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ],
    },
    css: ['@/assets/transition.css'],
  },
    modules: [
    '@nuxtjs/tailwindcss',
  ]
  //    loading: '@/components/Effects/PingEye.vue'

})
