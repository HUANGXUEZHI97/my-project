<template>
  <article>
    <h2>I am son!</h2>
    <span>
      <b>父向子传递：</b>
      {{parentMsg}}
    </span>
    <el-button type="primary" @click="getUnprop">get unprop</el-button>
    <el-button type="primary" @click="myclick">向父传值</el-button>
    <br>
    <slot name="header">头部slot</slot>
    <br>
    <slot name="default">我是后备插槽，数据在Son内编写的，如果father中Son标签中间的内容为空，则我就显示出来</slot>
    <br>
    <slot name="footer" :userMsg="sonMsg" unMsg="just msg">尾部slot</slot>
  </article>
</template>

<script>
export default {
  name: "son",
  props: {
    parentMsg: {
      type: String,
      default: null,
      required: true
    }
  },
  data() {
    return {
      sonMsg: {
        msg: "我是你儿子啊！！",
        num: 123
      }
    };
  },
  methods: {
    getUnprop() {
      //获取非prop特性属性
      //方法一：
      console.log(this.$el.getAttribute("unprop"));
      //方法二：
      // v-bind="$attrs" 该方法获取非prop特性属性，直接在标签上使用即可；
      // 同样的：v-on="$listeners" 获取未绑定的事件
    },
    myclick() {
      this.$emit("func", this.sonMsg);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>