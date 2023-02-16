<script setup>
import { useGalleryParams } from '~/store/useGalleryParams'

const store = useGalleryParams()

store.fetchGalleryParams('illustration-and-design')

</script>

<template>
  <section class='main-gallery'>
    <h1 class='main-gallery__title'>Gallery Sections</h1>
    <ClientOnly>
      <div class="main-gallery__links">
        {{ store.params }}
        <a href="#" class="main-gallery__item">Link 1</a>
        <a href="#" class="main-gallery__item">Link 2</a>
        <a href="#" class="main-gallery__item">Link 3</a>
        <a href="#" class="main-gallery__item">Link 4</a>
      </div>
    </ClientOnly>
  </section>
</template>

<style lang="scss" scoped>

.main-gallery {

  &__title {
    @include visually-hidden;
  }
  &__links {
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &__item {
    width: 25%;
    text-align: center;
    background-color: #f2f2f2;
    padding: 1rem;
    text-decoration: none;
    color: #333;
    font-size: 1.2rem;
    border: 1px solid #ccc;
  }
}
</style>