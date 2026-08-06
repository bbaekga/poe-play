<template>
  <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
    <div v-show="fetchLoading" class="absolute flex flex-center" style="width: 100%; height: 50px; top: 0;">
      <div class="loading-chaos">
        <q-img src="images/chaos.png" width="30px" />
      </div>
    </div>
  </transition>
  <div class="currency-stash q-mx-auto">

  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

defineOptions({
  name: 'CurrencyTab'
})

const fetchLoading = ref(false)
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
</style>
