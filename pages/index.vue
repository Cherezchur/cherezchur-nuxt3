<script setup>
import { useGallery } from '~/store/useGallery'

const galleryStore = useGallery()
galleryStore.fetchSections()
galleryStore.fetchSlider()

let sliderWidth = ref('50vw')
let navigateWidth = ref('50vw')
let sliderHeight = ref('100vh')

if (process.client) {
	sliderWidth = window.innerHeight + 'px'
	navigateWidth = ( window.innerWidth - window.innerHeight ) + 'px'

	if ( window.innerWidth < 769 ) {
		sliderHeight = window.innerWidth + 'px'
	}
}

console.log(sliderWidth, navigateWidth)


</script>

<template>
	<section class="preview">

		<Slider
			:data="galleryStore.slider"
		/>

		<div class="preview__navigate">
			<PreviewTitle />
			<Social/>
			<GalleryNavigate :sections="galleryStore.sections"/>
		</div>

	</section>
</template>


<style lang='scss'>
.preview {
	position: relative;
	max-height: 100vh;
	height: 100vh;
	display: flex;
	flex-direction: row;
	gap: 10px;
	padding: 10px;
	background-color: $dark-purple;

	.slider {
		width: v-bind(sliderHeight);
	}

	&__navigate {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex-shrink: 1;
		width: v-bind(navigateWidth);
		border-radius: 40px;
		background-color: $grey;
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