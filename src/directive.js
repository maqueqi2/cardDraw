// function image() {
//   console.log('引用');
// }
// export {
//   myfun,
//   csfun
// }
import Vue from 'vue'

const images = Vue.directive('images', {
  inserted: function(e,binding) {
    // console.log('图片',e);
    setTimeout(function() {
      e.setAttribute('src',binding.value);
    },300)
  }
})
const vfocus = Vue.directive("vfocus", {
  inserted: function(e){
      // e.focus();
      // e.style.background = 'red';
      // console.log('全局打印',e.value);
      // e.value = ' 赋值';
      console.log('全局打印',e.value);
  }
})
export default {
  images,
  vfocus
}