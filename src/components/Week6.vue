<template>
  <h2 class="mt-6 text-3xl  font-semibold ">Week 6 | axios 撈資料</h2>
  <section class="container flex justify-center mb-24">
    <div class="col-12 lg:col-10 bg-white shadow-lg rounded-xl">
      <div class="">
        <div class="mt-20 max-w-lg sm:mx-auto md:max-w-none py-16 px-24">
          <div
            class="
              grid grid-cols-1
              gap-y-16
              md:grid-cols-2 md:gap-x-12 md:gap-y-16
            "
          >
            <!-- img -->
            <div>
              <h1>
                <img
                  class="w-full lg:w-screen"
                  src="../assets/main_img.png"
                  alt="main"
                />
              </h1>
              <img
                class="w-full lg:w-screen"
                src="../assets/logo.png"
                alt="logo"
              />
            </div>

            <div
              class="
                relative
                flex flex-col
                gap-6
                sm:flex-row
                md:flex-col
                lg:flex-row
              "
            >
              <div class="sm:min-w-0 sm:flex-1">
                <h2 class="text-2xl font-bold flex items-center mb-1">
                  <span class="mr-1.5 w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg> </span
                  >新增旅遊套票
                </h2>
                <hr class="border-2 border-primary mb-8 max-w-sm" />
                <!-- form -->
                <form action="" method="POST" class="max-w-full md:max-w-sm">
                  <label class="block lg:flex lg:items-center mb-4">
                    <span
                      for="name"
                      class="m-0 mb-2 md:mb-0 md:mr-8 font-bold text-base"
                      >套票名稱</span
                    >
                    <input
                      type="text"
                      name="name"
                      class="
                        form-input
                        block
                        w-full
                        lg:w-9/12
                        mt-0
                        pr-1
                        border-0 border-b-2 border-primary
                        bg-zinc-50
                        font-bold
                        text-base
                        focus:ring-0 focus:border-black focus:bg-zinc-50
                      "
                      placeholder="請填寫套票名稱"
                    />
                  </label>
                  <label class="block lg:flex lg:items-center mb-4">
                    <span
                      for="imgUrl"
                      class="m-0 mb-2 md:mb-0 md:mr-8 font-bold text-base"
                      >圖片網址</span
                    >
                    <input
                      type="url"
                      name="imgUrl"
                      class="
                        form-input
                        block
                        w-full
                        lg:w-9/12
                        mt-0
                        pr-1
                        border-0 border-b-2 border-primary
                        bg-zinc-50
                        font-bold
                        text-base
                        focus:ring-0 focus:border-black focus:bg-zinc-50
                      "
                      placeholder="請填寫圖片網址"
                    />
                  </label>
                  <label class="block lg:flex lg:items-center mb-4">
                    <span class="m-0 mb-2 md:mb-0 md:mr-8 font-bold text-base"
                      >景點地區</span
                    >
                    <select
                      class="
                        form-select
                        block
                        w-full
                        lg:w-9/12
                        mt-0
                        pr-1
                        border-0 border-b-2 border-primary
                        bg-zinc-50
                        text-slate-500
                        font-bold
                        text-base
                        focus:ring-0 focus:border-black focus:bg-zinc-50
                      "
                    >
                      <option selected hidden>請選擇景點地區</option>
                      <option value="0">台北</option>
                      <option value="1">台中</option>
                      <option value="2">高雄</option>
                    </select>
                  </label>
                  <label class="block lg:flex lg:items-center mb-4">
                    <span
                      for="price"
                      class="m-0 mb-2 md:mb-0 md:mr-8 font-bold text-base"
                      >套票金額</span
                    >
                    <input
                      type="number"
                      name="price"
                      class="
                        form-input
                        block
                        w-full
                        lg:w-9/12
                        mt-0
                        pr-1
                        border-0 border-b-2 border-primary
                        bg-zinc-50
                        font-bold
                        text-base
                        focus:ring-0 focus:border-black focus:bg-zinc-50
                      "
                      placeholder="請填寫套票金額"
                    />
                  </label>
                  <label class="block lg:flex lg:items-center mb-4">
                    <span
                      for="ticketNum"
                      class="m-0 mb-2 md:mb-0 md:mr-8 font-bold text-base"
                      >套票組數</span
                    >
                    <input
                      type="number"
                      name="ticketNum"
                      class="
                        form-input
                        block
                        w-full
                        lg:w-9/12
                        mt-0
                        pr-1
                        border-0 border-b-2 border-primary
                        bg-zinc-50
                        font-bold
                        text-base
                        focus:ring-0 focus:border-black focus:bg-zinc-50
                      "
                      placeholder="請填寫套票組數"
                    />
                  </label>
                  <label class="block lg:flex lg:items-center mb-4">
                    <span
                      for="ticketRatio"
                      class="m-0 mb-2 md:mb-0 md:mr-8 font-bold text-base"
                      >套票星級</span
                    >
                    <input
                      type="number"
                      name="ticketRatio"
                      class="
                        form-input
                        block
                        w-full
                        lg:w-9/12
                        mt-0
                        pr-1
                        border-0 border-b-2 border-primary
                        bg-zinc-50
                        font-bold
                        text-base
                        focus:ring-0 focus:border-black focus:bg-zinc-50
                      "
                      placeholder="請填寫套票星級"
                    />
                  </label>
                  <label class="block lg:flex lg:items-start mb-4">
                    <span
                      id="ticketInfo"
                      class="
                        m-0
                        mb-2
                        md:mb-0 md:mr-8
                        lg:mt-2
                        font-bold
                        text-base
                      "
                      >套票描述</span
                    >
                    <textarea
                      type="textarea"
                      name="ticketInfo"
                      class="
                        form-textarea
                        block
                        w-full
                        lg:w-9/12
                        mt-0
                        pr-1
                        border-0 border-b-2 border-primary
                        bg-zinc-50
                        font-bold
                        text-base
                        focus:ring-0 focus:border-black focus:bg-zinc-50
                      "
                      placeholder="請填寫套票描述（限 100 字）"
                      rows="4"
                    ></textarea>
                  </label>
                  <div class="flex justify-end">
                    <button
                      class="
                        py-2.5
                        px-10
                        rounded
                        text-white
                        border-primary
                        bg-primary
                        hover:bg-primary-600
                        active:bg-violet-700
                        focus:outline-none focus:ring focus:ring-primary-600
                      "
                    >
                      新增套票
                    </button>
                  </div>
                </form>
                <!-- form end -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-cus-gray flex justify-center">
    <div class="container mt-14 mb-32">
      <div class="col-10 lg:col-10">
        <div
          class="
            flex
            justify-center
            lg:justify-start
            items-baseline
            flex-col
            lg:flex-row
          "
        >
          <label class="w-full lg:w-64 col-4 mb-4">
            <select
              class="
                w-full
                lg:w-9/12
                mt-0
                pr-1
                rounded
                bg-zinc-50
                text-slate-500
                font-bold
                text-base
                focus:ring-0 focus:border-black focus:bg-zinc-50
              "
            >
              <option selected hidden>地區搜尋</option>
              <option value="">全部地區</option>
              <option value="0">台北</option>
              <option value="1">台中</option>
              <option value="2">高雄</option>
            </select>
          </label>
          <h3 v-if="data.length" class="text-slate-500 font-bold text-base text-center">
            本次搜尋共 {{ data.length }} 筆資料
          </h3>
          <h3 v-else class="text-slate-500 font-bold text-base text-center">
            本次搜尋共 0 筆資料
          </h3>
        </div>
      </div>
      <!-- cards -->
      <div class="container mx-auto">
        <ul class="flex flex-wrap">
          <li
            v-for="item in data"
            :key="item"
            class="relative w-full sm:w-1/2 md:w-1/3 flex flex-col p-3"
          >
            <!-- card -->
            <div
              class="
                absolute
                top-0
                left-0
                py-2
                px-5
                ml-6
                z-10
                rounded
                bg-primary-400
                text-white text-xl
              "
            >
              <p v-if="item.area">{{ item.area }}</p>
              <p v-else>地區</p>
            </div>
            <div
              class="
                flex
                justify-start
                flex-1 flex-col
                text-left
                mb-10
                mx-3
                bg-white
                rounded-lg
                shadow-lg
                overflow-hidden
              "
            >
              <div class="flex-1 flex flex-col">
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <div class="relative">
                    <div class="overflow-hidden">
                      <!-- <img src="../assets/img/img-404.svg" v-real-img="item.imgUrl"> -->
                      <img
                        v-if="item.imgUrl"
                        class="
                          rounded-t-lg
                          hover:scale-125
                          transition-all
                          duration-500
                        "
                        :src="item.imgUrl"
                        alt="img"
                        onerror="defaultImg"
                      />
                      <img
                        v-else
                        class="
                          rounded-t-lg
                          hover:scale-125
                          transition-all
                          duration-500
                        "
                        src="../assets/img/img-404.svg"
                        alt="img"
                      />
                    </div>
                    <div
                      class="
                        absolute
                        -bottom-4
                        left-0
                        py-1
                        px-2
                        z-10
                        rounded
                        bg-primary
                        text-white text-base
                      "
                    >
                      <p v-if="item.rate">{{ item.rate }}</p>
                      <p v-else>0</p>
                    </div>
                  </div>
                </a>
                <div class="p-6 flex-1">
                  <h5 v-if="item.name" class="text-2xl font-medium mb-2">
                    {{ item.name }}
                  </h5>
                  <h5 v-else class="text-2xl font-medium mb-2">
                    無名稱
                  </h5>
                  <hr class="border-2 border-primary mb-8 max-w-sm" />
                  <p v-if="item.description" class="text-base mb-4 line-clamp-3 text-slate-500">
                    {{ item.description }}
                  </p>
                  <p v-else class="text-base mb-4 line-clamp-3 text-slate-500">
                    無介紹資料
                  </p>
                </div>
                <div
                  class="
                    tracking-wide
                    flex
                    justify-between
                    flex-row
                    md:flex-col
                    lg:flex-row
                    py-3
                    px-6
                  "
                >
                  <div class="text-base font-medium flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span v-if="item.group" class="ml-1"> 剩下最後 {{ item.group }} 組 </span>
                    <span v-else class="ml-1"> 剩下最後 0 組 </span>
                  </div>
                  <div v-if="item.price" class="text-base">
                    TWD <span class="text-3xl">${{ item.price }}</span>
                  </div>
                  <div v-else class="text-base">
                    TWD <span class="text-3xl">$ 00</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- card -->
          </li>
        </ul>
      </div>
      <!-- cards end -->
    </div>
  </section>
</template>

<style scoped>
</style>
<script>
import { BeakerIcon } from "@heroicons/vue/24/solid";
import axios from 'axios';
//app.prototype.$axios = axios;

export default {
  components: { BeakerIcon, axios },
  data() {
    return {
      data: {
        //loading: false,
        area:'',
      }
    }
  },
  methods: {
    
  },
  mounted(){
    //this.loading = true;
    const api = "https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json";
    axios.get(api)
    .then(function (response) {
    console.log(response.data);
    response.data.data[0].area = response.data.area;
  })
  .catch((err) => {
    console.log(err);
  })
}
};
</script>