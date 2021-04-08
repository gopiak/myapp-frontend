<template>
  <div class="container">
    <h3>Welcome to Dev Space</h3>

    <div class="posts"></div>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  fetch() {
    if (this.$auth.loggedIn && !this.$store.state.backendLoggedIn) {
      const bearer = this.$auth.strategy.token.get()
      const t = bearer.split('Bearer ')[1].trim()
      // eslint-disable-next-line no-console
      console.log('Running fetch func', { ...this.$auth })
      this.$axios
        .$post('http://localhost:5500/signup', {
          token: t,
        })
        .then((res) => {
          this.$store.commit('backendLoggedInState')
          this.$store.commit('addToken', res.token)
          this.$auth.$storage.setCookie('_token.backend', `Bearer ${res.token}`)
          this.$auth.$storage.setLocalStorage(
            '_token.backend',
            `Bearer ${res.token}`
          )
          this.$toast.success('User set!')
        })
    }
  },
  data() {
    return {}
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 4rem);
}
</style>
