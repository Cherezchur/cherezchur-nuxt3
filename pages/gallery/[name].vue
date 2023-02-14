<script setup>
import { useGalleryPaths } from '~/store/useGalleryPaths'

const galleryPaths = useGalleryPaths()
const route = useRoute()
const routeName = route.params.name

galleryPaths.FETCH_GALLERY_PATHS()
console.log(galleryPaths.GET_PATHS)

definePageMeta({
  middleware: ["gallerys-route-validation"]
})

</script>

<template>
  <section class='gallery'>
    <h1 class='gallery__title'></h1>
    {{ galleryPaths.GET_PATHS }}
  </section>
</template>

<style lang="scss" scoped>
.gallery {
  &__title {
    color: black;
  }
}
</style>