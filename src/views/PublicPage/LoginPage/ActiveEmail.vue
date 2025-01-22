<script setup>
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import PageLogoHeader from "./Layout/PageLogoHeader.vue";
import RecentEvents from "./Layout/RecentEvents.vue";

const router = useRouter();
const ruleFormRef = ref(null);

const form = reactive({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  postcode: "",
  recommand: [],
});

const rules = reactive({
  firstname: [
    { required: true, message: "Please input first name", trigger: "blur" },
  ],
  lastname: [
    { required: true, message: "Please input last name", trigger: "blur" },
  ],
  email: [{ required: true, message: "Please input email", trigger: "blur" }],
  password: [
    { required: true, message: "Please input password", trigger: "blur" },
    {
      min: 6,
      message: "Password must be at least 6 characters",
      trigger: "blur",
    },
  ],
  confirmPassword: [
    {
      required: true,
      message: "Please input confirm password",
      trigger: "blur",
    },
    {
      validator: (rule, value, callback) => {
        if (value === form.password) {
          callback();
        } else {
          callback(new Error("The two passwords do not match"));
        }
      },
      trigger: "blur",
    },
  ],
  phone: [
    { required: false, message: "Please input phone number", trigger: "blur" },
  ],
  postcode: [
    { required: false, message: "Please input postcode", trigger: "blur" },
  ],
  recommand: [
    {
      type: "array",
      required: true,
      message: "Please select at least one activity type",
      trigger: "change",
    },
  ],
});

const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      ElMessage.success("submit!");
      console.log(form);
      router.push({ name: "active-email" });
    } else {
      ElMessage.error("please fill in the required fields");
    }
  });
};
</script>

<template>
  <div class="login-page">
    <PageLogoHeader></PageLogoHeader>
    <div class="page-layout">
      <div class="form-container">
        <h2 class="title">Sign Up</h2>
        <p>
          Register a new account or
          <router-link class="plink" to="/login">sign in</router-link> if you
          already have an account
        </p>
        <el-form
          :model="form"
          label-width="auto"
          label-position="top"
          class="login-form"
          :rules="rules"
          ref="ruleFormRef"
        >
          <el-form-item label="Email Address" class="label" prop="email">
            <el-input v-model="form.email" />
          </el-form-item>
          <el-form-item label="First Name" class="label" prop="firstname">
            <el-input v-model="form.firstname" />
          </el-form-item>
          <el-form-item label="Last Name" class="label" prop="lastname">
            <el-input v-model="form.lastname" />
          </el-form-item>
          <el-form-item label="Password" class="label" prop="password">
            <el-input
              type="password"
              v-model="form.password"
              autocomplete="new-password"
            />
          </el-form-item>
          <el-form-item
            label="Confirm Password"
            class="label"
            prop="confirmPassword"
          >
            <el-input
              type="password"
              v-model="form.confirmPassword"
              autocomplete="new-password"
            />
          </el-form-item>
          <el-form-item label="Phone Number" class="label" prop="phone">
            <el-input v-model="form.phone" />
          </el-form-item>
          <el-form-item label="Postcode" class="label" prop="postcode">
            <el-input v-model="form.postcode" />
          </el-form-item>
          <el-form-item
            label="We’d love to know how you became aware of us ?"
            class="label"
            prop="recommand"
          >
            <el-checkbox-group v-model="form.recommand">
              <el-checkbox value="Google" name="type" class="checkbox">
                Google
              </el-checkbox>
              <el-checkbox value="YouTube" name="type" class="checkbox">
                YouTube
              </el-checkbox>
              <el-checkbox value="FaceBook" name="type" class="checkbox">
                FaceBook
              </el-checkbox>
              <el-checkbox value="Linkedin" name="type" class="checkbox">
                Linkedin
              </el-checkbox>
              <el-checkbox value="Friends" name="type" class="checkbox">
                Friend's Recommendation
              </el-checkbox>
              <el-checkbox value="Others" name="type" class="checkbox">
                Others
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-button
            type="primary"
            class="btn-signin"
            @click="submitForm(ruleFormRef)"
            >Sign Up</el-button
          >
        </el-form>
      </div>
      <div class="ad-container">
        <RecentEvents></RecentEvents>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "./Layout/LoginForm.scss";

.plink {
  text-decoration: none;
  color: $primary-color;

  &:hover {
    text-decoration: underline;
  }
}
</style>
