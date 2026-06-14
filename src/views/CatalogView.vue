<template>
  <div>
    <h1>Каталог товарів</h1>
    <ul>
      <li v-for="product in products" :key="product.id" style="margin-bottom: 10px;">
        {{ product.name }} 
        <router-link :to="`/catalog/${product.id}`" style="margin-left: 10px;">
          Детальніше
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
  { id: 1, name: 'Спортивна сумка' },
  { id: 2, name: 'Кросівки' },
  { id: 3, name: 'Пояс' }
])
</script>