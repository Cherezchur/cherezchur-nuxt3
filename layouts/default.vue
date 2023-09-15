<script setup>
import {useModal} from "~/store/modal";
const modalStore = useModal()

const route = useRoute()

</script>

<template>
	<Header/>

  <main>
    <slot />
  </main>

	<Footer v-if="route.name !== 'index'"/>

  <Modal v-show="modalStore.isShowModal"/>
</template>

<style lang='scss' scoped>
//
</style>