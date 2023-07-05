<script setup>

import { EffectCoverflow, Navigation, Pagination } from 'swiper';

const props = defineProps({
	data: {
		type: Object,
	},
	design: {
		type: String,
	}
})

let swipers = [];
const modules = [EffectCoverflow, Navigation, Pagination]
const onSwiper = (swiper) => {
	swipers.push(swiper)
};

let sliderWidth = ref('50vw')

if (process.client) {
	sliderWidth = ( window.innerHeight * .8 ) + 'px'

	// if ( window.innerWidth < 769 ) {
	// 	sliderHeight = window.innerWidth + 'px'
	// }
}

</script>

<template>
	<Swiper
		ref="gallerySlider"
		class="gallery-slider"
		:effect="'coverflow'"
		:loop="false"
		:centeredSlides="true"
		:slidesPerView="'1'"
		:coverflowEffect="{
			rotate: 0,
			stretch: 0,
			depth: 100,
			modifier: 2.5,
		}"
		:modules="modules"
		:pagination="{
			el: '.gallery-slider__pagination',
			clickable: true
		}"
		:navigation="{
			prevEl: '.gallery-slider__arrow-prev',
			nextEl: '.gallery-slider__arrow-next'
		}"
		@swiper="onSwiper"
	>
		<SwiperSlide
			:class="['gallery-slider__slide', design]"
			v-for="slide in data"
			:key="slide.title"
		>
			<NuxtLink
				class="gallery-slider__link"
				:to="slide.path"
			>
				<h3 class="gallery-slider__title">{{slide.title}}</h3>
				<img class="gallery-slider__image" :src="slide.imagesPaths[0]"/>
			</NuxtLink>
		</SwiperSlide>

	</Swiper>

	<div class="gallery-slider__arrows">
		<button class="gallery-slider__arrow-prev" type="button"></button>
		<button class="gallery-slider__arrow-next" type="button"></button>
	</div>

	<div class="gallery-slider__pagination"></div>
</template>

<style lang="scss">
.gallery-slider {
	margin: 0 auto;
	height: 80vh;
	width: v-bind(sliderWidth);
	overflow: visible;

	&__slide {
		position: relative;

		padding: 1vw 1vw 3vw 1vw;
		border-radius: 20px;

		&.ilDes {
			background: $il-des_light-blue;
			box-shadow: 0 0 15px $il-des_dark-blue;
		}
		&.paGr {
			background: $pa-gr_light-pink;
		}
		&.taSk {
			background: $ta-sk-le_light-brown;
		}
		&.likes {
			background: $accent-pink;
		}

		.swiper-slide-shadow-left,
		.swiper-slide-shadow-right{
			border-radius: 20px;
		}
	}
	&__link {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	&__title {
		position: absolute;
		z-index: 1;
		bottom: 10px;
		left: 20px;

		border-radius: 20px;

		font-family: $WildItalicFont;
		font-size: 1vw;
		color: $white;
		@include title-shadow;
	}
	&__image {
		height: 100%;
		width: 100%;
		object-fit: cover;
		position: relative;

		border-radius: 20px;
	}

	&__arrow-prev,
	&__arrow-next {
		position: fixed;
		top: calc(50% - 20px);
		z-index: 1;
		width: 40px;
		height: 40px;
		background-repeat: no-repeat;
		background-size: contain;
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
			display: none;
		}
	}
	&__arrow-prev {
		left: 20px;
		background-position: left;
		background-image: url(assets/image/icons/arrow-prev.svg);
	}
	&__arrow-next {
		right: 20px;
		background-position: right;
		background-image: url(assets/image/icons/arrow-next.svg);
	}

	&__pagination {
		position: fixed;
		left: 4vw !important;
		bottom: 20px !important;
		width: fit-content !important;

		transition: opacity $time-transition, background $time-transition;

		.swiper-pagination-bullet {
			background: $white-light-translucent !important;
		}
		.swiper-pagination-bullet-active {
			background: $white !important;
		}
	}

	@include lg-desktop {
		.swiper-button-prev,
		.swiper-button-next {
			width: 30px;
			height: 30px;
		}
		.swiper-button-prev {
			left: 10px;
			&:after {
				margin-left: 2px;
				transform: rotate(-45deg);
			}
		}
		.swiper-button-next {
			right: 10px;
			&:after {
				margin-left: -2px;
				transform: rotate(135deg);
			}
		}
	}
	@include md-desktop {
		.swiper-button-prev,
		.swiper-button-next {
			width: 25px;
			height: 25px;
		}
		.swiper-pagination {
			padding-right: 10px;
			bottom: 10px;
		}
		.swiper-pagination-bullet {
			width: 6px;
			height: 6px;
		}
		.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
			margin: 2px;
		}
	}
	@include sm-tablets {
		.swiper-button-prev,
		.swiper-button-next {
			width: 20px;
			height: 20px;
		}
		.swiper-pagination-bullet {
			width: 5px;
			height: 5px;
		}
	}
}
</style>