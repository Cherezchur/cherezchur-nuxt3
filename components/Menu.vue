<template>
  <div class='menu'>
    <button 
      class='menu__control' 
      :class='{ menu__control_active: isActive }' 
      @click="menuTrigger"
    >
      <span></span>
    </button>
    <nav class='menu__list'>
      <a 
        href='#' 
        class='menu__item' 
        :class='{ menu__item_active: isActive }'
        @click.prevent="modalShowClick('login')"
      >
        <span>Login</span>
        <LoginIcon 
          class="menu-icon login" width="25px" fill="rgba(255, 255, 255, 0.8)"
        />
        <!-- <Icon :name="'login'" :width="'25px'" :fill="'rgba(255, 255, 255, 0.8)'"/> -->
      </a>
      <a 
        href='#' 
        class='menu__item' 
        :class='{ menu__item_active: isActive }'
        @click.prevent="modalShowClick('message')"
      >
        <span>Message</span>
        <MessageIcon 
          name="menu-icon message" width="30px" fill="rgba(255, 255, 255, 0.8)"
        />
        <!-- <Icon :name="'message'" :width="'25px'" :fill="'rgba(255, 255, 255, 0.8)'"/> -->
      </a>
      <nuxt-link 
        no-prefetch 
        id='likes' 
        class='menu__item like' 
        :class='{ menu__item_active: isActive }' 
        to='#' 
        title='like pins'
      >
        <span>
          Likes
        </span>
        <LikeIcon 
          class="menu-icon likes" width="25px" fill="rgba(255, 255, 255, 0.8)"
        />
        <!-- <Icon :name="'like'" :width="'25px'" :fill="'rgba(255, 255, 255, 0.8)'"/> -->
      </nuxt-link>
    </nav>
  </div>
</template>

<script setup>
import LoginIcon from '~/assets/image/icons/login-icon.svg'
import MessageIcon from '~/assets/image/icons/message.svg'
import LikeIcon from '~/assets/image/icons/like.svg'
import { ref} from 'vue';

const props = defineProps({
  modalShow: {
    type: Function,
    default: () => ''
  }
})

const isActive = ref(false);
let timerId = ''

const menuTrigger = () => {
  isActive.value = !isActive.value;

  if(isActive.value) {
    let timer = setTimeout(() => {
      isActive.value = !isActive.value
    }, 10000)
    timerId = timer;
  } else {
    clearTimeout(timerId);
  }
}

const modalShowClick = (linkName) => props.modalShow(linkName);
  
</script>

<style lang='scss' scoped>
.menu {
	margin-left: auto;
  display: flex;
  align-items: center;
  position: relative;

  &__control {
    position: relative;
    padding: 0;
    height: 40px;
    width: 40px;
    background-color: $white-translucent;
    border-radius: 50%;
    border: none;
    z-index: 1;
    transition: 0.3s;

    &:hover {
      background-color: $accent-pink;
    }

    span,
    span::before,
    span::after {
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 20px;
      background-color: $white;
      top: calc(50% - 2.5px);
      left: calc(50% - 2.5px);
      transition: 0.3s;
    }

    span::before,
    span::after {
      content: '';
    }
    span::before {
      transform: translateX(-10px);
    }
    span::after {
      transform: translateX(10px);
    }

    &_active {
      span::before,
      span::after {
        border-radius: 2.5px;
        width: 23px;
      }
      span::before {
        transform: rotate(45deg) translate(-5.5px, 7px);
      }
      span::after {
        transform: rotate(-45deg) translate(-7px, -5.5px);
      }
    }
  }

  &__item {
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: calc(50% - 20px);
    left: 0;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    .login-icon {
      margin-top: 2px;
      width: 25px;
      height: 25px;

      fill: $white-light-translucent;
    }

    .message-icon {
      margin-top: 2px;
      margin-left: 2px;
      width: 25px;
      height: 25px;

      fill: $white-light-translucent;
    }

    .heart-icon {
      margin-top: 2px;
      width: 30px;
      height: 30px;
      stroke: $white-light-translucent;
    }

    &:nth-child(1) {
      background-color: $il-des_dark-blue;
      transition: 0.2s;
    }
    &:nth-child(2) {
      background-color: $pa-gr_dark-pink;
      transition: 0.35s;
    }
    &:nth-child(3) {
      background-color: $ta-sk-le_dark-brown;
      transition: 0.5s;
    }

    span { 
      position: absolute;
      left: -10px;

      display: flex;
      align-items: center;
      text-align: start;
      padding-left: 10px;

      color: $white-light-translucent;
      
      opacity: 0;
      z-index: 1;

      width: 40px;
      height: 40px;

      border-radius: 20px;
      transition: 0.3s;
    }

    &_active {
      opacity: 1;
      &:nth-child(1) {
        transform: translate(-60px, -10px);
      }
      &:nth-child(2) {
        transform: translate(-40px, 40px);
      }
      &:nth-child(3) {
        transform: translate(10px, 60px);
      }
      &:hover {
        &:nth-child(1) {
          span { 
            opacity: 1;
            width: 100px;
            // color: $il-des_light-blue;
            background-color: $il-des_dark-blue;
            transform: translate(-55px, 0px);
          }
        }
        &:nth-child(2) {
          z-index: 1;
          span { 
            opacity: 1;
            width: 120px;
            // color: $pa-gr_light-pink;
            background-color: $pa-gr_dark-pink;
            transform: translate(-75px, 0px);
          }
        }
        &:nth-child(3) {
          span { 
            opacity: 1;
            width: 110px;
            // color: $ta-sk-le_light-brown;
            background-color: $ta-sk-le_dark-brown;
            transform: translate(-65px, 0px);
          }
        }
      }
    }

    img {
      width: 25px;
      height: 25px;
      z-index: 2;
    }
  }

  @include sm-tablets {

    &__control {

      width: 30px;
      height: 30px;

      span,
      span::before,
      span::after {
        width: 4px;
        height: 4px;
        top: calc(50% - 2px);
        left: calc(50% - 2px);
      }

      span::before {
        transform: translateX(-8px);
      }
      span::after {
        transform: translateX(8px);
      }

      &_active {
        span::before,
        span::after {
          border-radius: 2px;
          width: 18px;
        }
        span::before {
          transform: rotate(45deg) translate(-4.5px, 5px);
        }
        span::after {
          transform: rotate(-45deg) translate(-5px, -4.5px);
        }
      }
    }

    &__item {

      width: 30px;
      height: 30px;

      &_active {
        opacity: 1;
        &:nth-child(1) {
          transform: translate(-40px, -5px);
        }
        &:nth-child(2) {
          transform: translate(-30px, 30px);
        }
        &:nth-child(3) {
          transform: translate(5px, 45px);
        }
      }

      .login-icon {
        width: 20px;
        height: 20px;
      }

      .message-icon {
        width: 20px;
        height: 20px;
      }
    }

    
  }
}
</style>