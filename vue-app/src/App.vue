<!--1.模板：html结构，只能有一个根标签//-->
<template>
  <div id="app">
    <!-- 导航 -->
    <ul>
      <li><router-link to='/'>home</router-link></li>
      <li><router-link to='/HelloWorld'>HelloWorld</router-link></li>
    </ul>
    <router-view></router-view> 
  </div>
</template>

<!--2.行为：逻辑处理//-->
<script>
//局部引用子组件


export default {
  name: 'App',
  data:function(){
    return {

    }
  },
  methods:{

  },
  components:{
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
