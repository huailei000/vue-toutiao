import { createStore } from 'vuex'

export default createStore({
  state: {
    msgCount: 10
  },
  mutations: {
    upDateMsgCount(state, num) {
      state.msgCount = num
    }
  },
  actions: {
  },
  modules: {
  }
})
