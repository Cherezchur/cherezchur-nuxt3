import { defineStore } from 'pinia'

export const useSections = defineStore('sections', () => {

  let sectionsData = ref([])
  let loading = ref(true)

  async function fetchSections() {
    const data = await $fetch('/sections')

    sectionsData.value = data.sections
    loading.value = false
  }

  return { sectionsData, loading, fetchSections }
})