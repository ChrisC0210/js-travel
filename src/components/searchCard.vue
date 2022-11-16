<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <section class="container flex justify-center mt-32 mb-24">
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
              <img
                class="w-full lg:w-screen"
                src="../assets/main_img.png"
                alt="main"
              />
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
                <h1 class="text-2xl font-bold flex items-center mb-1">
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
                </h1>
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
                        block
                        w-full
                        lg:w-9/12
                        mt-0
                        pr-1
                        border-0 border-b-2 border-primary
                        bg-zinc-50 text-slate-500
                        font-bold
                        text-base
                        focus:ring-0 focus:border-black focus:bg-zinc-50
                      "
                    >
                      <option selected>請選擇景點地區</option>
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
                      type="text"
                      name="ticketRatio"
                      class="
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
                <span id="ticketInfo" class="m-0 mb-2 md:mb-0 md:mr-8 lg:mt-2 font-bold text-base">套票描述</span>
                <textarea 
                name="ticketInfo"
                      class="
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
                rows="4"></textarea>
              </label>
              <div class="flex justify-end">
                <button class="py-2.5 px-10 rounded text-white border-primary bg-primary
                hover:bg-primary-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-primary-600
                ">新增套票</button> 
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
</template>

<style scoped>

</style>
<script>
import { BeakerIcon } from "@heroicons/vue/24/solid";

export default {
  components: { BeakerIcon },
};
</script>