<script setup>
import {computed} from "vue";

const route = useRoute()
let headerModification = ref('')

const getGalleryModification = computed(() => {
	if ( route.name === 'gallery-section' ) return headerModification = 'gallery-page'
	else if ( route.name === 'index' ) return headerModification = 'main-page'
})

</script>

<template>
	<header :class="['header', getGalleryModification]">
		<Logo v-if="getGalleryModification !== 'main-page'"/>
		<Menu />
	</header>
</template>

<style lang='scss' scoped>

.header {
	z-index: 10;
	display: flex;
	justify-content: space-between;
	position: fixed;
	width: 100%;
	height: 0;
	padding: 30px;

	&.gallery-page {
		padding: 20px;
	}

	@include sm-tablets {
		padding: 20px;
	}

}
</style>