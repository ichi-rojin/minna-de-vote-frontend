<template>
  <div v-if="errorMsg">
    <p>{{ errorMsg }}</p>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { ErrorStoreInstance } from "@/services/Error";

const errorMsg = computed(() => {
  return ErrorStoreInstance.error.code
    ? `リストを取得できませんでした。エラーコードは【${ErrorStoreInstance.error.code} : ${ErrorStoreInstance.error.message}】です。`
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
