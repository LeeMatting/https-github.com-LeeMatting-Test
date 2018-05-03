<template>
	<div class='user'>

		<form>
			<input type="" name="" v-model="newOne.name">
			<input type="" name="" v-model="newOne.phone">
			<button type="button" v-on:click="post()">按钮一</button>
		</form>

		<div v-for="item in users">
			<p>
				<input type="checkbox" name="" v-model="item.contanted">
				<span :class='{line:item.contanted}'>
				{{item.name}};{{item.phone}}
				<button type="button" v-on:click="de(item)">X</button>
			</span>
			</p>
		</div>
	</div>
</template>

<script type="text/javascript">

	import $ from 'jquery'
	
	export default {
		name:'user',
		data(){
			return{
				newOne:{},
				users:[
					{
						name:'Lee',
						phone:'13011111111',
						contanted:true
					},
					{
						name:'Lee',
						phone:'13011111112',
						contanted:false
					},
					{
						name:'Lee',
						phone:'13011111113',
						contanted:false
					}
				]
			}
		},
		methods:{
			post:function(){

				this.users.push({
					name:this.newOne.name,
					phone:this.newOne.phone,
					contanted:false
				});
			},
			de:function(user){
				this.users.splice(this.users.indexOf(user),1)
			}
		}
	}
</script>

<style type="text/css" scoped>
	.line{
		text-decoration: line-through;
	}
</style>