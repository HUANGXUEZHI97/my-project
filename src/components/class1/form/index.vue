<template>
  <div>
    <h3>KInput表单</h3>
    <hr />
    <z-form :rules="rules" :model="model" ref="loginForm">
      <z-form-item label="用户名" prop="username">
        <z-input v-model="model.username" placeholder="请输入用户名"></z-input>
      </z-form-item>
      <z-form-item label="确认密码" prop="password">
        <z-input type="password" v-model="model.password" placeholder="请输入密码"></z-input>
      </z-form-item>
      <z-form-item>
        <button @click="submitForm">登录</button>
      </z-form-item>
    </z-form>
  </div>
</template>

<script>
import ZInput from "@/components/class1/form/ZInput";
import ZFormItem from "@/components/class1/form/ZFormItem";
import ZForm from "@/components/class1/form/ZForm";
import Notice from "@/components/class1/form/Notice";

export default {
  data() {
    return {
      model: {
        username: "tom",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名"}],
        password: [{ required: true, message: "请输入密码"}]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs["loginForm"].validate(valid => {
        const notice = this.$create(Notice, {
          title: "社会你智哥喊你来搬砖！",
          message: valid ? "请求登录" : "校验失败",
          duration: 2000
        });
        notice.show();
        // if (valid) {
        //   alert("submit");
        // } else {
        //   console.log("error submit!");
        //   return false;
        // }
      });
    }
  },
  components: {
    ZInput,
    ZFormItem,
    ZForm
  }
};
</script>

<style lang="scss" scoped>
</style>