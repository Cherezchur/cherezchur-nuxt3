<script setup>

</script>

<template>
	<header :class="[$style.Header]">
        <div :class="[$style.HeaderWrapper, 'container']">
            <Logo />
            <GalleryTitle />
            <Menu />
        </div>
	</header>
</template>

<style lang='scss' module>

.Header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    background-color: $accent-pink;

    @include gradients;

	@include sm-tablets {
		padding: 20px;
	}
}

.HeaderWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    width: 100%;
    padding: 15px 0;
}
</style>
