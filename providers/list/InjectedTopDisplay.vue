<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 px-0 mx-auto">
      <div class="flex justify-between items-end gap-4 mb-6">
        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold">
          {{ list.title }} 注目の選挙区
        </h2>
        <a
          href="/list"
          class="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
        >
          もっと見る
        </a>
      </div>
      <ErrorProvider>
        <InjectedError />
      </ErrorProvider>
      <div
        class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6"
      >
        <div v-for="(value, key) in list.results" :key="key">
          <a
            :href="getLink(value.id)"
            class="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3"
          >
            <img
              :src="value.img"
              loading="lazy"
              alt="Photo by Austin Wade"
              class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
            />
          </a>
          <div class="flex flex-col">
            <span class="text-gray-500">{{ value.copy }}</span>
            <a
              :href="getLink(value.id)"
              class="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
            >
              {{ value.title }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ErrorProvider from "@/providers/error/ErrorProvider.vue";
import InjectedError from "@/providers/error/InjectedError.vue";

import { computed } from "vue";
import ListKey from "./key";
import injector from "@/providers/injector";

const store = injector(ListKey);
const list = computed(() => store.list);

const getLink = (id: number) => {
  return `/detail/${id}`;
};
</script>
