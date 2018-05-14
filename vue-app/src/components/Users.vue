<template>
  <div class="users">
    <ul>
      <li v-for='user in zidingyi' @click='user.show=!user.show'>
        <h2>{{user.name}}</h2>
        <h3 v-show='user.show'>{{user.posn}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'users',
  //接受父组件传来的值，然后最好和指令中的名字一致，不然会炸
  props:["zidingyi"],
  data () {
    return {

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
