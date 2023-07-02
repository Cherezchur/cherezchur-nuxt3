<script setup>
import { useGallery } from '~/store/useGallery'

const galleryStore = useGallery()
const route = useRoute()

galleryStore.fetchArt(route.params)

</script>

<template>
	<div>
		<h1>{{galleryStore.art.title}}</h1>
	</div>
</template>

<style lang="scss" scoped>
</style>