<script setup>
import { useGallery } from '~/store/useGallery'

definePageMeta({
  middleware: ["gallerys-route-validation"]
})

const galleryStore = useGallery()
galleryStore.fetchGallery()

const route = useRoute()
const routeName = route.params.section

const data = galleryStore.sectionData.data[routeName]

console.log(data)

// galleryStore.setSectionData(routeName)
// gallerySection.fetchGalleryOption(routeName)

</script>

<template>
  <transition name="gallery">
		<section :class='["gallery", galleryStore.sectionData.option]'>
			<h2 class="gallery__title">{{galleryStore.sectionData.title}}</h2>

			<Card
				v-for="cardData in galleryStore.sectionData.arts"
				:key="cardData.title"
				:cardData="cardData"
			/>

		</section>
  </transition>
</template>

<style lang="scss" scoped>
.gallery {
  height: 100%;

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

	&__title {
		position: fixed;
		top: 30px;

		display: flex;
		justify-content: center;
		width: 100%;

		color: white;
		text-align: center;
		font-size: 1.6rem;
		@include title-shadow;
	}
}
</style>