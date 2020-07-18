<template>
  <div class="field">
    <input type="email" name="data" class="field__input">
    <label for="data" class="field__label">Data</label>
  </div>  
</template>

<script>
export default {
  name: 'InputField'
}
</script>

<style lang="stylus" scoped>
.field
  max-width 400px
  position relative
  border 2px solid #EEEEEE
  margin 4rem auto 1rem

  &__label
    color #EEEEEE 
    font-size 1.2rem

  &__input
    outline none
    border none
    overflow hidden
    margin 0  
    width 100%
    padding 0.25rem 0
    background none
    color #FFFFFF 
    font-size 1.2rem
    font-weight bold

    &:valid
      color yellowgreen 
    
    &:invalid
      color orangered

  &::after
    content ""
    display block
    border solid purple
    background none  
    transform scaleX(0)
    transform-origin 0%
    transition transform 500ms ease
    top 2px

  &:focus-within::after
    transform scaleX(1)

  // label animation 

  &__label
    z-index -1
    position absolute
    transform translateY(-2rem)
    transform-origin 0%
    transition transform 400ms

  &:focus-within &__label, &__input:not(:placeholder-show) + &__label
    tranform scale (0.8) translateY(-5rem)
</style>