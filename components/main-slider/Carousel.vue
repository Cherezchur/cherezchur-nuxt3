<script setup>

const props = defineProps({
  slides: {
    type: Array,
    default: []
  }
})

const currentSlide = 0;

</script>


<template>
  <div class="carousel">
      <div class="carousel__inner">
        <MainSliderCarouselItem 
          v-for="(slide, index) in slides" 
          :key="`slide-${index}`"
          :slide="slide"
          :current-slide="currentSlide"
          :index="index"
        ></MainSliderCarouselItem>
      </div>
    </div>
</template>


<style lang="scss" scoped>
.carousel {
  height: 100vh;

  &__inner {
    position: relative;
    overflow-x: hidden;
    display: flex;
    height: 100%;
    width: calc(100% / 3);
  }
}
</style>