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

		<div class="gallery__list">
			<div class="gallery__item" v-for="slide in galleryStore.gallery[routeName].arts">
				<figure>
					<nuxt-link class="gallery__link" :to="slide.path">
						<img class="gallery__image" :src="slide.imagesPaths[0]"/>
						<h3 class="gallery__item-title">{{slide.title}}</h3>
					</nuxt-link>
				</figure>
			</div>
		</div>

	</section>
</template>

<style lang="scss" scoped>
.header {
	padding: 20px;
}
.gallery {
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;

	&__title {
		position: sticky;
		top: 0;
		padding: 30px 0 40px 0;
		text-align: center;
		background-color: $white;

		width: 100%;

		text-transform: initial;
		font-family: $Besley;
		font-size: 1.4vw;
		color: $dark-purple;
	}
	&__list {
		columns: 2;
		column-gap: 30px;
		width: 1440px;
	}
	&__item {
		margin-bottom: 60px;
	}
	&__link {
		display: flex;
		flex-direction: column;
	}
	&__image {
		width: 100%;
		border-radius: 20px;
		object-fit: cover;
	}
}
</style>