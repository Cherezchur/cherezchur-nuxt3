<template>
	<div class="preview-title">
		<h1 class="preview-title__title">
			<span class="preview-title__title-first">Digital art gallery</span><br> by <span class="preview-title__name"> Cherezchur</span>
		</h1>
	</div>
</template>

<style lang="scss" scoped>
.preview-title {
	display: flex;
	flex-direction: column;
	align-items: center;

	&__title {
		width: fit-content;
		margin-top: 80px;

		text-transform: initial;
		font-family: $Besley;
		text-align: center;
		font-size: 2vw;
		line-height: 1.1;
		font-weight: 500;
		letter-spacing: -1px;
		color: $dark-purple ;
	}
	&__title-first {
		margin-bottom: 10px;
		display: inline-block;
	}
	&__name {
		font-family: $WildItalicFont;
		font-size: 3vw;
		text-transform: uppercase;
		color: $pa-gr_dark-pink ;

		display: inline-block;
		margin-left: 10px;
	}

	@include md-desktop {
		height: auto;

		&__title {
			margin-top: 40px;
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
	@include sm-tablets {
		&__title {
			font-size: 4vw;
		}
		&__name {
			font-family: $WildItalicFont;
			font-size: 6vw;
		}
	}
	@include ems-mobile {
		&__title {
			font-size: 18px;
		}
		&__name {
			font-family: $WildItalicFont;
			font-size: 24px;
		}
	}
}
</style>