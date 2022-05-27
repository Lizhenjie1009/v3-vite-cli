import { createStore } from 'vuex'
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
// 声明store中的state类型
export interface GlobalDataProps {
  user: UserProps
  templates: TemplateProps[]
}

const testData: TemplateProps[] = [
  { id: 1, title: '1', coverImg: '1', author: '1', copiedCount: 1 },
  { id: 2, title: '2', coverImg: '2', author: '2', copiedCount: 2 },
  { id: 3, title: '3', coverImg: '3', author: '3', copiedCount: 3 },
  { id: 4, title: '4', coverImg: '4', author: '4', copiedCount: 4 },
  { id: 5, title: '5', coverImg: '5', author: '5', copiedCount: 5 },
  { id: 6, title: '6', coverImg: '6', author: '6', copiedCount: 6 }
]

const store = createStore<GlobalDataProps>({
  state: {
    templates: testData,
    user: {
      isLogin: false
    }
  },
  mutations: {
    editIsLogin(state, bool) {
      state.user.isLogin = bool
    }
  }
})

export default store
