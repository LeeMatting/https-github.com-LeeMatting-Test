import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import index from '@/components/index'
import info from '@/components/info'
import childreninfo from '@/components/childreninfo'
import text1 from '@/components/text1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/login',
      name:'login',
    	component:login
    },
    {
    	path:'/index',
      name:'index',
    	component:index,
      children:[
        {
          path:'info',
          name:'info',
          component:info
        },
       {
          path:'childreninfo',
          name:'childreninfo',
          component:childreninfo
        }
      ]
    },
    {
      path:'/text1',
      component:text1
    }
  ],
  mode:'history'
})
