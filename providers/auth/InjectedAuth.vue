<script lang="ts" setup>
import AuthKey from "./key";
import injector from "@/providers/injector";

const { login } = injector(AuthKey);
login();
</script>
