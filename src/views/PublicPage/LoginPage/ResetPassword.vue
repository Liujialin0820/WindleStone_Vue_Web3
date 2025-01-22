<script setup>
import { login } from "@/apis/authAPI";
import { useAuthStore } from "@/stores/authStore";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import PageLogoHeader from "./Layout/PageLogoHeader.vue";
import RecentEvents from "./Layout/RecentEvents.vue";

const rememberAccount = ref(true);
const router = useRouter();
const authStore = useAuthStore();

let form = reactive({
  email: "",
  password: "",
});

const onSubmit = async () => {
  let pwdRgx = /^[0-9a-zA-Z_-]{6,}/;
  let emailRgx = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9])+/;
  if (!emailRgx.test(form.email)) {
    ElMessage.info("Please enter a valid email address");
    return;
  }
  if (!pwdRgx.test(form.password)) {
    ElMessage.info("Password must be at least 6 characters");
    return;
  }
  try {
    let data = await login(form.email, form.password);
    let token = data.token;
    let user = data.user;
    authStore.setUserToken(user, token);
    ElMessage.success("Login successfully");
    // 跳转到OA系统的首页
    console.log(user);

    router.push({ name: "lmsdefault" });
  } catch (error) {
    // alert(detail)
    ElMessage.error(error.response.data.detail);
  }
};
</script>

<template>
  <div class="login-page">
    <page-logo-header></page-logo-header>
    <div class="page-layout">
      <div class="form-container">
        <h2 class="title">
          Please enter your email address, and a password reset email will be
          sent to you.
        </h2>
        <form>
          <!-- email -->

          <label for="email" class="label">Email</label>
          <el-input
            id="email"
            v-model="form.email"
            type="text"
            placeholder="please enter your email"
            required
            class="input"
          />
          <!-- Sign in button -->
          <el-button type="primary" class="btn-signin" @click="onSubmit"
            >Reset Password</el-button
          >
          <!-- 其他链接和功能 -->
          <router-link to="/register" class="link">
            I don't have an account
          </router-link>
          <router-link to="/reset-password" class="link">
            I forgot my password
          </router-link>
        </form>
      </div>
      <!-- 右侧的广告或宣传图 -->
      <div class="ad-container">
        <RecentEvents></RecentEvents>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "./Layout/LoginForm.scss";
</style>
