<script setup>
let isShowModal = ref(false);
let linkId = ref('');

const modalShowToogle = (option) => {
  linkId.value = option;
  isShowModal.value = !isShowModal.value;
}

</script>

<template>
  <div class='layout_container'>
    <header class='layout_header'>
      <Logo />
      <Menu :modalShow="modalShowToogle" />
    </header>
    <slot />
    <Modal
       v-show="isShowModal"
       :show="isShowModal"
       :modalOption="linkId"
       :closeModal="modalShowToogle"
    />
  </div>
</template>

<style lang='scss' scoped>
.layout {
  &_container {
    background-color: rgba($color: black, $alpha: 0.4);
  }

  &_header {
    z-index: 10;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    height: 0;
    padding: 0 20px;
  }
}

@include sm-tablets {
  .layout {
    &_header {
      padding: 0 15px;
    }
  }
}
</style>