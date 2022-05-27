<template>
  <h1>3</h1>
  <pre>{{ route }}</pre>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route)
</script>

<script lang="ts">
export default {
  name: 'Detail'
}
</script>
