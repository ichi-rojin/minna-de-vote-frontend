<script lang="ts" setup>
import { defineExpose } from "vue";
import DetailKey from "./key";
import injector from "@/providers/injector";
import { useRoute } from "vue-router";

const { fetch } = injector(DetailKey);
const route = useRoute();

defineExpose({
  fetch,
});
fetch(parseInt(route.params.id as string));
</script>
