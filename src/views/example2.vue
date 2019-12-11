<template>
<div>
  <h2>非父子组件间传值(Bus/总线/发布订阅模式/观察者模式/)</h2>
  <exam-com content='Dell'></exam-com>
  <exam-com content='Lee'></exam-com>
  <div>
    {{content}}
  </div>
  <img src="http://placehold.it/200X200/ff0000/ffffff" />
</div>
</template>

<script>
import Vue from 'vue';
Vue.prototype.bus = new Vue();
export default {
  data() {
    return {
      content: '初始值',
    }
  },
}
</script>
<style>
h2 {
  /* color: transparent;
  -webkit-text-stroke: 2px red;
  -webkit-box-reflect: below 10px -webkit-linear-gradient(top,rgba(0,0,0,0) 20%,rgba(0,0,0,0.6) 100%); */
  -webkit-box-shadow: 0px 0px 20px rgba(255,0,0,0.8); 
}
img {
  width: 100px;
  -webkit-box-reflect: below 10px -webkit-linear-gradient(top,rgba(0,0,0,0) 20%,rgba(0,0,0,0.6) 100%);
  -webkit-box-shadow: 0px 0px 20px rgba(255,0,0,0.8);
}
</style>


