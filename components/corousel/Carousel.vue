<template>
  <div class="carousel">
      <div class="carousel-inner">
        <CarouselItem 
          v-for="(slide, index) in slides" 
          :key="`slide-${index}`"
          :slide="slide"
        ></CarouselItem>
      </div>
    </div>
</template>

<script setup>
const props = defineProps({
  slides: {
    type: Array,
    default: []
  }
})
</script>