<template>
  <div class="item-box oil-box flex flex-center" :class="pricelessClass">
    <q-img :src="oil.icon" width="46px" style="z-index: 2" />
    <div class="absolute-bottom-right" style="font-size: 11px; line-height: 1; bottom: 2px; right: 4px; z-index: 2">
      {{ oil.chaos }}
    </div>
    <item-tooltip :item="oil" description></item-tooltip>
  </div>
</template>

<script setup lang="ts">
import {Oil} from 'src/model/oil';
import {computed} from 'vue';

import ItemTooltip from 'components/ItemTooltip.vue';

defineOptions({
  name: 'OilItem'
})

const props = defineProps<{
  oil: Oil
}>()

const pricelessClass = computed(() => {
  const chaos = Number(props.oil.chaos)
  if (chaos >= 200) {
    return ['text-red', 'highlight-red']
  } else if (chaos >= 150) {
    return 'text-orange-7'
  } else if (chaos >= 100) {
    return 'text-amber-7'
  } else if (chaos >= 50) {
    return 'text-yellow-5'
  } else if (chaos >= 10) {
    return 'text-yellow-2'
  }
  return ''
})
</script>

<style scoped lang="sass">
.oil-box
  width: 65px
  height: 64px
  border-radius: 4px
  &.highlight-red:after
    background-color: rgba(255,0,0,0.3)
</style>
