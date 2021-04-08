export const state = () => ({ posts: [], token: '', backendLoggedIn: false })

export const getters = {
  getToken: (state) => {
    return state.token
  },
  isBackendLoggedIn: (state) => {
    return state.backendLoggedIn
  },
}
export const mutations = {
  addToken: (state, t) => {
    state.token = t
  },
  updatePostdata: (state, data) => {
    state.posts = data
  },
  backendLoggedInState: (state) => {
    state.backendLoggedIn = !state.backendLoggedIn
  },
}
// export const actions = {
//   async getPosts({ state, commit }) {
//     if (state.posts.length) return
//     let res = ''
//     try {
//       res = await this.$axios.get('/api/item', {
//         headers: {
//           Authorization: 'Bearer ' + state.token,
//         },
//       })
//       commit('updatePostdata', res)
//     } catch (err) {
//       // eslint-disable-next-line no-console
//       console.log(err)
//     }
//   },
// }
