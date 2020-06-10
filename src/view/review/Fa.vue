<template>
  <article>
    <h1>I am father</h1>
    <Son :parentMsg="parentMsg" @func="getSonFunc" unprop="unprop">
      <h2>下面是插槽：</h2>
      <h3>头部插槽，尾部插槽和普通插槽</h3>
      <template v-slot:header v-if="showSlotHeader">头部插槽，是组件实例标签内的元素</template>
      <br />
      <template v-slot:default>
        <aside v-if="!showSlot">
          这是一个普通插槽，是组件实例标签内的元素
          插槽内的内容访问作用域只能是当前father内数据和方法，不能调用son的
          <p>这个数据是在父亲这里获得的：{{parentMsg}}</p>
        </aside>
      </template>
      <br />
      <template v-slot:footer="body" v-if="showSlotFooter">
        尾部插槽，是组件实例标签内的元素，尾部插槽改成为作用域插槽
        <div>{{body}}</div>
        <p>1、在Son中将要给Fa使用的数据放到属性上</p>
        <p>2、在Fa这里定义个调用slot标签上属性的变量，注意此处body包含了slot内所有属性的值</p>
        <p>3、调用即可</p>
      </template>
    </Son>
    <el-button type="primary" @click="showSlot = !showSlot">显示slot的后备内容</el-button>
    <el-button type="primary" @click="showSlotHeader = !showSlotHeader">显示slot的头部后备内容</el-button>
    <el-button type="primary" @click="showSlotFooter = !showSlotFooter">显示slot的尾部后备内容</el-button>
    <h2>下面是动态组件和异步组件：</h2>
    <el-button type="primary" @click="comName = !comName">切换动态组件</el-button>
    <transition>
      <keep-alive>
        <component :is="comName ? 'liveOne' :'liveTwo'" ref="live"></component>
      </keep-alive>
    </transition>
    <h2>下面是ref：</h2>
    <b @click="showRefs">（click me show you ref）</b>
    <br />
    <ins>其实ref就是vue中组件的 id 属性， this.$refs 就是获取全部ref的集合</ins>
    <br />
    <ins>比如这里的this.$refs.live 获得的就是组件实例，根据这个可以获得方法和数据比如：this.$refs.live.msg</ins>
  </article>
</template>

<script>
import Son from "@/components/exercise/Son";
import liveOne from "@/components/exercise/liveOne";
import liveTwo from "@/components/exercise/liveTwo";

export default {
  name: "father",
  data() {
    return {
      parentMsg: "you are my son",
      showSlot: true,
      showSlotHeader: true,
      showSlotFooter: true,
      comName: true
    };
  },
  methods: {
    getSonFunc(data) {
      console.log(data);
    },
    showRefs() {
      console.log(this.$refs.live.msg);
      console.log(this.$refs.live.show());
      console.log(`
        到目前位置一共又几个$的运算符了：$el/$Set/$root/$parent/$children/$route/$refs。
        上这个地址看看vue的API：https://cn.vuejs.org/v2/api
      `);
    }
  },
  components: {
    Son,
    liveOne,
    liveTwo
  }
};
</script>

<style lang="scss" scoped>
</style>