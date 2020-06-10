<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="error" class="error">{{error}}</p>
  </div>
</template>

<script>
import Schema from "async-validator";

export default {
  inject: ["form"],
  props: {
    label: {
      //输入项标签
      type: String,
      default: ""
    },
    prop: {
      //字段名
      type: String,
      default: ""
    }
  },
  data() {
    return {
      error: "" //校验错误
    };
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      //获得对应FormItem得校验规则
      const rules = this.form.rules[this.prop];
      //获得校验值
      const value = this.form.model[this.prop];
      //校验描述对象
      const descriptor = { [this.prop]: rules };
      //创建校验器
      const schema = new Schema(descriptor);
      //返回promise，没有触发catch则表明验证通过
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.error = errors[0].message;
          console.log(errors);
        } else {
          this.error = "";
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
</style>