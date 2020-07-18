<template>
  <button>
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: 'SummaryButton',
  props: {
    buttonText: String
  }
}
</script>

<style lang="stylus" scoped>
button
  width 100%
  padding 20px 0
  border 1px solid #FFFFFF
  background-color #FF8A00
  color #FFFFFF 
  font-weight 200
  font-size 18px

  &:hover
    border 1px solid #1BD97B
    color #1BD97B
    background-color #FFFFFF
</style>