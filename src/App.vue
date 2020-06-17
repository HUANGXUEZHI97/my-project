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
    <!-- <Hello msg="blabla~" @add-feature="OnAddFeature" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Hello from "./components/Hello.vue";

import { Feature } from "@/types";

// import "@/icons/svg/bird.svg";
// import "@/icons/svg/tree.svg";

@Component({
  components: {
    HelloWorld,
    Hello
  }
})
export default class App extends Vue {
  OnAddFeature(f: Feature) {
    console.log("新增：" + f.name);
  }
}
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
