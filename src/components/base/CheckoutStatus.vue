<template>
  <div class="status">
    <div class="status__collection">
      <div class="status__number status__number--done">
        <span>1</span>
      </div>
      <span class="status__label">Delivery</span>
    </div>
    <span class="material-icons status__arrow">keyboard_arrow_right</span>
    <div class="status__collection">
      <div :class="this.$route.path === '/payment' ? 'status__number--done' : ''" class="status__number">
        <span>2</span>
      </div>
      <span class="status__label">Payment</span>
    </div>
    <span class="material-icons status__arrow">keyboard_arrow_right</span>
    <div class="status__collection">
      <div :class="this.$route.path === '/finish' ? 'status__number--done' : ''" class="status__number">
        <span>3</span>
      </div>
      <span class="status__label">Finish</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutStatus'
}
</script>

<style lang="stylus" scoped>
.status
  height 70px
  width 500px
  margin-top 1.25rem
  position fixed
  display flex
  justify-content space-around
  align-items center
  background-color #FFFAE6
  border-radius 35px

  &__collection 
    display flex
    flex-direction row
    align-items center

  &__label
    margin-left 5px
    font-weight 200
    font-size 16px
    line-height 25px
    color #FF8A00

  &__arrow
    font-size 24px
    color #FF8A00

  &__number
    height 30px
    width 30px
    display flex
    justify-content center
    align-items center
    background-color rgba(255, 138, 0, 0.2)
    color #FF8A00
    border-radius 15px
    box-shadow 0px 2px 4px rgba(255, 138, 0, 0.3)

    &--done
      background-color rgba(255, 138, 0, 1)
      color #FFFFFF
</style>