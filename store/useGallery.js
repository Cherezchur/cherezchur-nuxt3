import { defineStore } from 'pinia'
import { useFetch } from "nuxt/app";

export const useGallery = defineStore('gallery', () => {

  let galleryData = ref([])

  let sectionData = ref({})
  let sectionArts = ref([])
  let sectionParams = ref({})

  const setSectionData = ( path ) => {
    sectionData.value = galleryData.value.data.find( item => item.path === path )
  }

  async function fetchGallery() {
    const { data } = await useFetch('/galleryData')
    console.log(data)
    galleryData.value = data.value
  }

  return {
    galleryData,
    sectionData,

    setSectionData,

    fetchGallery }
})