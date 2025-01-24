<template>
  <div class="siteContainer">
    <section
      class="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16"
    >
      <div
        class="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24"
      >
        <p
          class="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6"
        >
          みんなの選挙
        </p>
        <h1
          class="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12"
        >
          みんなの選挙！
        </h1>
        <p
          class="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12"
        >
          結果が出ても、何も世の中は変わらないから、
          <br />
          気軽に選挙に参加してみよう！
        </p>
        <div
          class="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5"
        >
          <a
            href="/list"
            class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
          >
            選挙！を探す
          </a>
          <a
            href="#what"
            class="inline-block bg-teal-500 hover:bg-teal-600 active:bg-teal-700 focus-visible:ring ring-teal-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
          >
            みんなの選挙！って？
          </a>
        </div>
      </div>
      <div
        class="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg"
      >
        <img
          src="@/assets/img/home/main.jpg"
          loading="lazy"
          alt="Photo by Fakurian Design"
          class="w-full h-full object-cover object-center"
        />
      </div>
    </section>
    <div class="bg-white py-6 sm:py-8 lg:py-12" id="what">
      <div class="mx-auto">
        <div class="grid md:grid-cols-10 gap-8 lg:gap-12">
          <div class="md:col-span-3 md:order-none order-2 w-full">
            <div
              class="h-3/4 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src="@/assets/img/home/vote1.png"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                class="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div class="md:col-span-7 md:pt-8">
            <p class="text-indigo-500 font-bold text-center md:text-left">
              実際の選挙とは関係ないよ！
            </p>
            <h1
              class="text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6"
            >
              みんなの選挙！って？
            </h1>
            <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">
              選挙に行ってみたいけど、良く分からない。
              <br />
              立候補した人がどんな人なのかも分からないし、
              <br />
              せっかく投票しても落選したら、意味ないの？
              <br />
              そもそも自分が選んだ人で大丈夫？
            </p>
            <h2
              class="text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4"
            >
              結果が出ても何も決まりません！
            </h2>
            <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">
              みんなの選挙！は勝手に選挙をしてるだけ！
              <br />
              だから出た結果で、世の中なにも決まらないし、変わらない。
              <br />
              政治の事何も分からなくても、誰でも参加できるので、気軽に投票してね！
            </p>
            <div>
              <a
                href="/list"
                class="md:inline-block block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                選挙！を探す
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ListProvider>
      <InjectedFetch />
      <InjectedTopDisplay />
    </ListProvider>
    <ElectionProvider>
      <InjectedPostForm />
    </ElectionProvider>
  </div>
</template>

<script lang="ts" setup>
import ListProvider from "@/providers/list/ListProvider.vue";
import InjectedTopDisplay from "@/providers/list/InjectedTopDisplay.vue";
import InjectedFetch from "@/providers/list/InjectedFetch.vue";
import ElectionProvider from "@/providers/election/ElectionProvider.vue";
import InjectedPostForm from "@/providers/election/InjectedPostForm.vue";
</script>
