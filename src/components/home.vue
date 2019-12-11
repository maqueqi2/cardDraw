<template>
  <div>
    <h3>过滤器</h3>
    <div>时间：{{times | date}}</div>
    <div class="container">
      <div class="d1">1</div>
      <div class="d2">2</div>
      <div class="d3">3</div>
      <!-- <p @click="show">ww</p> -->
      <!-- <input type="text" value="原值" placeholder="我是全局自定义指令" v-focus :class="{'back': !isColor}">
      <input type="text" value="原值" placeholder="我是全局自定义指令" v-focus :class="[isColor ? '': 'back']"> -->
      <!-- <input id="base" type="text" placeholder="请输入" name="base" v-model="base"> -->
      <input id="base" type="color" placeholder="请输入" name="base" v-focus v-vfocus v-model="base">
      <span class="spantext">改变颜色</span>
      <div class="img-box" v-for="item in imageList" :key="item.url">
        <img src="../assets/bg.png" alt='默认' v-images="item.url" />
      </div>
    </div>
  </div>
</template>

<script>
// import images from '@/directive/images/index.js'
// import { csfun } from '../directive.js'
export default {
  // directives: {
  //   images
  // },
  data () {
    return {
      base: '#eee',
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
      times: '20190920',
    }
  },
  directives: {
    focus: {
      inserted: function (e) {
        console.log(e.value);
      }
    // },
    // image: {
    //   inserted: function(e,binding) {
    //     console.log('图片',e);
    //     setTimeout(function() {
    //       e.setAttribute('src',binding.value);
    //     },300)
    //   }
    }
  },
  watch: {
    base(newVal,oldVal) {
      console.log(newVal,oldVal);
      this.updateColor();
    }
  },
  methods: {
    updateColor() {
      this.$el.style.setProperty('--color',this.base);
    }
  },
  created() {
    var num = [1,2,3];
    var num2 = 0;
    num2 = JSON.parse(JSON.stringify(num));
    num.pop();
    console.log('钩子',num,num2);
    // csfun();
  }
}
</script>

 <!-- scoped让css只在当前组件中起作用 -->
<style lang="less" scoped>
h3 {
  color: blue;
}
h3:hover {
  color: red;
}
.container {
  width: 80%;
  // height: 200px;
  background: #fff;
  padding-left: 40px;
  display: flex;
  // text-align: right;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  box-sizing: border-box;
  .d1,.d2,.d3 {
    margin-right: -50px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
  }
  .d1 {
    border: 2px solid #eee;
    background: goldenrod;
    color: green;
  }
  .d2 {
    border: 2px solid red;
    background: gold;
  }
  .d3 {
    border: 2px solid black;
    background: yellowgreen;
  }
  .img-box {
    width: 100%;
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
}
.back {
  background: rebeccapurple;
}
.spantext {
  --size: 30;
  font-size: calc(var(--size)*1px);
}
@media screen and (width: 200px) {
  .container {
    background: blue;
  }
  .spantext {
    --color: red;
    --size: 30;
    color: var(--color,blue);
    font-size: calc(var(--size)*1px);
  }
}
</style>
