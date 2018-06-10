<template>
  <div class="text1">
  	<!-- ：span 是指栅格系统里面的24分钟占了多少份 -->
  	<el-row>
  		<el-col :span='24'><div style='height:60px' class='grid-content bg-purple-dark'>1</div></el-col>
  	</el-row>

  	<div class='margin' >
  		<!-- gutter是指每个div间隔是12 -->
  		<el-row :gutter='20'>
  			<el-col :span='12'><div style='height:60px' class='grid-content bg-purple-dark'>1</div></el-col>
  			<el-col :span='12'><div style='height:60px' class='grid-content bg-purple-dark'>1</div></el-col>
  		</el-row>
  	</div>
  	<div class='margin'>
  		<!--offsets向右偏移 -->
  		<el-row :gutter='10'>
  			<el-col :span='6'><div style='height:60px' class='grid-content bg-purple-dark'>1</div></el-col>
  			<el-col :span='6' :offset='4'><div style='height:60px' class='grid-content bg-purple-dark'>1</div></el-col>
  		</el-row>
  	</div>
  	<div class='margin'>
  		<el-container>
  			<el-header></el-header>
  			<el-container>
   				<el-aside>
  					<ul>
  						<li>123</li>
  						<li>123</li>
  						<li>123</li>
  						<li>123</li>
  					</ul>
  				</el-aside>
	  			<el-container>
	  				<el-main></el-main>
	  				<el-footer></el-footer>
	  			</el-container> 				
  			</el-container>
  		</el-container>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'text1',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scpoed>
*{
	margin:0;
	padding:0;
}
.margin{
	margin-top:10px;
	width:100%;
}
  .bg-purple-dark {
    background: #99a9bf;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .el-header{
  	    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    width:100%;
  }
  .el-aside{
  	    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-aside>li{
  	display: block;
  	border:1px solid #ccc;
  }
  .el-footer{
  	width:60px;
  	background: #99a9bf;
  }
   .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-footer{
  	width:100%;
  }
</style>
