<script setup>
const props = defineProps({
  title: String
})
</script>

<template>
  <h1 class='gallery-title'>{{ title }}</h1>
</template>

<style scoped lang="scss">
.gallery-title {
  position: fixed;
  top: 30px;

  display: flex;
  justify-content: center;
  width: 100%;

  color: white;
  text-align: center;
  font-size: 1.6rem;
  @include title-shadow;
}
</style>