<script lang="ts" setup>
import { onMounted } from "vue";
import DetailKey from "./key";
import injector from "@/providers/injector";
import { useRoute } from "vue-router";

const { fetch } = injector(DetailKey);
const route = useRoute();

onMounted(() => {
  fetch(route.params.id as string);
});
</script>
