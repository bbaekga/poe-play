<template>
  <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
    <div v-show="fetchLoading" class="absolute flex flex-center" style="width: 100%; height: 50px; top: 0;">
      <div class="loading-chaos">
        <q-img src="images/chaos.png" width="30px" />
      </div>
    </div>
  </transition>
  <div class="betrayal-stash q-mx-auto">
    <div v-for="(item, index) in list" :key="index" class="absolute" :style="{ top: `${item.top}`, left: `${item.left}` }">
      <allflame-item :item="item"></allflame-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onBeforeUnmount, onMounted} from 'vue';
import { useInterval } from 'quasar'
import {Allflame} from 'src/model/allflame';
import AllflameItem from 'components/AllflameItem.vue';

defineOptions({
  name: 'BetrayalTab'
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
const list = ref<Array<Allflame>>([])

async function getMetaData() {
  fetchLoading.value = true
  setTimeout(() => {
    fetchLoading.value = false
  }, 3000)
  list.value = await Allflame.fetch()
}

</script>

<style scoped lang="sass">
.betrayal-stash
  width: 800px
  height: 800px
  background-image: url('/images/betrayal-stash-3.29.png')
  background-size: 800px 800px
  background-repeat: no-repeat
  position: relative
  margin-top: 32px
</style>
