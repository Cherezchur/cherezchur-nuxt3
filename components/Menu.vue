<script setup>
import LoginIcon from '~/assets/image/icons/login-icon.svg'
import MessageIcon from '~/assets/image/icons/message.svg'
import LikeIcon from '~/assets/image/icons/like.svg'
import {useModal} from "~/store/modal";

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

	// timer
	// if(isActive.value) {
	// 	let timer = setTimeout(() => {
	// 		isActive.value = !isActive.value
	// 	}, 10000)
	// 	timerId = timer;
	// } else {
	// 	clearTimeout(timerId);
	// }
}

const modalStore = useModal()

</script>

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
      <button
       	type="button"
        class='menu__item'
        :class='{ menu__item_active: isActive }'
        @click.prevent="modalStore.modalShowToogle('login')"
      >
        <span>Login</span>
        <LoginIcon 
          class="menu-icon login"
					width="25px"
					fill="rgba(255, 255, 255, 0.8)"
        />
        <!-- <Icon :name="'login'" :width="'25px'" :fill="'rgba(255, 255, 255, 0.8)'"/> -->
      </button>
      <button
				type="button"
        class='menu__item'
        :class='{ menu__item_active: isActive }'
        @click.prevent="modalStore.modalShowToogle('message')"
      >
        <span>Message</span>
        <MessageIcon
					class="menu-icon message"
					width="30px"
					fill="rgba(255, 255, 255, 0.8)"
        />
        <!-- <Icon :name="'message'" :width="'25px'" :fill="'rgba(255, 255, 255, 0.8)'"/> -->
      </button>
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

<style lang='scss' scoped>
.menu {
	margin-left: auto;
  margin-top: 40px;
  display: flex;
  align-items: center;
  position: relative;

  &__control {
    position: relative;
    padding: 0;
    height: 40px;
    width: 40px;
    background-color: transparent;
    border-radius: 50%;
    z-index: 1;
    transition: border $time-transition, background-color $time-transition;

    &:hover {
			background-color: $dark-purple-translucent;

			span,
			span::before,
			span::after {
				background-color: $white;
			}
    }

    span,
    span::before,
    span::after {
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 20px;
			background-color: $dark-purple;
      top: calc(50% - 2.5px);
      left: calc(50% - 2.5px);
      transition: background-color $time-transition, transform $time-transition;
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
    display: flex;
    justify-content: center;
    align-items: center;
		gap: 10px;
		padding: 10px;
		margin-top: 5px;

    position: absolute;
    top: calc(50% - 20px);
    left: 0;
    height: 30px;

		opacity: 0;
    border-radius: 20px;
		//background-color: $dark-purple-translucent;

		.menu-icon {
			display: none;
			width: 20px;
			height: 20px;

			fill: $dark-purple-translucent;
		}

    &:nth-child(1) {
			transition-duration: 0.2s;
    }
    &:nth-child(2) {
			transition-duration: 0.35s;
    }
    &:nth-child(3) {
			transition-duration: 0.5s;
    }

    span {
      color: $dark-purple;
			text-shadow: 1px 1px 2px $white-light-translucent;
    }

    &_active {
      opacity: 1;
      &:nth-child(1) {
        transform: translateX(-80px);
      }
      &:nth-child(2) {
				transform: translateX(-170px);
      }
      &:nth-child(3) {
				transform: translateX(-240px);
      }
    }

    img {
      width: 25px;
      height: 25px;
      z-index: 2;
    }
  }

  @include sm-tablets {
    margin-top: 30px;

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