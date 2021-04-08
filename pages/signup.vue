<template>
  <div class="container flex-column">
    <div>SignUp with</div>
    <div class="signup-opts">
      <div class="google">
        <button class="google-signup" @click="signupWithGoogle">Google</button>
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
    signupWithGoogle() {
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
