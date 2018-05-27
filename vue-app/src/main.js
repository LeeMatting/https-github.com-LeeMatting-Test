// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter  from 'vue-router'
import VueResource from 'vue-resource'
import axios from 'axios'
import home from './components/home'
import HelloWorld from './components/HelloWorld'
//import Users from './components/Users' //引入组件

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;//全局使用axios

//使用路由
Vue.use(VueRouter);
//配置路由
const router = new VueRouter({//严格按照这个名字
	routes:[
		{path:'/',component:home},
		{path:'/helloworld',component:HelloWorld}
	],
	mode:'history'//干掉 #/
});

//全局注册组件
//Vue.component('users',Users)

/* eslint-disable no-new */
new Vue({
  router,//使用路由,严格按照这个名字，否则出问题
  el: '#app',
  components: { App },
  template: '<App/>'
})
