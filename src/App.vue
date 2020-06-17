<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div id="nav">
      <router-link to="/">
        <svg-icon icon-class="tree" />Home
      </router-link>|
      <router-link to="/about">
        <svg-icon icon-class="bird" />About
      </router-link>
    </div>

    <!-- 路由出口 -->
    <router-view />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";


// import "@/icons/svg/bird.svg";
// import "@/icons/svg/tree.svg";

export default {
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
