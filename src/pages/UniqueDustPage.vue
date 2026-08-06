<template>
  <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
    <div v-show="fetchLoading" class="absolute flex flex-center" style="width: 100%; height: 50px; top: 50px;">
      <div class="loading-chaos">
        <q-img src="images/chaos.png" width="30px" />
      </div>
    </div>
  </transition>
  <q-page class="t-page">
    <div class="q-mx-auto unique-list">
      <div class="header row items-center">
        <div>이름</div>
        <div @click.stop="sortList('chaos', '')">
          <q-img src="images/chaos.png" width="20px" height="20px" class="t-mr-2" />카오스
          <span v-if="sorts.chaos == 'asc'" class="t-ml-3 cursor-pointer" @click.stop="sortList('chaos', 'desc')">⬆️</span>
          <span v-if="sorts.chaos == 'desc'" class="t-ml-3 cursor-pointer" @click.stop="sortList('chaos', 'asc')">⬇️</span>
        </div>
        <div @click.stop="sortList('divine', '')">
          <q-img src="images/divine.png" width="20px" height="20px" class="t-mr-2" />디바인
          <span v-if="sorts.divine == 'asc'" class="t-ml-3 cursor-pointer" @click.stop="sortList('divine', 'desc')">⬆️</span>
          <span v-if="sorts.divine == 'desc'" class="t-ml-3 cursor-pointer" @click.stop="sortList('divine', 'asc')">⬇️</span>
        </div>
        <div @click.stop="sortList('dustPerChaos', '')">
          가루/카오스
          <span v-if="sorts.dustPerChaos == 'asc'" class="t-ml-3 cursor-pointer" @click.stop="sortList('dustPerChaos', 'desc')">⬆️</span>
          <span v-if="sorts.dustPerChaos == 'desc'" class="t-ml-3 cursor-pointer" @click.stop="sortList('dustPerChaos', 'asc')">⬇️</span>
        </div>
        <div @click.stop="sortList('dustPerDivine', '')">
          가루/디바인
          <span v-if="sorts.dustPerDivine == 'asc'" class="t-ml-3 cursor-pointer" @click.stop="sortList('dustPerDivine', 'desc')">⬆️</span>
          <span v-if="sorts.dustPerDivine == 'desc'" class="t-ml-3 cursor-pointer" @click.stop="sortList('dustPerDivine', 'asc')">⬇️</span>
        </div>
        <div @click.stop="sortList('defaultDustAmount', '')">
          마석학 가루
          <span v-if="sorts.defaultDustAmount == 'asc'" class="t-ml-3 cursor-pointer" @click.stop="sortList('defaultDustAmount', 'desc')">⬆️</span>
          <span v-if="sorts.defaultDustAmount == 'desc'" class="t-ml-3 cursor-pointer" @click.stop="sortList('defaultDustAmount', 'asc')">⬇️</span>
        </div>
        <div @click.stop="sortList('quantityDustAmount', '')">
          Q.20% 마석학 가루
          <span v-if="sorts.quantityDustAmount == 'asc'" class="t-ml-3 cursor-pointer" @click.stop="sortList('quantityDustAmount', 'desc')">⬆️</span>
          <span v-if="sorts.quantityDustAmount == 'desc'" class="t-ml-3 cursor-pointer" @click.stop="sortList('quantityDustAmount', 'asc')">⬇️</span>
        </div>
      </div>
      <div v-for="(unique, index) in list" :key="index" class="tr row items-center unique-item">
        <div class="name">{{ unique.name }}</div>
        <div>{{ unique.chaos }}</div>
        <div>{{ unique.divine }}</div>
        <div>{{ unique.dustPerChaos }}</div>
        <div>{{ unique.dustPerDivine }}</div>
        <div class="dust">{{ unique.defaultDustAmount.toLocaleString() }}</div>
        <div class="dust">{{ unique.quantityDustAmount.toLocaleString() }}</div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import * as _ from 'lodash-es'
import {onMounted, ref} from 'vue';
import {UniqueItem} from 'src/model/unique';

defineOptions({
  name: 'UniqueDustPage'
})

onMounted(async () => {
  await getMetaData()
})

const fetchLoading = ref(false)
const list = ref<Array<UniqueItem>>([])
const sorts = ref({
  chaos: '',
  divine: '',
  dustPerChaos: 'desc',
  dustPerDivine: '',
  defaultDustAmount: '',
  quantityDustAmount: '',
})

async function getMetaData() {
  fetchLoading.value = true
  list.value = await UniqueItem.fetch()
  sortList('dustPerChaos', 'desc')
  setTimeout(() => {
    fetchLoading.value = false
  }, 1000)
}

type fieldKey = keyof typeof sorts.value
function sortList(field: fieldKey, type: string) {
  const oldType = sorts.value[field]
  _.forEach(sorts.value, (value: string, key: string) => {
    sorts.value[key as fieldKey] = ''
  })
  type SortType = 'asc' | 'desc'
  let sortType: SortType
  if (type === '') {
    sortType = oldType === 'desc' ? 'asc' : 'desc'
  } else {
    sortType = type as SortType
  }
  sorts.value[field] = sortType
  const _list = [...list.value]
  list.value = _.orderBy(_list, [field], [sortType])
}
</script>

<style scoped lang="sass">
.unique-list
  width: 1070px
  > .header
    border-bottom: 1px solid #ccc
    min-height: 32px
    > div
      text-align: center
  > .tr
    border-bottom: 1px solid #666
    min-height: 32px
    > div
      text-align: right
    .name
      color: #ef6916
      text-align: left
    > div:nth-child(2),
    > div:nth-child(3),
    > div:nth-child(4),
    > div:nth-child(5)
      padding-right: 15px
    .dust
      padding-right: 45px
  .header, .tr
    > div:nth-child(1)
      width: 250px
    > div:nth-child(2),
    > div:nth-child(3),
    > div:nth-child(4),
    > div:nth-child(5)
      width: 120px
    > div:nth-child(6),
    > div:nth-child(7)
      flex: 1 0
</style>
