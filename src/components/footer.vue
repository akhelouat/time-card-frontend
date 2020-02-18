<template>
<div id="footer">
    <img src="../assets/logo_oha.png" alt="logo">
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
  position: absolute;
  bottom: 0px;
  background-color: #313131;
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>