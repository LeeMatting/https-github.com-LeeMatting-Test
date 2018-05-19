<template>
  <div class="users">
    <ul>
      <li v-for='user in zidingyi' @click='user.show=!user.show'>
        <h2>{{user.name}}</h2>
        <h3 v-show='user.show'>{{user.posn}}</h3>
      </li>
    </ul>
    <button @click='deleltethis'>删除</button>
  </div>
</template>

<!-- 

    传值：字符，数字，布尔值 都是传值
    传引用：数组 对象

 -->

<script>
export default {
  name: 'users',
  //接受父组件传来的值，然后最好和指令中的名字一致，不然会炸
  props:["zidingyi"],
  data () {
    return {

    }
  },
  methods:{
    deleltethis:function(){
      this.zidingyi.pop();//因为传过来的引用，指向同一个快，删除了一个，对其他插件用了这个引用的东西有影响
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users{
     box-sizing: border-box; 
     width:100%;
}
.users>ul{
  display: flex;
  flex-wrap:wrap;
}
.users>ul>li{
   flex-grow:1; /*如果为1,自动等分分配空间*/
   flex-basis:200px;/*理解为空间吧*/
   list-style-type: none;
   border:1px solid #ccc;
   margin-right:10px;
}
</style>
