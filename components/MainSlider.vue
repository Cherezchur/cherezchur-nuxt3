<script setup>

import { useCarousels } from '~/store/useCarousels'

const store = useCarousels()
store.fetchCarousels()

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
      <span v-if="store.loading">Идет загрузка ...</span>
      <Swiper
        v-else
        v-for="{design, slides, path, title }, index in store.carouselsData"
        :class="['slider', hoverInitial[index]]"
        :key="title"
        :items-to-show="1"
        :loop="true"
        :wrapAround="true"
        @swiper="onSwiper"
        @mouseover="setHover(index)"
      >
        <SwiperSlide 
          class="slider__item"
          :class= "design"
          v-for="slide, index in slides" 
          :key="`slide-${index}`"
        >
          <img class="slider__image" :src="`/banner/${slide}`"/>
        </SwiperSlide>

        <nuxt-link class="slider__link" :to=path>
          <span class="slider__link-arrow">&#10140;</span>
          <span class="slider__link-title">{{ title }}</span>
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

  transition: $accent-time-transition;
  cursor: url('/assets/image/icons/swaip-cursor.svg'), auto;

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
    bottom: 0;
    right: 0;
    width: 100%;
    height: 8%;
    padding: 20px 10%;
    text-align: end;
    z-index: 2;

    display: flex;
    justify-content: space-between;

    font-size: 26px;
    line-height: 1.2;
    color: $white;

    text-shadow: 1px 1px 2px $contur-dark-purple;
    background-color: rgba(0,0,0,.3);

    &-arrow {
      margin-right: 10px;
      flex-grow: 1;
      opacity: 0;
      transform: translateX(-100%);

      transition: $accent-time-transition;
    }

  }
}

@include lg-desktop {
  .slider {
    &__link {
      font-size: 24px;
    }
  }
}
@include md-desktop {
  .slider {
    &__link {
      height: 11%;
      font-size: 20px;
    }
  }
}
@include sm-tablets {
  .slider {
    &__link {
      height: 13%;
      font-size: 18px;
    }
  }
}
@include sm-mobile {
  .main {
    &__slider {
      height: 100vh;
      grid-template-columns:  1fr;
      grid-template-rows:  repeat( 3, 1fr);
    }
  }

  .slider {
    width: 100%;

    &.start {
      width: 100%;
      height: calc(100vh / 3);
    }
    &.hover {
      width: 100%;
      height: calc(100vh / 2);

      .slider__link-arrow {
        opacity: 1;
        transform: translateX(0);
      }
    }
    &.not-hover {
      width: 100%;
      height: calc(100vh / 4);
    }
    &__image {
      height: 100%;
      object-position: 50% 50%;
    }
    &__link {
      height: fit-content;
    }
  }
}
@include ems-mobile {
  .slider {
    &__link {
      font-size: 14px;
    }
  }
}

</style>