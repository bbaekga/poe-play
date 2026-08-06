<template>
  <div class="item-box catalyst-box flex flex-center">
    <q-img :src="catalyst.icon" width="62px" style="z-index: 2" />
    <div class="absolute-bottom-right" style="font-size: 12px; line-height: 1; bottom: 2px; right: 4px; z-index: 2">
      {{ catalyst.chaos }}
    </div>
    <item-tooltip :item="catalyst" description></item-tooltip>
  </div>
</template>

<script setup lang="ts">
import {Catalyst} from 'src/model/catalyst';
import ItemTooltip from 'components/ItemTooltip.vue';

defineOptions({
  name: 'CatalystItem'
})

defineProps<{
  catalyst: Catalyst
}>()
</script>

<style scoped lang="sass">
.catalyst-box
  width: 72px
  height: 72px
</style>
