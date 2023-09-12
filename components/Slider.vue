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
	border-radius: 40px;
	margin: 0;

	.swiper-button-prev,
	.swiper-button-next {
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

	.swiper-button-prev {
		left: 20px;
		background-position: left;
		background-image: url(assets/image/icons/arrow-prev.svg);
	}

	.swiper-button-next {
		right: 20px;
		background-position: right;
		background-image: url(assets/image/icons/arrow-next.svg);
	}

	.swiper-pagination {
		display: flex;
		justify-content: center;
		padding-right: 20px;
		bottom: 20px;

		transition: opacity $time-transition, background $time-transition;
	}

	.swiper-pagination-bullet {
		background: $white-light-translucent;
	}

	.swiper-pagination-bullet-active {
		background: $white;
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
		border-radius: 20px;

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