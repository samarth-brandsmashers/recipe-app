<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

h1, h3 {
  color: #333;
}

p {
  color: #666;
  line-height: 1.6;
}

button {
  border: none;
  font-size: 16px;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}

</style>
