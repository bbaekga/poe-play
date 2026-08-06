<template>
  <q-page class="t-page">
    <div class="row q-gutter-x-md q-mx-auto full-height" style="width: 90%">
      <div>
        <div class="row q-gutter-x-md">
          <div style="width: 290px">
            <div class="item-label">Item 1</div>
            <div class="row items-center q-px-sm q-mt-md p-bg" style="height: 36px">
              <div>Prefix</div>
              <q-space />
              <q-btn v-if="mod1P.length < 3" label="추가" size="sm" outline @click="addModifier('mod1P')" />
            </div>
            <div class="q-gutter-y-sm q-py-sm" style="height: 160px">
              <div v-for="(m, i) in mod1P" :key="i" class="row items-center q-gutter-x-md">
                <q-input v-model="m.identifier" color="white" outlined dense class="col-fit" input-class="text-white" />
                <q-checkbox label="베타속성" v-model="m.isExclusive" dense class="q-ml-md" />
                <q-icon name="sym_r_delete" size="20px" class="cursor-pointer" @click="removeModifier('mod1P', i)" />
              </div>
            </div>
            <div class="row items-center q-px-sm q-mt-md s-bg" style="height: 36px">
              <div>Suffix</div>
              <q-space/>
              <q-btn v-if="mod1S.length < 3" label="추가" size="sm" outline @click="addModifier('mod1S')"/>
            </div>
            <div class="q-gutter-y-sm q-py-sm" style="height: 160px">
              <div v-for="(m, i) in mod1S" :key="i" class="row items-center q-gutter-x-md">
                <q-input v-model="m.identifier" color="white" outlined dense class="col-fit" input-class="text-white"/>
                <q-checkbox label="베타속성" v-model="m.isExclusive" dense class="q-ml-md"/>
                <q-icon name="sym_r_delete" size="20px" class="cursor-pointer" @click="removeModifier('mod1S', i)"/>
              </div>
            </div>
          </div>
          <div style="width: 290px">
            <div class="item-label">Item 2</div>
            <div class="row items-center q-px-sm q-mt-md p-bg" style="height: 36px">
              <div>Prefix</div>
              <q-space/>
              <q-btn v-if="mod2P.length < 3" label="추가" size="sm" outline @click="addModifier('mod2P')"/>
            </div>
            <div class="q-gutter-y-sm q-py-sm" style="height: 160px">
              <div v-for="(m, i) in mod2P" :key="i" class="row items-center q-gutter-x-md">
                <q-input v-model="m.identifier" color="white" outlined dense class="col-fit" input-class="text-white"/>
                <q-checkbox label="베타속성" v-model="m.isExclusive" dense class="q-ml-md"/>
                <q-icon name="sym_r_delete" size="20px" class="cursor-pointer" @click="removeModifier('mod2P', i)"/>
              </div>
            </div>
            <div class="row items-center q-px-sm q-mt-md s-bg" style="height: 36px">
              <div>Suffix</div>
              <q-space/>
              <q-btn v-if="mod2S.length < 3" label="추가" size="sm" outline @click="addModifier('mod2S')"/>
            </div>
            <div class="q-gutter-y-sm q-py-sm" style="height: 160px">
              <div v-for="(m, i) in mod2S" :key="i" class="row items-center q-gutter-x-md">
                <q-input v-model="m.identifier" color="white" outlined dense class="col-fit" input-class="text-white"/>
                <q-checkbox label="베타속성" v-model="m.isExclusive" dense class="q-ml-md"/>
                <q-icon name="sym_r_delete" size="20px" class="cursor-pointer" @click="removeModifier('mod2S', i)"/>
              </div>
            </div>
          </div>
        </div>
        <div class="row flex-center q-mt-xl q-gutter-x-md">
          <q-btn label="Re-Combination" color="blue-5" @click="run"/>
          <q-btn label="clear" color="grey-5" @click="clear"/>
        </div>
      </div>
      <q-separator vertical />
      <div class="column" style="width: 290px">
        <div class="item-label">Result</div>
        <q-scroll-area class="col-fit q-pr-md">
          <div v-for="(r, i) in result" :key="i" class="">
            <div class="bg-grey-7 row items-center probability">{{ r.probability }} %</div>
            <div v-if="r.hasPrefix" class="q-pa-xs p-bg">
              <template v-for="(m, mIndex) in r.modifiers">
                <div v-if="m.isPrefix" :key="`${i}-${mIndex}`" class="row">
                  <div class="p-color" style="width: 16px">P</div>
                  <div class="text-grey-4" style="width: 20px">{{ m.isExclusive ? 'E' : '' }}</div>
                  <div>{{ m.identifier }}</div>
                </div>
              </template>
            </div>
            <div v-if="r.hasSuffix" class="q-pa-xs s-bg">
              <template v-for="(m, mIndex) in r.modifiers">
                <div v-if="!m.isPrefix" :key="`${i}-${mIndex}`" class="row">
                  <div class="s-color" style="width: 16px">S</div>
                  <div class="text-grey-4" style="width: 20px">{{ m.isExclusive ? 'E' : '' }}</div>
                  <div>{{ m.identifier }}</div>
                </div>
              </template>
            </div>
          </div>
        </q-scroll-area>
      </div>
      <div class="column" style="width: 290px">
        <div class="item-label">Net Result</div>
        <q-scroll-area class="col-fit q-pr-md">
          <div v-for="(r, i) in netResult" :key="i" class="">
            <div class="bg-grey-7 row items-center probability">{{ r.probability.toFixed(1) }} %</div>
            <div v-if="r.hasPrefix" class="q-pa-xs p-bg">
              <template v-for="(m, mIndex) in r.modifiers">
                <div v-if="m.isPrefix" :key="`${i}-${mIndex}`" class="row">
                  <div class="p-color" style="width: 16px">P</div>
                  <div class="text-grey-4" style="width: 20px">{{ m.isExclusive ? 'E' : '' }}</div>
                  <div>{{ m.identifier }}</div>
                </div>
              </template>
            </div>
            <div v-if="r.hasSuffix" class="q-pa-xs s-bg">
              <template v-for="(m, mIndex) in r.modifiers">
                <div v-if="!m.isPrefix" :key="`${i}-${mIndex}`" class="row">
                  <div class="s-color" style="width: 16px">S</div>
                  <div class="text-grey-4" style="width: 20px">{{ m.isExclusive ? 'E' : '' }}</div>
                  <div>{{ m.identifier }}</div>
                </div>
              </template>
            </div>
          </div>
        </q-scroll-area>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {Entity, Modifier, runCombination} from 'src/model/reCombination'
import { useQuasar } from 'quasar'
import * as _ from 'lodash-es'

defineOptions({
  name: 'ReCombinationPage'
})

const $q = useQuasar()

const mod1P = ref<Array<Modifier>>([
  new Modifier('번피', true, false),
  new Modifier('냉피', true, false),
  new Modifier('베타1', true, true),
])
const mod1S = ref<Array<Modifier>>([
  new Modifier('공속', false, false),
  new Modifier('베타3', false, true),
  new Modifier('멀크', false, true),
])
const mod2P = ref<Array<Modifier>>([
  new Modifier('화피', false, false),
  new Modifier('베타1', false, true),
  new Modifier('베타2', false, true),
])
const mod2S = ref<Array<Modifier>>([
  new Modifier('공속', false, false),
  new Modifier('치피배', false, false),
  new Modifier('멀크', false, true),
])
const result = ref<Array<Entity>>()
const netResult = ref<Array<Entity>>()

function getModifier(key: string) {
  let modifier = null
  if (key === 'mod1P') {
    modifier = mod1P
  } else if (key === 'mod1S') {
    modifier = mod1S
  } else if (key === 'mod2P') {
    modifier = mod2P
  } else if (key === 'mod2S') {
    modifier = mod2S
  }
  return modifier
}

function addModifier(key: string) {
  const modifier = getModifier(key)
  if (modifier && modifier.value.length < 3) {
    modifier.value.push(new Modifier())
  }
}

function removeModifier(key: string, index: number) {
  const modifier = getModifier(key)
  if (modifier) {
    modifier.value.splice(index, 1)
  }
}

function clear() {
  mod1P.value = []
  mod1S.value = []
  mod2P.value = []
  mod2S.value = []
}

function run() {
  if (!validate()) {
    return
  }
  const calResult = runCombination(mod1P.value, mod1S.value, mod2P.value, mod2S.value)
  result.value = _.orderBy(calResult.entities, ['probability'], ['desc'])
  netResult.value = _.orderBy(calResult.netEntities, ['probability'], ['desc'])
}

function validate() {
  let valid = [...mod1P.value, ...mod1S.value, ...mod2P.value, ...mod2S.value].length > 0
  valid = valid && mod1P.value.filter(m => m.identifier && m.identifier?.length > 0).length === mod1P.value.length
  valid = valid && mod1S.value.filter(m => m.identifier && m.identifier?.length > 0).length === mod1S.value.length
  valid = valid && mod2P.value.filter(m => m.identifier && m.identifier?.length > 0).length === mod2P.value.length
  valid = valid && mod2S.value.filter(m => m.identifier && m.identifier?.length > 0).length === mod2S.value.length
  if (!valid) {
    $q.notify({
      position: 'top',
      color: 'negative',
      message: '속성값을 입력해 주세요.'
    })
  }
  return valid
}
</script>

<style scoped lang="sass">
.item-label
  font-size: 16px
  color: $blue-2
.col-fit
  flex: 1 0

.p-color
  color: #ec7676
.s-color
  color: #7aaff1
.p-bg
  background-color: rgba(236, 118, 118, 0.2)
.s-bg
  background-color: rgba(122, 175, 241, 0.2)
.probability
  height: 28px
  padding: 0 10px
</style>
