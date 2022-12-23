<template>
  <div class="carousel-item">
    <img :src="slide"/>
  </div>
</template>

<script setup>
const props = defaultProps({
  slide: {
    type: String,
    default: ''
  }
})
</script>