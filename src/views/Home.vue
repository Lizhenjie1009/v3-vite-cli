<template>
  <h1>1</h1>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
console.log(router)
setTimeout(() => {
  router.push('/draw')
}, 2000)
</script>
