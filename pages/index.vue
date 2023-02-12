<script setup>

import { useCarousels } from '~/store/useCarousels'

const carouselsStore = useCarousels()

let hoverInitial = ref(['start', 'start', 'start'])
let isUpdateSlideWidth = ref(false);

carouselsStore.loading = true
carouselsStore.FETCH_CAROUSELS()

const setHover = (index) => {
  for (let booleanKey in hoverInitial.value) { 
    hoverInitial.value[booleanKey] = 'not-hover'
  }
  hoverInitial.value[index] = 'hover'
  isUpdateSlideWidth = !isUpdateSlideWidth
  console.log(isUpdateSlideWidth);
}

const removeHover = () => {
  for (let booleanKey in hoverInitial.value) { 
    hoverInitial.value[booleanKey] = 'start'
  }
  isUpdateSlideWidth = !isUpdateSlideWidth
  console.log(isUpdateSlideWidth);
};

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
            :class="hoverInitial[index]"
            :design="carousel.design"
            :slides="carousel.slides"
            :title="carousel.title"
            :slideWidthUpdate="isUpdateSlideWidth"
            @mouseover="setHover(index)"
            @mouseleave="removeHover"
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