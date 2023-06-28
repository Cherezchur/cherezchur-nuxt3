import { defineStore } from 'pinia'

export const useModal= defineStore('modal', () => {
    let isShowModal = ref(false);
    let option = ref('');

    const modalShowToogle = (handleOption) => {
        option.value = handleOption;
        isShowModal.value = !isShowModal.value;
    }

    return {
        isShowModal,
        option,
        modalShowToogle
    }
})