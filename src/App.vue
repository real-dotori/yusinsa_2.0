<template>
  <HeaderBar></HeaderBar>
  <router-view :signUp="signUp"></router-view>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue';
export default {
  components: {
    HeaderBar,
  },
  setup(){
    const signUp = {

    }
    return {
      signUp
    }
  }
}
</script>

<style lang="scss">
@import './common.scss';

</style>
