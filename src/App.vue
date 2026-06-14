<template>
  <div style="max-width: 800px; margin: 0 auto; padding: 20px; font-family: sans-serif;">
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>