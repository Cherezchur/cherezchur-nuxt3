<script setup>
import {useModal} from "~/store/modal";
const modalStore = useModal()

</script>

<template>
	<Header/>

  <main class="gradient">
    <slot />
  </main>

  <Modal v-show="modalStore.isShowModal"/>
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