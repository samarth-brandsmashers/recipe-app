import { createStore } from "vuex";

const store = createStore({
  state: {
    favorites: JSON.parse(localStorage.getItem("favorites")) || []
  },
  mutations: {
    ADD_FAVORITE(state, recipe) {
      state.favorites.push(recipe);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    REMOVE_FAVORITE(state, recipeId) {
      state.favorites = state.favorites.filter(r => r.id !== recipeId);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    LOAD_FAVORITES(state) {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        state.favorites = JSON.parse(savedFavorites);
      }
    },
  },
  actions: {
    addFavorite({ commit }, recipe) {
      commit("ADD_FAVORITE", recipe);
    },
    removeFavorite({ commit }, recipeId) {
      commit("REMOVE_FAVORITE", recipeId);
    }
  },
  getters: {
    getFavorites: state => state.favorites,
  }
});

export default store;
