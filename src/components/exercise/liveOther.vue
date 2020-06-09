<template>
  <div>
    <h1>liveOther</h1>
    <router-link to="/liveOther/thr">liveThr</router-link>
    <br />
    <router-link to="/liveOther/four">liveFour</router-link>
    <br />
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "liveOther"
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>