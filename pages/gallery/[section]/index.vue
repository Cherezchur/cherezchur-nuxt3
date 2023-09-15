<script setup>
import { useGallery } from '~/store/useGallery'
import Gallery from "../../../sections/Gallery";

definePageMeta({
  middleware: ["gallerys-route-validation"]
})

const galleryStore = useGallery()
galleryStore.fetchGallery()

const route = useRoute()
const routeName = route.params.section

</script>

<template>
	<div class="gallery-page">
		<Gallery/>
	</div>
</template>

<style lang="scss" scoped>
.gallery-page {
	background-color: $dark-purple;
}
</style>