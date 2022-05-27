<template>
  <h1 @click="editIsLogin">2</h1>
  <h2>{{ isLogin }}</h2>
  <template-list :list="templateData" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import { GlobalDataProps, TemplateProps } from '../store'
import TemplateList from '../components/TemplateList.vue'
// useStore：传一个泛型，补全提示
const store = useStore<GlobalDataProps>()
let isLogin = computed(() => store.state.user.isLogin)
const templateData = computed(() => store.state.templates)
// computed：传一个泛型，补全提示
const template = computed<TemplateProps>(() =>
  store.getters.getTemplateById1(2)
)

let editIsLogin = () => {
  store.commit('editIsLogin', !isLogin.value)
}

console.log('getters-login-status', store.getters.getUserLogin1)
console.log('getters-tmplateById-fn', template.value.title)
console.log('store-modules', store.state.options.o1)
</script>
