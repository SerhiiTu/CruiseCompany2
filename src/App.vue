<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBarComponent from './components/NavBarComponent.vue'
</script>

<template>
  <NavBarComponent />
  <main>
    <RouterView />
  </main>
</template>
