<template>
  <article>
    <!-- <com-one />
    <com-two />
    <self-com />-->
    <h1>hello!!!!</h1>
  </article>
</template>

<script>
// import Vue from "vue";

// 此处因2为Vue/cli创建的vue是 runtime-only 运行时编译的，所以此处不能使用template,要使用runtime compiler
// var com1 = Vue.extend({
//   template: `<h3>我是根据继承vue模板创建的组件1</h3>`
// });
// Vue.component("com-one", com1);

// Vue.component("com-two", {
//   data() {
//     return {
//       comKey: 1
//     };
//   },
//   template: "<h3>我是直接在component中的第二参数obj创建的组件2{{comKey}}</h3>"
// });
const myMixins = {
  data: function() {
    return {
      foo: 1,
      bar: 2,
      baz: 3
    };
  },
  created: function() {
    this.hello();
  },
  methods: {
    hello() {
      console.log("hello myximins!!"+this.foo+this.bar+this.baz);
    }
  }
};

export default {
  name: "MyHelloWorld",
  data() {
    return {
      foo: "foo",
      bar: 4
    };
  },
  components: {
    // selfCom: {
    //   data() {
    //     return {
    //       comKey: 2
    //     };
    //   },
    //   template: '<h1>这是我的第一个私有组件{{comKey}}</h1>'
    // }
  },
  created () {
    console.log('对象上的created');
  },
  mixins: [myMixins]
};
</script>

<style lang="scss" scoped>
</style>