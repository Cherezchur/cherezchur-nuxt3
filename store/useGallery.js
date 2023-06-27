import { defineStore } from 'pinia'
import { useFetch } from "nuxt/app";

export const useGallery = defineStore('gallery', () => {

  let slider = ref([])
  let sections = ref([])
  let gallery = ref({})

  async function fetchSlider() {
    const { data } = await useFetch('/api/slider')
    slider.value = data.value
  }

  async function fetchSections() {
    const { data } = await useFetch('/api/gallery-params')
    sections.value = data.value.sections
  }

  async function fetchGallery() {
    const { data } = await useFetch('/api/gallery')
    gallery.value = data.value
  }

  return {
    slider,
    sections,
    gallery,

    fetchSlider,
    fetchSections,
    fetchGallery
  }
})