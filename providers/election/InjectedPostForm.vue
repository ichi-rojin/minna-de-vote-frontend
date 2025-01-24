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
          <input
            v-model="title"
            name="title"
            class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          />
        </div>
        <div>
          <label
            for="description"
            class="inline-block text-gray-800 text-sm sm:text-base mb-2"
          >
            説明文
          </label>
          <input
            v-model="description"
            name="description"
            class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
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
            <div v-for="(elector, index) in electors" :key="index">
              <div class="max-w-screen-2xl mx-auto">
                <div
                  class="flex flex-wrap md:gap-3 gap-1 sm:flex-nowrap sm:justify-center sm:items-center bg-blue-500 rounded-lg shadow-lg relative sm:gap-3 md:px-3 px-1 ms:px-8 md:py-3 py-1 md:pr-8"
                >
                  <label
                    :for="'file-' + index"
                    class="inline-block cursor-pointer bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus-visible:ring ring-blue-300 text-white text-xs md:text-sm font-semibold text-center whitespace-nowrap md:rounded-lg rounded-md outline-none transition duration-100 md:px-4 md:py-2 p-1 flex flex-wrap items-center"
                  >
                    <input
                      @change="fileChange($event, index)"
                      :id="'file-' + index"
                      type="file"
                      class="hidden"
                    />
                    写真<span class="md:inline hidden">を</span>追加
                    <img
                      v-if="elector.img"
                      :src="elector.img"
                      class="md:ml-5 ml-1 w-10 h-10 object-cover"
                      alt=""
                    />
                  </label>
                  <div
                    class="flex-1 max-w-screen-sm inline-block text-white text-sm md:text-base"
                  >
                    <input
                      v-model="elector.name"
                      name="electors"
                      class="w-full h-full border-0 bg-gray-50 text-gray-800 border focus:ring ring-blue-300 md:rounded roundedrounded-none outline-none transition duration-100 px-3 py-2"
                    />
                  </div>
                  <div
                    class="order-2 sm:order-none md:w-1/12 sm:w-auto flex justify-end items-center sm:absolute sm:right-1"
                  >
                    <button
                      @click="removeElector(index)"
                      type="button"
                      class="text-white hover:text-blue-100 active:text-blue-200 transition duration-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 xl:w-6 h-5 xl:h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p v-if="hasError" class="text-red-600 text-sm font-semibold">
              候補者は{{ MaxNumberElectors }}名までです。
            </p>
            <p v-else class="text-gray-400 text-xs">
              候補者は{{ MaxNumberElectors }}名まで追加できます。
            </p>
            <div
              class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5"
            >
              <button
                @click="addElector"
                class="inline-block bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                候補者を追加する
              </button>
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
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ResizeImage } from "@/plugins/resizeImage";
import ElectionKey from "./key";
import injector from "@/providers/injector";

const title = ref("");
const description = ref("");
const electors = ref([
  {
    name: "",
    img: "",
  },
]);
const MaxNumberElectors = 3;
let hasError = ref(false);

const { post } = injector(ElectionKey);

const invalidElector = (length: number) => {
  if (length > MaxNumberElectors) {
    hasError.value = true;
    return true;
  }
  hasError.value = false;
  return false;
};

const addElector = () => {
  if (invalidElector(electors.value.length + 1)) return;
  electors.value.push({
    name: "",
    img: "",
  });
};
const removeElector = (i: number) => {
  invalidElector(electors.value.length - 1);
  electors.value.splice(i, 1);
};
const submit = () => {
  if (invalidElector(electors.value.length)) return;
  post(title.value, description.value, electors.value);
};
const fileChange = (event: Event, i: number) => {
  try {
    const target = event.target as HTMLInputElement;
    const index = i;
    const file = (target.files as FileList)[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      if (!result) {
        throw "UnreadableFile";
      }
      ResizeImage(result, (resizedfile: string) => {
        electors.value[index].img = resizedfile;
      });
    };
  } catch (error) {
    if (error === "UnreadableFile") {
      console.log("ファイルが読み込めません。");
    } else if (error instanceof Error) {
      console.log(error.message);
    } else if (typeof error === "string") {
      console.log(error);
    } else {
      console.log("想定外のエラーです。");
    }
  }
};
</script>
