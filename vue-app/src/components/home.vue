<!--1.模板：html结构，只能有一个根标签//-->
<template>
  <div id="home">
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
import Users from './Users'
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'home',
  data:function(){
    return {
      title:'第一个Vue脚手架项目',
      //假设很多地方都用到这个数组,给users传值
      users:[

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
  },
  created:function(){
      var that = this;
      //then((respone) => {})箭头函数 ，由于this 的旨意不明确
      this.$axios.get('https://jsonplaceholder.typicode.com/users').then(function(respone){
        console.log('--------------')
        console.log(respone.data);
        console.log('--------------')
        that.users = respone.data
      }).catch(function(error){
        console.log(error)
      })
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
