<template>
  <article>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header style="margin-bottom:100px">
          <h1>dayone</h1>
          <ins v-cloak>插值表达式：{{componentName}}</ins>
          <p v-text="'textContent'"></p>
          <abbr :title="abbr" v-html="htmlContent"></abbr>
          <input type="text" v-model="abbr" value="我说啥这就是啥" />
        </el-header>
        <el-main>
          <h4>注意：首先要知道事件监听是dom节点从上往下获取再从下往上触发</h4>
          <h4>如果没有.capture修饰器的话，一切都是正常</h4>
          <h4>如果有.capture修饰器的话，只要点击有capture修饰符的节点或者其子节点会改变冒泡为捕获。</h4>
          <h4>从下面例子来看可知，从上往下获取的时候到capture时，就会触发，然后再往下传递，到底后往上回传跳过capture，到最顶</h4>
          <div :class="[base,article]" @click="clickArticle">
            <div :class="base" @click.capture="clickCapture">
              <button @click.stop="clickStop">click.stop</button>
              <a href="https://www.baidu.com" @click.prevent="clickPrenvent">to baidu</a>
              <button @click.self="clickSelf">clickSelf</button>
              <button @click.once="clickOnce">clickOnce</button>
              <button @click="clickDefault">default</button>
            </div>
          </div>
          <button @click="changeState">changeState</button>
          <aside v-if="ifSee">aside1</aside>
          <aside v-show="showSee">aside2</aside>
          <button @click="changeItems">changeItems</button>
          <h1>daytwo</h1>
          <div>{{msg|msgFormat('handsome','smart')|test}}</div>
          <span>{{dataStr | dataFormat(dataStr,'yyyy-mm-dd')}}</span>
          <div v-pin="200">v-pin</div>
          <button @click="requestMock">axios请求mock</button>
        </el-main>
        <el-footer>
          <el-switch v-model="show" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          <transition
            name="fade"
            enter-active-class="animated bounceIn"
            leave-active-class="animated bounceOut"
            :duration="{enter:400, leave:400}"
          >
            <p v-if="show">hello</p>
          </transition>
        </el-footer>
      </el-container>
    </el-container>
  </article>
</template>

<script>
import Vue from "vue";
import api from "@/api/index";

Vue.filter("msgFormat", function(msg, arg1, arg2) {
  return msg.replace(/单纯/g, arg1 + arg2);
});
Vue.filter("test", function(msg) {
  return msg + "====";
});
Vue.filter("dataFormat", function(dataStr, pattern = "") {
  var dt = new Date(dataStr);

  var y = dt.getFullYear();
  var m = dt.getMonth();
  var d = dt.getDay();

  if (pattern.toLowerCase === "yyyy-mm-dd") {
    return `${y}-${m}-${d}`;
  } else {
    var hh = dt.getHours();
    var mm = dt.getMinutes();
    var ss = dt.getSeconds();
  }
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
});

export default {
  name: "DayOne",
  data() {
    return {
      componentName: "day-one",
      htmlContent: "html",
      abbr: null,
      base: "capture",
      article: "article",
      ifSee: true,
      showSee: true,
      items: [1, 2, 3, 0],
      i: 4,
      msg: "我是一个单纯的小孩",
      dataStr: new Date(),
      show: true
    };
  },
  methods: {
    clickArticle() {
      console.log("click article!");
    },
    clickCapture() {
      console.log("click capture!");
    },
    clickStop() {
      console.log("click stop!");
    },
    clickPrenvent() {
      console.log("click prevent!");
    },
    clickSelf() {
      console.log("click self!");
    },
    clickOnce() {
      console.log("click once!");
    },
    clickDefault() {
      console.log("click default!");
    },
    changeState() {
      this.ifSee = !this.ifSee;
      this.showSee = !this.showSee;
    },
    changeItems() {
      Vue.set(this.items, this.items.length, this.i++);
      console.log(this.items + "," + this.items.length);
    },
    requestMock() {
      api.get("/mock/index").then(value => {
        console.log(value);
      });
    }
  },
  directives: {
    pin: {
      bind: function(el, binding) {
        el.style.position = "fixed";
        el.style.top = binding.value + "px";
      },
      inserted: function() {},
      update: function() {}
    }
  }
};
</script>

<style>
[v-cloak] {
  display: none;
}
.capture {
  margin: 0 auto;
  display: block;
  width: 150px;
  height: 150px;
  background-color: white;
}
.article {
  width: 200px;
  height: 200px;
  background-color: aquamarine;
}

/* .fade-enter-active,
.fade-leave-active{
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to{
  opacity: 0;
} */
</style>