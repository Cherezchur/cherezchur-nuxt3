<script setup>

import { Navigation, Pagination } from 'swiper';

const props = defineProps({
	data: {
		type: Array,
	}
})

let swipers = [];

const modules = [Navigation, Pagination]

const onSwiper = (swiper) => {
	swipers.push(swiper)
};

</script>

<template>
	<Swiper
		class="slider"
		:items-to-show="1"
		:loop="true"
		:wrapAround="true"
		:modules="modules"
		navigation
		:pagination="{ clickable: true }"
		@swiper="onSwiper"
	>
		<SwiperSlide
			:class="['slider__item', design]"
			v-for="{ design, imagePath } in data"
			:key="imagePath"
		>
			<img class="slider__image" :src="imagePath"/>
		</SwiperSlide>

<!--		<div ref="prev">prev</div>-->
	</Swiper>
</template>

<style lang="scss">
.slider {
	//cursor: url('/assets/image/icons/swaip-cursor-01.svg'), auto;
	margin: 0;

	.swiper-button-prev,
	.swiper-button-next {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: $dark-purple;
		opacity: 0.6;
		transition: opacity $time-transition, transform $time-transition;

		&:hover,
		&:focus {
			opacity: 0.8;
		}
		&:active {
			transform: scale(1.2);
		}

		&:after {
			content: "";
			position: absolute;
			left: 10px;
			width: 20px;
			height: 20px;

			border-radius: 5px;
			border-left: 7px solid $white;
			border-top: 7px solid $white;
		}
	}
	.swiper-button-prev {
		left: 20px;
		&:after {
			margin-left: 2px;
			transform: rotate(-45deg);
		}
	}
	.swiper-button-next {
		right: 20px;
		&:after {
			margin-left: -2px;
			transform: rotate(135deg);
		}
	}
	.swiper-pagination {
		display: flex;
		justify-content: flex-end;
		padding-right: 20px;
		bottom: 20px;

		transition: opacity $time-transition, background $time-transition;
	}
	.swiper-pagination-bullet-active {
		background: $il-des_light-blue;
	}
	&__item {
		&:after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;

			opacity: 0.3;
		}

		&.ilDes {
			&:after {
				background-color: $il-des_dark-blue;
			}
		}
		&.paGr {
			&:after {
				background-color: $pa-gr_dark-pink;
			}
		}
		&.taSk {
			&:after {
				background-color: $ta-sk-le_dark-brown;
			}
		}
	}
	&__image {
		height: 100%;
		width: 100%;
		object-fit: cover;
		position: relative;
	}
	&__viewport {
		display: flex;
		height: 100%;
	}
}
</style>