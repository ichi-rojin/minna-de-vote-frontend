<template>
  <div class="siteContainer">
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto">
        <div class="mb-10 md:mb-16">
          <h2
            class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
          >
            選挙！一覧
          </h2>
        </div>
        <div class="bg-white rounded-lg shadow sm:overflow-hidden mb-20">
          <div class="px-4 py-8 sm:px-10">
            <div class="relative mt-6">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm leading-5">
                <span class="px-2 text-gray-500 bg-white">
                  選挙！を探す
                </span>
              </div>
            </div>
            <div class="mt-6">
              <div class="w-full space-y-6">
                <div class="w-full">
                  <div class="relative">
                    <label for="candidate" class="inline-block text-xs mb-2">
                      候補者で探す
                    </label>
                    <input
                      id="search-form-price"
                      class="rounded-lg border-transparent flex-1 appearance-none border border-indigo-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="日本 一"
                    />
                  </div>
                </div>
                <div class="w-full">
                  <div class="relative">
                    <label for="candidate" class="inline-block text-xs mb-2">
                      地域で探す
                    </label>
                    <input
                      id="search-form-location"
                      class="rounded-lg border-transparent flex-1 appearance-none border border-indigo-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="大阪府"
                    />
                  </div>
                </div>
                <div class="w-full">
                  <div class="relative">
                    <label for="candidate" class="inline-block text-xs mb-2">
                      期日で探す
                    </label>
                    <input
                      type="date"
                      id="search-form-name"
                      class="rounded-lg border-transparent flex-1 appearance-none border border-indigo-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <span class="block w-full rounded-md shadow-sm">
                    <button
                      type="button"
                      class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                    >
                      探す
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
            <p class="text-xs leading-5 text-gray-500">
              このデータは情報のために表示され、変更される可能性があります
            </p>
          </div>
        </div>
        <div
          class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 sm:gap-12 xl:gap-16"
        >
          <div
            v-for="(value, key) in list.results"
            :key="key"
            class="flex flex-col md:flex-row items-center gap-4 lg:gap-6"
          >
            <a
              :href="getLink(value.id)"
              class="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                :src="getSrc(value.img)"
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

const getSrc = (img: string) => {
  return require("@/assets/img/" + img);
};
const getLink = (id: number) => {
  return `/detail/${id}`;
};
</script>
