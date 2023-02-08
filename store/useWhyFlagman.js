import { defineStore } from 'pinia'

export const useWhyFlagman = defineStore('why-flagman', {

  state: () => ({
    whyFlagmanItems: [],
    loading: false
  }),

  getters: {
  },

  actions: {
    async FETCH_WHY_FLAGMANS_ITEMS() {
      const data = await $fetch('/why-flagman-data')
      const items = data.items

      this.whyFlagmanItems = items
      this.loading = false
    }
  }
})