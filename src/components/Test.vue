<template>
	<div class='test'>
		<h1>{{title}}</h1>
		<p>{{user.firstName}}</p><!--通过模板绑定，和angular一样//-->
		<p v-text="user.lastName"></p><!--通过指令模式//-->

		<!-- v-if 条件判断 //-->
		<p v-if="showName">{{user.firstName}}</p>
		<!-- v-else 和v-if 一起使用//-->
		<p v-else='showName'>Nobody</p>

		<!-- v-for //-->
		<p v-for="abc in items">{{abc.title}}</p>

		<!-- v-on 事件 //-->
		<button v-on:click="Greet()">Greet</button>
		<div class='div1' v-on:mouseover="check('fuck you bitch')">on</div>

		<!-- v-on 表单事件 //-->
		<div id='form1'><input type="" name="" v-on:keyup="press" v-on:keyup.enter="enter"></div>

		<hr/>

		<!--computed 计算属性//-->
		<div>
			<label>FirstName:</label>
			<input type="" name="" v-model="user.firstName">
		</div>
		<div style="margin-top:10px;">
			<label>LastName:</label>
			<input type="" name="" v-model="user.lastName">
			<br>
		</div>

		<h2>{{fullName}}</h2>

		<!--props 属性//-->
		<h3>{{msg}}</h3>

	</div>
</template>

<script type="text/javascript">

	import $ from 'jquery'
	export default {
		name:'test',
		props:{
			msg:{
				type:String,
				default:'hi'
			}
		},
		data(){
			return{
				title:'hello Vue',
				user:{
					firstName:'Pual',
					lastName:'Lee'
				},
				showName:false,
				items:[
					{title:'yeeyez'},
					{title:'yeeyez'},
					{title:'yeeyez'}
				]
			}
		},
		methods:{
			Greet:function(){
				alert('hello world!!')
			},
			check:function(a){
				alert(arguments[0])
			},
			press:function(){
				console.log('Pressing..');
			},
			enter:function(){
				let a = $('#form1').find('input').val();
				console.log(a);
			}
		},
		computed:{
			fullName:function(){
				return this.user.firstName +" "+ this.user.lastName
			}
		}
	}
</script>

<style type="text/css" scoped>
	.test{
		color:#ccc;
	}
	.div1{
		border:1px;
		border-radius:3px;
		padding:2px;
	}
</style>