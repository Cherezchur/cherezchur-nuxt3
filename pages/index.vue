<script setup>

import {useSections} from "../store/useSections";
const storeSections = useSections()

const { data } = await useFetch('/sections');

console.log(data)
</script>

<template>

	<section class="sections">
		<Card
			v-for="cardData in data.sections"
			:key="cardData.title"
			:cardData="cardData"
		/>
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