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
		<div class="menu__wrapper">
			<nav :class="['menu__list', { show: isActive }]">
				<button
					type="button"
					class='menu__item'
					@click.prevent="modalStore.modalShowToogle('login')"
				>
					<span>Login</span>
					<span class="menu__arrow">➜</span>
					<LoginIcon
						class="menu__icon login"
						width="25px"
						fill="rgba(255, 255, 255, 0.8)"
					/>
					<!-- <Icon :name="'login'" :width="'25px'" :fill="'rgba(255, 255, 255, 0.8)'"/> -->
				</button>

				<button
					type="button"
					class='menu__item'
					@click.prevent="modalStore.modalShowToogle('message')"
				>
					<span>Message</span>
					<span class="menu__arrow">➜</span>
					<MessageIcon
						class="menu__icon message"
						width="30px"
						fill="rgba(255, 255, 255, 0.8)"
					/>
					<!-- <Icon :name="'message'" :width="'25px'" :fill="'rgba(255, 255, 255, 0.8)'"/> -->
				</button>

				<nuxt-link
					no-prefetch
					id='likes'
					class='menu__item like'
					to='#'
					title='like pins'
				>
					<span>
						Likes
					</span>
					<span class="menu__arrow">➜</span>
					<LikeIcon
						class="menu__icon likes"
						width="25px"
						fill="rgba(255, 255, 255, 0.8)"
					/>
					<!-- <Icon :name="'like'" :width="'25px'" :fill="'rgba(255, 255, 255, 0.8)'"/> -->
				</nuxt-link>
			</nav>

			<button
				:class="['menu__control', { show: isActive } ]"
				@click="menuTrigger"
			>
				<span></span>
			</button>
		</div>
  </div>
</template>

<style lang='scss' scoped>
.menu {
	margin-left: auto;
  margin-top: 40px;

	&__wrapper {
		display: flex;
		align-items: center;
		position: relative;
	}
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

    &.show {
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
	&__list {
		position: absolute;
		right: 0;

		display: flex;
		align-items: center;
		gap: 10px;
		height: 40px;

		border-radius: 20px;
		background-color: $dark-purple-translucent;

		padding: 0;
		max-width: 0;
		opacity: 0;
		transform-origin: 100% 0;
		transform: translate(100%);
		transition: transform $time-transition, max-width $time-transition, padding $time-transition, opacity $time-transition;
		overflow: hidden;

		//animation: delay-overflow-hidden .5s;

		&.show {
			transform: translateX(0);
			max-width: 50vw;
			padding: 0 65px 0 15px;
			opacity: 1;

			//animation: delay-overflow-visible .5s;
			//overflow: visible;
		}
	}
	&__icon {
		display: none;
	}
	&__item {
		color: $white;

		&.like {
			display: flex;
			text-transform: none;
		}

		&:hover {
			.menu__arrow {
				opacity: 1;
				margin-left: 5px;
			}
		}
	}
	&__arrow {
		opacity: 0;
		transform: translateX(-20%);
		margin-left: -10px;

		transition: margin-left $time-transition, opacity $time-transition;
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