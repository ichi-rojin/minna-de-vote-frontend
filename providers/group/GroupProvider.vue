<template>
  <slot />
</template>

<script lang="ts" setup>
import { provide } from "vue";
import groupStore from "@/stores/group";
import GroupKey from "./key";

provide(GroupKey, groupStore());
</script>
