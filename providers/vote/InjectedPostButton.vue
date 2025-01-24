<template>
  <button
    v-if="enabledVote"
    :onclick="vote"
    class="block flex-auto bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
  >
    投票する
  </button>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";
import VoteKey from "./key";
import injector from "@/providers/injector";
import { useRoute } from "vue-router";

const props = defineProps({
  vote: Number,
});

const store = injector(VoteKey);
const { post } = injector(VoteKey);
const route = useRoute();

const election = computed(() =>
  store.history.elections.filter((e) => {
    return e.id === parseInt(route.params.id as string);
  })
);
const enabledVote = computed(() => election.value.length < 1);

const vote = () => {
  post(parseInt(route.params.id as string), props?.vote);
};
</script>
