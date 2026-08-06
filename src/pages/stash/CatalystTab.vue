<template>
  <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
    <div v-show="fetchLoading" class="absolute flex flex-center" style="width: 100%; height: 50px; top: 0;">
      <div class="loading-chaos">
        <q-img src="images/chaos.png" width="30px" />
      </div>
    </div>
  </transition>
  <div class="catalyst-stash q-mx-auto">
    <div v-for="(catalyst, index) in catalystList" :key="index" class="absolute" :style="{ top: `${catalyst.top}`, left: `${catalyst.left}` }">
      <catalyst-item :catalyst="catalyst"></catalyst-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from 'vue';
import {useInterval} from 'quasar';
import {Catalyst} from 'src/model/catalyst';
import CatalystItem from 'components/CatalystItem.vue';

defineOptions({
  name: 'CatalystTab'
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
const catalystList = ref<Array<Catalyst>>([])

async function getMetaData() {
  fetchLoading.value = true
  setTimeout(() => {
    fetchLoading.value = false
  }, 3000)
  catalystList.value = await Catalyst.fetch()
}
</script>

<style scoped lang="sass">
.catalyst-stash
  width: 800px
  height: 800px
  background-image: url('/images/catalyst-stash.png')
  background-size: 800px 800px
  background-repeat: no-repeat
  position: relative
  margin-top: 32px
</style>
