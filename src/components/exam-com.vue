<template>
  <div class="count" @click="handleClick">
    {{selfContent}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      selfContent: this.content,
    }
  },
  props: {
    content: {
      type: [Number,String],
      default: '',
      required: true
    }
  },
  methods: {
    handleClick() {
      // alert(this.content);
      this.bus.$emit('change',this.content);
    }
  },
  mounted() {
    var that = this;
    this.bus.$on('change',function (val) {
      that.selfContent= val;
      // alert(val);
    })
  }
}
</script>
<style>
.count {
  display: inline-block;
  padding: 15px;
  background: red;
}
</style>

