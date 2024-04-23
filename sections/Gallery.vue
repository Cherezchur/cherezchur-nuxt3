<script setup>
import { useGallery } from '~/store/useGallery'

definePageMeta({
	middleware: ["gallerys-route-validation"]
})

const galleryStore = useGallery()
galleryStore.fetchGallery()

const route = useRoute()
const routeName = route.params.section
const getArt = (path) => {

}

</script>

<template>
	<section
		v-if="Object.keys(galleryStore.gallery).length > 0"
		:class='["gallery", galleryStore.gallery[routeName].design]'
	>
		<h2 class="gallery__title">{{ galleryStore.gallery[routeName].title }}</h2>

		<div class="gallery__wrapper">
			<div class="gallery__list">
				<div
					class="gallery__item"
					v-for="slide in galleryStore.gallery[routeName].arts"
					@click="getArt(slide.path)"
				>
					<figure>
						<img class="gallery__image" :src="slide.imagesPaths[0]"/>
						<h3 class="gallery__item-title">{{slide.title}}</h3>
						<Likes/>
					</figure>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>

.gallery {
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;

	padding: 10px;
	border-radius: 40px;

	&__title {
		padding: 30px 0;
		text-align: center;
    background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
		border-radius: 20px;

		width: 100%;

		text-transform: initial;
		font-family: $WildItalicFont;
		font-weight: 500;
		font-size: 1.4vw;
		color: $accent-pink;
	}
	&__wrapper {
		padding: 50px 150px 130px 150px;
		margin-top: 10px;
		width: 100%;
		background-color: $white;
		border-radius: 20px;
	}
	&__list {
		columns: 2;
		column-gap: 60px;
		margin: 0 auto;
	}
	&__item {
		margin-bottom: 75px;
	}
	&__item-title {
		font-family: $Besley;
		font-size: 16px;
		font-weight: 500;
		line-height: 30px;
		text-align: center;
		margin-top: 10px;
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

	.likes {
		width: 25px;
		height: 32px;
		margin: 10px auto 0 auto;
	}
}
</style>