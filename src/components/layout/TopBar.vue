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
  <v-app-bar height="80" >
    <v-toolbar color="white" >
      <template color="white" class="h-full w-full px-[20px] flex items-center justify-between"> 
        <div class="h-20 w-20">
          <img :src="logo" alt="logo" class="cursor-pointer w-full h-full object-contain">
        </div>
        <v-app-bar-title tag="h1" class="text-3xl font-bold flex-initial text-gray-800 ">Admin Side</v-app-bar-title>
        <div class="relative cursor-pointer mr-[10px] text-[#555]">
        <v-icon icon="$bellOutline" color="black" ></v-icon>
        <span class="absolute w-[15px] h-[15px] bg-red-500 text-white text-[10px] rounded-full top-[-5px] right-0 flex justify-center items-center">2</span>
        </div>
      </template>
    </v-toolbar>

  </v-app-bar>
</template>

