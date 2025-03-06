<script lang="ts" setup>
import ListKey from "./key";
import injector from "@/providers/injector";

const { fetch } = injector(ListKey);
fetch();
</script>
