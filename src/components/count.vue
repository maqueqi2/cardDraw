<template>
  <div class="count" @click="handleClick">
    {{num}}
  </div>
</template>

<script>
export default {
  // name: 'Test',
  // componentName: 'Test',
  data () {
    return {
      msg: '自定义累加',
      num: 0,
    }
  },
  // props: {
  //   num: {
  //     type: Number,
  //     default: '',
  //     required: true
  //   }
  // }
  methods: {
    handleClick() {
      this.num++;
      this.$emit('sumFun');
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

