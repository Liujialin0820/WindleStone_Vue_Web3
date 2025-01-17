<script setup>
import { login } from "@/apis/authAPI";
import { useAuthStore } from "@/stores/authStore";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";

const rememberAccount = ref(true);
const router = useRouter();
const authStore = useAuthStore();

let form = reactive({
  email: "",
  password: "",
});

</script>

<template>
  <div class="login-page">
    <div class="logo">
      <img src="@/assets/image/common/windlestone-logo.png" alt="logo" />
    </div>
    <div class="login-content container">
      <div class="login-form-container">
        <h2 class="title">Login into your account.</h2>

      </div>
      <!-- 右侧的广告或宣传图 -->
      <div class="ad-container">
        <img
          src="@\assets\image\popup\2 years access ad revised (1).jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo {
  img {
    height: 5.5rem;
    margin: 2rem auto;
    display: block;
  }
}

.login-content {
  /* 整体布局 */
  display: flex;
  flex-direction: row; /* 横向排列 */
  min-height: 100vh -5.5rem;
  padding: 2rem;
  margin: 0 auto;
  background-color: $background-color;

  /* 左侧表单 */
  .login-form-container {
    flex: 1; /* 占满剩余空间 */
    padding: 2rem;
    .title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .label {
      display: block;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    .input {
      width: 100%;
      padding: 0.5rem 0;
      font-size: 1rem;
      box-sizing: border-box;
    }

    .checkbox {
      margin-right: 0.3rem;
      accent-color: $primary-color;
    }

    .checkbox-group {
      display: flex;
      align-items: center;
      margin-top: 0.5rem;
    }

    .btn-signin {
      margin-top: 1rem;
      width: 100%;
      padding: 0.5rem;
      font-size: 1rem;
      border: none;
      color: #fff;
      cursor: pointer;
    }

    .link {
      display: block;
      color: $primary-color;
      text-decoration: none;
      margin-top: 0.5rem;
    }

    .link:hover {
      text-decoration: underline;
    }
  }

  /* 右侧广告 */
  .ad-container {
    flex: 1;
    padding: 2rem;
    img {
      max-width: 85%;
      height: auto;
    }
  }
}

@media screen and (min-width: 768px) {
  .login-form-container {
    border-right: 1px solid #e0e0e0; /* 右侧加一条分割线 */
    margin-left: 5rem;
  }
}

@media (max-width: $phone-width) {
  .login-content {
    flex-direction: column;
  }

  .ad-container {
    max-width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
