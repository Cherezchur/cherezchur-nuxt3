import { defineStore } from 'pinia'

export const useGalleryCarousel = defineStore('gallery-carousel', () => {

  let carouselItems = ref([])

  async function fetchCarouselItems(option) {
    const data = await $fetch(`/${option}`)
    carouselItems.value = data
  }

  return { carouselItems, fetchCarouselItems }
})