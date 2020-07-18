<template>
  <div class="page-title">
    <h1 class="page-title__label">{{ title }}</h1>
    <div class="page-title__underline"></div>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: String
  }
}
</script>

<style lang="stylus" scoped>
.page-title
  width auto
  margin 10px 0
  position relative

  &__label
    position relative
    font-family 'Montserrat', sans-serif
    font-style normal
    font-weight bold
    font-size 36px
    color #FF8A00
    z-index 10
  
  &__underline
    height 10px
    width 300px
    bottom 0
    position absolute
    background-color #EEEEEE
</style>