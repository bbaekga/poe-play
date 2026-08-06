<template>
  <div class="item-box allflame-box flex flex-center" :class="`highlight${item.level}`">
    <q-img :src="item.icon" width="62px" style="z-index: 2" />
    <div class="absolute-bottom-right" :class="`highlight${item.level}-text`" style="font-size: 12px; line-height: 1; bottom: 2px; right: 4px; z-index: 2">
      {{ item.chaos }}
    </div>
    <item-tooltip v-if="item.id === 'syndicate-medallion'" :item="item"></item-tooltip>
    <item-tooltip v-else :item="item" max description></item-tooltip>
  </div>
</template>

<script setup lang="ts">
import { Allflame } from 'src/model/allflame';
import ItemTooltip from 'components/ItemTooltip.vue';

defineOptions({
  name: 'AllflameItem'
})

defineProps<{
  item: Allflame
}>()

</script>

<style scoped lang="sass">
.allflame-box
  width: 72px
  height: 72px

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
