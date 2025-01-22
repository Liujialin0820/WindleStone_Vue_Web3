<script setup>
import { resetPassword } from "@/apis/authAPI";
import { ElMessage } from "element-plus";
import { reactive, ref } from "vue";

const FormVisible = defineModel();
const formLabelWidth = "160px";

const form = reactive({
  oldpwd: "",
  pwd1: "",
  pwd2: "",
});

const rules = reactive({
  oldpwd: [
    { required: true, message: "Please input old password", trigger: "blur" },
  ],
  pwd1: [
    { required: true, message: "Please input new password", trigger: "blur" },
    {
      min: 6,
      message: "Password length must be at least 6 characters",
      trigger: "blur",
    },
  ],
  pwd2: [
    { required: true, message: "Please confirm new password", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value !== form.pwd1) {
          callback(new Error("The two passwords do not match"));
        } else {
          callback();
        }
      },
      trigger: "blur",
    },
  ],
});

const formattedForm = ref();

const Confirm = () => {
  formattedForm.value.validate(async (valid) => {
    if (valid) {
      try {
        await resetPassword(form.oldpwd, form.pwd1, form.pwd2);
        ElMessage.success("Password changed successfully");
        FormVisible.value = false;
      } catch (error) {
        ElMessage.error(error.response.data.detail);
      }
    } else {
      console.log("error submit!!");
      return false;
    }
  });
};
</script>

<template>
  <el-dialog v-model="FormVisible" title="Change Password" width="500">
    <el-form
      :model="form"
      :rules="rules"
      ref="formattedForm"
      label-width="120px"
    >
      <el-form-item
        label="Old Password"
        :label-width="formLabelWidth"
        prop="oldpwd"
      >
        <el-input v-model="form.oldpwd" autocomplete="off" />
      </el-form-item>
      <el-form-item
        label="New Password"
        :label-width="formLabelWidth"
        prop="pwd1"
      >
        <el-input v-model="form.pwd1" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item
        label="Confirm Password"
        :label-width="formLabelWidth"
        prop="pwd2"
      >
        <el-input v-model="form.pwd2" type="password" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="FormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="Confirm"> Confirm </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped></style>
