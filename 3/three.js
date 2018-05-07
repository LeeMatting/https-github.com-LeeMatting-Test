let one = new Vue({
	el:"#one",
	data:{
		title:'第一次修改的内容'
	},
	methods:{
		abc:function(){
			alert('1');
		}
	}
});
let two = new Vue({
	el:"#two",
	data:{
		title:'第二次修改的内容'
	},
	methods:{
		abc:function(){
			one.title='修改了one的内容'
		}
	}
});
two.title='我也被修改了'

