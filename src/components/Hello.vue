<template>
  <div>
    <!-- vuex -->
    <h3 @click="add">{{counter}}</h3>
    <h3 @click="asycAdd">{{counter}}</h3>
    
    <h1>{{msg}}</h1>
    <p>
      <input type="text" @keydown.enter="addFeature" />
    </p>
    <ul>
      <li v-for="feature in features" :key="feature.id">{{feature}}</li>
      <li>feature长度：{{say}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from "vue-property-decorator";
import { State, Mutation, Action } from "vuex-class";
import { Feature } from "@/types";
import { getFeatures } from "@/api/feature";

@Component
export default class Hello extends Vue {
  // vuex整合推荐vuex-class
  @State counter!: number;
  // add即是type，类型是函数且无返回值
  @Mutation add!: () => void;
  // add仍是type，但是会和上面重名，需要换个变量名
  // 类型是函数返回值是Promise
  @Action("add") asycAdd!: () => Promise<number>;

  features: Feature[] = [];

  // 括号中的配置时给Vue的
  // 变量附近的配置时给ts
  @Prop({ type: String, required: true })
  msg!: string;

  // 函数直接作为回调
  // Emit修饰的函数就是自定义事件
  // 如果有返回值，则作为事件参数
  // 等同于 this.$emit('add-feature', feature)
  // Emit('abc') 则父级调用方法为 $abc="xxx"
  @Emit()
  addFeature(e: KeyboardEvent) {
    const inp = e.target as HTMLInputElement;
    const feature = { id: this.features.length + 1, name: inp.value };
    this.features.push(feature);
    inp.value = "";
    return feature;
  }

  //如果是和生命周期名字相同，那就是生命周期函数
  created() {
    this.$axios.get<Feature[]>("/api/list").then(res => {
      this.features = res.data;
    });

    // getFeatures().then(res => {
    //   this.features = res.data;
    // });

    // this.features = [
    //   { id: 1, name: "类型断言" },
    //   { id: 2, name: "类型注解" },
    //   { id: 3, name: "类型别名" }
    // ];
  }

  get say() {
    return this.features.length;
  }
}

// export default Vue.extend({
//   data() {
//     return {
//       features: ["类型断言", "类型注解", "类型别名"]
//     };
//   },
//   methods: {
//     addFeature(e: KeyboardEvent) {
//       const inp = e.target as HTMLInputElement;
//       this.features.push(inp.value);
//       inp.value = "";
//     }
//   }
// });
</script>

<style scoped>
li {
  list-style: none;
}
</style>