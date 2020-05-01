export default {
  addList: ({ commit }, x) => {
    x = x.trim()
    if (x.length !== 0) {
      commit('addList', x)
    }
  },
  removeList: ({ commit }, x) => {
    commit('removeList', x)
  }
}
