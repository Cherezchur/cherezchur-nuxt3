<script setup>

const props = defineProps({
  items: Array
})

const gallerysItems = props.items

</script>

<template>
  {{ gallerysItems }}
  <div>
    <img />
  </div>
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