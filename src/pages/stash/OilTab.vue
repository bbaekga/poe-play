<template>
  <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
    <div v-show="fetchLoading" class="absolute flex flex-center" style="width: 100%; height: 50px; top: 0;">
      <div class="loading-chaos">
        <q-img src="images/chaos.png" width="30px" />
      </div>
    </div>
  </transition>
  <div class="oil-stash q-mx-auto">
    <div v-for="(oil, index) in oilList" :key="index" class="absolute" :style="{ top: `${oil.top}`, left: `${oil.left}` }">
      <oil-item :oil="oil"></oil-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from 'vue';
import {useInterval} from 'quasar';
import {Oil} from 'src/model/oil';

import OilItem from 'components/OilItem.vue';

defineOptions({
  name: 'OilTab'
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
const oilList = ref<Array<Oil>>([])

async function getMetaData() {
  fetchLoading.value = true
  setTimeout(() => {
    fetchLoading.value = false
  }, 3000)
  oilList.value = await Oil.fetch()
}
</script>

<style scoped lang="sass">
.oil-stash
  width: 800px
  height: 800px
  background-image: url('/images/oil-stash.png')
  background-size: 800px 800px
  background-repeat: no-repeat
  position: relative
  margin-top: 32px
</style>
