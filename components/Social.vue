<script setup>

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
	<ul class="social">
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
	position: absolute;
	bottom: 20px;
	left: 20px;
	z-index: 1;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 5px;

	&__link {
		position: relative;
		display: flex;
		transition: background-image $time-transition;

		width: 30px;
		height: 30px;
		background-repeat: no-repeat;
		background-size: cover;

		&:after {
			content: "";
			position: absolute;
			z-index: -1;
			top: 1px;
			left: 1px;
			width: calc(100% - 2px);
			height: calc(100% - 2px);
			background-color: $white;
			border-radius: 50%;
		}

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
}
</style>