<template>
  <slot />
</template>

<script lang="ts" setup>
import { provide } from "vue";
import authStore from "@/stores/auth";
import AuthKey from "./key";

provide(AuthKey, authStore());
</script>
