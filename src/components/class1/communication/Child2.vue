<template>
  <div>
    <h3 v-on="$listeners">Child2</h3>
    <input type="text" name="childInput" id="childInput" v-bind="$attrs">
    <button @click="sendToChild1">给child1发消息</button>
    <p>{{$attrs.msg}}</p>
    <p>{{foo}}</p>
  </div>
</template>

<script>
export default {
  inheritAttrs:false, // 设置为false避免设置到根元素上
  inject: ["foo"],
  methods: {
    sendToChild1() {
      this.$parent.$emit('event-from-child2','msg from child2')
    }
  }
};
</script>

<style lang="scss" scoped>
</style>