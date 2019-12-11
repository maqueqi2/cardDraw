<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}--{{testData}}</h1>
  </div>
</template>

<script>
export default {
  // name: 'Test',
  // componentName: 'Test',
  data () {
    return {
      msg: '自定义组件'
    }
  },
  props: {
    testData: {
      type: String,
      default: '',
      required: true
    }
  }
  // components: {}
}
</script>
