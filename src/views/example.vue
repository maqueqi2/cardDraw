<template>
  <div>
    <h2>累加</h2>
    <count ref='one' @sumFun='sumFun'></count>
    <count ref='two' @sumFun='sumFun'></count>
    <div>{{total}}</div>

    <h2 class="box" :class="[isBlue? 'blue' : 'red']">示例页</h2>
    <div>{{str}}+'结束'</div>
    <div v-text="'str' + '结束'" @click="fun"></div>

    <div ref="demo">
      <span>虚拟dom</span>
    </div>

    <test :testData = 'testData' ref="componentsBox"></test>
    <img-box :imgData = 'imageList' @accFun='acceptFun'></img-box>
    <img-box :imgData = 'imageList2' @accFun='acceptFun'></img-box>
  </div>
</template>

<script>
// import Test from '@/components/test'
// import imgBox from '@/components/img-box'
// import count from '@/components/count'
export default {
  // components: {
  //   Test,
  //   imgBox,
  //   count,
  // },
  data() {
    return {
      total: 0,
      isBlue: true,
      str: '<span>一句话</span>',
      arr: [1,2,3],
      brr: [1,2,3],
      imageList: [
          {
              url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-p10-plus.jpg"
          },
          {
              url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/homepage/section4/home-s4-watch2-pro-banner.jpg"
          },
          {
              url: "http://consumer-img.huawei.com/content/dam/huawei-cbg-site/en/mkt/homepage/section4/home-s4-matebook-x.jpg"
          }
      ],
      imageList2: [
          {
              url: "http://placehold.it/400x200/ff3333/ffffff"
          },
          {
              url: "http://placehold.it/400x200/ff3333/000000"
          },
          {
              url: "http://placehold.it/400x200/ff3333/666666"
          }
      ],
      testData: '父组件example',
      imgData: '父组件example'
    }
  },
  methods: {
    acceptFun(e) {
      console.log('接收：',e);
    },
    fun() {
      console.log('demo打印：',this.$refs.demo.innerHTML)
      console.log('componentsBo打印：',this.$refs.componentsBox.msg)
    },
    sumFun() {
      console.log('打印',this.$refs.one.num)
      console.log('打印',this.$refs.two.num)
      this.total = this.$refs.one.num + this.$refs.two.num
    }
  },
  mounted() {
    console.log('删除前：',this.arr,this.brr);
    delete this.arr[0];
    this.$delete(this.brr,0);
    console.log('删除后：',this.arr,this.brr);
    this.fun();
  },
}
</script>

 <!-- scoped让css只在当前组件中起作用 -->
<style lang="less" scoped>
.blue {
  color: blue;
}
.red {
  color: red;
}
.box {
  display: inline-block;
  padding: 5px 20px;
  box-shadow: 1px 4px 1px 3px red;
}
</style>
