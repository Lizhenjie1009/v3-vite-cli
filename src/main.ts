import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

// 引入组件库
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

createApp(App).use(router).use(Antd).mount('#app')
