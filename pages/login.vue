<template>
  <div class="container flex-column">
    <div>LogIn with</div>
    <div class="login-opts">
      <div class="google">
        <button class="google-login" @click="loginWithGoogle">Google</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    loginWithGoogle() {
      this.$auth.loginWith('google')
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}
.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
