<template>
  <div id="app">
    <nav>
      <router-link :to="{name: 'login'}">Home</router-link>
      <router-link :to="{name: 'check'}">check</router-link>
    </nav>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Footer from "./components/footer.vue"
  export default {
    name: 'App',
    components: {
      Footer
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
