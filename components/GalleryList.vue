<script setup>

const props = defineProps({
  items: Array
})

const gallerysItems = props.items

</script>

<template>
  <ClientOnly>
    <ul class="gallery-list">
      <li 
        class="gallery-list__item" 
        v-for="item in gallerysItems" 
        :key="item.path"
      >
        <NuxtLink 
          class="gallery-list__link"
          :to="item.path"
        >
          <img :src="item.images[0]" class="gallery-list__image">
        </NuxtLink>
        <div class="gallery-list__content">
          <h3 class="gallery-list__title">{{ item.title }}</h3>
          <span>like</span>
        </div>
        <p class="gallery-list__description"></p>
      </li>
    </ul>
  </ClientOnly>
</template>

<style scoped lang="scss">
.gallery-list {
  width: 80vw;
  margin: 0 auto;
  padding-top: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

</style>