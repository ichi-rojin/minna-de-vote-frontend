<script lang="ts" setup>
import { defineExpose } from "vue";
import ListKey from "./key";
import injector from "@/providers/injector";

const { fetch } = injector(ListKey);

defineExpose({
  fetch,
});
fetch();
</script>
