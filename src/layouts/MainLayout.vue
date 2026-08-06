<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-blue-grey-8 row flex-center">
        <div class="row items-center" :style="toolbarStyle">
          <q-toolbar-title shrink class="q-mr-md cursor-pointer" @click="$router.push({ name: 'main' })">
              POE PLAY <span class="t-text-10">by bbaekga</span>
          </q-toolbar-title>
          <q-btn label="창고" :color="stashPage ? 'blue-5' : ''" flat :to="{ name: 'stash' }" />
          <q-btn label="야수" :color="beastsPage ? 'blue-5' : ''" flat :to="{ name: 'beasts' }" />
          <q-btn label="마석학가루" :color="uniqueDustPage ? 'blue-5' : ''" flat :to="{ name: 'uniqueDust' }" />
          <!--<q-btn label="재조합 계산기" :color="reCombinationPage ? 'blue-5' : ''" flat :to="{ name: 'reCombination' }" />-->
        </div>
        <div class="absolute-center row t-text-20 t-pt-5">
          <q-img src="images/divine.png" width="24px" height="24px" />
          <div class="q-ml-xs">1</div>
          <div class="q-ml-md t-mr-14">=</div>
          <q-img src="images/chaos.png" width="27px" height="27px" />
          <div class="q-ml-xs">{{ store.CHAOS_PER_DIVINE }}</div>
          <div class="t-text-11 t-pt-10 t-ml-10">( {{ lastFetchAt }} )</div>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container class="column flex-center bg-grey-10">
      <div class="wallpaper"></div>
      <div class="page-container">
        <div class="text-right t-py-3">
          현재 리그 : {{ currentLeague }}
          <span v-if="leagueState.isFallback" class="t-text-11 text-orange-7">
            (리그 조회 실패, 기본값 사용)
          </span>
        </div>
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import {computed, onBeforeMount, onBeforeUnmount, onMounted, ref} from 'vue'
import { useRouter } from 'vue-router'
import {useQuasar, useInterval} from 'quasar'
import { store } from 'src/model/store'
import { leagueState } from 'src/model/league'
import moment from 'moment'

const $q = useQuasar()
const router = useRouter()
const currentLeague = computed(() => leagueState.name || '조회 중...')
const toolbarStyle = computed(() => {
  return {
    width: '100vw',
    maxWidth: '1400px'
  }
})
const currentPage = computed(() => {
  return router.currentRoute.value.name
})
const stashPage = computed(() => {
  return currentPage.value === 'stash'
})
const beastsPage = computed(() => {
  return currentPage.value === 'beasts'
})
const uniqueDustPage = computed(() => {
  return currentPage.value === 'uniqueDust'
})
// const reCombinationPage = computed(() => {
//   return currentPage.value === 'reCombination'
// })
onBeforeMount(() => {
  $q.dark.set(true)
})
onMounted(async () => {
  await getDivineValue()
  registerInterval(async () => {
    await getDivineValue()
  }, 1000 * 60 * 30)
})
onBeforeUnmount(() => {
  removeInterval()
})

const { registerInterval, removeInterval } = useInterval()
const lastFetchAt = ref('')

async function getDivineValue() {
  await store.getMetaData()
  lastFetchAt.value = moment().format('YYYY-MM-DD HH:mm')
}
</script>

<style lang="sass">
.wallpaper
  position: absolute
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  background-image: url('/images/wallpaper.jpg')
  background-repeat: no-repeat
  background-size: 100vw 100vh
  background-position-y: 50px
  opacity: 0.3
.page-container
  width: 100vw
  max-width: 1400px
</style>
