<template>
  <div class="item-box currency-box flex flex-center" :class="`highlight${currency.level}`">
    <q-img v-if="currency.icon" :src="currency.icon" width="47px" height="47px" style="z-index: 2" />
    <div v-if="currency.chaos" class="absolute-bottom-right" :class="`highlight${currency.level}-text`" style="font-size: 11px; line-height: 1; bottom: 2px; right: 3px; z-index: 2">
      {{ currency.chaos }}
    </div>
    <item-tooltip :item="currency" description></item-tooltip>
  </div>
</template>

<script setup lang="ts">
import {Currency} from 'src/model/currency'
import ItemTooltip from 'components/ItemTooltip.vue';

defineOptions({
  name: 'CurrencyItem'
})

defineProps<{
  currency: Currency
}>()
</script>

<style scoped lang="sass">
.currency-group.vertical
  .currency-box
    margin-right: 0
    margin-bottom: 3px
.currency-box
  width: 64px
  height: 64px
  margin-right: 7.8px // 슬롯 간격 ~78px = box 54 + 24
  &:last-child
    margin-right: 0

  .highlight0-text // 0 ~ 4.99
    color: white
  .highlight1-text // 5 ~ 9.99
    color: $yellow-4
  .highlight2-text // 10 ~ 19.99
    color: $amber-5
  .highlight3-text // 20 ~ 29.99
    color: $amber-7
  .highlight4-text // 30 ~ 39.99
    color: $orange-5
  .highlight5-text // 40 ~ 49.99
    color: $orange-6
  .highlight6-text // 50 ~ 59.99
    color: $orange-7
  .highlight7-text // 60 ~ 69.99
    color: $deep-orange-5
  .highlight8-text // 70 ~ 79.99
    color: $deep-orange-6
  .highlight9-text // 80 ~
    color: red
  &.highlight9  // 80 ~
    &:after
      background-color: rgba(255,0,0,0.3)
    .q-img
      opacity: 1
</style>
