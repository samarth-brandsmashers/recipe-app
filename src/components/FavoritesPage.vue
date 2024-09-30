<template>
  <div class="favorites-page">
    <h1>Your Favorites</h1>
    <div v-if="favorites.length" class="favorites-list">
      <div v-for="recipe in favorites" :key="recipe.id" class="recipe-card">
        <img :src="recipe.image" alt="Recipe image" class="recipe-image" />
        <h3>{{ recipe.name }}</h3>
        <button @click="removeFromFavorites(recipe.id)" class="remove-btn">
          Remove from Favorites
        </button>
      </div>
    </div>
    <div v-else>
      <p>No favorite recipes yet.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["getFavorites"]),
    favorites() {
      // Fallback to an empty array if getFavorites returns undefined
      return this.getFavorites || [];
    },
  },
  methods: {
    ...mapActions(["removeFavorite"]),
    removeFromFavorites(recipeId) {
      console.log(recipeId)
      this.removeFavorite(recipeId);
    },
  },
};
</script>

<style scoped>
.favorites-page {
  padding: 20px;
  text-align: center;
}

.favorites-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.recipe-card {
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  margin: 15px;
  padding: 15px;
  text-align: center;
  transition: transform 0.3s;
}

.recipe-card:hover {
  transform: scale(1.05);
}

.recipe-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.remove-btn {
  background-color: #dc3545;
  color: white;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

.remove-btn:hover {
  background-color: #c82333;
}
</style>