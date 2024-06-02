<script setup>
import {useGallery} from '~/store/useGallery';
import {isPage} from '~/helpers/utils';

const galleryStore = useGallery()
const route = useRoute()

const routeName = ref(route.params.section)

isPage('gallery-section')

// const title = galleryStore.gallery[routeName].title

</script>

<template>
<!--    <h1 :class="[$style.PageTitle]">{{ title }}</h1>-->
</template>

<style lang='scss' module>
.PageTitle {
    text-transform: initial;
    font-family: $WildItalicFont;
    font-weight: 500;
    font-size: 1.4vw;
    color: $white-light-translucent;
}
</style>
