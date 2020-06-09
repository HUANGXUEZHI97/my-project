<template>
  <div>
    <h1>i m usersettings!</h1>
    <Nav />
    <router-view />
    <router-view name="left"></router-view>
    <router-view name="bottom"></router-view>
  </div>
</template>

<script>
import Nav from "../components/base/Nav";

export default {
  name: "UserSettings",
  components: {
    Nav
  }
};
</script>

<style lang="scss" scoped>
</style>