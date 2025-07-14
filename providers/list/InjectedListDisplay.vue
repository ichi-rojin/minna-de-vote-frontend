<template>
  <div
    class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 sm:gap-12 xl:gap-16"
  >
    <div
      v-for="(value, key) in list"
      :key="key"
      class="flex flex-col md:flex-row items-center gap-4 lg:gap-6"
    >
      <a
        :href="getLink(value.id)"
        class="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
      >
        <img
          :src="value.img"
          loading="lazy"
          alt="Photo by Minh Pham"
          class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
        />
      </a>
      <div class="flex flex-col gap-2">
        <span class="text-gray-400 text-sm">期日:{{ value.date }}</span>
        <h2 class="text-gray-800 text-xl font-bold">
          <a
            :href="getLink(value.id)"
            class="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
          >
            {{ value.title }}
          </a>
        </h2>
        <div>
          <a
            :href="getLink(value.id)"
            class="text-teal-500 hover:text-teal-600 active:text-teal-700 font-semibold transition duration-100"
          >
            くわしく見る
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import ListKey from "./key";
import injector from "@/providers/injector";

const store = injector(ListKey);
const list = computed(() => store.list);

const getLink = (id: string) => {
  return `/detail/${id}`;
};
</script>
