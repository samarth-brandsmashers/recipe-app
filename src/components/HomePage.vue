<template>
  <div class="home-page">
    <h1>Recipe List</h1>
    <div class="recipe-list">
      <div v-for="recipe in recipes" :key="recipe.id" class="recipe-card">
        <img :src="recipe.image" alt="Recipe image" class="recipe-image" />
        <h3>{{ recipe.name }}</h3>
        <p>{{ recipe.description }}</p>
        <router-link :to="`/recipe/${recipe.id}`" class="view-details-btn">
          View Details
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      recipes: [],
    };
  },
  created() {
    axios.get('https://dummyjson.com/recipes')
      .then(response => {
        this.recipes = response.data.recipes;
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  },
};
</script>

<style scoped>
.home-page {
  padding: 20px;
  text-align: center;
}

.recipe-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.recipe-card {
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 20px;
  padding: 15px;
  text-align: center;
  transition: transform 0.3s;
}

.recipe-card:hover {
  transform: scale(1.05);
}

.recipe-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.view-details-btn {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;
  transition: background-color 0.3s;
}

.view-details-btn:hover {
  background-color: #218838;
}
</style>