<template>
  <div class="count" @click="handleClick">
    {{number}}
  </div>
</template>

<script>
export default {
  // name: 'Test',
  // componentName: 'Test',
  data () {
    return {
      msg: '自定义累加',
      // 由于父子组件传值单向数据流的原因，所以必须把父组件传来的值复制为一个新的值才可以修改
      number: this.num,
    }
  },
  props: {
    num: {
      type: Number,
      default: '',
      required: true
    }
  },
  methods: {
    handleClick() {
      this.number += 2;
      console.log('this.number',this.number);
      this.$emit('sumFun', 2);
    }
  }
}
</script>
<style>
.count {
  padding: 15px;
  background: red;
}
</style>

