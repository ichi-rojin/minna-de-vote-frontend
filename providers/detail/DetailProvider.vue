<template>
  <slot />
</template>

<script lang="ts" setup>
import { provide } from "vue";
import detailStore from "@/stores/detail";
import DetailKey from "./key";

provide(DetailKey, detailStore());
</script>
