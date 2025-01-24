<template>
  <button v-on:click.prevent="fetch">再取得</button>
</template>

<script lang="ts" setup>
import { defineExpose } from "vue";
import ListKey from "./list-key";
import injector from "@/providers/injector";

const { fetch } = injector(ListKey);

defineExpose({
  fetch,
});
</script>
