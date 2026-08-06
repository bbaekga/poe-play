<template>
  <div class="item-box orb-box flex flex-center" :class="`highlight${orb.level}`">
    <q-img :src="orb.icon" width="56px" style="z-index: 2" />
    <div class="absolute-bottom-right" :class="`highlight${orb.level}-text`" style="font-size: 11px; line-height: 1; bottom: 2px; right: 4px; z-index: 2">
      {{ orb.chaos }}
    </div>
    <item-tooltip :item="orb" description></item-tooltip>
  </div>
</template>

<script setup lang="ts">
import {DeliriumOrb} from 'src/model/deliriumOrb';
import ItemTooltip from 'components/ItemTooltip.vue';

defineOptions({
  name: 'DeliriumOrbItem'
})

defineProps<{
  orb: DeliriumOrb
}>()

</script>

<style scoped lang="sass">
.orb-box
  width: 73px
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
