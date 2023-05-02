<template>
  <Transition name="registration">
    <div class="registration">
      <h2 class="registration__title">
        Registration
      </h2>

      <form class="registration__form" @submit.prevent>
        <input type="hidden" name="remember" value="true" />

        <div class="registration__field">
          <label class="visually-hidden" for="login">Email</label>
          <!-- <Input
            :id="'email'" 
            :name="'email'"
            :type="'email'"
            :autocomplete="'current-login'"  
            :placeholder="'Email'"
            :rules="'required|min:5|email'"
            :fieldStyle="'blue'"
          /> -->
        </div>
        <div>
          <label class="visually-hidden" for="password">Password</label>
          <!-- <Input
            :id="'password'" 
            :name="'password'"
            :type="'password'"
            :placeholder="'Password'"
            :rules="'required|minmax:5,36'"
            :fieldStyle="'blue'"
          /> -->
        </div>
        <div>
          <label class="visually-hidden" for="confirmPassword">Confirm password</label>
          <!-- <Input
            :id="'confirmPassword'" 
            :name="'confirmPassword'"
            :type="'confirmPassword'"
            :placeholder="'Confirm password'"
            :rules="'required|minmax:5,36'"
            :fieldStyle="'blue'"
          /> -->
        </div>
      </form>
      <button class="registration__submit" @click.prevent="postRegisterForm">
        Register
      </button>
    </div>
  </Transition>
</template>


<script setup>
import {reactive} from 'vue'

const formData = reactive({
  login: '',
  password: '',
  confirmPassword: ''
})
</script>


<style lang="scss" scoped>
.registration {
  @include form-container;

  position: absolute;
  top: 10%;
  left: 0;

  /* animation */

  &-enter-from,
  &-leave-to {
    left: 100%;
  }

  &-enter-active,
  &-leave-active {
    transition: left 0.3s ease-in-out;
  }

  &-enter-active {
    transition-delay: 0.2s;
  }

  // forms

  &__title {
    @include modal-title
  }

  &__form {
    margin-bottom: 20px;
  }

  &__submit {
    width: 100%;
    padding: 10px;

    color: $white;
    
    border: none;
    border-radius:5px;
    background-color: $il-des_dark-blue;

    &:disabled {
      opacity: 0.7;
    }
  }
}
</style>