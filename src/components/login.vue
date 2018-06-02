<template>
  <div class="login">
  	<div class="snow-container">
		<div class="snow foreground"></div>
		<div class="snow foreground layered"></div>
		<div class="snow middleground"></div>
		<div class="snow middleground layered"></div>
		<div class="snow background"></div>
		<div class="snow background layered"></div>
	</div>

	<div style="height: 10rem;width: 100%;"></div>
	<h1 style="">和德比赛管理系统欢迎你</h1>

	<div class="main-agileits">
<!--form-stars-here-->
		<div class="form-w3-agile">

			<h2 class="sub-agileits-w3layouts" style="">用户登录</h2>
			<form>
					<input type="text" name="user" placeholder="请填写用户名" required="" />
					<input type="password" name="Password" placeholder="请填写密码" required="" />
					<a href="#" class="forgot-w3layouts">忘记密码 ?</a>
				<div class="submit-w3l">
					<input type="submit" value="登录" @click='jump'>
				</div>
			</form>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      
    }
  },
  methods:{
  	jump:function(){
  		this.$router.push({path:'/index'})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
    width: 100%;
    height:100%;
    text-transform: uppercase;
    background: url(../../static/img/banner.jpg) no-repeat 0px 0px;
    background-attachment: fixed;
    background-size: cover;
	-webkit-background-size: cover;
	-o-background-size: cover;
	-moz-background-size: cover;
	-ms-background-size: cover;
	text-align: center;
}
</style>
