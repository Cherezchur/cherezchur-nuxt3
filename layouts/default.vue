<template>
  <div class='layout_container'>
    <header class='layout_header'>
      <logo />
<!--      <Menu :modalShow="modalShowToogle"></Menu>-->
    </header>
      <slot />
<!--    <Modal-->
<!--        v-show="isShowModal"-->
<!--        :show="isShowModal"-->
<!--        :modalOption="linkId"-->
<!--        :closeModal="modalShowToogle"-->
<!--    />-->
  </div>
</template>

<script setup>

</script>

<style lang='scss' scoped>
.layout {
  &_container {
    background-color: rgba($color: black, $alpha: 0.4);
  }

  &_header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    padding: 0 20px;

    //@include sm-tablets {
    //  padding: 0 10px;
    //}
  }
}
</style>