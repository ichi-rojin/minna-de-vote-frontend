<template>
  <slot />
</template>

<script lang="ts" setup>
import { provide } from "vue";
import listStore from "@/stores/list";
import ListKey from "./key";

provide(ListKey, listStore());
</script>
