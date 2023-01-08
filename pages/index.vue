<script setup>

const ilDSlides = [
  'ild-1.png',
  'ild-2.png',
  'ild-3.png',
]

const pgSlides = [
  'pg-1.jpg',
  'pg-2.jpg',
  'pg-3.jpg',
]

const tslSlides = [
  'tsl-1.png',
  'tsl-2.png',
  'tsl-3.png',
]

</script>


<template>
  <main id="main">
    <!--      <Sliders/>-->
    <div class="main__slider">
      <MainSliderCarousel :slides="ilDSlides"></MainSliderCarousel>
      <MainSliderCarousel :slides="pgSlides"></MainSliderCarousel>
      <MainSliderCarousel :slides="ilDSlides"></MainSliderCarousel>
    </div>
  </main>
</template>


<style lang='scss'>
.container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.main {
  &__slider {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

</style>