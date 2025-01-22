<script setup></script>

<template>
  <router-link :to="{ name: 'admin' }" class="print"
    >Windlestone Admin</router-link
  >
  <el-menu class="el-menu" :router="true">
    <el-sub-menu index="1" class="el-submenu">
      <template #title>
        <el-icon><UserFilled /></el-icon>
        <span>User Management</span>
      </template>
      <el-menu-item-group title="Students">
        <el-menu-item index="1-1">All Students</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Visitors">
        <el-menu-item index="1-3">All Visitors</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>

    <el-menu-item index="2"
      ><el-icon><Ticket /></el-icon>
      <span>User Tags</span>
    </el-menu-item>

    <el-sub-menu index="3" class="el-submenu">
      <template #title>
        <el-icon><Management /></el-icon>
        <span>Course Management</span>
      </template>
    </el-sub-menu>

    <el-menu-item index="4">
      <el-icon><Histogram /></el-icon>
      <span>Data Analysis</span>
    </el-menu-item>

    <el-sub-menu index="5" class="el-submenu">
      <template #title>
        <el-icon><HomeFilled /></el-icon>
        <span>Public Page</span>
      </template>
      <el-menu-item-group title="Ads">
        <el-menu-item index="1-1" :route="{ name: 'adsmanagement' }"
          >Ads Management</el-menu-item
        >
      </el-menu-item-group>
    </el-sub-menu>

    <el-menu-item index="6"
      ><el-icon><Platform /></el-icon>
      <span>Delivery Page</span>
    </el-menu-item>

    <el-menu-item index="7">
      <el-icon><PictureFilled /></el-icon>
      <span>Media Library</span>
    </el-menu-item>
  </el-menu>
</template>

<style scoped lang="scss">
.print {
  color: $primary-color;
  background-color: white;
  text-decoration: none;
  border-bottom: 1px solid $primary-color;
  display: block;
  display: flex;
  height: 60px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

.el-menu {
  border-right: none;
  background-color: transparent;

  .el-menu-item,
  .el-submenu {
    border-bottom: 1px solid white;
  }
}
</style>
