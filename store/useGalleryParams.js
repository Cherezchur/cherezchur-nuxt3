import { defineStore } from 'pinia'

export const useGalleryParams = defineStore('gallery-params', () => {

  let params = ref([])
  let pageParams = ref({})

  async function fetchPageParams(path) {
    const data = await $fetch(`/gallery-params`)
    const dataParams = data.params.find(param => param.path === path)
    pageParams.value = dataParams
  }

  async function fetchGalleryParams() {
    const data = await $fetch(`/gallery-params`)
    params.value = data.params
  }

  return { params, pageParams, fetchPageParams, fetchGalleryParams }
})