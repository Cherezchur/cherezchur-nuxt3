<template>
	<div class="likes">
		<nuxt-link class="likes__link" to="/likes">
			<span class="visually-hidden">Понравившиеся работы</span>
		</nuxt-link>
	</div>
</template>

<style lang="scss" scoped>
.likes {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-grow: 1;

	&__link {
		display: inline-block;
		width: 30px;
		height: 38px;

		background-image: url("assets/image/icons/heart-disabled.svg");
		background-repeat: no-repeat;
		background-size: cover;

		transition: background-image $time-transition;

		&:hover {
			background-image: url("assets/image/icons/heart-active.png");
		}
	}
	span {
		@include visually-hidden()
	}

	@include md-desktop {
	}
}
</style>