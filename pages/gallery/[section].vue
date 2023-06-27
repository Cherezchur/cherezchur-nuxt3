<script setup>
import { useGallery } from '~/store/useGallery'

definePageMeta({
  middleware: ["gallerys-route-validation"]
})

const galleryStore = useGallery()
galleryStore.fetchGallery()

const route = useRoute()
const routeName = route.params.section

const data = galleryStore.gallery[routeName]
//
// console.log(routeName, data)

</script>

<template>
	<div></div>
	<section
		v-if="Object.keys(galleryStore.gallery).length > 0"
		:class='["gallery", galleryStore.gallery[routeName].design]'
	>
		<h2 class="gallery__title">{{ galleryStore.gallery[routeName].title }}</h2>

		<ul class="gallery__list">
			<li
				class="gallery__item"
				v-for="cardData in galleryStore.gallery[routeName].arts"
			>
				<div>
					{{cardData}}
				</div>
			</li>
		</ul>
	</section>
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