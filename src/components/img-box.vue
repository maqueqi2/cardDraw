<template>
  <div>
    <div class="container">
      <div class="img-box" v-for="item in imgData" :key="item.url">
        <img @click="sendFun" src="../assets/bg.png" alt='默认' v-images="item.url" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'img-box',
  // componentName: 'img-box',
  data () {
    return {
      name: '子组件传来的值',
    }
  },
  props: {
    imgData: {
      type: Array,
      default: '',
      required: true
    }
  },
  methods: {
    sendFun() {
      this.$emit('accFun', this.name);
    }
  },
  created() {
    console.log('钩子',this.$el);
  },
  beforeMount() {
      console.log('beforeMount钩子',this.$el);
  },
  mounted() {
      console.log('mounted钩子',this.$el);
  }
}
</script>

 <!-- scoped让css只在当前组件中起作用 -->
<style lang="less" scoped>
.container {
  background: #fff;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  box-sizing: border-box;
  .img-box {
    width: 100%;
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
}
</style>
