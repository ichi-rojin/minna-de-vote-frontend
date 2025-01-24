<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 px-0 mx-auto">
      <div class="mb-10 md:mb-16">
        <h2
          class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
        >
          新しく選挙！をつくる。
        </h2>
        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
          あなたが考えるいろんな選挙！を投稿してね。
        </p>
      </div>
      <div class="max-w-screen-md grid gap-4 mx-auto">
        <div>
          <label
            for="title"
            class="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            選挙！名
          </label>
          <TitleComponent
            v-model="title"
            :name="title"
            :maxTextLength="maxTextLength"
          />
        </div>
        <div>
          <label
            for="description"
            class="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            説明文
          </label>
          <DescriptionComponent
            v-model="description"
            :name="description"
            :maxTextLength="maxTextLength"
          />
        </div>
        <div>
          <label
            for="electors"
            class="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            候補者
          </label>
          <div class="grid gap-4">
            <ElectorsComponent
              v-model="electors"
              :maxNumberElectors="maxNumberElectors"
            />
          </div>
        </div>
        <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
          <button
            @click="submit"
            class="inline-block bg-teal-500 hover:bg-teal-600 active:bg-teal-700 focus-visible:ring ring-teal-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
          >
            新しい選挙！を投稿する
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ElectionKey from "./key";
import injector from "@/providers/injector";
import TitleComponent from "./InjectedPostForm/InputTextComponent.vue";
import DescriptionComponent from "./InjectedPostForm/InputTextComponent.vue";
import ElectorsComponent from "./InjectedPostForm/ElectorsComponent.vue";

const title = ref("");
const description = ref("");
const electors = ref([
  {
    name: "",
    img: "",
  },
]);
const maxNumberElectors = 20;
const maxTextLength = 50;

const { post } = injector(ElectionKey);

const submit = () => {
  // if (invalidElector(electors.value.length)) return;
  post(title.value, description.value, electors.value);
};
</script>
