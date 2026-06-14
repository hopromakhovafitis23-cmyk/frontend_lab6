<template>
  <div style="text-align: center; margin-top: 50px;">
    <h1 style="color: red; font-size: 3rem;">404</h1>
    <h2>Сторінку не знайдено</h2>
    <p>Схоже, ви перейшли за хибним посиланням.</p>
    
    <div style="margin-top: 20px; display: flex; gap: 15px; justify-content: center;">
      <button @click="goBack" style="padding: 8px 15px; cursor: pointer;">Назад</button>
      
      <router-link to="/" style="padding: 8px 15px; background: #42b983; color: white; text-decoration: none; border-radius: 4px;">
        На головну
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back() 
}
</script>