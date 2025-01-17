<script setup>
import { useDataStore } from "@/stores/dataStore";
import DataOnline from "@/views/DeliveryPage/Layout/DataOnline.vue";
const dataStore = useDataStore();
</script>

<template>
  <el-card style="max-width: 100%; margin: 1rem 0">
    <template #header>
      <div class="card-header">
        <span>Data Policy</span>
      </div>
    </template>
    <p>
      Your data are stored <span class="swipe"><DataOnline></DataOnline></span>
    </p>
    <p v-if="dataStore.online">
      Your <span class="standout">workbook data</span> are securely stored
      online. We are committed to safeguarding your privacy and ensuring that
      your data remains confidential and protected against any unauthorized
      access.
    </p>
    <p v-else>
      Your <span class="standout">workbook data</span> are stored locally within
      your browser. This approach prioritizes your privacy and gives you
      complete control over your data. For added convenience, you may choose to
      store your data online with our robust privacy safeguards.
    </p>
  </el-card>
  <el-card style="max-width: 100%; margin: 1rem 0">
    <el-button type="primary" size="medium" class="button">Log Out</el-button>
    <el-button type="danger" size="medium" class="button">
      Log Out & Delete All Data
    </el-button>
  </el-card>
</template>

<style scoped lang="scss">
.swipe {
  display: inline-block;
  align-items: center;
  margin-left: 1rem;
}
.standout {
  font-weight: 600;
  color: $primary-color;
}

.button {
  margin-right: 1rem;
  padding: 0 1rem;
  font-size: 1rem;
}
</style>
