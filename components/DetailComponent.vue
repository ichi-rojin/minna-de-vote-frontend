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
