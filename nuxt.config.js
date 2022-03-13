import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: "Pranev",
        meta: [
          { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        link: [
          { rel: 'shortcut icon', href: '/favicon.ico' },
          { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
        ],
       },
    css: ['@/assets/transition.css'],
    modules: [
        '@nuxtjs/tailwindcss',
    ]

})
