<template>
  <div class="resonator-box flex flex-center" :class="`unit-size-${resonator.level}`">
    <q-img :src="resonator.icon" alt="" />
    <div class="absolute-bottom-right" style="font-size: 12px; line-height: 1; bottom: 4px; right: 6px; z-index: 2">
      {{ resonator.chaos }}
    </div>
    <item-tooltip :item="resonator"></item-tooltip>
  </div>
</template>

<script setup lang="ts">
import { Resonator } from 'src/model/fossil';

import ItemTooltip from 'components/ItemTooltip.vue';

defineOptions({
  name: 'ResonatorItem'
})

defineProps<{
  resonator: Resonator
}>()

</script>

<style scoped lang="sass">
.resonator-box
  position: relative
  overflow: hidden
  &.unit-size-1
    width: 71px
    height: 73px
    .q-img
      width: 49px
  &.unit-size-2
    width: 76px
    height: 124px
    .q-img
      width: 52px
  &.unit-size-3
    width: 124px
    height: 124px
    .q-img
      width: 94px
  &.unit-size-4
    width: 124px
    height: 124px
    .q-img
      width: 96px
.resonator-name
  color: $cyan-2
  font-size: 16px
</style>
