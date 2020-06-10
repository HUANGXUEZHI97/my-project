<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <ReView /> -->
    <!-- <Class1 /> -->
    <Class2 />
  </div>
</template>

<script>
// import ReView from "@/view/ReView.vue";
// import Class1 from "@/view/class/Class1.vue";
import Class2 from "@/view/class/Class2.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  components: {
    // ReView,
    // Class1,
    Class2
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

.rtLive-enter-active,
.rtLive-leave-active {
  transition: opacity 0.5s;
}

.rtLive-enter,
.rtLive-leave-to {
  opacity: 0;
}
</style>
