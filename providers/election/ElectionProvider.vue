<template>
  <slot />
</template>

<script lang="ts" setup>
import { provide } from "vue";
import electionStore from "@/stores/election";
import ElectionKey from "./key";

provide(ElectionKey, electionStore());
</script>
