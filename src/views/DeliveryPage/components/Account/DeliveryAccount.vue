<script setup>
import BasicContainer from "@/components/layout/BasicContainer.vue";
import AccountAside from "./components/AccountAside/AccountAside.vue";
</script>

<template>
  <BasicContainer class="delivery-account">
    <div class="aside"><AccountAside></AccountAside></div>
    <div class="main"><RouterView /></div>
  </BasicContainer>
</template>

<style scoped lang="scss">
.delivery-account {
  display: flex;
  margin-top: 20px;
  height: 73vh;
  .aside {
    width: 150px;
  }
  .main {
    flex: 1;
    padding: 0 20px;
  }
}

@media screen and (max-width: 768px) {
  .delivery-account {
    flex-direction: column;
    .aside {
      display: none;
    }
  }
}
</style>
