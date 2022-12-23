<template>
  <main id="main">
    <!--      <Sliders/>-->
    <Carousel :slides="slides"></Carousel>
  </main>
</template>

<script setup>
// import Slider from '../components/index/Slider.vue'

const slides = [
  'https://picsum.photos/id/444/200/300',
  'https://picsum.photos/id/445/200/300',
  'https://picsum.photos/id/446/200/300',
]

</script>

<style lang='scss'>
.container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

</style>