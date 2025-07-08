<template>
  {{ errorMsg }}
</template>

<script lang="ts" setup>
import { computed } from "vue";
import ErrorKey from "./key";
import injector from "@/providers/injector";

const store = injector(ErrorKey);
const errorMsg = computed(() => {
  return store.error.code
    ? `リストを取得できませんでした。エラーコードは【${store.error.code}】です。`
    : "";
});
</script>
