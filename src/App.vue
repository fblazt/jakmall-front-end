<template>
  <div id="app">
    <header>
      <CheckoutStatus></CheckoutStatus>
    </header>
    <router-view/>
  </div>
</template>

<script>
import CheckoutStatus from '@/components/base/CheckoutStatus'

export default {
  name: 'App',
  components: {
    CheckoutStatus
  }
}
</script>

<style lang="stylus">
@import "assets/css/base-styl.css"

#app
  min-height 100vh
  width 100vw
  background-color #FFFAE6

  header
    display flex
    justify-content center
</style>
