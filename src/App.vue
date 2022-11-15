<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<script>
  export default {
    computed: {
      isAdmin: function() {
        return this.$route.path.includes('admin')
      }
    }
  }
</script>

<style>
  
</style>
