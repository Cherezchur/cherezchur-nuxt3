<script setup>
const props = defineProps({
  items: []
})
</script>

<template>
  <ClientOnly>
    <Swiper
      class="gallery-slider"
      :items-to-show="1"
      :loop="true"
      :wrapAround="true"
      @swiper="onSwiper"
    >
      <SwiperSlide 
        class="gallery-slider__item"
        v-for="item, index in props.items" 
        :key="`slide-${index}`"
      >
        <nuxt-link 
          class="gallery-slider__link" 
          :to=item.path
        >
          <img class="gallery-slider__image" :src="`/gallery/${item.images[0]}`"/>
          <h3 gallery-slider__link-arrow>
            <span class="gallery-slider__arrow">&#10140;</span>
            <span class="gallery-slider__title">{{ item.title }}</span>
          </h3>
        </nuxt-link>
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>

<style scoped lang="scss">
.gallery-slider {
  width: 100%;
  height: 100%;
  &__image {
    width: 50vw;
  }
}
</style>