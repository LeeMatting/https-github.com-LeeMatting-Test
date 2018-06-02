<template>
  <div id="app">
    <!--<img src="./assets/logo.png">  -->
    <router-view></router-view> 
  </div>
</template>

<script>
import $ from 'jquery' 
export default {
  name: 'App',
  mounted:function(){
    let oheight = document.body.scrollHeight;
    $('#app').css('height',oheight);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
