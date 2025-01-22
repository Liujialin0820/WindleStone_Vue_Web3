<script setup>
import PageLogoHeader from "./PageLogoHeader.vue";
import RecentEvents from "./RecentEvents.vue";
</script>

<template>
  <PageLogoHeader></PageLogoHeader>
  <div class="out-container">
    <div class="page-form">
      <slot></slot>
    </div>
    <div class="page-events">
      <RecentEvents></RecentEvents>
    </div>
  </div>
</template>

<style scoped lang="scss">
.out-container {
  display: flex;
}

.page-form {
  flex: 1;
  padding: 2rem 3rem;
}

.page-events {
  flex: 1;
  padding: 2rem 3rem;
}

@media screen and (min-width: 768px) {
  .page-form {
    border-right: 1px solid #e0e0e0; /* 右侧加一条分割线 */
  }
}

@media (max-width: $phone-width) {
  .out-container {
    flex-direction: column;
  }

  .page-events {
    max-width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
