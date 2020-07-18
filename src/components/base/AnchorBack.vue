<template>
  <div class="anchor-back">
    <span class="material-icons anchor-back__arrow">arrow_back</span>
    <span class="anchor-back__label">Back to cart</span>
  </div>
</template>

<script>
export default {
  name: 'AnchorBack'
}
</script>

<style lang="stylus" scoped>
.anchor-back
  display flex
  align-items center
  opacity 0.6

  &:hover
    color #FF8A00
    cursor pointer

  &__arrow
    font-size 18px

  &__label
    margin-left 10px
    font-size 14px
</style>