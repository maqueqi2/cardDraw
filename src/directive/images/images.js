// export const images = Vue.directive('images', {
//   inserted: function(e,binding) {
//     // console.log('图片',e);
//     setTimeout(function() {
//       e.setAttribute('src',binding.value);
//     },300)
//   }
// })
export default {
  isnerted(e,binding) {
    debugger
    setTimeout(function(){
      e.setAttribute('src',binding.value);
    })
    console.log('替换图片');
  }
}