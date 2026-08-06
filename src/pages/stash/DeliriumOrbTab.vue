<template>
  <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
    <div v-show="fetchLoading" class="absolute flex flex-center" style="width: 100%; height: 50px; top: 0;">
      <div class="loading-chaos">
        <q-img src="images/chaos.png" width="30px" />
      </div>
    </div>
  </transition>
  <div class="delirium-orb-stash q-mx-auto">
    <div v-for="(orb, index) in list" :key="index" class="absolute" :style="{ top: `${orb.top}`, left: `${orb.left}` }">
      <delirium-orb-item :orb="orb"></delirium-orb-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from 'vue';
import {useInterval} from 'quasar';
import { DeliriumOrb } from 'src/model/deliriumOrb';

import DeliriumOrbItem from 'components/DeliriumOrbItem.vue';

defineOptions({
  name: 'DeliriumOrbTab'
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
const list = ref<Array<DeliriumOrb>>([])

async function getMetaData() {
  fetchLoading.value = true
  setTimeout(() => {
    fetchLoading.value = false
  }, 3000)
  list.value = await DeliriumOrb.fetch()
}
</script>

<style scoped lang="sass">
.delirium-orb-stash
  width: 800px
  height: 800px
  background-image: url('/images/delirium-orb-stash-3.29.png')
  background-size: 800px 800px
  background-repeat: no-repeat
  position: relative
  margin-top: 32px
</style>
