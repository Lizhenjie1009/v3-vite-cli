<template>
  <a-row>
    <a-col v-for="item in list" :key="item.id" :span="6">
      {{ item.author }}
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { TemplateProps } from '../store'
import { defineProps, PropType } from 'vue'
// PropType: props约束类型，传一个泛型
defineProps({
  list: {
    type: Array as PropType<TemplateProps[]>,
    default: () => []
  }
})
</script>
