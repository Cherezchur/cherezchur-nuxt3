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
		font-family: 'Besley', serif;
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
}
</style>