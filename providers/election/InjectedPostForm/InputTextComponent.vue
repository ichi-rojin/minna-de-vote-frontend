<template>
  <input
    @change="
      emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
    :value="modelValue"
    :name="name"
    class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
  />
  <p v-if="errorMsg" class="text-red-600 text-sm font-semibold">
    {{ errorMsg }}
  </p>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, computed } from "vue";
interface Props {
  maxTextLength: number;
  modelValue: string;
  name: string;
}
const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

const errorMsg = computed(() => {
  if (props.modelValue.length > props.maxTextLength) {
    return `文字数は${props.maxTextLength}文字までです。`;
  }
  return "";
});
</script>
