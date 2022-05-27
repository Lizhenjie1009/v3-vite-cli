import { Module } from 'vuex'
import { GlobalDataProps } from './index'
export interface OptionsState {
  o1: string
}

// 给子模块定义成Module类型
// Module<S, R>
//  S: 当前state的类型约束
//  R: 全局state的类型约束
//  因为在子模块会用到其他模块的state
const options: Module<OptionsState, GlobalDataProps> = {
  state: {
    o1: 'store/root/options/state'
  },
  getters: {
    getO1: (state, getters, rootSate) => {
      // rootSate.user.isLogin
      return state.o1
    }
  }
}

export default options
