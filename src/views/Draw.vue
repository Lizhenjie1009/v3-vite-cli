<template>
  <h1 @click="editIsLogin">2</h1>
  <h2>{{ isLogin }}</h2>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
const store = useStore<GlobalDataProps>()
let isLogin = computed(() => store.state.user.isLogin)

let editIsLogin = () => {
  store.commit('editIsLogin', !isLogin.value)
}
</script>
