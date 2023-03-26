<script setup>

const props = defineProps({
  items: Array
})

const gallerysItems = props.items

</script>

<template>
  <ClientOnly>
    <Swiper
      class="gallery-slider"
      v-for="item, index in gallerysItems"
      :key="`slide-${index}`"
      :items-to-show="1"
      :loop="true"
      :wrapAround="true"
      @swiper="onSwiper"
    >
      <SwiperSlide 
        class="gallery-slider__item"
        :class= "carousel.design"
        v-for="slide, index in carousel.slides" 
        :key="`slide-${index}`"
      >
        <NuxtLink 
        class="gallery-slider__link"
          :to="item.path"
        >
          <img :src="item.images[0]" class="gallery-slider__image">
        </NuxtLink>
        <div class="gallery-slider__content">
          <h3 class="gallery-slider__title">{{ item.title }}</h3>
          <span>like</span>
        </div>
        <p class="gallery-slider__description"></p>
      </SwiperSlide>

      <div >
        <span class="slider__slider-arrow">&#10140;</span>
        <span class="slider__slider-title">{{ carousel.title }}</span>
      </div>
    </Swiper>
  </ClientOnly>
</template>

<style scoped lang="scss">
.gallery-list {
  width: 80vw;
  margin: 0 auto;
  padding-top: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

</style>