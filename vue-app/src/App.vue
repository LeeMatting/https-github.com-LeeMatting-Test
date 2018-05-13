<!--1.模板：html结构，只能有一个根标签//-->
<template>
  <div id="app">
    <!-- <h1>{{title}}</h1> -->
    <app-header></app-header>
    <users></users>
    <app-footer></app-footer>
  </div>
</template>

<!--2.行为：逻辑处理//-->
<script>
//局部引用子组件
import Users from './components/Users'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  data:function(){
    return {
      title:'第一个Vue脚手架项目'
    }
  },
  components:{
    'users':Users,
    'app-header':Header,
    'app-footer':Footer
  }
}
</script>

<!--3.样式//-->
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  color:purple;
}
</style>
