<template>
  <BasicContainer class="nav-bar">
    <div class="logo">
      <img :src="logoSrc" alt="Windlestone Education" />
    </div>

    <div class="options">
      <router-link
        :to="{ name: 'admin' }"
        class="nav-item-link"
        v-if="authStore.user.is_staff"
      >
        <div class="nav-item">Admin</div>
      </router-link>

      <router-link :to="{ name: 'lmshome' }" class="nav-item-link">
        <div
          class="nav-item home"
          :class="{ active: $route.name.startsWith('lmshome') }"
        >
          Home
          <span class="badge">1</span>
        </div>
      </router-link>

      <router-link :to="{ name: 'lmscourses' }" class="nav-item-link">
        <div
          class="nav-item"
          :class="{ active: $route.name.startsWith('lmscourses') }"
        >
          Courses
        </div>
      </router-link>

      <router-link :to="{ name: 'lmsworkbook' }" class="nav-item-link">
        <div
          class="nav-item"
          :class="{ active: $route.name.startsWith('lmsworkbook') }"
        >
          Workbook
        </div>
      </router-link>

      <div class="nav-item">
        <DataOnline></DataOnline>
      </div>

      <router-link :to="{ name: 'lmsaccount' }" class="nav-item-link">
        <div
          class="nav-item user"
          :class="{ active: $route.name.startsWith('lmsaccount') }"
        >
          <i class="iconfont icon-yonghu user-icon"></i>
        </div>
      </router-link>

      <div class="loadingg" v-if="load">
        <i class="iconfont icon-jiazai user-icon"></i>
      </div>
    </div>
  </BasicContainer>
</template>

<script setup>
import BasicContainer from "@/components/layout/BasicContainer.vue";
import { ref } from "vue";
import logo from "@/assets/image/common/windlestone-logo.png";
import DataOnline from "./DataOnline.vue";
import { useAuthStore } from "@/stores/authStore";

const logoSrc = ref(logo);
const load = ref(false);
const authStore = useAuthStore();
</script>

<style scoped lang="scss">
.nav-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 999;
  line-height: 60px;
  background-image: radial-gradient(transparent 1px, rgb(255, 255, 255) 1px);
  background-size: 4px 4px;
  backdrop-filter: blur(4px);
  border-bottom: 1px solid #0000003e;
  padding-bottom: 0.1rem;
  display: flex;
  align-items: center; // 垂直居中可选
  justify-content: space-between; // 两端对齐

  .logo {
    display: flex;
    align-items: center;
    img {
      height: 45px;
    }
  }

  .options {
    width: 600px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .nav-item {
      display: inline-flex;
      align-items: center;
      margin-right: 2rem;
      height: 60px;
    }

    .nav-item:hover {
      color: $primary-color;
    }

    .nav-item-link {
      text-decoration: none;
      color: black;
    }

    .active {
      border-bottom: 2px solid $primary-color;
    }

    .user {
      height: 62px;
      display: flex;
      align-items: center;
    }

    .loading {
      height: 58px;
    }

    .user-icon {
      font-size: 28px;
    }
  }
}
.home {
  position: relative;
}

.badge {
  position: absolute;
  top: 10px;
  right: -20px;
  background-color: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10px;
}

.loadingg {
  height: 58px;
  width: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $primary-color;
  animation: spin 0.5s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
