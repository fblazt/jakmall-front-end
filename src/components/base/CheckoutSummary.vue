<template>
  <aside class="aside">
    <div class="aside__start">
      <h3 class="summary__title">Summary</h3>
      <span class="summary__items">10 items purchased</span>
    </div>
    <div class="aside__end">
      <div class="price">
        <div class="price__subtotal">
          <span class="subtotal__item">
            <span class="subtotal__item__name">Costs of goods</span>
            <span class="subtotal__item__price">500000</span>
          </span>
          <span class="subtotal__item">
            <span class="subtotal__item__name">Dropshipping Fee</span>
            <span class="subtotal__item__price">5900</span>
          </span>
        </div>
        <div class="price__total">
          <span class="total__item">
            <span class="total__item__name">Total</span>
            <span class="total__item__price">505900</span>
          </span>
        </div>
      </div>
      <div class="button">
        <slot></slot>
      </div>
    </div>
  </aside>
</template>

<script>

export default {
  name: 'CheckoutSummary'
}
</script>

<style lang="stylus" scoped>
main-color = #FF8A00
main-font = 'Montserrat', sans-serif
light = 0.6

.aside
  height 100%
  display flex
  flex-direction column
  justify-content space-between

  &__start

    .summary__title
      margin-bottom 10px
      font-family main-font
      font-weight bold 
      font-size 24px
      color main-color

    .summary__items
      font-size 14px
      opacity light
  
  &__end

    .price
      display flex
      flex-direction column

      &__subtotal
        display flex
        flex-direction column

        .subtotal__item
          margin-bottom 10px
          display flex
          flex-direction row
          justify-content space-between

          &__name
            font-weight normal
            font-size 14px
            opacity 0.6

          &__price
            font-weight bold
            font-size 14px

      &__total
        
        .total__item
          margin 10px 0
          display flex
          flex-direction row
          justify-content space-between

          &__name, &__price
            font-family main-font
            color main-color
            font-size 24px
            font-weight bold

</style>