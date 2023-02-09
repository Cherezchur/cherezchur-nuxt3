<script setup>

import { useCarousels } from '~/store/useCarousels'

const carouselsStore = useCarousels()

carouselsStore.loading = true
carouselsStore.FETCH_CAROUSELS()

</script>


<template>
  <transition name="main">
    <main id="main">
      <div class="main__slider">

        <ClientOnly>
          <span v-if="carouselsStore.loading">Идет загрузка ...</span>
          <MainSliderCarousel 
            v-for="carousel, index in carouselsStore.carouselsData" 
            :key="`slide-${index}`"
            :design="carousel.design"
            :slides="carousel.slides"
            :title="carousel.title"
          >
          </MainSliderCarousel>
        </ClientOnly>
      </div>
    </main>
  </transition>
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