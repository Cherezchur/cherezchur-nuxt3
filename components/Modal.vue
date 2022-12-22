<template>
  <transition name="modal">
    <div 
      class="modal" 
      @click="modalClose(modalOption)"
    >
      <div  class="modal__backdrop">
        <div class="modal__container">
          <div 
            class="modal__content"
            :class="{'modal__content_blue' : isChange}"
            @click.stop
          >
            <button
              class="modal__close"
              type="button"
              :class="[`modal__close_${props.modalOption}`, {'modal__close_change': isChange}]"
              @click="modalClose(modalOption)"
            >
              <span class="visually-hidden">Закрыть</span>
              <span class="modal__close_element"></span>
            </button>

            <section class="modal__body">
              <EnterForms
                v-if="modalOption === 'login'"
                :changeForm="changeActiveForm"
              />
              <Message v-else-if="modalOption === 'message'"/>
            </section>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, onUpdated} from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  modalOption: {
    type: String,
    default: 'login'
  },
  closeModal: {
    type: Function,
    default: () => ''
  }
})

const changeActiveForm = reactive(() => isChange.value = !isChange.value)

const modalClose = (modalOption) => props.closeModal(props.modalOption);

const escCloseModal = (e) => {
  if (props.show && e.key === 'Escape') {
    props.closeModal(props.modalOption);
  }
}

onMounted(() => {
  window.addEventListener('keydown', escCloseModal);
});

onUnmounted(() => {
    window.removeEventListener('keydown', escCloseModal);
});

</script>

<style lang="scss">
.modal {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  /* modal-animation */

  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s ease;
  }

  // modal-container

  &__backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    transition: opacity 0.3s ease;
    z-index: 5;
  }

  &__container {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: auto;
    margin: 16px;
  }

  &__content {
    display: flex;
    position: relative;
    height: 40vh;
    width: 100%;
    max-width: 500px;
    margin: 10rem auto;
    padding: 20px 30px;

    color: #000;
    border-radius: 5px;
    background-color: $accent-pink;

    transition: 0.3s ease-in-out;

    &_blue {
      background-color: $il-des_light-blue;    
    }
  }

  &__body {
    margin: auto;
    width: 100%;
  }
  
  // close-button

  &__close {
    position: absolute;
    width: 15px;
    height: 15px;
    padding: 0;
    background: transparent;
    border: 0;
    border-radius: 50%;
    transition: 0.3s;

    &_login {
      top: -20%;
      right: 40%;
    }
    &_message {
      top: -10%;
      right: 0%;
    }
    &_change {
      right: 0%;
    }

    &:hover {
      transform: rotate(90deg)
    }
    &_element:before,
    &_element:after {
      content: "";
      position: absolute;
      top: 5px;
      left: 0;
      display: flex;
      width: 15px;
      height: 4px;
      background-color: $white;
      border-radius: 2px;
    }
    &_element:before {
      transform: rotate(45deg);
    }
    &_element:after {
      transform: rotate(-45deg);
    }
  }

  @include sm-tablets {
    &__content {
      height:60vh;
    }

    &__body {
      margin: 0;
      width: 100%;
    }

    &__close {
      &_login {
        top: -5%;
        right: 0%;
      }
      &_change {
        right: 0%;
      }
    }
  }
}
</style>