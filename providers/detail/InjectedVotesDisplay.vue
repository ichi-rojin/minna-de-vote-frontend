<template>
  <div class="border rounded-lg p-4">
    <div class="text-gray-800 text-lg lg:text-xl font-bold mb-3">
      現在の投票結果
    </div>
    <span class="block text-gray-500 text-sm">現在の投票数 {{ total }}</span>
    <div class="flex flex-col border-t border-b gap-2 py-5 my-5">
      <div
        v-for="(value, key) in topGroup"
        :key="key"
        class="flex items-center gap-3"
      >
        <span class="w-20 text-gray-600 text-sm text-left whitespace-nowrap">
          {{ value.name }}
        </span>
        <div class="h-4 flex flex-1 bg-gray-200 overflow-hidden rounded">
          <span
            class="h-full bg-yellow-400 rounded"
            :style="getRateStyle(value.votes)"
          ></span>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <span class="w-20 text-gray-600 text-sm text-left whitespace-nowrap"
          >その他</span
        >
        <div class="h-4 flex flex-1 bg-gray-200 overflow-hidden rounded">
          <span
            class="h-full bg-yellow-400 rounded"
            :style="getRateStyle(subTotal)"
          ></span>
        </div>
      </div>
    </div>
    <a
      href="#"
      @click="$router.back()"
      class="block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
      >戻る</a
    >
  </div>
</template>

<script lang="ts" setup>
import _ from "lodash";
import { computed } from "vue";
import DetailKey from "./key";
import injector from "@/providers/injector";
const store = injector(DetailKey);
const results = computed(() =>
  _(store.detail.results).orderBy("votes", "desc").value()
);
const total = computed(() => _(store.detail.results).sumBy("votes"));
const topGroup = computed(() => _.slice(results.value, 0, 3));
const subGroup = computed(() =>
  _.slice(results.value, 3, results.value.length)
);
const subTotal = computed(() => _(subGroup.value).sumBy("votes"));
const getRateStyle = (votes: number) => {
  const rate = votes / total.value;
  return `width: ${rate * 100}%`;
};
</script>
