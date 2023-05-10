<script setup>
let isShowModal = ref(false);
let linkId = ref('');

const modalShowToogle = (option) => {
  linkId.value = option;
  isShowModal.value = !isShowModal.value;
}

</script>

<template>
  <header class='header'>
    <Logo />
    <Menu :modalShow="modalShowToogle" />
  </header>

  <main class="gradient">
    <slot />
  </main>

  <Modal
    v-show="isShowModal"
    :show="isShowModal"
    :modalOption="linkId"
    :closeModal="modalShowToogle"
  />
</template>

<style lang='scss' scoped>

.header {
  z-index: 10;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 0;
  padding: 0 20px;
}

@include sm-tablets {
  ._header {
    padding: 0 15px;
  }
}
</style>