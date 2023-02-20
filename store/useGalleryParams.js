import { defineStore } from 'pinia'

export const useGalleryParams = defineStore('gallery-params', () => {

  let params = ref([])
  let pageParams = ref({})
  let pageOption = ref('')

  async function fetchPageParams(path) {
    const data = await $fetch(`/gallery-params`)
    const dataParams = data.params.find(param => param.path === path)
    pageParams.value = dataParams
    pageOption.value = dataParams.option
    return params.value
  }

  async function fetchGalleryParams() {
    const data = await $fetch(`/gallery-params`)
    params.value = data.params
  }

  return { params, pageParams, pageOption, fetchPageParams, fetchGalleryParams }
})