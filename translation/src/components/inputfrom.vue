<template>
  <div id="in">
    <div class='row'>
      <div class='container col col-md-6 col-md-offset-3'>
        <form class='well'>
          <input class='form-control' type="text" v-model='inFrom' placeholder="请输入需要翻译的内容">
          <select class='form-control'>
            <option value=''>请选择语言</option>
            <option value='en'>英语</option>
            <option value='ko'>韩语</option>
            <option value='ja'>日语</option>
            <option value='fr'>法语</option>
          </select>
          <input class='btn btn-danger' type="button" @click='submitform' name="" value='翻译'>
        </form>
      </div>

    </div>
  </div>
</template>

<script>

import $ from 'jquery'//引入了jquery

export default {
  name: 'in',
  data () {
    return {
      inFrom: ''
    }
  },
  methods:{
    submitform:function(){
      let a = $('#in').find('option:selected').attr('value'); 
      this.$emit('aaa',this.inFrom,a) ;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
