<template>
	<footer @click='change'>
		<h1>{{msg}} {{title}}</h1>
	</footer>
</template>

<script>
export default {
  name: 'app-footer',
  props:['title'],
  data () {
    return {
      msg: 'Thank you!'
    }
  },
  methods:{
  	change:function(){
  		this.title='123'
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
	background: #222;
	padding:20px 0;
}
footer>h1{
	color:lightgreen;
}
</style>