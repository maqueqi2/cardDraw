// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import filter from './filters/index'
import components from './components'
// import Test from './components/test'
// import imgBox from './components/img-box'
import directive from './directive'
// TODO:
// import directive from './directive/images'

Vue.config.productionTip = false

// 自定义组件现已添加到directive.js中
Vue.directive("vfocus", {
    inserted: function(e){
        // e.focus();
        // e.style.background = 'red';
        // console.log('全局打印',e.value);
        // e.value = ' 赋值';
        console.log('全局打印',e.value);
    }
})
// Vue.directive("image", {
//   inserted: function(e,binding) {
//     // console.log('图片',e);
//     setTimeout(function() {
//       e.setAttribute('src',binding.value);
//     },300)
//   }
// })

// Vue.use()用来安装vue插件
// Vue.use(directive);

// 直接调用自定义组件
// Vue.component('Test',Test);
// Vue.component('imgBox', imgBox);

Object.keys(components).forEach(key => {
  Vue.component(key, components[key]);
});

Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key]);
})

// 动态设置页面title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
  document.title = to.meta.title;
  }
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
