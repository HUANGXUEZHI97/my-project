<template>
  <div>
    <ul>
      <li @click="change()">Cat Ipsum</li>
      <li @click="change()">Hipster Ipsum</li>
      <li @click="change()">Cupcake Ipsum</li>
    </ul>
    <ins id="ins">Cat Ipsum</ins>
  </div>
</template>

<script>
export default {
  name: "live-two",
  methods: {
    change() {
      console.log(event.target);
      console.log(this.$parent);
      let ins = document.getElementById("ins");
      ins.innerHTML = event.target.innerHTML;
    }
  }
};
</script>

<style>
li {
  list-style: none;
}
</style>