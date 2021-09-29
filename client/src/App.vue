<template>
  <div id="app">
    <template v-if="!loading">
      <CategoryList />
      <router-view :key="$route.fullPath"/>
    </template>
    <template v-else>
      <Loading />
    </template>
  </div>
</template>

<script>
import Loading from '@/components/layouts/Loading'
import {mapState} from 'vuex';
import CategoryList from '@/components/layouts/CategoryList';

export default {
  name: 'App',
  components: {
    CategoryList,
    Loading
  },
  computed: {
    ...mapState(['loading']),
  }
}
</script>

<style>
.main {
  display: inline-block;
  display: flex;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}
</style>
