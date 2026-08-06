<template>
  <q-page class="t-page">
    <q-tabs v-model="currentTab" class="bg-blue-grey-7 text-grey-6" active-bg-color="blue-5" active-color="white">
      <q-tab name="scarab" label="갑충석" />
      <q-tab name="essence" label="에센스" />
      <q-tab name="betrayal" label="배신" />
      <q-tab name="fossil" label="탐광" />
      <q-tab name="oil" label="역병" />
      <q-tab name="delirium-orb" label="환영" />
      <q-tab name="catalyst" label="결전" />
      <q-tab name="currency" label="기본화폐" />
      <q-tab name="influence" label="영향력화폐" />
    </q-tabs>
    <q-tab-panels v-model="currentTab" style="background: transparent; padding-bottom: 200px" >
      <q-tab-panel name="currency">
        <currency-tab></currency-tab>
      </q-tab-panel>
      <q-tab-panel name="influence">
        <influence-tab></influence-tab>
      </q-tab-panel>
      <q-tab-panel name="scarab">
        <scarab-tab></scarab-tab>
      </q-tab-panel>
      <q-tab-panel name="essence">
        <essence-tab></essence-tab>
      </q-tab-panel>
      <q-tab-panel name="betrayal">
        <betrayal-tab></betrayal-tab>
      </q-tab-panel>
      <q-tab-panel name="fossil">
        <fossil-tab></fossil-tab>
      </q-tab-panel>
      <q-tab-panel name="oil">
        <oil-tab></oil-tab>
      </q-tab-panel>
      <q-tab-panel name="delirium-orb">
        <delirium-orb-tab></delirium-orb-tab>
      </q-tab-panel>
      <q-tab-panel name="catalyst">
        <catalyst-tab></catalyst-tab>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CurrencyTab from 'pages/stash/CurrencyTab.vue';
import InfluenceTab from 'pages/stash/InfluenceTab.vue';
import ScarabTab from 'pages/stash/ScarabTab.vue';
import EssenceTab from 'pages/stash/EssenceTab.vue';
import BetrayalTab from 'pages/stash/BetrayalTab.vue';
import FossilTab from 'pages/stash/FossilTab.vue';
import OilTab from 'pages/stash/OilTab.vue';
import DeliriumOrbTab from 'pages/stash/DeliriumOrbTab.vue';
import CatalystTab from 'pages/stash/CatalystTab.vue';

defineOptions({
  name: 'StashPage'
})

const currentTab = ref('scarab')
</script>

<style scoped lang="sass">

</style>
