<template>
  <div>
    <h3>组件通信</h3>
    <Child1 msg="some msg from parent" @some-event="onSomeEvent"></Child1>
    <Child2 msg="some msg from parent" @click="onClick" placeholder="我是通过$attrs获得的"></Child2>
    <button @click="goHome">回家吃饭</button>
  </div>
</template>

<script>
import Child1 from "./Child1";
import Child2 from "./Child2";

export default {
  provide() {
    return {
      foo: "INDEX-fooooooooooo"
    };
  },
  methods: {
    onSomeEvent(msg) {
      console.log("INDEX-communication：", msg);
    },
    goHome() {
      this.$children[0].eat();
    },
    onClick() {
      console.log("INDEX-来自老爹的回调函数处理", this);
    }
  },
  components: {
    Child1,
    Child2
  }
};
</script>

<style lang="scss" scoped>
</style>