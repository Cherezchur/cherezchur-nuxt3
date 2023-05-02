// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },

  modules: ['nuxt-svgo', '@pinia/nuxt', 'nuxt-swiper'],

  components: [
    {path: '@/components/common', pathPrefix: false},
    {path: '@/components/gallery', pathPrefix: false},
    {path: '@/components/main', pathPrefix: false},
  ],
  
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
