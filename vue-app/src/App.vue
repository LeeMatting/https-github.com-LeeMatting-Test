<!--1.模板：html结构，只能有一个根标签//-->
<template>
  <div id="app">
    <!-- <h1>{{title}}</h1> -->
    <app-header v-bind:title='title'></app-header>
    <users v-bind:zidingyi="users"></users>
    <users v-bind:zidingyi="users"></users>
    <app-footer v-on:changFoot='change' v-bind:title='title'></app-footer>
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
      title:'第一个Vue脚手架项目',
      //假设很多地方都用到这个数组,给users传值
      users:[
        {name:'ads',posn:'123',show:false},
        {name:'ads',posn:'123',show:false},
        {name:'ads',posn:'123',show:false},
        {name:'ads',posn:'123',show:false}
      ],
      title:'hahaha'
    }
  },
  methods:{
    change:function(a){
        this.title=a;//接受子组件传过来的值
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
