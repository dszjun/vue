const user = {
  state: {
    token: undefined,
    data: undefined
  },
  mutations: {
    SET_DATA: (state, data) => {
      state.data = data
    }
  },
  actions: {
    GetUserInfo ({ commit }) {
      return new Promise((resolve) => {
        commit('SET_DATA')
        resolve()
      })
    }
  }
}

export default user
