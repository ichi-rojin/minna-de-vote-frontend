<template>
  <ListProvider>
    <InjectedListDisplay />
    <InjectedFetchButton ref="button" />
  </ListProvider>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

import ListProvider from "@/providers/list/ListProvider.vue";
import InjectedListDisplay from "@/providers/list/InjectedListDisplay.vue";
import InjectedFetchButton from "@/providers/list/InjectedFetchButton.vue";

const button = ref();
onMounted(() => {
  button.value.fetch();
});
</script>
