import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import RecipeDetail from "../components/RecipeDetail.vue";
import Favorites from "../components/FavoritesPage.vue";  // Ensure the path is correct

const routes = [
  { path: "/", component: HomePage },
  { path: "/recipe/:id", name: 'RecipeDetail', component: RecipeDetail },
  { path: "/favorites", name: 'Favorites', component: Favorites }
];

const router = createRouter({
  history: createWebHistory(),  // This is how you set up history mode in Vue 3
  routes
});

export default router;
