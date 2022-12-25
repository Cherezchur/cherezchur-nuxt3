<script setup>
// import Slider from '../components/index/Slider.vue'

const ilDSlides = [
  'ild-1.png',
  'ild-2.png',
  'ild-3.png',
]

</script>


<template>
  <main id="main">
    <!--      <Sliders/>-->
    <MainSliderCarousel :slides="ilDSlides"></MainSliderCarousel>
  </main>
</template>


<style lang='scss'>
.container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

</style>