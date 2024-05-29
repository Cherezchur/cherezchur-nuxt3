<script setup>
const props = defineProps({
	sections: {
		type: Array,
		default: []
	}
})
</script>

<template>
	<nav class="gallery-navigate">
		<ul class="gallery-navigate__list">
			<li
				:class="['gallery-navigate__card', cardData.design ]"
				v-for="cardData in sections"
				:key="cardData.title"
			>
				<NuxtLink
					class="gallery-navigate__link"
					:to="cardData.path"
				>
					<h3 class="gallery-navigate__title">{{ cardData.title }}</h3>
					<span class="gallery-navigate__arrow">➜</span>
				</NuxtLink>
			</li>
			<li class="gallery-navigate__card about">
				<NuxtLink
					class="gallery-navigate__link"
					to="/about"
				>
					<h3 class="gallery-navigate__title">О проекте</h3>
					<span class="gallery-navigate__arrow">➜</span>
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss">
.gallery-navigate {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	max-height: 40%;
	padding: 0 3% 3% 3%;

	&__list {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
		height: 100%;
	}
	&__card {
		position: relative;

		height: 100%;
		width: 100%;

		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 10px;

		@include gradients;

		&.about {
			border-bottom-left-radius: 30px;
			border-bottom-right-radius: 30px;

			background-image: url('assets/image/icons/logo-eye-blue-background.svg');
			background-position: 118% 61%;
			background-size: 33%;
			background-color: $il-des_light-blue ;
		}
	}
	&__link {
		display: flex;
		align-items: center;
		padding-left: 3%;
		height: 100%;

		&:hover {
			.gallery-navigate__arrow {
				opacity: 1;
				margin-left: 1vw;
				transform: translateX(0%);
			}
		}
	}
	&__title,
	.gallery-navigate__arrow {
		width: fit-content;

		text-transform: initial;
		font-family: $WildItalicFont;
		text-align: start;
		font-size: 1.2vw;
		line-height: 1.2;
		color: $white;
	}
	&__arrow {
		flex-grow: 1;
		opacity: 0;
		transform: translateX(-20%);

		transition: transform $time-transition, opacity $time-transition;
	}

	@include md-desktop {
		max-height: 35%;
		height: 320px;
		padding: 0 2% 2% 2%;

		//&__card {
		//	border-radius: 15px;
		//}
		&__link {
			&:hover {
				.gallery-navigate__arrow {
					opacity: 1;
					margin-left: 0;
					transform: translateX(20%);
				}
			}
		}
	}
	@include sm-tablets {
		&__title,
		.gallery-navigate__arrow {
			font-size: 16px;
		}

		&__card {
			border-radius: 10px;

			&.about {
				border-bottom-left-radius: 20px;
				border-bottom-right-radius: 20px;

				background-image: url('assets/image/icons/logo-eye-blue-background.svg');
				background-position: 118% 61%;
				background-size: 33%;
				background-color: $il-des_light-blue ;
			}
		}
		&__arrow {
			display: none;
		}
	}
	@include sm-mobile {

		&__link {

			&:hover {
				.gallery-navigate__arrow {
					opacity: 1;
					margin-left: 0;
					transform: translateX(10%);
				}
			}
		}
	}
}
</style>
