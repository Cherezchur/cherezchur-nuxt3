import { defineStore } from 'pinia'

export const useGallerySections = defineStore('gallery-sections', {

  state: () => ({
    gallerySectionData: [],
    loading: true
  }),

  getters: {
  },

  actions: {
    async FETCH_GALLERY_SECTIONS(param) {
      const data = await $fetch(`/${param}`)

      this.gallerySectionData = data.carousels
      this.loading = false
    }
  }
})