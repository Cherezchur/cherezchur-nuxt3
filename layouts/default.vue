<script setup>
import {useModal} from "~/store/modal";
const modalStore = useModal()

</script>

<template>
	<Header/>

  <main>
    <slot />
  </main>

  <Modal v-show="modalStore.isShowModal"/>
</template>

<style lang='scss' scoped>
//
</style>