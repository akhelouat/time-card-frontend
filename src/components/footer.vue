<template>
<div id="footer">
    {{ test }}
</div>    
</template>
<script>
export default {
    data: () => {
        return {
          test: 'openhackademy'
        };
    }
    
}
</script>
<style scoped>
#footer
{
  background-color: #1f1f1f;
  height: 15%;
  width: 100%;
}
</style>