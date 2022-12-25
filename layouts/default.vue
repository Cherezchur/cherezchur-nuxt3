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

<script setup>
let isShowModal = ref(false);
let linkId = ref('');

const modalShowToogle = (option) => {
  linkId.value = option;
  isShowModal.value = !isShowModal.value;
}

</script>

<style lang='scss' scoped>
.layout {
  &_container {
    background-color: rgba($color: black, $alpha: 0.4);
  }

  &_header {
    z-index: 5;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    padding: 0 20px;

    @include sm-tablets {
     padding: 0 10px;
    }
  }
}
</style>