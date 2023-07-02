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
		</ul>
	</nav>
</template>

<style lang="scss">
.gallery-navigate {
	height: 100vh;
	flex-grow: 1;

	&__list {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 100%;
	}
	&__card {
		position: relative;

		height: 100%;
		width: 100%;

		background-repeat: no-repeat;
		background-size: cover;

		&.ilDes {
			background-image: url('assets/image/design/ilDes.svg');
		}
		&.paGr {
			background-image: url('assets/image/design/paGr.svg');
		}
		&.taSk {
			background-image: url('assets/image/design/taSk.svg');
		}
	}
	&__link {
		display: flex;
		align-items: flex-end;
		height: 100%;
		padding: 20px 30px;

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
		font-size: 2vw;
		line-height: 1.2;
		color: $white;

		@include title-shadow
	}
	&__arrow {
		flex-grow: 1;
		opacity: 0;
		transform: translateX(-20%);

		transition: transform $time-transition, opacity $time-transition;
	}

	@include md-desktop {
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
	@include sm-mobile {
		height: auto;

		&__title,
		.gallery-navigate__arrow {
			font-size: 16px;
		}
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