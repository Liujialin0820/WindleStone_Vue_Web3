<script setup>
import AdminAside from "./Layout/AdminAside.vue";
import AdminNav from "./Layout/AdminNav.vue";
</script>

<template>
  <el-container class="common-layout">
    <el-aside class="aside"><AdminAside></AdminAside> </el-aside>
    <el-container class="container">
      <el-header><AdminNav></AdminNav> </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.common-layout {
  height: 100vh;

  .aside {
    background-color: $primary-color-a20;
    box-shadow: inset -1px 0 0 0 $primary-color-a10;
    width: 230px;
  }

  .container {
    padding: 0;
  }
}
</style>
