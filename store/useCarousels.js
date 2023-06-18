import { defineStore } from 'pinia'

export const useCarousels = defineStore('carousels', () => {

  let carouselsData = ref([])
  let loading = ref(true)

  async function fetchCarousels() {
    const data = await $fetch('/carousels')

    carouselsData.value = data.carousels
    loading.value = false
  }

  return { carouselsData, loading, fetchCarousels }
})