import { defineStore } from 'pinia'

export const useGalleryParams = defineStore('gallery-params', () => {

  let params = ref([])

  const getPageParams = computed(() =>  {
    return (path) => params.value.find(param => param.path === path)
  })

  const getTitle = computed(() => {
    return (path) => {
      const params = getPageParams.value(path)
      return params.title
    }
  })

  // const getTitles = () => {
  //   let paramsTitles = []
  //   params.value.forEach(param => paramsPaths.push(param.title))
  //   return paramsTitles
  // }

  async function fetchGalleryParams(path) {
    const data = await $fetch(`/gallery-params`)
    params.value = data.params
  }

  return { params, getPageParams, getTitle, fetchGalleryParams }
})