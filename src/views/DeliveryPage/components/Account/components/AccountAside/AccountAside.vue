<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

// 根据当前路由名称绑定默认选中的菜单项
const activeMenu = computed(() => route.name);

// 点击菜单项时进行路由跳转
const handleMenuSelect = (menuIndex) => {
  // menuIndex 值和路由中的 name 对应
  router.push({ name: menuIndex });
};
</script>

<template>
  <!-- 当使用 router 参数时，El-Menu 会自动根据 index 判断 active 状态，但这里我们可以利用 select 事件自定义行为 -->
  <el-menu :default-active="activeMenu" @select="handleMenuSelect">
    <el-menu-item index="lmsaccountsettings">
      <span>Account Settings</span>
    </el-menu-item>
    <el-menu-item index="lmsaccountmydetails">
      <span>My Details</span>
    </el-menu-item>
    <el-menu-item index="lmsaccounttransactions">
      <span>Transactions</span>
    </el-menu-item>
    <el-menu-item index="lmsaccountcontactus">
      <span>Contact Us</span>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.el-menu {
  height: 100%;
}
</style>
