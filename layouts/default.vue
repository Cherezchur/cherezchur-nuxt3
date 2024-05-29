<script setup>
import { isPage } from '~/helpers/utils';
// import {useModal} from "~/store/modal";
import { PAGES_NAMES } from '~/const';

// const modalStore = useModal()

</script>

<template>
	<Header v-if="!isPage(PAGES_NAMES.INDEX)"/>

    <main>
        <slot />
    </main>

	<Footer v-if="!isPage(PAGES_NAMES.INDEX)"/>

<!--  <Modal v-show="modalStore.isShowModal"/>-->
</template>

<style lang='scss' module>
//
</style>
