<template>
  <div class="siteContainer">
    <DetailProvider>
      <VoteProvider>
        <InjectedDetailDisplay />
      </VoteProvider>
      <InjectedFetch />
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
          <InjectedVotesDisplay />
        </div>
      </div>
      <div class="max-w-screen-xl px-4 md:px-8 mx-auto mt-8">
        <a
          href="#"
          @click="$router.back()"
          class="block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
          >戻る</a
        >
      </div>
    </DetailProvider>
  </div>
</template>

<script lang="ts" setup>
import DetailProvider from "@/providers/detail/DetailProvider.vue";
import VoteProvider from "@/providers/vote/VoteProvider.vue";
import InjectedDetailDisplay from "@/providers/detail/InjectedDetailDisplay.vue";
import InjectedVotesDisplay from "@/providers/detail/InjectedVotesDisplay.vue";
import InjectedFetch from "@/providers/detail/InjectedFetch.vue";
</script>
