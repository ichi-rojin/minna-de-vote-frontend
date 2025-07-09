<template>
  {{ errorMsg }}
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
