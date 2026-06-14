<template>
  <div>
    <h1>Профіль користувача</h1>
    
    <div style="display: flex; gap: 20px; margin-bottom: 20px;">
      <router-link to="/profile/info">Інформація</router-link>
      <router-link to="/profile/settings">Налаштування</router-link>
    </div>

    <div style="padding: 15px; border: 1px dashed #42b983; background: #f9f9f9;">
      <router-view />
    </div>
  </div>
</template>