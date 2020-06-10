<template>
  <div @click="$emit('some-event','msg from child1')">
    <h3>Child1</h3>
    <P>{{msg}}</P>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.$parent.$on("event-from-child2", msg => {
      console.log("Child1：", msg);
    });
  },
  methods: {
    eat() {
      console.log("Child1：这就回家");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>