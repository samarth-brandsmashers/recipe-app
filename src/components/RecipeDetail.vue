<template>
  <div v-if="recipe" class="recipe-detail-page">
    <h1 class="recipe-name">{{ recipe.name }}</h1>
    <img :src="recipe.image" alt="Recipe Image" class="recipe-image">
    
    <div class="section">
      <h2>Ingredients</h2>
      <ul class="ingredients-list">
        <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
      </ul>
    </div>

    <div class="section">
      <h2>Instructions</h2>
      <p>{{ recipe.instructions }}</p>
    </div>

    <button @click="addToFavorites" class="favorite-btn">Add to Favorites</button>
  </div>
  <div v-else>
    <p>Loading recipe...</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      recipe: null
    };
  },
  created() {
    const id = this.$route.params.id;
    fetch("https://dummyjson.com/recipes/" + id)
      .then(response => response.json())
      .then(data => {
        this.recipe = data;
      })
      .catch(error => {
        console.error('Error fetching recipe details:', error);
      });
  },
  methods: {
    ...mapActions(["addFavorite"]),
    addToFavorites() {
      this.addFavorite(this.recipe);
    }
  }
};
</script>

<style scoped>
.recipe-detail-page {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.recipe-name {
  text-align: center;
  font-size: 2.2rem;
  color: #333;
}

.recipe-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
}

.section {
  margin-bottom: 20px;
}

h2 {
  font-size: 1.8rem;
  color: #444;
  margin-bottom: 10px;
}

.ingredients-list {
  list-style: none;
  padding-left: 0;
}

.ingredients-list li {
  background-color: #f8f8f8;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  color: #555;
}

p {
  line-height: 1.6;
  font-size: 1.1rem;
  color: #666;
}

.favorite-btn {
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  background-color: #ff9800;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.favorite-btn:hover {
  background-color: #e68a00;
}

@media (max-width: 768px) {
  .recipe-detail-page {
    padding: 15px;
  }

  .recipe-name {
    font-size: 1.8rem;
  }

  .favorite-btn {
    font-size: 1rem;
    padding: 8px 16px;
  }
}
</style>