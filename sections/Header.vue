<script setup>
</script>

<template>
	<header class='header'>
		<Logo />
		<Menu />
	</header>
</template>

<style lang='scss' scoped>

.header {
	z-index: 10;
	display: flex;
	justify-content: space-between;
	position: fixed;
	width: 100%;
	height: 0;
	padding: 0 20px;
}

@include sm-tablets {
	._header {
		padding: 0 15px;
	}
}
</style>