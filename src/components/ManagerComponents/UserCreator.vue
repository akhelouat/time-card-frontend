<template>
  <div>
      <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
    props: ["users"],
    data () {
        return {
            title:'New User'
        }
    }
}
</script>

<style>

</style>