<template>
  <nuxt-link no-prefetch class='logo-link' to='/' title="to main page">
    <LogoIcon class="logo" width="60px"/>
  </nuxt-link>
</template>


<script setup>
import LogoIcon from '~/assets/image/icons/logo-min.svg';

</script>


<style lang='scss' scoped>
.logo {
  width: 100px;
	margin-right: auto;
  transition: filter $time-transition $param-transition;

  &:hover {
    filter: invert(90%);
  }

	@include lg-desktop {
		width: 90px;
	}

	@include md-desktop {
		width: 60px;
	}

	@include sm-tablets {
		width: 60px;
	}
}
</style>