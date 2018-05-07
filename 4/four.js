//调用组件了
Vue.component('greeting',{
	template:'<p>{{name}}:hi<button @click="abc">改名</button></p>',
	data:function(){
		return{
			name:'鹿晗'
		}
	},
	methods:{
		abc:function(){
			this.name = '爱妃'
		}
	}
})

new Vue({
	el:'#one'
});
new Vue({
	el:'#two'
})