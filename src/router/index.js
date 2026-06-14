import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CatalogView from '../views/CatalogView.vue'
import ProductDetailsView from '../views/ProductDetailsView.vue'
import ProfileView from '../views/ProfileView.vue'
import ProfileInfo from '../views/ProfileInfo.vue'
import ProfileSettings from '../views/ProfileSettings.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/catalog', name: 'catalog', component: CatalogView },
    { path: '/catalog/:id', name: 'product-details', component: ProductDetailsView },
    { 
      path: '/profile', 
      component: ProfileView,
      children: [
        { path: 'info', component: ProfileInfo }, 
        { path: 'settings', component: ProfileSettings } 
      ]
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'not-found', 
      component: NotFoundView 
    }
  ]
})

export default router