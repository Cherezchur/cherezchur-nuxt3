<script setup>
import { useCarousels } from '~/store/useCarousels'

const storeCarousels = useCarousels()
storeCarousels.fetchCarousels()
</script>


<template>
  <div class="main__slider">

		<Card
			:cardData="storeCarousels.carouselsData"
		/>

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


@include sm-mobile {
  .main {
    &__slider {
      height: 100vh;
      grid-template-columns:  1fr;
      grid-template-rows:  repeat( 3, 1fr);
    }
  }
}

</style>