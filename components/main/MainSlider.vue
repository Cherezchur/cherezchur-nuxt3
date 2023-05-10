<script setup>

import { useCarousels } from '~/store/useCarousels'

const store = useCarousels()
store.fetchCarousels()

let swipers = [];

const onSwiper = (swiper) => {
  swipers.push(swiper)
};

</script>

<template>
  <div class="main__slider">

    <ClientOnly>
      <span v-if="store.loading">Идет загрузка ...</span>
      <Swiper
        v-else
        v-for="{design, slides, path, title } in store.carouselsData"
        :class="['slider', ]"
        :key="title"
        :items-to-show="1"
        :loop="true"
        :wrapAround="true"
        @swiper="onSwiper"
      >
        <SwiperSlide 
          class="slider__item"
          :class= "design"
          v-for="(slide, index) in slides"
          :key="`slide-${index}`"
        >
          <img class="slider__image" :src="`/banner/${slide}`"/>
        </SwiperSlide>

        <nuxt-link
					:class="['slider__link', design]"
					:to=path
				>
          <span class="slider__link-arrow">&#10140;</span>
          <span class="slider__link-title">{{ title }}</span>
        </nuxt-link>
      </Swiper>
    </ClientOnly>
  </div>
</template>

<style lang='scss'>

.main {
  &__slider {
		margin: 0 auto;
		height: 100vh;
		width: 80vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
		gap: 40px;
  }
}

.slider {
  position: relative;
  height: 55vh;
  width: 25vw;

	margin: auto;

  transition: $accent-time-transition;
  cursor: url('/assets/image/icons/swaip-cursor-01.svg'), auto;
	border-radius: 0.7rem;
	background-color: rgba(0,0,0,.3);
	box-shadow: 0 0 20px $contur-dark-purple;

  &:hover {
		transform: scale(1.3) translateY(5%);
		z-index: 2;
	}

	.swiper-wrapper {
		height: 85%;
		background-color: rgba(0,0,0,.3);
	}

  &__viewport {
    display: flex;
    height: 100%;
  }
  &__image {
		height: 100%;
		width: 100%;
    object-fit: cover;
  }
  &__link {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 15%;
    text-align: center;
    z-index: 2;

    display: flex;
    justify-content: center;
		align-items: center;

    font-size: 26px;
    line-height: 1.2;
    color: $white;

    text-shadow: 1px 1px 2px $contur-dark-purple;

    &-arrow {
			position: absolute;
			bottom: 0;
			right: 0;

      margin-right: 10px;
      flex-grow: 1;
      opacity: 0;
      transform: translateX(-100%);

      transition: $accent-time-transition;
    }
		&-title {
			font-size: 1.3rem;
		}

  }
}

@include lg-desktop {
  .slider {
    &__link {
      font-size: 24px;
    }
  }
}
@include md-desktop {
  .slider {
    &__link {
      height: 11%;
      font-size: 20px;
    }
  }
}
@include sm-tablets {
  .slider {
    &__link {
      height: 13%;
      font-size: 18px;
    }
  }
}
@include sm-mobile {
  .main {
    &__slider {
      height: 100vh;
      grid-template-columns:  1fr;
      grid-template-rows:  repeat( 3, 1fr);
    }
  }

  .slider {
    width: 100%;

    &.start {
      width: 100%;
      height: calc(100vh / 3);
    }
    &.hover {
      width: 100%;
      height: calc(100vh / 2);

      .slider__link-arrow {
        opacity: 1;
        transform: translateX(0);
      }
    }
    &.not-hover {
      width: 100%;
      height: calc(100vh / 4);
    }
    &__image {
      height: 100%;
      object-position: 50% 50%;
    }
    &__link {
      height: fit-content;
    }
  }
}
@include ems-mobile {
  .slider {
    &__link {
      font-size: 14px;
    }
  }
}

</style>