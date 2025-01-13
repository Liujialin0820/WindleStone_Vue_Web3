<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
</script>

<template>
  <div class="login-page">
    <div class="logo">
      <img src="@/assets/image/common/windlestone-logo.png" alt="logo" />
    </div>
    <div class="login-content container">
      <div class="login-form-container">
        <h2 class="title">Login into your account.</h2>
        <form>
          <!-- email -->

          <label for="email" class="label">Email</label>
          <el-input
            id="email"
            v-model="email"
            type="text"
            placeholder="please enter your email"
            required
            class="input"
          />

          <!-- Password -->
          <label for="password" class="label">Password</label>
          <el-input
            id="password"
            v-model="password"
            class="input"
            type="password"
            placeholder="Please input password"
            show-password
          />
          <!-- Sign in button -->
          <el-button type="primary" class="btn-signin">Primary</el-button>
        </form>
        <!-- 其他链接和功能 -->
        <a href="#" class="link"> Create a new AWS account </a>
        <div class=""></div>
      </div>
      <!-- 右侧的广告或宣传图 -->
      <div class="ad-container">
        <h3>AWS re:Invent</h3>
        <p class="ad-date">Dec. 2 – Dec. 6, 2024 | Las Vegas, NV</p>
        <p class="ad-text">
          Automate code reviews with Amazon Q Developer - get immediate feedback
          on your code so you can iterate faster
        </p>
        <button class="btn-learn-more">Learn more</button>
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
  display: flex;
  flex-direction: row; /* 横向排列 */
  min-height: 100vh -5.5rem;
  padding: 2rem 1rem;
  background-color: $background-color;

  .login-form-container {
    flex: 1;
    padding: 2rem;
    border-right: 1px solid #e0e0e0;
    max-width: 25rem;

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
      padding: 0.5rem;
      font-size: 1rem;
      box-sizing: border-box;
    }

    .btn-signin {
      margin-top: 1.5rem;
      width: 100%;
      padding: 0.75rem;
      font-size: 1rem;
      border: none;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
