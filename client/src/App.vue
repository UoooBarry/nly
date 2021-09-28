<template>
  <div id="app">
    <template v-if="!loading">
      <CategoryList />
      <router-view :key="$route.fullPath"/>
    </template>
    <template v-else>
      <h1>Loading...</h1>
    </template>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import CategoryList from '@/components/layouts/CategoryList';

export default {
  name: 'App',
  components: {
    CategoryList
  },
  computed: {
    ...mapState(['loading']),
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
