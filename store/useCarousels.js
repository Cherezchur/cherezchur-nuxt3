import { defineStore } from 'pinia'

export const useCarousels = defineStore('carousels', {

  state: () => ({
    carouselsData: [],
    loading: true
  }),

  getters: {
  },

  actions: {
    async FETCH_CAROUSELS() {
      const data = await $fetch('/carousels')

      this.carouselsData = data.carousels
      this.loading = false
    }
  }
})