<template>
<div id="footer">
    <img src="../assets/logo_oha.png" alt="logo">
  
</div>    
</template>
<script>
import { data } from '../services/api/data' 
export default {
    data: () => {
        return {
          test: 'openhackademy',
          users: null,
          error: null
        };
    },
    created () {
      data().then(users => this.users = users)
        .catch(error => {
          console.log(error);
          this.error = error
        });
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