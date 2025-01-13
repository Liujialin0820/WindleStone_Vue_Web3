<template>
  <div class="login-page">
    <!-- 左侧登录表单 -->
    <div class="login-form-container">
      <h2 class="title">IAM user sign in</h2>
      <form @submit.prevent="handleSubmit">
        <!-- Account ID/alias -->
        <label for="accountId" class="label">
          Account ID (12 digits) or account alias
        </label>
        <input
          id="accountId"
          v-model="accountId"
          type="text"
          class="input"
          placeholder="123456789012"
          required
        />

        <!-- IAM Username -->
        <label for="username" class="label">IAM username</label>
        <input
          id="username"
          v-model="username"
          type="text"
          class="input"
          placeholder="jialin"
          required
        />

        <!-- Password -->
        <label for="password" class="label">Password</label>
        <input
          id="password"
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          class="input"
          placeholder="******"
          required
        />

        <!-- Show Password -->
        <div class="checkbox-group">
          <input
            type="checkbox"
            id="showPassword"
            v-model="showPassword"
            class="checkbox"
          />
          <label for="showPassword">Show Password</label>
        </div>

        <!-- Sign in button -->
        <button type="submit" class="btn-signin">Sign in</button>
      </form>

      <!-- 其他链接和功能 -->
      <div class="additional-links">
        <a href="#" class="link"> Sign in using root user email </a>
        <a href="#" class="link"> Create a new AWS account </a>
        <div class="checkbox-group">
          <input
            type="checkbox"
            id="rememberAccount"
            v-model="rememberAccount"
            class="checkbox"
          />
          <label for="rememberAccount">Remember this account</label>
        </div>
      </div>
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
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      accountId: "",
      username: "",
      password: "",
      showPassword: false,
      rememberAccount: false,
    };
  },
  methods: {
    handleSubmit() {
      // 在这里处理登录逻辑，比如调用后端API进行账号密码校验
      console.log("Account ID:", this.accountId);
      console.log("Username:", this.username);
      console.log("Password:", this.password);
      console.log("Remember account:", this.rememberAccount);
      alert("登录表单已提交，具体逻辑请自行实现。");
    },
  },
};
</script>

<style scoped>
/* 整体布局：左侧表单 & 右侧广告 */
.login-page {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  box-sizing: border-box;
}

/* 左侧：表单区域 */
.login-form-container {
  flex: 1;
  max-width: 400px;
  margin-right: 2rem;
}

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

.checkbox-group {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
}

.checkbox {
  margin-right: 0.3rem;
}

.btn-signin {
  margin-top: 1.5rem;
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  background-color: #ff9900;
  border: none;
  color: #fff;
  cursor: pointer;
}

.btn-signin:hover {
  background-color: #dc7b00;
}

.additional-links {
  margin-top: 1.5rem;
}

.link {
  display: block;
  color: #0073bb;
  text-decoration: none;
  margin-bottom: 0.5rem;
}

.link:hover {
  text-decoration: underline;
}

/* 右侧：广告区域 */
.ad-container {
  flex: 1;
  background: #f8f8f8;
  border-radius: 4px;
  padding: 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.ad-container h3 {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
}

.ad-date {
  margin: 0 0 1rem;
  color: #777;
}

.ad-text {
  margin: 0 0 1.5rem;
  line-height: 1.5;
}

.btn-learn-more {
  width: 120px;
  padding: 0.5rem;
  background-color: #0073bb;
  border: none;
  color: #fff;
  cursor: pointer;
}

.btn-learn-more:hover {
  background-color: #005da5;
}
</style>
