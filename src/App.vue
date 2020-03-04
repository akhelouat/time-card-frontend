<template>
  <v-app>
    <Header/>
    <router-view :isAdmin="isAdmin"/>
    <Footer/>
  </v-app>
</template>

<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  export default {
    name: 'App',
    components: {
      Header,
      Footer
    },
    data(){
      return {
        isAdmin: false
      }
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
