<template>
  <div>
    <h3 :class="{'active' : choiceId===0}">翻牌抽奖{{choiceId}}</h3>
    <div class="card-module">
      <div v-for="(item,index) of imageList" :class="['img-box', {'active' : item.isShow}]" :key="index" @click="handleClick" :data-id=index>
        <div class="back">背面{{index}}</div>
        <img :src="item.url" class="img-item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imageList: [
          {
              url: "http://placehold.it/500x650/eeee00/000000?text=guang",
              isShow: false
          },
          {
              url: "http://placehold.it/500x650/ff0000/000000?text=hua",
              isShow: false
          },
          {
              url: "http://placehold.it/500x650/ea5e34/000000?text=sui",
              isShow: false
          },
          {
              url: "http://placehold.it/500x650/ff9042/000000?text=yue",
              isShow: false
          },
          {
              url: "http://placehold.it/500x650/2e90e5/000000?text=an",
              isShow: false
          },
          {
              url: "http://placehold.it/500x650/eeee00/000000?text=xiang",
              isShow: false
          },
          {
              url: "http://placehold.it/500x650/2e90e5/000000?text=ban",
              isShow: false
          },
          {
              url: "http://placehold.it/500x650/ff0000/000000?text=xin",
              isShow: false
          },
      ],
      choiceId: 0,
    }
  },
  methods: {
    handleClick(e) {
      var that = this;
      var id = e.currentTarget.dataset.id*1
      this.choiceId = id;
      console.log(event.target,'分割',e.currentTarget,this.imageList[id].isShow);
      if (this.imageList[id].isShow) {
        that.imageList.forEach((item)=>{
          item.isShow = true;
        })
      } else {
        this.imageList[id].isShow = true;
      }
    }
  },
}
</script>
<style lang="less" scope>
.card-module {
  padding: 25px;
  display: flex;
  flex-wrap: wrap;
  .img-box {
    flex-shrink: 0;
    width: 25%;
    height: 200px;
    text-align: center;
    box-sizing: border-box;
    position: relative;
    .img-item {
      width: 92%;
      padding: 5px 15px;
      object-fit: contain;
      background-color: #000;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      transform: rotateY(180deg);
      backface-visibility: hidden;
      transform-style: preserve-3d;
    }
    .back {
      width: 92%;
      height: 92%;
      background: #666;
      color: aqua;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      transform: rotateY(0deg);
      backface-visibility: hidden;
      transform-style: preserve-3d;
    }
    &.active {
      // animation: mymove 0.5s forwards;
      .img-item {
        transform: rotateY(0deg);
      // 翻牌前加个抖动效果
        transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1);
      }
      .back {
        transform: rotateY(180deg);
      // 翻牌前加个抖动效果
        transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1);
      }
    }
  }
}
</style>