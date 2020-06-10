<template>
  <div>
    <!-- 第一节课：form表单组件化 -->
    <from-example></from-example>
    <communication></communication>
    <slots></slots>
  </div>
</template>

<script>
//第一节课：form表单组件化
import fromExample from "@/components/class1/form";
import communication from "@/components/class1/communication";
import slots from "@/components/class1/slots";
export default {
  components: {
    fromExample,
    communication,
    slots
  }
};
</script>

<style lang="scss" scoped>
</style>