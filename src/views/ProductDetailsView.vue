<template>
  <div>
    <h1>Деталі товару</h1>
    <p>Ви переглядаєте інформацію про товар з ID: <strong>{{ route.params.id }}</strong></p>
    <router-link to="/catalog">Повернутися до каталогу</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>