<template>
  <div class="siteContainer">
    <DetailProvider>
      <VoteProvider>
        <InjectedDetailDisplay />
      </VoteProvider>
      <InjectedFetch />
    </DetailProvider>
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div class="border rounded-lg p-4">
          <div class="text-gray-800 text-lg lg:text-xl font-bold mb-3">
            現在の投票結果
          </div>
          <span class="block text-gray-500 text-sm">現在の投票数 127</span>
          <div class="flex flex-col border-t border-b gap-2 py-5 my-5">
            <div class="flex items-center gap-3">
              <span
                class="w-20 text-gray-600 text-sm text-left whitespace-nowrap"
                >坂井敏夫</span
              >
              <div class="h-4 flex flex-1 bg-gray-200 overflow-hidden rounded">
                <span
                  class="h-full bg-yellow-400 rounded"
                  style="width: 35%"
                ></span>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <span
                class="w-20 text-gray-600 text-sm text-left whitespace-nowrap"
                >土井雅子</span
              >
              <div class="h-4 flex flex-1 bg-gray-200 overflow-hidden rounded">
                <span
                  class="h-full bg-yellow-400 rounded"
                  style="width: 30%"
                ></span>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <span
                class="w-20 text-gray-600 text-sm text-left whitespace-nowrap"
                >稲垣拓哉</span
              >
              <div class="h-4 flex flex-1 bg-gray-200 overflow-hidden rounded">
                <span
                  class="h-full bg-yellow-400 rounded"
                  style="width: 20%"
                ></span>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <span
                class="w-20 text-gray-600 text-sm text-left whitespace-nowrap"
                >その他</span
              >
              <div class="h-4 flex flex-1 bg-gray-200 overflow-hidden rounded">
                <span
                  class="h-full bg-yellow-400 rounded"
                  style="width: 15%"
                ></span>
              </div>
            </div>
          </div>
          <a
            href="#"
            class="block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            >コメントを書く</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DetailProvider from "@/providers/detail/DetailProvider.vue";
import VoteProvider from "@/providers/vote/VoteProvider.vue";
import InjectedDetailDisplay from "@/providers/detail/InjectedDetailDisplay.vue";
import InjectedFetch from "@/providers/detail/InjectedFetch.vue";
</script>
