<template>
  <section class='main-gallery'>
    <h1>Gallery Sections</h1>
    <div class="main-gallery__links">
      <a href="#" class="main-gallery__item">Link 1</a>
      <a href="#" class="main-gallery__item">Link 2</a>
      <a href="#" class="main-gallery__item">Link 3</a>
      <a href="#" class="main-gallery__item">Link 4</a>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>

.main-gallery {

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