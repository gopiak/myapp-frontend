<template>
  <div>
    <div class="container">
      <form action=""></form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
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
</style>
