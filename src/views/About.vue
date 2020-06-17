<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      <button v-permission="['admin', 'editor']">editor button</button>
      <button v-permission="['admin']">admin button</button>
      <HelloWorld v-permission="['admin']" msg="Welcome to Your Vue.js + TypeScript App">Son：HelloWorld</HelloWorld>
    </p>
  </div>
</template>


<script>
import HelloWorld from "@/components/HelloWorld";

export default {
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" scoped>
</style>