<script setup>
import { useGallery } from '~/store/useGallery'

const galleryStore = useGallery()
galleryStore.fetchSections()

</script>

<template>
  <section class='gallery-nav'>
    <h1 class='gallery-nav__title'>Gallery Sections</h1>

		<GalleryNavigate :sections="galleryStore.sections"/>

  </section>
</template>

<style lang="scss" scoped>

.gallery-nav {

  &__title {
    @include visually-hidden;
  }
  &__links {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
  }
  &__item {
    width: 100%;
    height: 25%;
    display: flex;
    flex-grow: 1;
    text-align: start;
    padding: 1rem;
    padding-left: 20px;

    color: $white;
    font-size: 1.2rem;

    transition: $time-transition;

    &-title {
      margin-top: auto;
      margin-right: 20px;
      text-shadow: -1px -1px 2px $dark-purple;
    }
    &-arrow {
      margin-top: auto;
      margin-left: 50%;
      flex-grow: 1;
      opacity: 0;
      transform: rotate(180deg);
      text-align: end;

      @include title-shadow;
      
      transition: $accent-time-transition;
    }

    &:hover {
      height:40%;

      & .gallery-nav__item-arrow {
        opacity: 1;
        margin-left: 0;
      }
    }

    &.ilDes {
      background: linear-gradient(45deg, $il-des_dark-blue 0%, $il-des_light-blue  100%);  
    }
    &.paGr {
      background: linear-gradient(45deg, $pa-gr_dark-pink 0%, $pa-gr_light-pink  100%); 
    }
    &.taSk {
      background: linear-gradient(45deg, $ta-sk-le_dark-brown 0%, $ta-sk-le_light-brown 100%); 
    }
    &.likes {
      background: linear-gradient(45deg, $dark-purple 0%, $accent-pink 100%);
    }
  }
}
</style>