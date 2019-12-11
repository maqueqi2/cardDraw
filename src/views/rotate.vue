<template>
  <div>
    <button  @click="copyOdd(1)">
      <span ref="copy">复制2单号</span>
    </button>
    <div class="content">
      <div :class="['items',{'active':isRotate||choiceId==0}]" @click="handleClick(0)">
        <img class="back-img" src="http://placehold.it/174x247/ff0000/fffff">
        <div class="gift-content">
          <img class="gift-img" src="http://placehold.it/400x400/ffff00/ffffff" alt="">
          <div class="desc"></div>
        </div>
      </div>
      <div :class="['items',{'active':isRotate||choiceId==1}]" @click="handleClick(1)">
        <img class="back-img" src="http://placehold.it/174x247/ff0000/fffff">
        <div class="gift-content">
          <img class="gift-img" src="http://placehold.it/400x400/ffff00/ffffff" alt="">
          <div class="desc"></div>
        </div>
      </div>
      <div :class="['items',{'active':isRotate||choiceId==2}]" @click="handleClick(2)">
        <img class="back-img" src="http://placehold.it/174x247/ff0000/fffff">
        <div class="gift-content">
          <img class="gift-img" src="http://placehold.it/400x400/ffff00/ffffff" alt="">
          <div class="desc"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isRotate: false,
      choiceId: -1
    }
  },
  methods: {
    copyOdd() {
      window.getSelection().removeAllRanges();
        let copyDOM = this.$refs.copy;
        let range = document.createRange();
        range.selectNode(copyDOM);
        window.getSelection().addRange(range);
        try {
          let successful = document.execCommand("copy");
          this.utilHelper.commonFn.toast(
            `${successful ? "复制成功" : "您的手机不支持自动复制，请手动复制~"}`
          );
        } catch (err) {
          console.log("Oops, unable to copy");
        }
        window.getSelection().removeAllRanges();
    },
    handleClick(e) {
      this.choiceId = e
      setTimeout(()=>{
        this.isRotate = !this.isRotate
      },1000)
    }
  },
}
</script>
<style lang="less" scope>
    .content {
            padding: 0 8px;
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            .items {
              width: 25%;
              height: 246px;
              text-align: center;
              margin-bottom: 8px;
              position: relative;
              .gift-content {
                width: 100%;
                height: 100%;
                font-size:12px;
                font-family:PingFangSC-Medium,PingFang SC;
                font-weight:500;
                color: #FF6A00;
                text-align: center;
                position: absolute;
                top: 0;
                left: 0;
                transform: rotateY(180deg);
                transform-style: preserve-3d;
                box-shadow:0px 0px 6px 0px rgba(255,255,255,0.89);
                border-radius:4px;
                border:1px solid;
                border-image:linear-gradient(180deg, rgba(255,149,49,1), rgba(255,103,21,1)) 1 1;
                background:linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(255,245,229,1) 100%);
                backface-visibility: hidden;
                box-sizing: border-box;
                .gift-img {
                  width: 43px;
                  height: 43px;
                  object-fit: contain;
                  display: block;
                  margin: 30px auto 0;
                }
                .desc {
                  margin-top: 10px;
                }
              }
              .back-img {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                object-fit: contain;
                box-sizing: border-box;
                transform: rotateY(0deg);
                transform-style: preserve-3d;
                backface-visibility: hidden;
              }
              @keyframes mymove {
                0% {transform: rotateY(0deg)}
                40% {transform: rotateY(-30deg)}
                100% {transform: rotateY(180deg)}
              }
              @keyframes mymov {
                0% {transform: rotateY(180deg)}
                40% {transform: rotateY(210deg)}
                100% {transform: rotateY(0deg)}
              }
              &.active {
                /* // animation: mymove 0.5s forwards; */
                .gift-content {
                  transform: rotateY(0deg);
                  // animation: mymov 1s forwards;
                  // 翻牌前加个抖动效果
                  transition: all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1);
                }
                .back-img {
                  transform: rotateY(180deg);
                  // animation: mymove 1s forwards;
                  // 翻牌前加个抖动效果
                  transition: all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1);
                }
              }
            }
          }
</style>