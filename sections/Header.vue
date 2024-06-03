<script setup>
import { useGallery } from '~/store/useGallery';

const galleryStore = useGallery()
const route = useRoute()

const routeName = route.params.section
const galleryData = galleryStore.gallery[routeName]

</script>

<template>
	<header :class="$style.Header">
        <div :class="[$style.HeaderWrapper, 'container']">
            <Logo />

            <span v-if="!galleryData">
                loading ...
            </span>

            <Transition
                :enter-active-class="$style.transitionStart"
                :leave-active-class="$style.transitionStart"
                :enter-from-class="$style.transitionEnd"
                :leave-to-class="$style.transitionEnd"
            >
                <nav v-if="galleryData" :class="$style.Navigation">
                    <h1 :class="$style.PageTitle">{{ galleryData ? galleryData.title : 'default' }}</h1>
                    <Menu />
                </nav>
            </Transition>
        </div>
	</header>
</template>

<style lang='scss' module>
.transitionStart {
    transition: all .4s;
}
.transitionEnd {
    transform: translateX(-5px);
    opacity: 0;
}
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

.Navigation {
    display: flex;
    text-align: center;
    background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
    border-radius: 20px;
    width: 100%;
}

.PageTitle {
    text-transform: initial;
    font-family: $WildItalicFont;
    font-weight: 500;
    font-size: 1.4vw;
    color: $white-light-translucent;
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
