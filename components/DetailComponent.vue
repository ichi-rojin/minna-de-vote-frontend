<template>
  <div class="siteContainer">
    <DetailProvider>
      <InjectedDetailDisplay />
      <InjectedFetch />
    </DetailProvider>
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <div class="border rounded-lg p-4">
              <h2 class="text-gray-800 text-lg lg:text-xl font-bold mb-3">
                現在の投票結果
              </h2>
              <span class="block text-gray-500 text-sm">現在の投票数 127</span>
              <div class="flex flex-col border-t border-b gap-2 py-5 my-5">
                <div class="flex items-center gap-3">
                  <span
                    class="w-20 text-gray-600 text-sm text-left whitespace-nowrap"
                    >坂井敏夫</span
                  >
                  <div
                    class="h-4 flex flex-1 bg-gray-200 overflow-hidden rounded"
                  >
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
                  <div
                    class="h-4 flex flex-1 bg-gray-200 overflow-hidden rounded"
                  >
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
                  <div
                    class="h-4 flex flex-1 bg-gray-200 overflow-hidden rounded"
                  >
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
                  <div
                    class="h-4 flex flex-1 bg-gray-200 overflow-hidden rounded"
                  >
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
          <div class="lg:col-span-2">
            <div class="border-b pb-4 md:pb-6">
              <h2 class="text-gray-800 text-lg lg:text-xl font-bold">
                有権者の声
              </h2>
            </div>
            <div class="divide-y">
              <div class="flex flex-col gap-3 py-4 md:py-8">
                <div>
                  <span class="block text-sm font-bold">まさぺこ</span>
                  <span class="block text-gray-500 text-sm">2021-07-10</span>
                </div>
                <p class="text-gray-600">
                  坂井敏夫、胡散臭すぎ。違法献金どうなった？
                </p>
              </div>
              <div class="flex flex-col gap-3 py-4 md:py-8">
                <div>
                  <span class="block text-sm font-bold">ダッシュ弾平</span>
                  <span class="block text-gray-500 text-sm">2021-07-08</span>
                </div>
                <p class="text-gray-600">
                  土井雅子は某国シンパです。こんな奴が当選したら日本終わります。
                </p>
              </div>
              <div class="flex flex-col gap-3 py-4 md:py-8">
                <div>
                  <span class="block text-sm font-bold">Greg Jackson</span>
                  <span class="block text-gray-500 text-sm">2021-07-05</span>
                </div>
                <p class="text-gray-600">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text but is random or otherwise generated. It may be
                  used to display a sample of fonts or generate text for
                  testing.
                </p>
              </div>
            </div>
            <div class="border-t pt-6">
              <a
                href="#"
                class="flex items-center text-indigo-400 hover:text-indigo-500 active:text-indigo-600 font-semibold transition duration-100 gap-0.5"
                >すべてのコメントを見る</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DetailProvider from "@/providers/detail/DetailProvider.vue";
import InjectedDetailDisplay from "@/providers/detail/InjectedDetailDisplay.vue";
import InjectedFetch from "@/providers/detail/InjectedFetch.vue";
</script>
