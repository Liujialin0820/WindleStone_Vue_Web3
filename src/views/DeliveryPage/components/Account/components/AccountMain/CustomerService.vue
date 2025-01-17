<script setup>
import { useAuthStore } from "@/stores/authStore";
import { reactive, ref } from "vue";
const authStore = useAuthStore();

// do not use same name with ref
const form = reactive({
  email: "",
  uid: "",
  ToEmail: "tjones@windlestone.com.au",
});

Object.assign(form, authStore.user);

const emailContent = ref("");

const onSubmit = () => {
  console.log("submit!");
};
</script>

<template>
  <el-card style="max-width: 100%; margin: 1rem 0">
    <template #header>
      <el-form :model="form" label-width="auto">
        <el-form-item label="From :">
          <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="To :">
          <el-input v-model="form.ToEmail" disabled />
        </el-form-item>
      </el-form>
    </template>
    <el-input
      v-model="emailContent"
      :autosize="{ minRows: 2, maxRows: 4 }"
      type="textarea"
      placeholder="Please input email content"
    />
    <template #footer>
      <el-button type="primary" @click="onSubmit">Send</el-button>
    </template>
  </el-card>
</template>

<style scoped></style>
