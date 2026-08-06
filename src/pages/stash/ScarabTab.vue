<template>
  <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
    <div v-show="fetchLoading" class="absolute flex flex-center" style="width: 100%; height: 50px; top: 0;">
      <div class="loading-chaos">
        <q-img src="images/chaos.png" width="30px" />
      </div>
    </div>
  </transition>
  <div class="scarab-stash q-mx-auto">
    <div v-for="(group, index) in scarabGroups" :key="index" class="row scarab-group" :class="group.class" :style="{ top: `${group.top}`, left: `${group.left}` }">
      <scarab-item v-for="(scarab, sIndex) in group.list" :key="`${index}-${sIndex}`" :scarab="scarab"></scarab-item>
    </div>
    <div v-for="(group, index) in scarabGroupsVertical" :key="index" class="column scarab-group" :class="group.class" :style="{ top: `${group.top}`, left: `${group.left}` }">
      <scarab-item v-for="(scarab, sIndex) in group.list" :key="`${index}-${sIndex}`" :scarab="scarab"></scarab-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useInterval } from 'quasar'
import {Scarab, ScarabGroup} from 'src/model/scarab'
import ScarabItem from 'components/ScarabItem.vue';

defineOptions({
  name: 'ScarabTab'
})

onMounted(async () => {
  await getScarabInfo()
  registerInterval(async () => {
    await getScarabInfo()
  }, 1000 * 60 * 10)
})

onBeforeUnmount(() => {
  removeInterval()
})

const { registerInterval, removeInterval } = useInterval()
const fetchLoading = ref(false)
const scarabGroups = ref<Array<ScarabGroup>>([])
const scarabGroupsVertical = ref<Array<ScarabGroup>>([])

async function getScarabInfo() {
  fetchLoading.value = true
  setTimeout(() => {
    fetchLoading.value = false
  }, 3000)
  scarabGroups.value = await Scarab.fetch()
  scarabGroupsVertical.value = scarabGroups.value.splice(scarabGroups.value.length - 2, 2)
}
</script>



<style scoped lang="sass">
.scarab-stash
  width: 800px
  height: 800px
  background-image: url('/images/scarab-stash-3.29.png')
  background-size: 800px 800px
  background-repeat: no-repeat
  position: relative
  margin-top: 32px
.scarab-group
  position: absolute
.scarab-type-icon
  z-index: 4
  top: -12px
  left: -16px
</style>
