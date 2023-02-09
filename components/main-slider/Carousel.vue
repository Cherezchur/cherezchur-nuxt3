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
      :class= "props.design"
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
  position: relative;
  height: 100vh;
  width: calc(100vw / 3);

  &__item {

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.3;
    }
    &.IlDes {
      &:after {
        background-color: $il-des_dark-blue;
      }
    }
    &.PaGr {
      &:after {
        background-color: $pa-gr_dark-pink;
      }
    }
    &.TaSk {
      &:after {
        background-color: $ta-sk-le_dark-brown;
      }
    }
  }
  &__viewport {
    display: flex;
    height: 100%;
  }
  &__image {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
  &__filter {
  }
}
</style>