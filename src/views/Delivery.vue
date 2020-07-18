<template>
  <main>
    <div class="flex">
      <div class="flex__start">        
        <router-link to="/">
          <AnchorBack></AnchorBack>
        </router-link>
      </div>
      <div class="flex__end"></div>
        <div class="delivery">
          <div class="delivery__form">
            <div class="summary__header">
              <PageTitle title="Delivery details"></PageTitle>
              <label class="dropship-checkbox">Send as dropshipper
                <input type="checkbox">
                <span class="dropship-checkbox__checkmark"></span>
              </label>
            </div>
            <div class="summary__field">
              <InputField></InputField>
            </div>
          </div>
          <div class="delivery__divider"></div>
          <div class="delivery__summary">
            <div class="summary__detail">
              <CheckoutSummary>
                <SummaryButton buttonText="Continue to Payment">
                </SummaryButton>
              </CheckoutSummary>
            </div>
          </div>
        </div>
    </div>
  </main>
</template>

<script>
import AnchorBack from '@/components/base/AnchorBack'
import PageTitle from '@/components/base/PageTitle'
import InputField from '@/components/delivery/InputField'
import CheckoutSummary from '@/components/base/CheckoutSummary'
import SummaryButton from '@/components/base/SummaryButton'

export default {
  name: 'Delivery',
  components: {
    AnchorBack,
    PageTitle,
    InputField,
    CheckoutSummary,
    SummaryButton
  }
}
</script>

<style lang="stylus" scoped>
main
  min-height 100vh
  width 100%
  display flex
  justify-content center
  align-items center

  .flex
    height 85vh
    width 90vw
    padding 20px
    display flex
    flex-direction column
    background-color #FFFFFF
    box-shadow 2px 10px 20px rgba(255, 138, 0, 0.1)
    border-radius 4px

    &__end
      width 100%

.delivery
  height 100%
  width 100%
  display flex
  flex-direction row

  &__form
    height 100%
    width 75%

  &__divider
    height 100%
    width 2px
    margin 0 25px 
    background-color #FF8A00
    opacity 0.2

  &__summary
    height 100%
    width 25%

    .summary__detail
      height 100%
      width 100%  

.dropship-checkbox 
	display block
	position relative
	padding-left 35px
	margin-bottom 12px
	cursor pointer
	font-size 20px
	-webkit-user-select none
	-moz-user-select none
	-ms-user-select none
	user-select none

	input 
		position absolute
		opacity 0
		cursor pointer
		height 0
		width 0

		&:checked 
			~ 
				.dropship-checkbox__checkmark 
					background-color #FFFFFF
					&::after 
						display block
						
	&:hover
		input
			~
				.dropship-checkbox__checkmark 
					background-color #ccc
				
	&__checkmark 

		&::after 
			left 9px
			top 5px
			width 5px
			height 10px
			border solid #1BD97B
			border-width 0 3px 3px 0
			-webkit-transform rotate(45deg)
			-ms-transform rotate(45deg)
			transform rotate(45deg)	

.dropship-checkbox__checkmark 

	position absolute
	top 0
	left 0
	height 25px
	width 25px
	background-color #EEEEEE

	&::after 
		content ""
		position absolute
		display none
	
</style>