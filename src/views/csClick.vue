<template>
  <!-- 赚取积分任务 -->
  <div class="activity">
    <div class="items-cont" data-msg="1cen">
      <div class="info" @click="sayBye"  data-msg="2cen">
        <div class="desc" data-msg="3cen">
          <span data-msg="4cen">点击</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.activity {
  margin-top: 10px;
  .items-cont {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    background: #FC4D5A;
    .info {
      line-height: 28px;
      font-size:16px;
      font-family:PingFangSC-Medium,PingFang SC;
      font-weight:500;
      padding: 30px;
      background: #333;
      .desc {
        line-height: 15px;
        font-size: 13px;
        display: inline-flex;
        align-items: center;
        padding: 30px;
        background: #FF0000;
        margin-top: 5px;
        span {
          display: block;
          margin-top: 3px;
          padding: 30px;
          background: #666;
          margin-top: 5px;
          color: #fff;
        }
      }
    }
    .img-box {
      flex-shrink: 0;
      width: 58px;
      height: 58px;
      margin-left: 5px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>

<script>
export default {
  name: 'csClick',
  props: {},
  data() {
    return {
      msg:'byebye!'
    };
  },
  methods: {
    sayBye(e){
      // let msg=e.target.getAttribute('data-msg');
      let msg=e.target.dataset.msg;
      console.log('点击元素',msg)
      console.log('事件绑定元素', e.currentTarget.dataset.msg);
    }
  },
};
</script>
