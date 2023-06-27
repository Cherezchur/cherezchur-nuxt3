import { defineStore } from 'pinia'
import {useFetch} from "nuxt/app";

export const useGallerySection = defineStore('gallery-section', () => {

  let galleryList = ref([])
  let galleryOption = ref({})

  async function fetchGalleryData(option) {
    const { data:galleryData } = await useFetch(`/arts`)
    const { data:galleryOptions } = await useFetch('/gallery-params')

    galleryList.value = galleryData.value[option]
    galleryOption.value = galleryOptions.value.params.find(item => item.path === option)
  }

  return { galleryList, galleryOption, fetchGalleryData }
})