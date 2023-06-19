<script setup>
import { useGalleryParams } from '~/store/useGalleryParams'
import { useGalleryCarousel } from '~/store/useGalleryCarousel'

definePageMeta({
  middleware: ["gallerys-route-validation"]
})

const paramsStore = useGalleryParams()
const paramsCarousel = useGalleryCarousel()

const route = useRoute()
const routeName = route.params.name

paramsStore.fetchPageParams(routeName)

paramsCarousel.fetchCarouselItems(routeName)

</script>

<template>
  <transition name="gallery">
		<section :class='["gallery", paramsStore.pageParams.option]'>
			{{ paramsStore.pageParams }}

			<GalleryTitle :title="paramsStore.pageParams.title"></GalleryTitle>

			<GalleryList :items="paramsCarousel.carouselItems"></GalleryList>

		</section>
  </transition>
</template>

<style lang="scss" scoped>
.gallery {
  height: 100%;

  &__title {
    
  }
  &.ilDes {
    background: linear-gradient(45deg, $il-des_dark-blue 0%, $il-des_light-blue  100%);  
  }
  &.paGr {
    background: linear-gradient(45deg, $pa-gr_dark-pink 0%, $pa-gr_light-pink  100%); 
  }
  &.taSk {
    background: linear-gradient(45deg, $ta-sk-le_dark-brown 0%, $ta-sk-le_light-brown 100%); 
  }
  &.likes {
    background: linear-gradient(45deg, $contur-dark-purple 0%, $accent-pink 100%); 
  }
}
</style>