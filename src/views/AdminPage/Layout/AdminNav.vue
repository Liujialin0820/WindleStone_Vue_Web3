<script setup>
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();

const LogOut = () => {
  authStore.logout();
};
</script>

<template>
  <div class="header">
    <div class="left"></div>
    <div class="right">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-icon><Avatar /></el-icon>
          <span style="margin: 0 5px">{{ authStore.user.first_name }}</span>
          <el-icon style="margin-right: 5px"><ArrowDown /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Change Password</el-dropdown-item>
            <el-dropdown-item divided @click="LogOut">
              Log Out</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  height: 100%;
  background-color: $background-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-dropdown-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
