import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";  // Import the Vuex store

const app = createApp(App);

store.commit('LOAD_FAVORITES');

app.use(router);
app.use(store);  // Use the Vuex store
app.mount("#app");
