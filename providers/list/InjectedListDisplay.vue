<template>
  <section v-for="(value, key) in list.results" :key="key">
    {{ value.id }}
    {{ value.createdAt }}
    {{ value.updatedAt }}
    {{ value.data }}
  </section>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import ListKey from "./list-key";
import injector from "@/providers/injector";

const store = injector(ListKey);
const list = computed(() => store.list);
</script>
