<script setup>
import { useGalleryParams } from '~/store/useGalleryParams'
import { storeToRefs } from 'pinia';

definePageMeta({
  middleware: ["gallerys-route-validation"]
})

const store = useGalleryParams()
const route = useRoute()
const routeName = route.params.name

store.fetchGalleryParams(routeName)

const { getTitle, getPageParams } = storeToRefs(store)

// console.log(getPageParams(routeName));

</script>

<template>
  <client-only>
    <section class='gallery'>
      <h1 class='gallery__title'>{{ getTitle(routeName) }}</h1>
      {{ getPageParams(routeName) }}
    </section>
  </client-only>
</template>

<style lang="scss" scoped>
.gallery {
  &__title {
    color: black;
  }
  &.ilDes {
    background-color: $il-des_dark-blue;
  }
  &.paGr {
    background-color: $pa-gr_dark-pink;
  }
  &.taSk {
    background-color: $ta-sk-le_dark-brown;
  }
}
</style>