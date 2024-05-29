<script setup>
import {useGallery} from '~/store/useGallery';

const galleryStore = useGallery()
const route = useRoute()

const routeName = route.params.section

</script>

<template>
    <h1 :class="[$style.GalleryTitle]">{{ galleryStore.gallery[routeName].title }}</h1>
</template>

<style lang='scss' module>
.GalleryTitle {
    padding: 10px 0;
    text-align: center;
    background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
    border-radius: 20px;

    width: 100%;

    text-transform: initial;
    font-family: $WildItalicFont;
    font-weight: 500;
    font-size: 1.4vw;
    color: $white-light-translucent;
}
</style>
