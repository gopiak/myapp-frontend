<template>
  <div class="flex-column">
    <div class="container flex-row">
      <div class="posts">{{ posts }}</div>
      <div class="create-post">
        <button class="create-post-page">
          <nuxt-link to="/createpost">Create a new post</nuxt-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  fetch() {
    this.posts = this.$axios.$get('http://localhost:5500//api/ques', {
      headers: {
        Authorization: `Bearer ${this.$store.state.getters.getToken}`,
      },
    })
  },
  data() {
    return {
      posts: [],
    }
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.flex-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
.posts {
  width: 65%;
}
.create-post {
  width: 30%;
}
</style>
