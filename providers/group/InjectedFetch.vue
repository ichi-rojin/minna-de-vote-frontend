<script lang="ts" setup>
import GroupKey from "./key";
import injector from "@/providers/injector";

const { fetch } = injector(GroupKey);
fetch();
</script>
