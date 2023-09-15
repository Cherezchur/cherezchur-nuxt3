<script/>

<template>
	<footer class="footer">
		<PreviewTitle/>
		<social mod="social-footer"/>
	</footer>
</template>

<style lang="scss">
.footer {
	background-color: $dark-purple;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-bottom: 80px;

	& .preview-title__title {
		color: $accent-pink;
	}
}
</style>
