export default {
  addList: (state, x) => {
    state.dat.txt.push(x)
  },
  removeList: (state, x) => {
    state.dat.txt.splice(x, 1)
  }
}
