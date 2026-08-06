<template>
  <q-page class="t-page">
  </q-page>
</template>

<script setup lang="ts">


import {onMounted} from 'vue';
import { useRouter } from 'vue-router'
import routes from 'src/router/routes'

defineOptions({
  name: 'IndexPage'
});

const router = useRouter()

onMounted(() => {
  const queryString = window.location.search
  if (queryString && queryString.indexOf('?p=') === 0) {
    const page = queryString.replace('?p=', '')
    const pageNames: Array<string> = []
    routes.forEach(route => {
      if (route.children) {
        pageNames.push(...route.children.map(c => String(c.name)))
      }
    })
    if (pageNames.includes(page)) {
      router.push({ name: page })
    }
  }
})

</script>
