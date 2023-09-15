<script setup>

const props = defineProps({
	mod: {
		type: String,
		default: ''
	}
})

const socials = ref([
	{
		className: "insta",
		name: "Инстаграм",
		link: "https://www.instagram.com/cheeerezchur/"
	},
	{
		className: "vk",
		name: "Вконтакте",
		link: "https://vk.com/cheeercheeer"
	},
	{
		className: "tumbler",
		name: "Тамблер",
		link: "https://www.tumblr.com/cherezchur"
	},
	{
		className: "tg",
		name: "Телеграмм",
		link: "https://t.me/Andrey4464"
	},
])

</script>

<template>
	<ul :class="['social', props.mod]">
		<li
			v-for="social in socials"
			class="social__item"
		>
			<NuxtLink
				target="_blank"
				:to="social.link"
				:class="['social__link', social.className]"
			>
				<span class="social__title">{{ social.name }}</span>
			</NuxtLink>
		</li>
	</ul>
</template>

<style lang="scss">
.social {
	max-width: 165px;
	z-index: 1;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 5px;
	margin: 0 auto;
	margin-top: 40px;

	&-footer {
		.social__link {
			margin-bottom: 80px;
			&.insta {
				background-image: url("assets/image/icons/insta-hide-footer.svg");
			}
			&.vk {
				background-image: url("assets/image/icons/vk-hide-footer.svg");
			}
			&.tumbler {
				background-image: url("assets/image/icons/tblr-hide-footer.svg");
			}
			&.tg {
				background-image: url("assets/image/icons/tg-hide-footer.svg");
			}
		}
	}

	&__link {
		position: relative;
		display: flex;
		transition: background-image $time-transition;

		width: 30px;
		height: 30px;
		background-repeat: no-repeat;
		background-size: cover;

		&.insta {
			background-image: url("assets/image/icons/insta-hide.svg");

			&:hover {
				background-image: url("assets/image/icons/insta-active.svg");
			}
		}
		&.vk {
			background-image: url("assets/image/icons/vk-hide.svg");

			&:hover {
				background-image: url("assets/image/icons/vk-active.svg");
			}
		}
		&.tumbler {
			background-image: url("assets/image/icons/tblr-hide.svg");

			&:hover {
				background-image: url("assets/image/icons/tblr-active.svg");
			}
		}
		&.tg {
			background-image: url("assets/image/icons/tg-hide.svg");

			&:hover {
				background-image: url("assets/image/icons/tg-active.svg");
			}
		}
	}
	&__title {
		@include visually-hidden
	}

	@include md-desktop {
		bottom: 10px;
		left: 10px;

		margin-top: 20px;

		&__link {
			width: 20px;
			height: 20px;
		}
	}
	@include sm-mobile {
		left: auto;
		right: 10px;
		bottom: 20px;
		gap: 10px;
	}
}
</style>