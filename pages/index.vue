<script setup>
import { useGallery } from '~/store/useGallery'

const galleryStore = useGallery()
galleryStore.fetchSections()
galleryStore.fetchSlider()

let sliderWidth = ref('50vw')
let sliderHeight = ref('100vh')

if (process.client) {
	sliderWidth = window.innerHeight + 'px'

	if ( window.innerWidth < 769 ) {
		sliderHeight = window.innerWidth + 'px'
	}
}

</script>

<template>
	<section class="preview">

		<Slider
			:data="galleryStore.slider"
		/>

		<GalleryNavigate :sections="galleryStore.sections"/>

		<Social />

	</section>
</template>


<style lang='scss'>
.preview {
	position: relative;
	max-height: 100vh;
	display: flex;
	flex-direction: row;

	.slider {
		width: v-bind(sliderWidth);
	}

	@include sm-mobile {
		height: 100vh;
		flex-direction: column;

		.slider {
			width: 100%;
			height: v-bind(sliderHeight);
		}
	}
}
</style>