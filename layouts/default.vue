<template>
  <div>
    <app-nav />
    <Nuxt />
  </div>
</template>

<script>
import AppNav from '@/components/AppNav.vue'
export default { components: { AppNav } }
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
