import { defineStore } from 'pinia'

export const useGalleryParams = defineStore('gallery-params', () => {

  let title = ref('')
  let style = ref('')
  let paths = ref([])

  async function fetchGalleryParams(path) {
    const data = await $fetch(`/gallery-params`)
    const params = data.params.find(param => param.path === path)

    let paramsPaths = []
    data.params.forEach(param => paramsPaths.push(param.path))

    title.value = params.title
    style.value = params.style
    paths.value = paramsPaths
  }

  return { paths, title, style, fetchGalleryParams }
})