import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useDataStore = defineStore("data", () => {
  const online = ref(false);
  const hasShown = ref(true);
  return { online, hasShown };
});
