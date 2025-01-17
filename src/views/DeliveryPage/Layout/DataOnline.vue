<script setup>
import { ElMessage, ElMessageBox } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-message-box.css";
import { useDataStore } from "@/stores/dataStore";
import { watch } from "vue";
const dataStore = useDataStore();

const open = () => {
  if (dataStore.online) {
    ElMessageBox.confirm(
      "Your synced workbook data will be permanently deleted. However, a local copy will remain on your device. Do you wish to proceed?",
      {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      }
    )
      .then(() => {
        dataStore.online = false;
        ElMessage({
          type: "success",
          message:
            "Your Data is saved in your local storage, we will not keep your data.",
        });
      })
      .catch(() => {
        ElMessage({
          type: "info",
          message:
            "Your Data is synced in our server, we will keep your data safe.",
        });
      });
  } else {
    ElMessageBox.confirm(
      "Your local workbook data will be synced to our server. We will keep your data safe. Do you wish to proceed?",
      {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      }
    )
      .then(() => {
        dataStore.online = true;
        ElMessage({
          type: "success",
          message:
            "Your Data is synced in our server, we will keep your data safe.",
        });
      })
      .catch(() => {
        ElMessage({
          type: "info",
          message:
            "Your Data is saved in your local storage, we will not keep your data.",
        });
      });
  }
};
</script>

<template>
  <el-switch
    class="switch"
    active-text="Online"
    inactive-text="Offline"
    inline-prompt
    :before-change="open"
    v-model="dataStore.online"
  />
</template>

<style scoped></style>
