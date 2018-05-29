<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5 class='text-muted'>简单 / 易用 / 快捷</h5>
    <inputfrom v-on:aaa='dothis'></inputfrom>
    <resule v-text='back'></resule>
  </div>
</template>

<script>

import inputfrom from './components/inputfrom.vue'
import resule from './components/resule.vue' 

export default {
  name: 'App',
  data:function(){
    return {
      back:''
    }
  },
  components: {
    inputfrom,
    resule
  },
  methods:{
    dothis:function(a,b){
      var that = this
      this.$ajax.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180529T092018Z.83de5151069290b7.0f40c8135324eba6efc1730ec5a826b4955aa664&lang='+b+'&text='+a).then(function(res){
          that.back = res.data.text[0];
      })
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
