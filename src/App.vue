<template>
  <v-app>
    <Header/>
    <router-view/>
  </v-app>
</template>

<script>
  import Header from './components/Header.vue';
  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style>
  body {
    margin: 0px;
  }
  #app {
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
