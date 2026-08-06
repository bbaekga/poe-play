<template>
  <div v-if="emptyScarabItem" class="scarab-box empty"></div>
  <div v-else class="item-box scarab-box row flex-center" :class="`highlight${scarab.level}`">
    <q-img :src="scarab.icon" width="42px" height="42px" style="z-index: 2" />
    <div class="absolute-bottom-right" :class="`highlight${scarab.level}-text`" style="font-size: 11px; line-height: 1; bottom: 1px; right: 2px; z-index: 2">
      {{ scarab.chaos }}
    </div>
    <item-tooltip :item="scarab" max description></item-tooltip>
  </div>
</template>

<script setup lang="ts">
import {Scarab} from 'src/model/scarab'
import {computed} from 'vue'

import ItemTooltip from 'components/ItemTooltip.vue';

defineOptions({
  name: 'ScarabItem'
})

const props = defineProps<{
  scarab: Scarab,
}>()
const emptyScarabItem = computed(() => props.scarab.id === 'empty')
</script>

<style scoped lang="sass">
.scarab-group.vertical
  .scarab-box
    margin-right: 0
    margin-bottom: 3px
.scarab-box
  width: 48px
  height: 48px
  //border: 1px solid rgba(255,0,0,0.25)
  //border: 1px solid $grey-7
  //background-color: $grey-10
  margin-right: 3px
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
  //&.highlight0:after // 0 ~ 4.99
  //  background-color: transparent
  //&.highlight1:after // 5 ~ 9.99
  //  background-color: $yellow-4
  //&.highlight2:after // 10 ~ 19.99
  //  background-color: $amber-5
  //&.highlight3:after // 20 ~ 29.99
  //  background-color: $amber-7
  //&.highlight4:after // 30 ~ 39.99
  //  background-color: $orange-5
  //&.highlight5:after // 40 ~ 49.99
  //  background-color: $orange-6
  //&.highlight6:after // 50 ~ 59.99
  //  background-color: $orange-7
  //&.highlight7:after // 60 ~ 69.99
  //  background-color: $deep-orange-5
  //&.highlight8:after // 70 ~ 79.99
    //background-color: $deep-orange-6
  &.highlight9  // 80 ~
    &:after
      background-color: rgba(255,0,0,0.3)
    .q-img
      opacity: 1
</style>
