<script setup>
import { useGallery } from '~/store/useGallery'

definePageMeta({
  middleware: ["gallerys-route-validation"]
})

const galleryStore = useGallery()
galleryStore.fetchGallery()

const route = useRoute()
const routeName = route.params.section

</script>

<template>
	<div></div>
	<section
		v-if="Object.keys(galleryStore.gallery).length > 0"
		:class='["gallery", galleryStore.gallery[routeName].design]'
	>
		<h2 class="gallery__title">{{ galleryStore.gallery[routeName].title }}</h2>

		<GallerySlider
			:data="galleryStore.gallery[routeName].arts"
		/>

	</section>
</template>

<style lang="scss" scoped>
.gallery {
	display: flex;
	align-items: center;
	justify-content: center;
  height: 100vh;

	@include background-gradient;

	&__title {
		position: fixed;
		top: 30px;

		display: flex;
		justify-content: center;
		width: 100%;

		text-transform: initial;
		font-family: $WildRegularFont;
		text-align: center;
		font-size: 2vw;
		color: $white;

		@include title-shadow;
	}
	&__list {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		margin: 0 auto;
	}
	&__item {
		display: flex;
		width: 100%;
	}
}
</style>