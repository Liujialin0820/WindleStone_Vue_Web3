<template>
  <div class="top-logo">
    <img
      src="@/assets/image/common/windlestone-logo.png"
      alt="Windlestone logo"
    />
  </div>

  <div class="bottom-navbar">
    <!-- 首页 -->
    <div
      class="nav-item"
      :class="{ active: activeIndex === 0 }"
      @click="setActive(0)"
    >
      <router-link :to="{ name: 'lmshome' }">
        <i class="iconfont icon-home"></i>
      </router-link>
    </div>

    <!-- 课程 -->
    <div
      class="nav-item"
      :class="{ active: activeIndex === 1 }"
      @click="setActive(1)"
    >
      <router-link :to="{ name: 'lmscourses' }">
        <i class="iconfont icon-Courses"></i>
      </router-link>
    </div>

    <!-- 作业本/练习本 -->
    <div
      class="nav-item"
      :class="{ active: activeIndex === 2 }"
      @click="setActive(2)"
    >
      <router-link :to="{ name: 'lmsworkbook' }">
        <i class="iconfont icon-workbook"></i>
      </router-link>
    </div>

    <!-- 个人中心（使用 router-link） -->
    <div
      class="nav-item"
      :class="{ active: activeIndex === 3 }"
      @click="setActive(3)"
    >
      <router-link :to="{ name: 'lmshome' }" class="nav-item-link">
        <i class="iconfont icon-account"></i>
        <span class="badge">99+</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 当前激活的导航下标
      activeIndex: 0,
    };
  },
  methods: {
    // 设置激活的导航
    setActive(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style scoped lang="scss">
.top-logo {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}

img {
  width: 15rem;
  height: auto;
}

/* 底部导航条样式 */
.bottom-navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f5f5f5;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

/* 每个导航项样式 */
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  /* 默认状态的文字或图标颜色 */
  color: #666;
}

/* router-link 单独的样式，用于避免重复的 hover 样式影响 */
.nav-item-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

/* 图标字体 */
.iconfont {
  font-size: 24px;
}

/* 激活时的样式高亮，比如更换图标颜色 */
.active .iconfont {
  color: $primary-color; /* 你想要的高亮颜色 */
}

/* Badge 样式（右上角的小红点数字） */
.badge {
  position: absolute;
  top: -0.6rem;
  right: -2rem;
  background-color: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10px;
}
</style>
