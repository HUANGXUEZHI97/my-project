<template>
  <div id="review">
    <!-- 复习总结Day1-5 -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-switch v-model="show" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    <MyHelloWorld v-if="show"></MyHelloWorld>
    <DayOne v-else></DayOne>
    <Fa />
    <a href="#/liveOne">foo</a>
    <a href="#/liveTwo">bar</a>
    <h3>下面是router：（当前路由已经将/ 重定向为/liveTwo）</h3>
    <router-link to="/liveTwo">liveTwo</router-link>
    <br />
    <router-link to="/liveOne?msg=1">query传参：liveOne1</router-link>
    <br />
    <router-link to="/liveOne?msg=2">query传参：liveOne2</router-link>
    <br />
    <router-link to="/liveOther">liveOther</router-link>
    <br />
    <router-link to="/base/emails">经典布局emails</router-link>
    <br />
    <router-link to="/base/profile">经典布局profile</router-link>
    <br />
    <router-link to="/asasdad">to 404</router-link>
    <p>使用query方式就简单点：直接在请求地址后面加参数；如果是params则需要在routerjs内配置参数比如/liveOne:msg，然后在这里请求/liveOne/1</p>
    <br />
    <transition mode="out-in" name="rtLive">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <el-button type="success" @click="routerPush">router.push</el-button>
    <el-button type="success" @click="goBack">goBack</el-button>
    <el-button type="success" @click="routerReplace">routerReplace</el-button>
  </div>
</template>

<script>
// import Vue from 'vue';
//复习总结Day1-5：
import HelloWorld from "@/view/review/HelloWorld";
import MyHelloWorld from "@/view/review/MyHelloWorld";
import DayOne from "@/view/review/DayOne";
import Fa from "@/view/review/Fa";

//全局mixin会给每个组件都加上，影响非常大，建议定义 mixin 常量来指定混入具体的组件

// Vue.mixin({
//   created:function(){
//     console.log('abc')
//   }
// })
export default {
  data() {
    return {
      show: true,
      is: "MyHelloWorld"
    };
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
      console.log(window.history.length);
    },
    routerPush() {
      let pathNow = location.hash.substring(1).split("?")[0];
      console.log(pathNow);
      if (pathNow !== "/aaa" && pathNow !== "/liveTwo") {
        this.$router.push({ path: "/aaa", query: { msg: 123 } });
      }
    },
    routerReplace() {
      let pathNow = location.hash.substring(1).split("?")[0];
      console.log(pathNow);
      if (pathNow !== "/liveOne") {
        this.$router.replace({ path: "/liveOne" });
      }
    }
  },
  components: {
    HelloWorld,
    MyHelloWorld,
    DayOne,
    Fa
  }
};
</script>

<style>
#review {
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
