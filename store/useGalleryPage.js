import { defineStore } from 'pinia'
import {useFetch} from "nuxt/app";

export const useGalleryPage = defineStore('gallery-page', () => {

  let params = ref([])

  async function fetchGalleryPage() {
    const { data } = await useFetch('/gallery-params')
    params.value = data.value.params
  }

  return { params, fetchGalleryPage }
})