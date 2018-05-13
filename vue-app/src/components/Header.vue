<template>
	<header>
		<h1>{{msg}}</h1>
	</header>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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