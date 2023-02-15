<script setup>

import { useCarousels } from '~/store/useCarousels'

const carouselsStore = useCarousels()
carouselsStore.loading = true
carouselsStore.FETCH_CAROUSELS()

let hoverInitial = ref(['start', 'start', 'start'])
let swipers = [];

const onSwiper = (swiper) => {
  swipers.push(swiper)
};

const setHover = (index) => {

  for (let initialKey in hoverInitial.value) { 
    if(initialKey == index) {
      hoverInitial.value[initialKey] = 'hover'
    } else {
      hoverInitial.value[initialKey] = 'not-hover'
    }
  }

}

const removeHover = () => {
  for (let initialKey in hoverInitial.value) { 
    hoverInitial.value[initialKey] = 'start'
  }
}

</script>

<template>
  <div class="main__slider" @mouseleave="removeHover">

    <ClientOnly>
      <span v-if="carouselsStore.loading">Идет загрузка ...</span>
      <Swiper
        v-else
        v-for="carousel, index in carouselsStore.carouselsData"
        :class="['slider', hoverInitial[index]]"
        :key="`slide-${index}`"
        :items-to-show="1"
        :loop="true"
        :wrapAround="true"
        @swiper="onSwiper"
        @mouseover="setHover(index)"
      >
        <SwiperSlide 
          class="slider__item"
          :class= "carousel.design"
          v-for="slide, index in carousel.slides" 
          :key="`slide-${index}`"
        >
          <img class="slider__image" :src="`/banner/${slide}`"/>
        </SwiperSlide>

        <nuxt-link class="slider__link" :to=carousel.path>
          <span class="slider__link-arrow">&#10140;</span>
          <span class="slider__link-title">{{ carousel.title }}</span>
        </nuxt-link>
      </Swiper>
    </ClientOnly>
  </div>
</template>

<style lang='scss'>

.main {

  &__slider {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

.slider {
  position: relative;
  height: 100vh;
  width: calc(100vw / 3);

  transition: $time-transition;

  &.start {
    width: calc(100vw / 3);
  }
  &.hover {
    width: calc(100vw / 2);

    .slider__link-arrow {
      opacity: 1;
      transform: translateX(0);
    }
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
    &.ilDes {
      &:after {
        background-color: $il-des_dark-blue;
      }
    }
    &.paGr {
      &:after {
        background-color: $pa-gr_dark-pink;
      }
    }
    &.taSk {
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
    z-index: 2;

    display: flex;
    justify-content: space-between;

    font-size: 26px;
    line-height: 1.2;
    color: $white;

    text-shadow: 1px 1px 2px $contur-dark-purple;

    &-arrow {
      margin-right: 10px;
      flex-grow: 1;
      opacity: 0;
      transform: translateX(-100%);

      transition: $accent-time-transition;
    }

  }
}

@mixin lg-desktop {
}
@mixin md-desktop {
}
@mixin sm-tablets {
}
@mixin sm-mobile {
}
@mixin esm-mobile {
}

</style>