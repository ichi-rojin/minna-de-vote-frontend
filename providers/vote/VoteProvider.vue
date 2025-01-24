<template>
  <slot />
</template>

<script lang="ts" setup>
import { provide } from "vue";
import voteStore from "@/stores/vote";
import VoteKey from "./key";

provide(VoteKey, voteStore());
</script>
