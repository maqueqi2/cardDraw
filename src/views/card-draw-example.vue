<template>
  <div>
    <router-link to="/card-draw">标签跳转</router-link>
    <div @click="go">js跳转</div>
    <div id="projects">
      <div class="aniwz">
        <div class="text">抽奖游戏</div>
      </div>
      <div class="projects">
        <div v-for="(item,index) in cardList" :key="index" :class="['project',className(index),{'showli':item.isChoice}]" @click="choiceFun(index)">
          <div class="mask">
            <div class="back">{{item.url}}</div>
            <div class="front"><span></span></div>
          </div>
        </div>
        <div :class="['controls',{'show':isBegin}]" @click="play">
          <span class="bottom"></span>
          <span class="bottom"></span>
          <span class="bottom"></span>
          <div class="mask">
            <div class="text start">{{isBegin?'重置':'开始'}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg_bg" v-show="isTips"></div>
    <div class="bg_main" v-show="isTips">
      <div class="info">确定选择这张吗？</div>
      <div class="btn"><span class="qrxz" @click="submitFun">确认</span><span class="qxxz" @click="resetFun">取消</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cardList: [
        {url:'2',isShow:false,isChoice:false},
        {url:'6',isShow:false,isChoice:false},
        {url:'3',isShow:false,isChoice:false},
        {url:'7',isShow:false,isChoice:false},
        {url:'5',isShow:false,isChoice:false},
        {url:'8',isShow:false,isChoice:false},
        {url:'1',isShow:false,isChoice:false},
        {url:'4',isShow:false,isChoice:false}
      ],
      choiceId: null,
      // 是否开始展开卡片抽奖
      isBegin: false,
      // 提示
      isTips: false
    }
  },
  methods: {
    play(e) {
      console.log(e.target,'分割',e.currentTarget,this.isBegin)
      this.isBegin = !this.isBegin;
      if (this.isBegin) {
        this.addMove();
      } else {
        this.subMove();
      }
    },
    // 展开卡片
    addMove(){
      var that = this;
      this.cardList.forEach((item,index)=>{
        setTimeout(()=>{
          item.isShow = true;
          that.className(index);
        },300*index);
      })
    },
    // 收起卡片
    subMove(){
      this.cardList.forEach((item,index)=>{
          item.isShow = false;
          item.isChoice = false;
          this.className(index);
      })
    },
    // 点击卡片
    choiceFun(e) {
      if (this.cardList[e].isChoice) {
        this.cardList.forEach((item)=>{
          item.isChoice = true;
        })
      } else {
        // 直接翻转
        this.cardList[e].isChoice = true;
        // 弹出确认弹出
        // this.choiceId = e;
        // this.isTips = true;
      }
    },
    submitFun() {
      this.cardList[this.choiceId].isChoice = true;
      this.isTips = false;
    },
    resetFun() {
      this.isTips = false;
    },
    // 设置动画效果class名
    className(e) {
      if (this.cardList[e].isShow) {
        return 'ani' + e;
      }
    },
    go() {
      this.$router.push('/card-draw');
    }
  },
  created() {
    console.log('执行');
  },
}
</script>
<style lang="less" scoped>
@import '../assets/less/card-draw-example.less';
</style>