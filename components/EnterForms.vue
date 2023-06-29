<template>
  <section class="enter-forms">

    <!-- form-controls -->

    <div class="enter-forms__item">
      <h2 class="enter-forms__title">
        Login
      </h2>
      <button 
        class="enter-forms__button enter-forms__button_blue" 
        type="button"
        @click="changeActiveForm"
      >Login
      </button>
    </div>

    <div class="enter-forms__item">
      <h2 class="enter-forms__title">Not registered yet?</h2>
      <button 
        class="enter-forms__button enter-forms__button_pink"
        type="button" 
        @click="changeActiveForm"
      >Registration
    </button>
    </div>

    <!-- Блок формы -->

    <div 
      class="enter-forms__forms"
      :class="{'active' : isChange}"
    >
      <Login v-show="isChange === false"/>
      <Registration v-show="isChange === true"/>
    </div>
    
  </section>
</template>

<script setup>

import { ref } from 'vue'

const props = defineProps({
  changeForm: {
    type: Function,
    default: () => []
  },
  isChange: {
    type: Boolean,
    default: false
  }
})

const changeActiveForm = () => {
  props.changeForm();
  props.isChange= !props.isChange
}

</script>

<style lang="scss" scoped>
.enter-forms {
  display: flex;
  justify-content: space-between;

  &__item {
    display: flex;
    flex-direction: column;
    justify-content:space-between;

    width: 50%;

    &:nth-child(1) {
      padding-right: 80px;
    }
    &:nth-child(2) {
      padding-left: 80px;
    }
  }

  &__title {
    margin: 0;
    padding-bottom: 20px;

    font-size:14px;
    line-height: 20px;
    color: $dark-purple;
  }

  &__forms {
    position: absolute;
    top: -10%;
    left: 0;

    width: 60%;
    height: 120%;
    overflow: hidden;

    border-radius:5px;
    background-color: $white;
    box-shadow: 0 5px 45px rgba(0,0,0,0.2);
    transition: 0.3s ease-in-out;
  }

  &__button {
    padding: 10px;
    color: white;
    border: none;
    border-radius:5px;
    background-color: $white;
    color: $dark-purple;
  }

  .active {
    left: 40%;
  }

  @include sm-tablets {

    flex-direction: column;
    height: 100%;

    &__item {
      display: flex;
      flex-direction: column;
      justify-content:space-between;

      width: 70%;
      margin: 0 auto;

      &:nth-child(1) {
        padding-right: 0;
      }
      &:nth-child(2) {
        padding-left: 0;
      }
    }

    &__forms {
      top: 0;
      left: -5%;
      width: 110%;
      height: 75%;
    }

    .active {
      top: 25%;
      left: -5%;
    }
  }
}
</style>