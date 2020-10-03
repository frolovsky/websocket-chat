import { SET_NICKNAME, SET_ID } from '@/store/user/mutations'
import { GEN_ID } from '@/store/user/actions'

export const user = {
  namespaced: true,
  actions: {
    [GEN_ID](context) {
      const id = `uid_${Date.now()}`
      context.commit(SET_ID, id)
    }
  },
  mutations: {
    [SET_NICKNAME](state, nickname) {
      state.user.nickname = nickname;
    },
    [SET_ID](state, id) {
      state.user.id = id;
    }
  },
  state: () => ({
    user: {
      nickname: 'Guest',
      id: null
    }
  })
}