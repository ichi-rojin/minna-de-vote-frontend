<template>
  <div class="siteContainer">
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto">
        <div class="mb-10 md:mb-16">
          <h2
            class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
          >
            選挙一覧
          </h2>
        </div>
        <ListProvider>
          <InjectedListDisplay />
          <InjectedFetch />
        </ListProvider>
      </div>
    </div>
    <div class="mt-8">
      <a
        href="#"
        @click="$router.back()"
        class="block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
        >戻る</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import ListProvider from "@/providers/list/ListProvider.vue";
import InjectedListDisplay from "@/providers/list/InjectedListDisplay.vue";
import InjectedFetch from "@/providers/list/InjectedFetch.vue";
</script>
