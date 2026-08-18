<template>
  <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
    <div v-show="fetchLoading" class="absolute flex flex-center" style="width: 100%; height: 50px; top: 0;">
      <div class="loading-chaos">
        <q-img src="images/chaos.png" width="30px" />
      </div>
    </div>
  </transition>
  <div class="currency-stash q-mx-auto">
    <div v-for="(group, index) in currencyGroups" :key="index" class="row currency-group" :class="group.class" :style="{ top: `${group.top}`, left: `${group.left}` }">
      <currency-item v-for="(currency, cIndex) in group.list" :key="`${index}-${cIndex}`" :currency="currency"></currency-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useInterval } from 'quasar'
import {Currency, CurrencyGroup} from 'src/model/currency'
import CurrencyItem from 'components/CurrencyItem.vue';

defineOptions({
  name: 'CurrencyTab'
})

onMounted(async () => {
  await getCurrencyInfo()
  registerInterval(async () => {
    await getCurrencyInfo()
  }, 1000 * 60 * 10)
})

onBeforeUnmount(() => {
  removeInterval()
})

const { registerInterval, removeInterval } = useInterval()
const fetchLoading = ref(false)
const currencyGroups = ref<Array<CurrencyGroup>>([])

async function getCurrencyInfo() {
  fetchLoading.value = true
  setTimeout(() => {
    fetchLoading.value = false
  }, 3000)
  currencyGroups.value = await Currency.fetch()
}
</script>

<style scoped lang="sass">
.currency-stash
  width: 800px
  height: 800px
  background-image: url('/images/currency-stash-3.29.png')
  background-size: 800px 800px
  background-repeat: no-repeat
  position: relative
  margin-top: 32px
.currency-group
  position: absolute
</style>
