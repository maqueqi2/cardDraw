<template>
  <div>
    <h2>主页</h2>
    <h3>给组件绑定原生事件</h3>
    <!-- <check @click.native="handleClick" content='asdwdwfw'></check> -->
    <div @click="handleClick" v-for="(item, index) in imageList" :key="index">{{item.url}}</div>

    <h3>组件参数校验与非Props特性</h3>
    <check content='asdwdwfw'></check>
    <check content='asdwdwfw'></check>

    <h3>父子组件传值</h3>
    <count-two :num=2 @sumFun='sumFun'></count-two>
    <count-two :num=3 @sumFun='sumFun'></count-two>
    <div>{{sum}}</div>
    <h3>过滤器</h3>
    <div>时间：{{times | date}}</div>
    <div class="container">
      <div class="d1" @click="fun1('参数')"><span>1</span></div>
      <div class="d2">2</div>
      <div class="d3">3</div>
    </div>
    <div>
      <input id="base" type="color" placeholder="请输入" name="base" v-focus v-vfocus v-model="base">
      <span class="spantext">改变颜色</span>
    </div>
    <!-- <test></test> -->
    <img-box :imgData = 'imageList'></img-box>
  </div>
</template>

<script>
// import images from '@/directive/images/index.js'
// import { csfun } from '../directive.js'
// import imgBox from '@/components/img-box'
import Vue from 'vue';
export default {
  // directives: {
  //   images
  // },
  // components: {
  //   imgBox
  // },
  data () {
    return {
      imgData: '父组件信息',
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
      sum: 5,
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
    },
    fun1(e) {
      console.log('点击',e,event.target.innerHTML,event.target.innerText);
      console.log('点击',e.target.innerHTML);
    },
    sumFun(step) {
      this.sum += step;
    },
    handleClick() {
      // alert('原生');
      // this.imageList[0] = {url: 'http://placehold.it/400x200/ff0000/ffffff'};
      Vue.set(this.imageList,0,{url: 'http://placehold.it/400x200/ff0000/ffffff'});
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
  color: var(--color,blue);
  font-size: calc(var(--size)*1px);
}
@media screen and (max-width: 400px) {
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
