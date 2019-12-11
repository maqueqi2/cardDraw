<template>
  <!-- <div class="count">
    {{content}}
  </div> -->
  <!-- 非props直接页面显示content -->
  <div class="count">
    content
  </div>
</template>

<script>
export default {
  // 非Props特性会没有props无法接收父组件传来的值
  // props: {
  //   // content(变量)后面可以直接接Number类型，或者[Number,String]数组，亦或者是下面的这种对象形式
  //   content: {
  //     type: [Number,String],
  //     required: false,  //是否必传这个参数,为false时，content的值就会取默认值default
  //     default: 'default value',
  //     validator: function(value) {  //自定义校验器
  //       console.log(value,value.length)
  //       return (value.length > 5)
  //     }
  //   }
  // },
}
</script>
<style lang="less" scoped>
.count {
  display: inline-block;
  padding: 10px 20px;
  padding: 15px;
  background: red;
}
</style>

