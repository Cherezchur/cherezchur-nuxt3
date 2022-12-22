// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

  modules: ['nuxt-svgo'],
  
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/main.scss" as *;'
        }
      }
    }
  }
})
