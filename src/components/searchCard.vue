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
                  <div class="flex items-center flex-col md:flex-row mb-4">
                    <label for="name" class="m-0 mb-2 md:mb-0 md:mr-8 font-bold text-base">套票名稱</label>
                    <input id="name" name="name" type="text" class="w-9/12
                    border-0 border-b-2 border-primary bg-zinc-50 font-bold text-base
                    focus:bg-zinc-50
                    focus:ring-0
                    focus:border-purple-600  "
                    placeholder="請填寫套票名稱">
                  </div>
                  <div class="flex items-center flex-col md:flex-row mb-4">
                    <label for="imgUrl" class="m-0 mb-2 md:mb-0 md:mr-8 font-bold text-base">圖片網址</label>
                    <input id="imgUrl" name="imgUrl" type="url" class="w-9/12
                    border-0 border-b-2 border-primary bg-zinc-50 font-bold text-base
                    focus:bg-zinc-50
                    focus:ring-0
                    focus:border-purple-600  "
                    placeholder="請填寫圖片網址">
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
a {
  color: #42b983;
}
</style>
<script>
import { BeakerIcon } from "@heroicons/vue/24/solid";

export default {
  components: { BeakerIcon },
};
</script>