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
  transition: $time-transition $param-transition;

  &:hover {
    filter: invert(90%);
  }

  &-link {
    margin-right: auto;
    padding-top: 20px;
  }
}

@include lg-desktop {
  .logo {
    width: 90px;
  }
}

@include md-desktop {
  .logo {
    width: 70px;
  }
}

@include sm-tablets {
  .logo {
    width: 60px;

    &-link {
      padding-top: 15px;
    }
  }
}
</style>