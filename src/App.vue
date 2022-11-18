
<template>
  <Header></Header>
  <router-view></router-view>
<!-- <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent ...">
  <p class="text-indigo-600 group-hover:text-gray-900 ...">New Project</p>
  <p class="text-indigo-500 group-hover:text-gray-500 ...">Create a new project from a variety of starting templates.</p>
</div> -->
  <!-- <resultCard/> -->
</template>

<style lang="scss">
$primary-color: #00807e;
.primary-color{
  color: $primary-color;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary-color;
}
</style>
<script>
import Header from './components/Header.vue';

export default {
  components: { Header },
};
</script>
