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

	if ( window.innerWidth < 768 ) {
		sliderHeight = sliderWidth + 'px'
	}
}

</script>

<template>
	<section class="preview">

		<Slider
			:data="galleryStore.slider"
		/>

		<div class="preview__navigate">
			<PreviewTitle/>
			<Social/>
			<Likes/>
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

	@include sm-tablets {
		max-height: 100%;
		height: 100%;
		flex-direction: column;

		.slider {
			width: 100%;
			height: calc( 100vh - 20px );
		}
		&__navigate {
			border-radius: 20px;
			width: 100%;
			height: calc( 100vh - 20px );
		}
	}
	@include sm-mobile {
		flex-direction: column;

		.slider {
			width: 100%;
			height: v-bind(sliderHeight);
		}
	}
}
</style>