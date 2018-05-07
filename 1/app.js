//实例化一个Vue对象
new Vue({
	el:'#vue-app',
	data:{
		name:'阿亮',//key和value
		job:'web开发',
		web:'<a href="http://www.baidu.com">百度一下</a>',
		age:23,
		x:0,
		y:0,
		superName:'123',
		superAge:'123',
		changeSpan:false,
		changeLen:false,
		error:false,
		success:false,
		user:['a','b','c'],
		man:[
			{name:'df',age:'10'},
			{name:'dfg',age:'20'},
			{name:'bf',age:'30'}
		]
	},
	methods:{   //一处罚methods的方法，会处罚全部的methods里面的方法
		hello:function(){
			return 'check it out' +this.name //获取data里面的东西
		},
		jia:function(a){
			this.age+=a;
		},
		jian:function(a){
			this.age-=a;
		},
		move:function(event){
			console.log(event)//每一次出发鼠标事件，都有一个event对象
			this.x=event.offsetX;
			this.y = event.offsetY;
		},
		alert:function(){
			alert('事件修饰符阻止网页跳转')
		},
		consoleName:function(){
			this.superName = this.$refs.name.value;//获取文本信息
		},
		consoleAge:function(){
			this.superAge = this.$refs.age.value;//获取问呢信息
		}
	},
	computed:{
		com:function(){
			return{
				changeColor: this.changeSpan,
				changeLenght:this.changeLen
			}
		}
	}	
})

/*
	el:element：html 需要Vue控制的元素
	data :用于数据的存储
	methods:这个对象用于存储方法
	v-bind:value=''：给属性绑定对应的值
*/