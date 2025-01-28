<template>
  <div v-for="(elector, index) in modelValue" :key="index">
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
            :placeholder="`名前を${maxNameLength}文字以内で入力してください。`"
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
    <p v-if="elector.imgMsg" class="text-red-600 text-sm font-semibold">
      {{ elector.imgMsg }}
    </p>
    <p v-if="elector.nameMsg" class="text-red-600 text-sm font-semibold">
      {{ elector.nameMsg }}
    </p>
  </div>
  <button
    @click="addElector"
    class="inline-block bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
  >
    候補者を追加する
  </button>
  <p v-if="electorsErrorMsg" class="text-red-600 text-sm font-semibold">
    {{ electorsErrorMsg }}
  </p>
  <p v-else class="text-gray-400 text-xs">
    候補者は{{ props.maxNumberElectors }}名まで追加できます。
  </p>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, watch } from "vue";
import { ResizeImage, ErrorHandler } from "@/plugins/resizeImage";
interface IElectors {
  name: string;
  img: string;
  nameMsg: string;
  imgMsg: string;
}
interface Props {
  maxNumberElectors: number;
  maxNameLength: number;
  modelValue: Array<IElectors>;
}
const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue", "errorStackHandler"]);

let electorsErrorMsg = ref("");
const invalidElector = (length: number) => {
  if (length > props.maxNumberElectors) {
    electorsErrorMsg.value = `候補者は${props.maxNumberElectors}名までです。`;
    return true;
  }
  electorsErrorMsg.value = "";
  return false;
};

const addElector = () => {
  if (invalidElector(props.modelValue.length + 1)) return;
  emit("update:modelValue", [
    ...props.modelValue,
    {
      name: "",
      img: "",
    },
  ]);
};
const removeElector = (i: number) => {
  invalidElector(props.modelValue.length - 1);
  emit(
    "update:modelValue",
    props.modelValue.filter((item, index) => index !== i)
  );
};
const fileChange = (event: Event, index: number) => {
  const showErrorMsg = (msg: string) => {
    props.modelValue.map((item, i) => {
      if (i == index) {
        item.imgMsg = msg;
      }
      return item;
    });
  };

  try {
    const target = event.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      if (!result) {
        throw "UnreadableFile";
      }
      const resizedfile = await ResizeImage(result).catch(
        (error: Error | string) => {
          showErrorMsg(ErrorHandler(error));
        }
      );
      emit(
        "update:modelValue",
        props.modelValue.map((item, i) => {
          if (i !== index) return item;
          item.img = String(resizedfile);
          return item;
        })
      );
    };
  } catch (error: Error | string) {
    showErrorMsg(ErrorHandler(error));
  }
  showErrorMsg("");
};

watch([props], () => {
  let hasError = false;
  props.modelValue.forEach((item) => {
    if (item.name.length > props.maxNameLength) {
      item.nameMsg = "名前が長すぎます。";
      hasError = true;
    } else {
      item.nameMsg = "";
    }
  });
  if (hasError) {
    emit("errorStackHandler", true);
  } else {
    emit("errorStackHandler", false);
  }
});
</script>
