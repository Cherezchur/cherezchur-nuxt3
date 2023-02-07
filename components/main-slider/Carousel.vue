<script setup>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const props = defineProps({
  slides: {
    type: Array,
    default: []
  }
})

const currentSlide = 1;

</script>


<template>
  <carousel :items-to-show="1">

    <Slide 
      class="carousel__item" 
      v-for="(slide, index) in slides" 
      :key="`slide-${index}`"
    >
      <img class="carousel__image" :src="`/banner/${slide}`"/>
    </Slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>

  </carousel>
</template>


<style lang="scss" scoped>
.carousel {
  height: 100vh;
  width: calc(100vw / 3);

  &__viewport {
    display: flex;
    height: 100%;
  }
  &__image {
    height: 100vh;
    object-fit: cover;
  }
  &__pagination {
    position: absolute;
    left: 20px;
    bottom: 40px;
  }
}
</style>