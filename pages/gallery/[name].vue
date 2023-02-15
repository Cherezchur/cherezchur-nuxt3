<script setup>
import { useGalleryParams } from '~/store/useGalleryParams'

definePageMeta({
  middleware: ["gallerys-route-validation"]
})

const store = useGalleryParams()
const route = useRoute()
const routeName = route.params.name

store.fetchGalleryParams(routeName)

</script>

<template>
  <client-only>
    <section class='gallery' >
      <h1 class='gallery__title'>{{ store.title }}</h1>
    </section>
  </client-only>
</template>

<style lang="scss" scoped>
.gallery {
  &__title {
    color: black;
  }
}
</style>