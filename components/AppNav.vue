<template>
  <header>
    <div class="container flex-row">
      <a id="logo" href="#">
        <h3>LOGO</h3>
      </a>
      <nav class="nav flex-row">
        <ul class="nav-list flex-row">
          <li class="nav-item">Home</li>
          <li class="nav-item">About</li>
          <li class="nav-item">
            <nuxt-link to="/posts">Posts</nuxt-link>
          </li>
        </ul>
        <ul v-if="this.$auth.loggedIn" class="nav-list flex-row">
          <li>{{ this.$auth.user.given_name }}</li>
        </ul>
        <ul v-else class="nav-list flex-row">
          <li class="nav-item right-align nav-item-signup">
            <nuxt-link to="/signup">Sign Up</nuxt-link>
          </li>
          <li class="nav-item right-align">
            <nuxt-link to="/login">Log In</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
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

header {
  position: sticky;
  top: 0;
  background-color: yellow;
  .flex-row {
    justify-content: space-between;
    align-items: center;
  }
  .container {
    height: 4rem;
  }
  #logo {
    margin: 0 2em;
  }
}
nav {
  width: 100%;
}
.nav-list {
  list-style: none;
  .nav-item {
    padding: 1em;
  }
  .nav-item:hover {
    background-color: yellowgreen;
    color: white;
  }
  .nav-item-signup {
    background-color: yellowgreen;
    font-weight: bold;
  }
  .nav-item-signup:hover {
    background-color: yellow;
    color: black;
  }
}
.nav-item + .nav-item {
  margin-left: 1em;
}

.flex-row {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
</style>
