<template>
  <div v-if="errorMsg" class="text-red-600 text-sm font-semibold mb-3">
    <p>{{ errorMsg }}</p>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { ErrorStoreInstance } from "@/services/Error";

const errorMsg = computed(() => {
  return ErrorStoreInstance.error.code
    ? `【${ErrorStoreInstance.error.code} : ${ErrorStoreInstance.error.message}】 データの取得に失敗しました。`
    : "";
});
</script>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f00;
  padding: 1em;
  p {
    color: #fff;
  }
}
</style>
