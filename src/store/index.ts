import { createStore } from 'vuex'
import options, { OptionsState } from './options'

/**
 * ts：自动补全，类型检查
 */
export interface UserProps {
  isLogin: boolean
  userName?: string
}
export interface TemplateProps {
  id: number
  title: string
  coverImg: string
  author: string
  copiedCount: number
}
// 声明store根中的state类型
export interface RootState {
  user: UserProps
  templates: TemplateProps[]
}

// 声明全局store的state类型
export interface GlobalDataProps {
  user: UserProps
  templates: TemplateProps[]
  options: OptionsState
}

const testData: TemplateProps[] = [
  { id: 1, title: '1', coverImg: '1', author: '1', copiedCount: 1 },
  { id: 2, title: '2', coverImg: '2', author: '2', copiedCount: 2 },
  { id: 3, title: '3', coverImg: '3', author: '3', copiedCount: 3 },
  { id: 4, title: '4', coverImg: '4', author: '4', copiedCount: 4 },
  { id: 5, title: '5', coverImg: '5', author: '5', copiedCount: 5 },
  { id: 6, title: '6', coverImg: '6', author: '6', copiedCount: 6 }
]

const store = createStore<RootState>({
  state: {
    templates: testData,
    user: {
      isLogin: false
    }
  },
  getters: {
    getUserLogin1: state => state.user.isLogin,
    getUserLogin(state) {
      return state.user.isLogin
    },
    getTemplateById1: state => (id: number) =>
      state.templates.find(item => item.id === id),
    getTemplateById(state) {
      return (id: number) => {
        return state.templates.find(item => item.id === id)
      }
    }
  },
  mutations: {
    editIsLogin(state, name) {
      // state.user.userName = name
      state.user = { ...state.user, isLogin: true, userName: name }
    },
    logout(state) {
      // state.user.isLogin = false
      state.user = { isLogin: false }
    }
  },
  modules: {
    options
  }
})

export default store
