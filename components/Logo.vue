<template>
  <nuxt-link no-prefetch class='logo-link' to='/' title="to main page">
    <LogoIcon class="logo" width="60px"/>
  </nuxt-link>
</template>


<script setup>
import LogoIcon from '~/assets/image/icons/logo-eye.svg';

</script>


<style lang='scss' scoped>
.logo-link {
  margin-right: auto;
  padding-top: 10px;
}
.logo {
  transition: $time-transition $param-transition;

  &:hover {
    filter: invert(90%);
  }
  
  @include sm-tablets {
   width: 40px;
   height: 40px;
  }
}
</style>