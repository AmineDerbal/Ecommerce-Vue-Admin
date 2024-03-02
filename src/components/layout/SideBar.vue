<template>

  <div class="h-screen bg-gray-100 sticky mt-4">
    <div class="p-[20px] text-[#555]">
      <div class="mb-[10px]">
        <h3 className="text-xs text-gray-500">Dashboard</h3>
        <ul class="list-none p-[5px]">
          <router-link to="/"> <li class="p-[5px] cursor-pointer flex items-center rounded-[10px]">
            <v-icon icon="$home" color="black" ></v-icon>Home
          </li></router-link>
        </ul>
      </div>
    </div>

  </div>
</template>