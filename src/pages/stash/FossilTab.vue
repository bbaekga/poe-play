<template>
  <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
    <div v-show="fetchLoading" class="absolute flex flex-center" style="width: 100%; height: 50px; top: 0;">
      <div class="loading-chaos">
        <q-img src="images/chaos.png" width="30px" />
      </div>
    </div>
  </transition>
  <div class="fossil-stash q-mx-auto">
    <div v-for="(fossil, index) in fossilList" :key="index" class="absolute" :style="{ top: `${fossil.top}`, left: `${fossil.left}` }">
      <fossil-item :fossil="fossil"></fossil-item>
    </div>
    <div v-for="(resonator, index) in resonatorList" :key="index" class="absolute" :style="{ top: `${resonator.top}`, left: `${resonator.left}` }">
      <resonator-item :resonator="resonator"></resonator-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from 'vue';
import {useInterval} from 'quasar';
import { Fossil, Resonator } from 'src/model/fossil';
import FossilItem from 'components/FossilItem.vue'
import ResonatorItem from 'components/ResonatorItem.vue'

defineOptions({
  name: 'FossilTab'
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

const { registerInterval, removeInterval } = useInterval()
const fetchLoading = ref(false)
const fossilList = ref<Array<Fossil>>([])
const resonatorList = ref<Array<Resonator>>([])

async function getMetaData() {
  fetchLoading.value = true
  setTimeout(() => {
    fetchLoading.value = false
  }, 3000)
  fossilList.value = await Fossil.fetch()
  resonatorList.value = await Resonator.fetch()
}
</script>

<style scoped lang="sass">
.fossil-stash
  width: 800px
  height: 800px
  background-image: url('/images/fossil-stash.png')
  background-size: 800px 800px
  background-repeat: no-repeat
  position: relative
  margin-top: 32px
</style>
