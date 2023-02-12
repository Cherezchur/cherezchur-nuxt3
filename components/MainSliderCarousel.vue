<script setup>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const props = defineProps({
  slideWidthUpdate: Boolean,
  design: String,
  title: String,
  slides: {
    type: Array,
    default: []
  }
})

const chapterCarousel = ref(null)
// const slideWidthUpdate = ref(props.slideWidthUpdate)

watch(() => props.slideWidthUpdate, () =>  {
    console.log(chapterCarousel);
    chapterCarousel.updateSlideWidth();
  })

</script>


<template>
  <Carousel
    ref="chapterCarousel"
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
      <nuxt-link class="carousel__link" to="/">{{ props.title }}</nuxt-link>
    </template>

  </Carousel>
</template>


<style lang="scss" scoped>
.carousel {
  position: relative;
  height: 100vh;
  width: calc(100vw / 3);

  &.start {
    width: calc(100vw / 3);
  }
  &.hover {
    width: calc(100vw / 2);
  }
  &.not-hover {
    width: calc(100vw / 4);
  }

  &__item {

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.4;
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
  &__link {
    position: absolute;
    bottom: 60px;
    right: 10%;
    width: 90%;
    margin-left: 20%;
    text-align: end;

    font-size: 26px;
    line-height: 1.2;
    color: $white;

    text-shadow: 1px 1px 2px $contur-dark-purple;
  }
}

@mixin lg-desktop {
  .carousel {
  }
}
@mixin md-desktop {
  @media only screen and (max-width: #{$md-desktop-width}) {
    @content
  }
}
@mixin sm-tablets {
  @media only screen and (max-width: #{$sm-tablets-width}) {
    @content
  }
}
@mixin sm-mobile {
  @media only screen and (max-width: #{$sm-mobile-width}) {
    @content
  }
}
@mixin esm-mobile {
  @media only screen and (max-width: #{$extra-sm-mobile-width}) {
    @content
  }
}
</style>