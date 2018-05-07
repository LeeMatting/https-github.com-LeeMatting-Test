new Vue({
	el:"#demo-app",
	data:{
		width:100,
		end:false
	},
	methods:{
		punch:function(){
			this.width -= 10;
			$('#porje').find('div').animate({'width':this.width+'%'},500);
			if(this.width <= 0){
				this.end = true;
			}
		},
		restart:function(){
			this.width = 100;
			this.end = false;
			$('#porje').find('div').animate({'width':this.width+'%'},500)
		}
	}
})