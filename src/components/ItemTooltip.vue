<template>
  <q-tooltip style="padding: 0">
    <div class="item-tooltip relative-position">
      <div class="tooltip-header flex items-center">
        <div class="item-name q-mx-auto">
          {{ item.name }}
        </div>
      </div>
      <div class="item-content column items-center">
        <div class="row items-center">
          <q-img src="images/chaos.png" width="20px"/>
          <div class="q-ml-xs">{{ item.chaos }}</div>
        </div>
        <div v-if="overDivine" class="row t-mt-10">
          <q-img src="images/divine.png" width="20px" height="20px" style="margin-top: -1px" />
          <div class="q-ml-xs">{{ divineValue }}</div>
        </div>
        <div v-else class="row t-mt-10">
          <q-img src="images/divine.png" width="20px" height="20px" style="margin-top: -1px" />
          <div class="q-ml-xs">1</div>
          <div class="t-ml-10 t-mr-6 t-text-16" style="line-height: 1.2">≈</div>
          <q-img :src="item.icon" width="20px" height="20px" />
          <div class="q-ml-xs">{{ quantityPerDivine }}</div>
        </div>
        <template v-if="max">
          <div class="item-separator"></div>
          <div class="text-center scarab-description">한도 : {{ item.max }}</div>
        </template>
        <template v-if="description">
          <div class="item-separator"></div>
          <div class="item-description text-center">
            <div v-for="desc in item.description" :key="desc">{{ desc }}</div>
          </div>
        </template>
      </div>
    </div>
  </q-tooltip>
</template>

<script setup lang="ts">
import {IItem} from 'src/model/interface';
import {computed} from 'vue';
import {store} from 'src/model/store';

defineOptions({
  name: 'ItemTooltip'
})

const props = defineProps<{
  item: IItem,
  max?: boolean,
  description?: boolean,
}>()

const overDivine = computed(() => props.item.chaos > store.CHAOS_PER_DIVINE)
const divineValue = computed(() => {
  const value = props.item.chaos / store.CHAOS_PER_DIVINE
  return value.toFixed(1)
})
const quantityPerDivine = computed(() => {
  const value = store.CHAOS_PER_DIVINE / props.item.chaos
  return Math.round(value)
})
</script>

<style scoped lang="sass">
.item-tooltip
  position: relative
  background: rgba(0,0,0,0.8)
  min-width: 365px
  font-size: 14px
  .item-separator
    background: url('/images/item-separator.png') center no-repeat
    width: 100%
    height: 8px
    margin: 4px 0
  .tooltip-header
    height: 34px
    background: url('/images/item-header-left.png') top left no-repeat, url('/images/item-header-right.png') top right no-repeat, url('/images/item-header-middle.png') top center repeat-x
  .item-name
    color: #aa9e82
    font-size: 16px
  .item-content
    padding: 16px 50px
  .item-description
    color: #88f
</style>
