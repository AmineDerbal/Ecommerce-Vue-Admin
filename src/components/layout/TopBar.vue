<script>

const logo = new URL('@/assets//images/logo.png', import.meta.url).href

export default {

  data() {
    return {
      logo
    }
  }
}


</script>

<template>
<div class="w-full h-[80px] bg-white sticky top-0 z-50">
  <div class="h-full px-[20px] flex items-center justify-between">
    <div class="h-20 w-20">

      <img :src="logo" alt="logo" class="cursor-pointer w-full h-full object-contain">
    </div>

    <div class="text-3xl font-bold text-gray-800"><p>
      Admin Side
    </p></div>
    <div>
      <div class="flex items-center">
        <div class="relative cursor-pointer mr-[10px] text-[#555]">

          <v-icon icon="$bellOutline" color="black" ></v-icon>
          <span class="absolute w-[15px] h-[15px] bg-red-500 text-white text-[10px] rounded-full top-[-5px] right-0 flex justify-center items-center">2</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

