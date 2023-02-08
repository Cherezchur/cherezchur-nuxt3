// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

  modules: ['nuxt-svgo', '@pinia/nuxt'],
  
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
