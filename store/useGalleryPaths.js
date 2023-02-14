import { defineStore } from 'pinia'

export const useGalleryPaths = defineStore('gallery-paths', {

  state: () => ({
    paths: [],
  }),

  getters: {
    GET_PATHS: (state) => state.paths
  },

  actions: {
    async FETCH_GALLERY_PATHS() {
      const data = await $fetch(`/gallery-paths`)
      this.paths = data.paths

      console.log(data.paths);
    }
  }
})