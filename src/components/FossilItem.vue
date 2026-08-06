<template>
  <div class="item-box fossil-box row flex-center" :class="pricelessClass">
    <q-img :src="icon" width="60px" height="60px" style="z-index: 2" />
    <div class="absolute-bottom-right" style="font-size: 12px; line-height: 1; bottom: 2px; right: 4px; z-index: 2">
      {{ fossil.chaos }}
    </div>
    <item-tooltip :item="fossil" description></item-tooltip>
  </div>
</template>

<script setup lang="ts">
import {Fossil} from 'src/model/fossil';
import {computed} from 'vue';

import ItemTooltip from 'components/ItemTooltip.vue';

defineOptions({
  name: 'FossilItem'
})

const props = defineProps<{
  fossil: Fossil
}>()

const icon = computed(() => props.fossil.icon)
const pricelessClass = computed(() => {
  const chaos = Number(props.fossil.chaos)
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
.fossil-box
  width: 70px
  height: 70px
  border-radius: 4px
  //border: 1px solid rgba(255,0,0,0.25)
  //border: 1px solid $grey-7
  //background-color: $grey-10
  &.highlight-red:after
    background-color: rgba(255,0,0,0.3)
</style>
