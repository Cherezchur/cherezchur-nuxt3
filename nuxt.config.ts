// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },

  ssr: true,

  modules: ['nuxt-svgo', '@pinia/nuxt', 'nuxt-swiper'],

  components: [
    {path: '@/components', pathPrefix: false},
    {path: '@/sections', pathPrefix: false}
  ],

  build: {
    transpile: ['swiper']
  },

  vite: {
    assetsInclude: ['png','jpg'],

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/main.scss" as *;'
        }
      }
    }
  },
})
