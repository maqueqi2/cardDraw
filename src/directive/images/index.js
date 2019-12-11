import images from './images'

const install = function(Vue) {
  Vue.directive('images',images)
}

if (window.Vue) {
  window['images'] = images
  Vue.use(install);
  console.log('执行');
} else {
  console.log('未执行');
}

images.install = install
export default images