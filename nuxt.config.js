import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: "Pranev",
        meta: [
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'theme-color', hid: 'theme-color', content: '#ff00c3'},
          { name: 'description', hid: 'description', content: 'I make web apps and random libraries in JavaScript.'}
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
