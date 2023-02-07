<script setup>

const props = defineProps({
  slide: String,
  currentSlide: Number,
  index: Number
})

</script>

<template>
  <Slide class="carousel__item" v-show="currentSlide === index">
    <img :src="`/banner/${slide}`"/>
  </Slide>
</template>


<style lang="scss" scoped>
.carousel__item {
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}
</style>