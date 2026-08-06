<template>
  <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
    <div v-show="fetchLoading" class="absolute flex flex-center" style="width: 100%; height: 50px; top: 0;">
      <div class="loading-chaos">
        <q-img src="images/chaos.png" width="30px" />
      </div>
    </div>
  </transition>
  <div class="essence-stash q-mx-auto">
    <div v-for="(group, index) in essenceGroups" :key="index" class="row essence-group" :class="group.class" :style="{ top: `${group.top}`, left: `${group.left}` }">
      <essence-item v-for="(essence, eIndex) in group.list" :key="`${index}-${eIndex}`" :essence="essence"></essence-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useInterval } from 'quasar'
import {Essence, EssenceGroup} from 'src/model/essence'
import EssenceItem from 'components/EssenceItem.vue';

defineOptions({
  name: 'EssenceTab'
})

onMounted(async () => {
  await getEssenceInfo()
  registerInterval(async () => {
    await getEssenceInfo()
  }, 1000 * 60 * 10)
})

onBeforeUnmount(() => {
  removeInterval()
})

const { registerInterval, removeInterval } = useInterval()
const fetchLoading = ref(false)
const essenceGroups = ref<Array<EssenceGroup>>([])

async function getEssenceInfo() {
  fetchLoading.value = true
  setTimeout(() => {
    fetchLoading.value = false
  }, 3000)
  essenceGroups.value = await Essence.fetch()
}
</script>

<style scoped lang="sass">
.essence-stash
  width: 800px
  height: 800px
  background-image: url('/images/essence-stash-3.29.png')
  background-size: 800px 800px
  background-repeat: no-repeat
  position: relative
  margin-top: 32px
.essence-group
  position: absolute
</style>
