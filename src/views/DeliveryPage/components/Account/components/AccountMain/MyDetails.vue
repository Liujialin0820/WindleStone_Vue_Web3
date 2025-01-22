<script setup>
import { useAuthStore } from "@/stores/authStore";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import ChangePwd from "./components/ChangePwd.vue";
const authStore = useAuthStore();
const ruleFormRef = ref();
const router = useRouter();
const form = reactive({
  last_name: "",
  first_name: "",
  last_login: "",
  email: "",
  password: ".............",
  phone: false,
  enrolled_until: "",
});

Object.assign(form, authStore.user);

const rules = reactive({
  first_name: [
    { required: true, message: "Please input first name", trigger: "blur" },
  ],
  last_name: [
    { required: true, message: "Please input last name", trigger: "blur" },
  ],
});

const ChangeProfile = () => {
  console.log("submit!");
};

const contactus = () => {
  router.push({ name: "lmsaccountcontactus" });
};

let FormVisible = ref(false);
</script>

<template>
  <el-card style="max-width: 100%; margin: 1rem 0"
    ><el-form
      :model="form"
      label-width="auto"
      style="max-width: 400px"
      ref="ruleFormRef"
      :rules="rules"
    >
      <el-form-item label="First Name :" prop="first_name">
        <el-input v-model="form.first_name" />
      </el-form-item>
      <el-form-item label="Last Name :" prop="last_name">
        <el-input v-model="form.last_name" />
      </el-form-item>
      <el-form-item label="Email Address :" prop="email">
        <el-input v-model="form.email" disabled />
      </el-form-item>
      <el-form-item label="Password :" prop="password">
        <el-input v-model="form.password" type="password" disabled />
        <el-button @click="FormVisible = true">Change my password</el-button>
      </el-form-item>
      <el-form-item label="Phone Number :" prop="phone">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="Expires On :" prop="enrolled_until">
        <el-input v-model="form.enrolled_until" disabled />
      </el-form-item>
      <el-form-item>
        <el-button class="button" type="primary" @click="ChangeProfile"
          >Change My Profile</el-button
        >
        <el-button class="button" type="info" @click="contactus"
          >Contact Us</el-button
        >
      </el-form-item>
    </el-form>
  </el-card>
  <ChangePwd v-model="FormVisible"></ChangePwd>
</template>

<style scoped>
.button {
  margin: 0 auto;
}

.change_link {
  display: block;
  margin-left: 1rem;
}
</style>
