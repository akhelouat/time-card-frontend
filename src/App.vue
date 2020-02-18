<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
 <CheckIn />
 <Footer />

  </div>
</template>

<script>
import CheckIn from "./components/CheckIn.vue"
import Footer from "./components/footer.vue"
export default {
  name: 'App',
  components: {
    CheckIn,
    Footer
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
</style>
