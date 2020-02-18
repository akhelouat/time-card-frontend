<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <CheckIn />
    <Footer />
    <NewPwd/>
  </div>
</template>

<script>
  import CheckIn from "./components/CheckIn.vue"
  import Footer from "./components/footer.vue"
  import NewPwd from "./components/NewPwd.vue"
  export default {
    name: 'App',
    components: {
      CheckIn,
      Footer,
      NewPwd
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
