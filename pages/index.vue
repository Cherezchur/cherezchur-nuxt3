<script setup>
import { useGallery } from '~/store/useGallery'

const galleryStore = useGallery()
galleryStore.fetchGallery()

</script>

<template>
	<section class="sections">
<!--		<Card-->
<!--			v-for="cardData in galleryStore.galleryData.slides"-->
<!--			:key="cardData.title"-->
<!--			:cardData="cardData"-->
<!--		/>-->
	</section>

</template>


<style lang='scss'>
.sections {
	margin: 0 auto;
	height: 100vh;
	width: 80vw;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 40px;
}


@include sm-mobile {
	.sections {
		&__slider {
			height: 100vh;
			grid-template-columns:  1fr;
			grid-template-rows:  repeat( 3, 1fr);
		}
	}
}
</style>