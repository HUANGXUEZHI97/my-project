<template>
  <div>
    live-one
    <br />通过this.$route.query来获得通过query传来的参数
    <ins>{{this.$route.query.msg}}</ins>
    <ins>{{this.$route.params.msg}}</ins>
  </div>
</template>

<script>
export default {
  name: "liveOne",
  data() {
    return {
      msg: "msggggggg"
    };
  },
  methods: {
    show() {
      return this.msg;
    }
  },
  created() {
    console.log("created：", this.msg);
  },
  mounted() {
    console.log("created：", this.msg);
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to);
    console.log(from);
    console.log(next);
  }
};
</script>

<style scoped>
</style>