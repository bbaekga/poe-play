<template>
  <div v-if="emptyEssenceItem" class="essence-box empty"></div>
  <div v-else class="item-box essence-box row flex-center" :class="`highlight${essence.level}`">
    <q-img :src="essence.icon" width="54px" height="54px" style="z-index: 2" />
    <div class="absolute-bottom-right" :class="`highlight${essence.level}-text`" style="font-size: 11px; line-height: 1; bottom: 3px; right: 3px; z-index: 2">
      {{ essence.chaos }}
    </div>
    <item-tooltip :item="essence" description></item-tooltip>
  </div>
</template>

<script setup lang="ts">
import {Essence} from 'src/model/essence'
import {computed} from 'vue'

import ItemTooltip from 'components/ItemTooltip.vue';

defineOptions({
  name: 'EssenceItem'
})

const props = defineProps<{
  essence: Essence,
}>()
const emptyEssenceItem = computed(() => props.essence.id === 'empty')
</script>

<style scoped lang="sass">
.essence-group.vertical
  .essence-box
    margin-right: 0
    margin-bottom: 3px
.essence-box
  width: 62.5px
  height: 60px
  margin-right: 0px
  &.empty
    border-color: transparent
    background-color: transparent
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
