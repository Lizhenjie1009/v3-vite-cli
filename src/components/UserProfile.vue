<template>
  <h1 style="color: red" @click="login">
    登录状态: {{ store.state.user.isLogin ? '登录' : '未登录' }}
    <h2>{{ store.state.user.userName }}</h2>
  </h1>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
const store = useStore<GlobalDataProps>()

const login = () => {
  if (!store.state.user.isLogin) return store.commit('editIsLogin', 'zhangsan')
  store.commit('logout')
}
</script>
