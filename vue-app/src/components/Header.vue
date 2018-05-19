<template>
	<header @click='change'>
		<h1>{{msg}}  {{title}}</h1>
	</header>
</template>

<script>
export default {
  name: 'app-header',
  props:['title'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  	change:function(){
  		this.title='因为穿的是值，点击改变了，不会影响其他'
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
	background: lightgreen;
	padding:20px 0;
	width:100%;
}
h1{
	color:#222;
	text-align: center;
}
</style>