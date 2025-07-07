<template>
  <slot />
</template>

<script lang="ts" setup>
import { provide } from "vue";
import errorStore from "@/stores/error";
import ErrorKey from "./key";

provide(ErrorKey, errorStore());
</script>
