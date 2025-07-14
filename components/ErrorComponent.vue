<template>
  <transition name="toast">
    <div v-if="errorMsg" @click="handleClose">
      <p class="text-sm">エラーが発生しました</p>
      <p class="font-bold">{{ errorMsg }}</p>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import { ErrorStoreInstance } from "@/services/Error";

const waitTime = 5000;

const errorMsg = computed(() => {
  return ErrorStoreInstance.error.code
    ? `【${ErrorStoreInstance.error.code} : ${ErrorStoreInstance.error.message}】 データの取得に失敗しました。`
    : "";
});

const timeoutId = ref<number | undefined>(undefined);

watch(errorMsg, (newVal) => {
  // 以前のタイマーが残っていればクリアする
  if (timeoutId.value) {
    clearTimeout(timeoutId.value);
  }

  // 新しいエラーメッセージが表示された場合
  if (newVal) {
    // 3秒後にトーストを閉じるタイマーをセット
    timeoutId.value = window.setTimeout(handleClose, waitTime);
  }
});

const handleClose = () => {
  // タイマーがセットされていればクリア
  if (timeoutId.value) {
    clearTimeout(timeoutId.value);
    timeoutId.value = undefined;
  }
  // エラーストアの状態をリセットしてトーストを非表示にする
  ErrorStoreInstance.reset();
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f00;
  padding: 2vw 0;
  position: fixed;
  z-index: 400;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto 0;
  p {
    color: #fff;
  }
}

.toast-enter-active,
.toast-leave-active {
  /* 0.5秒かけて透明度と位置を変化させる */
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.toast-enter-from,
.toast-leave-to {
  /* 初期状態（画面外下部、透明） */
  opacity: 0;
  transform: translateY(20px);
}
</style>
