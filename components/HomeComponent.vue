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
          結果が出ても、何も世の中は変わらないから、<br />気軽に選挙に参加してみよう！
        </p>
        <div
          class="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5"
        >
          <a
            href="./list.html"
            class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >選挙！を探す</a
          >
          <a
            href="#what"
            class="inline-block bg-teal-500 hover:bg-teal-600 active:bg-teal-700 focus-visible:ring ring-teal-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >みんなの選挙！って？</a
          >
        </div>
      </div>
      <div
        class="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg"
      >
        <img
          src="@/assets/img/home/main.jpg?cache=f2f43aeb9b5cf39f0f11"
          loading="lazy"
          alt="Photo by Fakurian Design"
          class="w-full h-full object-cover object-center"
        />
      </div>
    </section>
    <div class="bg-white py-6 sm:py-8 lg:py-12" id="what">
      <div class="mx-auto">
        <div class="grid md:grid-cols-10 gap-8 lg:gap-12">
          <div class="col-span-3">
            <div
              class="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src="@/assets/img/home/vote1.png?cache=1c8da6a3de12c742e1f4"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                class="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div class="col-span-7 md:pt-8">
            <p class="text-indigo-500 font-bold text-center md:text-left">
              実際の選挙とは関係ないよ！
            </p>
            <h1
              class="text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6"
            >
              みんなの選挙！って？
            </h1>
            <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">
              選挙に行ってみたいけど、良く分からない。<br />立候補した人がどんな人なのかも分からないし、<br />せっかく投票しても落選したら、意味ないの？<br />そもそも自分が選んだ人で大丈夫？
            </p>
            <h2
              class="text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4"
            >
              結果が出ても何も決まりません！
            </h2>
            <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">
              みんなの選挙！は勝手に選挙をしてるだけ！<br />だから出た結果で、世の中なにも決まらないし、変わらない。<br />政治の事何も分からなくても、誰でも参加できるので、気軽に投票してね！
            </p>
            <div>
              <a
                href="./list.html"
                class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >選挙！を探す</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div class="flex justify-between items-end gap-4 mb-6">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold">
            第26回参議院議員通常選挙特集 注目の選挙！区
          </h2>
          <a
            href="#"
            class="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            >もっと見る</a
          >
        </div>
        <div
          class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6"
        >
          <div>
            <a
              href="#"
              class="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3"
              ><img
                src="@/assets/img/vote/district1.jpg?cache=a01a1396892eb0d720fd"
                loading="lazy"
                alt="Photo by Austin Wade"
                class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
            /></a>
            <div class="flex flex-col">
              <span class="text-gray-500">注目は維新！</span>
              <a
                href="#"
                class="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
                >大阪 選挙区</a
              >
            </div>
          </div>
          <div>
            <a
              href="#"
              class="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3"
              ><img
                src="@/assets/img/vote/district2.jpg?cache=ac0d83e1142b623ad83b"
                loading="lazy"
                alt="Photo by engin akyurt"
                class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
            /></a>
            <div class="flex flex-col">
              <span class="text-gray-500">やっぱり東京！</span>
              <a
                href="#"
                class="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
                >東京 選挙区</a
              >
            </div>
          </div>
          <div>
            <a
              href="#"
              class="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3"
              ><img
                src="@/assets/img/vote/district3.jpg?cache=cded825d1619039bfc52"
                loading="lazy"
                alt="Photo by Austin Wade"
                class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
            /></a>
            <div class="flex flex-col">
              <span class="text-gray-500">Ｎ党、どこまで食い込める？</span>
              <a
                href="#"
                class="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
                >神奈川 選挙区</a
              >
            </div>
          </div>
          <div>
            <a
              href="#"
              class="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3"
              ><img
                src="@/assets/img/vote/district4.jpg?cache=db3d32507958d17c5ade"
                loading="lazy"
                alt="Photo by Austin Wade"
                class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
            /></a>
            <div class="flex flex-col">
              <span class="text-gray-500">獲れるか、れいわ？</span>
              <a
                href="#"
                class="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
                >愛知 選挙区</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div class="mb-10 md:mb-16">
          <h2
            class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
          >
            新しく選挙！をつくる。
          </h2>
          <p
            class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto"
          >
            あなたが考えるいろんな選挙！を投稿してね。
          </p>
        </div>
        <form class="max-w-screen-md grid gap-4 mx-auto">
          <div>
            <label
              for="company"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >選挙！名</label
            >
            <input
              name="title"
              class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>
          <div>
            <label
              for="candidate"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >候補者</label
            >
            <div class="grid gap-4">
              <div>
                <div class="max-w-screen-2xl mx-auto">
                  <div
                    class="flex flex-wrap sm:flex-nowrap sm:justify-center sm:items-center bg-blue-500 rounded-lg shadow-lg relative sm:gap-3 px-4 sm:pr-8 ms:px-8 py-3"
                  >
                    <div
                      class="order-1 sm:order-none w-11/12 sm:w-auto max-w-screen-sm inline-block text-white text-sm md:text-base mb-2 sm:mb-0"
                    >
                      <input
                        name="candidate"
                        class="w-full bg-gray-50 text-gray-800 border focus:ring ring-blue-300 rounded outline-none transition duration-100 px-3 py-2"
                      />
                    </div>
                    <a
                      href="#"
                      class="order-last sm:order-none w-full sm:w-auto inline-block bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus-visible:ring ring-blue-300 text-white text-xs md:text-sm font-semibold text-center whitespace-nowrap rounded-lg outline-none transition duration-100 px-4 py-2"
                      >写真を追加</a
                    >
                    <div
                      class="order-2 sm:order-none w-1/12 sm:w-auto flex justify-end items-start sm:absolute sm:right-0 sm:mr-2 xl:mr-3"
                    >
                      <button
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
              <p class="text-gray-400 text-xs">
                候補者は20名まで追加できます。
              </p>
              <div
                class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5"
              >
                <a
                  href="#"
                  class="inline-block bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                  >候補者を追加する</a
                >
                <a
                  href="#"
                  class="inline-block bg-teal-500 hover:bg-teal-600 active:bg-teal-700 focus-visible:ring ring-teal-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                  >新しい選挙！を投稿する</a
                >
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
