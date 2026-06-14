<template>
  <nav class="navbar">
    <router-link to="/">Головна</router-link>
    <router-link to="/catalog">Каталог</router-link>
    <router-link to="/about">Про нас</router-link>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex; gap: 15px; margin-bottom: 20px;
  padding-bottom: 10px; border-bottom: 1px solid #ccc;
}
.navbar a { text-decoration: none; color: #333; font-weight: bold; }
/* Стилізація активного посилання */
.navbar a.router-link-active { color: #42b983; text-decoration: underline; }
</style>