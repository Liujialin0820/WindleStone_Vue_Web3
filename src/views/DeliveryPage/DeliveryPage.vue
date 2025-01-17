<script setup>
import Copyright from "@/components/layout/Copyright.vue";
import HeadNavBar from "./Layout/HeadNavBar.vue";
</script>

<template>
  <HeadNavBar></HeadNavBar>
  <el-scrollbar class="scrollbar-wrapper">
    <div class="nav"></div>
    <router-view />
    <Copyright></Copyright>
  </el-scrollbar>
</template>

<style scoped lang="scss">
.nav {
  height: 60px;
}

@media screen and (max-width: 768px) {
  .nav {
    height: 30px;
  }
}

.scrollbar-wrapper {
  height: calc(100vh - 60px);
  overflow: auto;
}
</style>
