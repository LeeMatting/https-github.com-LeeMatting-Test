<template>
  <div class="index">
  </div>
</template>

<script>

import $ from 'jquery'

export default {
  name: 'index',
  data () {
    return {
      tableData:[
        {date:'2010-1-1',name:'花都陈奕迅',address:'123345'}
      ],
    }
  },
  methods:{
    handleopen(key,keyPath){
      console.log(index+'----'+indexPath)
    }
  },
  mounted:function(){
  	let oHeight = document.body.scrollHeight;
  	$('.el-container').css('height',oHeight-1);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	margin:0px;
	padding:0px;
}
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
    width:200px;
  }
.el-container{
  height:100%;
}
</style>
