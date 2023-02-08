<script setup>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const props = defineProps({
  design: String,
  slides: {
    type: Array,
    default: []
  }
})

</script>


<template>
  <Carousel
    :items-to-show="1"
    :wrap-around="true"
  >

    <Slide 
      class="carousel__item"
      :class=props.design
      v-for="slide, index in props.slides" 
      :key="`slide-${index}`"
    >
      <img class="carousel__image" :src="`/banner/${slide}`"/>
    </Slide>

    <template #addons>
      <navigation />
    </template>

  </Carousel>
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
    width: 100%;
    object-fit: cover;
  }
  &__pagination {
    position: absolute;
    left: 20px;
    bottom: 40px;
  }
}
</style>