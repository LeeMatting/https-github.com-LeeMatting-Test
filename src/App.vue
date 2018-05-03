<template>
  <div id="app">
    <!--<test msg="hi尼玛"></test>//-->
    <user></user>
  </div>
</template>

<script>

import test from './components/test'
import user from './components/user'
  
export default {
  name: 'App',
  components: {
    test,user
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
  margin-top: 60px;
}
</style>
