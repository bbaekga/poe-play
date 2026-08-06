<template>
  <q-page class="t-page">
    <div class="row items-center no-wrap reg-exp-box q-mx-auto q-mb-lg">
      <div class="t-mr-10" style="font-size: 24px">👍🏻</div>
      <div class="q-mr-md" style="font-size: 20px">
        🦍🦂🐸
      </div>
      <div class="row items-center col-fit">{{ preciousRegExpString }}</div>
      <q-icon name="sym_r_content_copy" color="white" size="24px" class="cursor-pointer" @click="copyPreciousRegExp" />
    </div>
    <div class="row items-center no-wrap reg-exp-box q-mx-auto q-mb-lg">
      <div class="t-mr-10" style="font-size: 24px">👎🏻</div>
      <div class="q-mr-md" style="font-size: 20px">
        🙅🏻💣🗑️
      </div>
      <div class="row items-center col-fit text-red-4">{{ garbageRegExpString }}</div>
      <q-icon name="sym_r_content_copy" color="white" size="24px" class="cursor-pointer" @click="copyGarbageRegExp" />
    </div>
    <div class="q-mx-auto" style="width: 300px; padding-bottom: 200px">
      <div v-for="(beast, index) in list" :key="index" class="row items-center q-mb-sm cursor-pointer" :class="pricelessClass(beast.chaos)" @click="onBeastClicked(beast)">
        <q-checkbox v-model="beast.selected" dense @update:model-value="makeRegExp" />
        <div class="q-ml-sm">{{ beast.name }}</div>
        <div class="text-right col-grow">{{ beast.chaos }}</div>
        <q-img src="images/chaos.png" class="q-ml-xs" width="20px" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">

import {ref, onMounted, onBeforeUnmount } from 'vue';
import { useInterval } from 'quasar'
import { poeGet } from 'src/model/poeApi'
import { PoeResponse } from 'src/model/interface'
import {Beast, BeastResponse, beastInfos } from 'src/model/beast';
import { useQuasar } from 'quasar'
import * as _ from 'lodash-es'

defineOptions({
  name: 'BeastsPage'
})

onMounted(async () => {
  await getMetaData()
  registerInterval(async () => {
    await getMetaData()
  }, 1000 * 60 * 10)
})

onBeforeUnmount(() => {
  removeInterval()
})

const $q = useQuasar()
const { registerInterval, removeInterval } = useInterval()
const list = ref<Array<Beast>>([])
const preciousRegExpString = ref('')
const garbageRegExpString = ref('')

async function getMetaData() {
  const response = await poeGet<PoeResponse<BeastResponse>>('Beast')
  const res: BeastResponse[] = response.data.lines
  const beastIds = beastInfos.map(b => b.id)
  res.forEach(data => {
    const id = data.detailsId
    if (beastIds.includes(id)) {
      list.value.push(new Beast(data))
    }
  })
}

function pricelessClass(chaos: string) {
  const value = Number(chaos)
  if (value >= 300) {
    return 'text-red'
  } else if (value >= 200) {
    return 'text-orange-7'
  } else if (value >= 100) {
    return 'text-amber-7'
  } else if (value >= 50) {
    return 'text-yellow-5'
  } else if (value >= 20) {
    return 'text-yellow-2'
  } else if (value >= 10) {
    return ''
  }
  return 'text-grey-7'
}

function onBeastClicked(beast: Beast) {
  beast.selected = !beast.selected
  makeRegExp()
}

function makeRegExp() {
  makePreciousRegExp()
  makeGarbageRegExp()
}

function makePreciousRegExp() {
  const precious = list.value.filter(b => b.selected)
  const preciousRegExps: Array<string> = _.orderBy(precious, ['regExp']).map(b => b.regExp)
  preciousRegExpString.value = getRegGroups(preciousRegExps)
}

function makeGarbageRegExp() {
  const precious = list.value.filter(b => b.selected)
  if (!precious.length) {
    garbageRegExpString.value = ''
  } else {
    const garbage = list.value.filter(b => !b.selected)
    const garbageRegExps: Array<string> = _.orderBy(garbage, ['regExp']).map(b => b.regExp)
    garbageRegExpString.value = getRegGroups(garbageRegExps)
  }
}

function getRegGroups(list: Array<string>) {
  interface IGroup {
    t: string,
    s: Array<string>
  }

  const groups: Array<IGroup> = []
  list.forEach(g => {
    const regExps = g.split('.')
    const group = groups.find(_g => _g.t === regExps[0])
    if (group) {
      group.s.push(regExps[1])
    } else {
      groups.push({ t: regExps[0], s: [regExps[1]] })
    }
  })
  const regGroups: Array<string> = []
  groups.forEach(g => {
    if (g.s.length > 1) {
      regGroups.push(`${g.t}.[${g.s.join('')}]`)
    } else {
      regGroups.push(`${g.t}.${g.s}`)
    }
  })
  return regGroups.join('|')
}

function copyPreciousRegExp() {
  copyClipboard(preciousRegExpString.value)
}

function copyGarbageRegExp() {
  copyClipboard(garbageRegExpString.value)
}

function copyClipboard(value: string) {
  if (value && value.length > 0) {
    navigator.clipboard.writeText(value).then(() => {
      $q.notify({
        position: 'top',
        color: 'light-blue-7',
        message: '정규식이 클립보드에 복사되었습니다.'
      })
    })
  } else {
    $q.notify({
      position: 'top',
      color: 'negative',
      message: '야수를 선택해 주세요.'
    })
  }
}

</script>

<style scoped lang="sass">
.currency-type
  opacity: 0.4
  filter: grayscale(1)
  &.active-currency
    opacity: 1
    filter: grayscale(0)
.reg-exp-box
  border: 1px solid $grey-5
  width: 1000px
  min-height: 50px
  padding: 12px 16px
  color: $light-blue-7
  font-size: 16px
</style>
