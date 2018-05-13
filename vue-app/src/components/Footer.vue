<template>
	<footer>
		<h1>{{msg}}</h1>
	</footer>
</template>

<script>
export default {
  name: 'app-footer',
  data () {
    return {
      msg: 'Thank you!'
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