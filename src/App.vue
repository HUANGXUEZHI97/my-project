<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>下面是动态组件和异步组件：</h2>
    <el-switch v-model="show" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    <MyHelloWorld :key="111" v-if="!show"></MyHelloWorld>
    <DayOneDemo :key="222" v-else></DayOneDemo>
    <Fa />
  </div>
</template>

<script>
import MyHelloWorld from "./view/MyHelloWorld";
import DayOneDemo from "./view/demo/day-one-demo";
import Fa from "./view/Fa";

export default {
  name: "App",
  data() {
    return {
      show: true,
      is: "MyHelloWorld"
    };
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  },
  components: {
    MyHelloWorld,
    DayOneDemo,
    Fa
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
